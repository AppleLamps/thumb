# AI Thumbnail Generator

A stateless web application that empowers YouTube content creators to generate professional, eye-catching thumbnails in minutes using AI.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8)
![Vite](https://img.shields.io/badge/Vite-4.4-646cff)

## 🚀 Features

- **Single-session thumbnail generation**: Generate 4 unique variations per prompt
- **Rich text prompt input**: Multi-line textarea for detailed descriptions with character count
- **Optional photo uploads**: Support for 1-5 reference images via drag-and-drop
- **AI-powered generation**: Integration with FAL.ai workflows (Nano Banana Pro)
- **One-click download**: Select your favorite and download in 1280x720 resolution
- **Midjourney-inspired UI**: Bold gradients, dark theme, and creative animations
- **Fully responsive**: Optimized for mobile, tablet, and desktop

## 🛠️ Tech Stack

### Frontend

- **React 18.2** - UI framework
- **TypeScript 5.0** - Type safety
- **Vite 4.4** - Build tool and dev server
- **Tailwind CSS 3.3** - Utility-first styling
- **Framer Motion 10.16** - Smooth animations
- **Lucide React** - Icon library

### Backend

- **FAL.ai Client** - AI workflow integration
- **Stateless API endpoints** - No database or user accounts required

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd thumb
```

1. Install dependencies:

```bash
npm install
```

1. Start the development server:

```bash
npm run dev
```

1. Build for production:

```bash
npm run build
```

1. Preview production build:

```bash
npm run preview
```

## 🏗️ Project Structure

```
thumb/
├── api/                          # Backend API endpoints
│   ├── enhance.js                # Prompt enhancement endpoint
│   ├── generate.js               # Thumbnail generation endpoint
│   └── fal-ai-docs/              # FAL.ai workflow documentation
├── src/
│   ├── components/               # React components
│   │   ├── GenerateForm.tsx      # Main form container
│   │   ├── HeroSection.tsx       # Landing hero area
│   │   ├── ImageUploader.tsx     # Drag-and-drop image upload
│   │   ├── PromptInput.tsx       # Auto-expanding textarea
│   │   ├── ThumbnailCard.tsx     # Individual thumbnail preview
│   │   └── ThumbnailGallery.tsx  # Grid of 4 variations
│   ├── hooks/
│   │   └── useGeneration.ts      # Generation state management
│   ├── utils/
│   │   ├── api.ts                # API client functions
│   │   └── helpers.ts            # Utility functions
│   ├── App.tsx                   # Main application component
│   ├── main.tsx                   # Application entry point
│   └── index.css                 # Global styles
├── public/                        # Static assets
├── package.json                   # Dependencies and scripts
├── tsconfig.json                  # TypeScript configuration
├── tailwind.config.js             # Tailwind CSS configuration
├── vite.config.ts                 # Vite configuration
└── vercel.json                    # Vercel deployment config
```

## 🎨 Component Overview

### HeroSection

Landing area with bold typography and gradient effects that introduces the application.

### GenerateForm

Container component that manages the prompt input and image uploader, handles form submission, and displays loading states with progress indicators.

### PromptInput

Auto-expanding textarea with character count for detailed thumbnail descriptions.

### ImageUploader

Drag-and-drop zone supporting 1-5 reference images with preview functionality.

### ThumbnailGallery

Grid layout displaying 4 generated thumbnail variations with selection and download options.

### ThumbnailCard

Individual thumbnail preview card with hover effects and action buttons.

## 🔄 Data Flow

1. User enters a prompt and optionally uploads reference images
2. Frontend sends `POST` request to `/api/generate-thumbnails`
3. Backend optimizes the prompt and makes parallel calls to FAL.ai workflows
4. Backend returns 4 image URLs/base64 strings
5. Frontend displays variations in the gallery
6. User selects their favorite and downloads in 1280x720 resolution

## 📡 API Interface

### `POST /api/generate-thumbnails`

**Request:**

```json
{
  "prompt": "string",
  "images": ["base64_string_1", "base64_string_2"]
}
```

**Response:**

```json
{
  "variations": ["url1", "url2", "url3", "url4"]
}
```

## 🎯 Success Criteria

- ✅ Generation completes within 30-60 seconds
- ✅ 4 distinct, high-quality variations produced
- ✅ Easy, intuitive flow from prompt to download
- ✅ Responsive design across all devices
- ✅ Smooth animations and loading states

## 🚀 Deployment

This project is configured for deployment on Vercel via `vercel.json`. Simply push to your repository and connect to Vercel for automatic deployments.

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. Please contact the maintainers for contribution guidelines.

---

Built with ❤️ using React, TypeScript, and FAL.ai
