import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

const Index = () => {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(3);
  const [singleProduct, setSingleProduct] = useState(null);

  const fetchProducts = () => {
    axios
      .get(`https://fakestoreapi.com/products?limit=${limit}&sort=desc`)
      .then((response) => {
        setPosts(response.data);
      });
  };

  const fetchSingleProduct = (id) => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setSingleProduct(response.data);
    });
  };

  useEffect(() => {
    fetchProducts();
  }, [limit]);

  return (
    <>
      {singleProduct ? (
        <div className="single-product">
          <div className="container">
            <button onClick={() => setSingleProduct()} className="back">
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <div className="single-row">
              <div className="item__img-wrapper">
                <img src={singleProduct.image} alt={singleProduct.title} />
              </div>
              <div className="single-content">
                <h2 className="item__title">Title: {singleProduct.title}</h2>
                <p>Category: {singleProduct.category}</p>
                <p>Description: {singleProduct.description}</p>
                <p>
                  Price: <strong>{`${singleProduct.price} $`}</strong>
                </p>
                <p className="item__id">{singleProduct.id}</p>
                <div className="item-row">
                  <p>
                    Count: <strong>{singleProduct.rating.count}</strong>
                  </p>
                  <p>
                    Rating: <strong>{singleProduct.rating.rate}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="select-wrapper">
            <select
              className="table-select"
              onChange={(e) => setLimit(e.target.value)}
            >
              <option value="select-limit">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3" selected>
                3
              </option>
              <option value="4">4</option>
            </select>
          </div>
          <ul className="posts__list ">
            {posts.map((item, index) => (
              <li
                key={index}
                className="posts__item cursor-pointer"
                onClick={() => fetchSingleProduct(item.id)}
              >
                <h2 className="item__title">{item.title}</h2>
                <p>{item.category}</p>
                <div className="item__img-wrapper">
                  <img src={item.image} alt={item.title} />
                </div>
                <p>{item.description}</p>
                <strong className="item__price">
                  price: {`${item.price} $`}
                </strong>
                <div className="item-row">
                  <strong>count: {item.rating.count}</strong>
                  <strong>rate: {item.rating.rate}</strong>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default Index;
