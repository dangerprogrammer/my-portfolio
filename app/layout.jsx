import '@/styles/global.scss';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const metadata = {
  title: {
    template: '%s | Patrick',
    default: 'Patrick Portfolio'
  },
  description: 'Website criado para meu portfolio!',
};

export {metadata};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
};

export default RootLayout;