import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Autometrik — The Future of Academic Management',
  description:
    'A serverless academic platform for managing organizations, classes, quizzes, assessments, analytics, and audit logs. Built for security, scale, and intelligent insights.',
  keywords: [
    'academic management',
    'assessment platform',
    'quiz engine',
    'analytics',
    'education technology',
    'serverless',
    'autometrik',
  ],
  openGraph: {
    title: 'Autometrik — The Future of Academic Management',
    description:
      'Streamline your academic organization with intelligent assessments, real-time analytics, and role-based access control.',
    url: 'https://autometrik.online',
    siteName: 'Autometrik',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autometrik — The Future of Academic Management',
    description:
      'Streamline your academic organization with intelligent assessments, real-time analytics, and role-based access control.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
