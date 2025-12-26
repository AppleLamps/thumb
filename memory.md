# Memory - AI Thumbnail Generator

## Preferences & Coding Styles
- Functional React components with hooks.
- Tailwind CSS for all styling.
- Descriptive variable and function names.
- Comprehensive error handling for API calls.
- **UI Style**: Minimalist, clean, Midjourney-inspired (Sidebar + TopBar layout).

## Architectural Decisions
- **Statelessness**: No local storage or database used for thumbnail persistence.
- **Parallelism**: 4 variations generated simultaneously to minimize wait time.
- **Layout**: Shifted from "Landing Page" style to "App" style with persistent Sidebar and Top Input Bar.
- **Components**: 
    - `Sidebar`: Navigation.
    - `TopBar` / `GenerationBar`: Input and generation controls.
    - `ThumbnailGallery`: Grid results.
- **Design System**: 
    - Light theme default (clean white/zinc).
    - "Pill" shaped input bar.
    - Grid layout for results.
- **Mock Service**: Using `picsum.photos` for mock variations until real API is integrated.
- **Image Processing**: Client-side Base64 conversion to prepare images for AI processing.
- **Download Handling**: Using Blob-based downloading to handle cross-origin images more reliably.

## Key Learnings
- *Initial setup based on Midjourney-inspired PRD.*
- *Implemented auto-expanding textarea for better UX in prompt input.*
- *Used Framer Motion for smooth UI transitions.*
- *Refactored UI to match Midjourney Web Alpha style: Removed Hero/Landing elements in favor of a functional, tool-first layout.*
