/**
 * Converts a File object to a base64 string
 */
export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result;
      if (typeof result !== 'string') {
        reject(new Error('Failed to read file as base64'));
        return;
      }
      resolve(result);
    };
    reader.onerror = (error) => reject(error);
  });
};

// Cleanup delay for object URLs (in milliseconds)
const OBJECT_URL_CLEANUP_DELAY = 1000;

/**
 * Downloads an image from a URL or base64 string
 */
export const downloadImage = async (url: string, filename: string) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = objectUrl;
    link.download = filename;
    link.style.display = 'none';
    document.body.appendChild(link);

    try {
      link.click();
    } finally {
      document.body.removeChild(link);
      // Clean up object URL after a delay to ensure download starts
      setTimeout(() => URL.revokeObjectURL(objectUrl), OBJECT_URL_CLEANUP_DELAY);
    }
  } catch (error) {
    // Fallback for cases where fetch fails (CORS) - open in new tab
    window.open(url, '_blank');
    throw new Error('Failed to download image directly. Opening in new tab instead.');
  }
};
