import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Booknora — Find your next chapter',
  description: 'A little corner for curious readers. Discover books worth keeping.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
