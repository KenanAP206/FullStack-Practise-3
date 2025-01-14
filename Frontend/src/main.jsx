import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductProvider from './Context/ProductContext.jsx'
import BasketProvider from './Context/BasketContext.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <BasketProvider>
   <ProductProvider>
    <App />
    </ProductProvider>
    </BasketProvider>
  </BrowserRouter>,
)
