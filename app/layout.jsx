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
  return <>
    {children}
  </>
};

export default RootLayout;