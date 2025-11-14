import './globals.css';

export const metadata = {
  title: 'Dancing Dog',
  description: 'A simple dancing dog animation',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
