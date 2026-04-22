# Political & Economic Commentary Blog

A modern blog platform for publishing columns about politics, stocks, and economics. Built with React, TypeScript, and Tailwind CSS.

## Features

- 📝 **Admin Panel**: Password-protected content management system
- 📰 **Articles/Columns**: Write and publish articles with categories (Politics, Stocks, Economics)
- 📊 **Card News**: Multi-image carousel posts with optional PDF reports
- 📄 **Reports**: Full PDF report uploads with viewer
- 👁️ **View Tracking**: Automatic view counting for all content
- 📧 **Newsletter**: Email subscription system
- 📱 **Responsive Design**: Mobile-friendly layout

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Storage**: localStorage (ready for Supabase integration)

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd <project-folder>
```

2. Install dependencies:
```bash
pnpm install
```

3. Start development server:
```bash
pnpm dev
```

4. Build for production:
```bash
pnpm build
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect the settings
5. Click "Deploy"

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build settings:
   - Build command: `pnpm build`
   - Publish directory: `dist`
6. Click "Deploy site"

## Admin Access

- Default password: `admin123`
- Access admin panel by clicking the lock icon in navigation
- Change password in `src/app/components/Login.tsx`

## Project Structure

```
src/
├── app/
│   ├── App.tsx              # Main application
│   └── components/
│       ├── AdminPanel.tsx   # Admin content management
│       ├── ArticleEditor.tsx
│       ├── ReportEditor.tsx
│       ├── CardNewsUpload.tsx
│       └── ...
└── styles/
    ├── index.css            # Main styles
    └── fonts.css            # Font imports
```

## Future Enhancements

- [ ] Supabase backend integration
- [ ] Email notifications with Resend
- [ ] User authentication
- [ ] Comment system
- [ ] Search functionality
- [ ] Analytics dashboard

## License

Private project - All rights reserved

## Support

For issues or questions, please contact the administrator.
