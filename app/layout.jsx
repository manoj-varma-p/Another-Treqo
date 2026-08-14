import './globals.css';

export const metadata = {
  title: 'TREQO — The Marketing School',
  description:
    'Learn Marketing The Way Founders, Strategists & Growth Leaders Do. 30+ live projects, 100% placement support, and a training model built around real revenue — not theory.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
