import NavBar from "./components/NavBar";
import Product from "./components/Product";
import { useCart } from "./store/Store"
import './index.css'
// import { CircularProgress } from "";
import CartDrawer from "./components/CartDrawer";

function App() {
  const {products, loading, error, cartItems, isCartOpen, handleAddToCart}=useCart();
  return (
    <>
      <NavBar />
      <div className="container error-loading">
        <div className="massege">
        {/* <CircularProgress /> */}
          {loading? <h1 className="loading-container"><span>Loading...</span></h1> : null}
          {error? <h1 className="error-container"><span className="error-massage">Getway Error</span><img src="../public/errorPage.jpg" alt="error 404" /></h1> : null}
        </div>
      </div>
      <div className="cart-container">
        <div className={isCartOpen ? 'cart-open' : 'cart-closed'}>
          {
            cartItems.map(cartItem => <CartDrawer item={cartItem} />)
          }
        </div>
        <div className="products-container">
          {
            products.map(product => <Product item={product} addToCart={handleAddToCart}/> )
          }
        </div>
      </div>
    </>
  )
}

export default App
