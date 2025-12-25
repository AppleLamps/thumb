# Memory - AI Thumbnail Generator

## Preferences & Coding Styles
- Functional React components with hooks.
- Tailwind CSS for all styling.
- Descriptive variable and function names.
- Comprehensive error handling for API calls.

## Architectural Decisions
- **Statelessness**: No local storage or database used for thumbnail persistence.
- **Parallelism**: 4 variations generated simultaneously to minimize wait time.
- **Design System**: Dark theme with `#9333ea` (purple), `#ec4899` (pink), and `#f97316` (orange) accents.
- **Mock Service**: Using `picsum.photos` for mock variations until real API is integrated.
- **Image Processing**: Client-side Base64 conversion to prepare images for AI processing.
- **Download Handling**: Using Blob-based downloading to handle cross-origin images more reliably.

## Key Learnings
- *Initial setup based on Midjourney-inspired PRD.*
- *Implemented auto-expanding textarea for better UX in prompt input.*
- *Used Framer Motion for smooth UI transitions.*
- *Critique revealed need for better image processing and error handling.*
