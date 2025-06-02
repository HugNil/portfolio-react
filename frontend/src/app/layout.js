// src/app/layout.js
import './styles/reset.css';
import './styles/variables.css';
import './styles/global.css';

export const metadata = {
  title: 'Min Portfolio',
  description: 'En ljus, tidlös portfolio byggd med Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body>
        {/* Om du vill ha en Navbar, importera och visa den här */}
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
