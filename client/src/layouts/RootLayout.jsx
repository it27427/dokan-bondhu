import Header from '@/components/Header';
import Footer from '@/components/Footer';

const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default RootLayout;
