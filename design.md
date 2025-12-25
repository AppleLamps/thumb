# Design - AI Thumbnail Generator

## 1. Architecture
- **Frontend**: React (likely with Tailwind CSS for styling).
- **Backend**: Stateless API endpoints for thumbnail generation.
- **AI Integration**: Google Gemini API (Nano Banana Pro).

## 2. Component Breakdown
- `HeroSection`: Landing area with bold typography.
- `GenerateForm`: Container for prompt input and image uploader.
- `PromptInput`: Auto-expanding textarea with character count.
- `ImageUploader`: Drag-and-drop zone for reference images.
- `LoadingOverlay`: Progress indicator for generation.
- `ThumbnailGallery`: Grid layout for 4 variations.
- `ThumbnailCard`: Individual preview with download/select action.

## 3. Data Flow
1. User enters prompt and uploads images.
2. Frontend sends `POST` request to `/api/generate-thumbnails`.
3. Backend optimizes prompt and makes 4 parallel calls to Gemini API.
4. Backend returns 4 image URLs/base64 strings.
5. Frontend displays variations in gallery.
6. User selects and downloads.

## 4. Technology Choices
- **React**: For a dynamic, responsive UI.
- **Tailwind CSS**: For rapid styling and glassmorphism effects.
- **Lucide React**: For icons.
- **Framer Motion**: For smooth animations.

## 5. API Interface
### `POST /api/generate-thumbnails`
- **Request**:
  ```json
  {
    "prompt": "string",
    "images": ["base64_strings"]
  }
  ```
- **Response**:
  ```json
  {
    "variations": ["url1", "url2", "url3", "url4"]
  }
  ```
