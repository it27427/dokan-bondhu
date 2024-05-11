import Header from '@/components/Header';
import Footer from '@/components/Footer';

const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <div className='container'>{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
