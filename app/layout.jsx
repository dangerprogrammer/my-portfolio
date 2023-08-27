import '@/styles/global.scss';

const metadata = {
  title: {
    template: '%s | Patrick',
    default: 'Patrick Portfolio'
  },
  description: 'A website for my portfolio',
};

export {metadata};

function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  )
};

export default RootLayout;