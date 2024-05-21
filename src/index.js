import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { LoginProvider } from './context/login-context';
import { CartProvider } from './context/cart-context';
import { WishlistProvider } from './context/wishlist-context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginProvider>
      <CartProvider>
        <WishlistProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </WishlistProvider>
      </CartProvider>
    </LoginProvider>
  </React.StrictMode>
);
