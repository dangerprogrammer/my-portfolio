import '@/styles/global.scss';
import ContextProvider from '@/components/context/ContextApp';

const metadata = {
  title: {
    template: '%s | Patrick',
    default: 'Patrick Portfolio'
  },
  description: 'A website for my portfolio',
};

export { metadata };

function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <ContextProvider>
          {children}
        </ContextProvider>
      </body>
    </html>
  )
};

export default RootLayout;