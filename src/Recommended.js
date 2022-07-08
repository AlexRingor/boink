import axios from "axios";
import { useEffect, useCallback, useState } from "react";
import Product from './Recommended/Product'
import Item from './Item'

import './recommended.css'

const productsURL = "https://sw-coding-challenge.herokuapp.com/api/v1/products"
const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkNvZGVyIn0.B1QyKzKxzpxay1__A8B85ij32rqFoOIAFGDqBmqXhvs";

axios.interceptors.request.use(
  config => {
    config.headers.authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default function Recommended() {
  const [data, setData] = useState([]);
  const [responseError, setResponseError] = useState('default');

  const fetchData = useCallback(async () => {
    // fetch and set notifications
    try {
      const result = await axios.get(`${productsURL}`);
      // add 'isFav' property before setting data
      for (var i = 0; i < result.data.d.length; i++) {
        result.data.d[i].isFav = false;
        // console.log(result.data.d[i])
      }
      // limiting product listed to 2
      setData(result.data.d.splice(0, 2).map((product) => {
        return product
      }))
      // console.log(result.data.d)
    } catch (error) {
      setResponseError(error.message);
    }
  });


  useEffect(() => {
    fetchData();
  }, []);

  const toggleFav = (id) => {
    console.log(data[0].isFav)
    const newData = data.map((product, index) => {
      if (index === id) {
        product.isFav = !product.isFav
        // console.log(product)
      }
      return product
    })
    setData(newData)
  }

  return (
    <>
    {data.length ? <Item product={data}/> : null}
    <div className="recommended__wrapper">
      <div className="recommended__wrapper-head">
        <h1>Recommended for you</h1>
        <a href="sw.com" target="_blank">See more</a>
      </div>
      <div className="recommended__wrapper-body">
        {data.map((product, index) => (
              <Product 
                  key={index} 
                  name={product.name}
                  id={index}
                  image={product.imageUrl} 
                  price={product.salePrice} 
                  desc={product.description} 
                  isFav={product.isFav}
                  toggleFav={toggleFav}
              />
          ))}
      </div>
    </div>
    </>
  );
}
