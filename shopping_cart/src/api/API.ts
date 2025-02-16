import { useState, useEffect } from "react";
// https://fakestoreapi.com/products
export function getProducts(url){
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(()=>{
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await fetch(url, {signal: controller.signal});
        if (!response.ok) {
          throw new Error('Server Error');
        }
        const data = await response.json();
        const updateData = data.map( item => ({...item, quantity: item.quantity || 1}) )
        // setProducts(data);
        setProducts(updateData);
      } catch (error) {
        setError(true);
        console.log(error);
      }finally{
        setLoading(false);
      }
    }
    fetchData();

    return()=>controller.abort();
  },[]);

  return {products, loading, error};
};