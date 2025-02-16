import { createContext, ReactNode, useContext, useState } from "react";
import { getProducts } from "../api/API";
import {setToLocalStorage, getFromLocalStorage} from "../localStorage/utils";


export interface CartProviderProps {
  children: ReactNode;
} 

export interface Item{
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  rating: {
            rate: number; 
            count: number;
          }
  quantity: number;
  category: string;
}

export interface ProductContext{
  products: Item[];
  loading: boolean;
  error: boolean;
  isCartOpen: boolean;
  cartItems: Item[];
  handleCartOpen: ()=>void;
  handleAddToCart: (clickedItem: Item)=>void;
}

export const cartContext = createContext<ProductContext| null>(null);

export function CartProvider({children}: CartProviderProps){
  const url = 'https://fakestoreapi.com/products';
  const {products, loading, error} = getProducts(url);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<Item[]>(
                                                      getFromLocalStorage('cart')
                                                    );


  function handleCartOpen(){
    setIsCartOpen(!isCartOpen);
  }
  
  function handleAddToCart(clickedItem: Item){
    setCartItems((prev) => {
      const itemInCart = prev.find( item => item.id === clickedItem.id);
      let updateCart: Item[] = [];
      if(itemInCart){
        return prev.map( prevItem =>
          clickedItem.id === prevItem.id
          ? {...prevItem, quantity: prevItem.quantity + 1}
          : prevItem
        );
      }else{
        updateCart = [...prev, {...clickedItem, quantity: 1}]; 
      }
      setToLocalStorage('cart', updateCart);
      return updateCart;
    });
    console.log('item Added');
  };
  
  return(
    <cartContext.Provider 
      value={{
        products,
        loading,
        error,
        isCartOpen,
        cartItems,
        handleCartOpen,
        handleAddToCart
        }}>
      {children}
    </cartContext.Provider>
  )
}

export function useCart(){
  const cartConsumer = useContext(cartContext);
  if(!cartConsumer){
    throw new Error('Provide is not in right place...');
  }
  return cartConsumer;
}
