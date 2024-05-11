import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ShopPage from '@/pages/ShopPage';
import CartPage from '@/pages/CartPage';
import CheckoutPage from '@/pages/CheckoutPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
};

export default App;
