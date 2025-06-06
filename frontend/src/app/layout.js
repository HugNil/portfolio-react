// src/app/layout.js
import './styles/reset.css';
import './styles/variables.css';
import './styles/global.css';
import Navbar from './components/Navbar.jsx';
import { Jost } from 'next/font/google';

const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Min Portfolio',
  description: 'En ljus, tidlös portfolio byggd med Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body className={jost.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
