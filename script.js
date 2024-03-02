import { createRoot } from 'react-dom/client';
import './style.scss';

function Card(props) {
    const {id, images, title, brand, price} = props;
  return (
    <div className="card" key={id}>
      <img src={images} alt="" />
      <h3>{title}</h3>
      <p>{brand}</p>
      <h4>${price}</h4>
    </div>
  );
}

fetch('https://dummyjson.com/products')
  .then((res) => res.json())
  .then((data) => {
    const container = data.products.map((product) => {
      return Card(
       {
        key: product.id,
        images: product.thumbnail,
        price: product.price,
        title: product.title,
        brand: product.brand,
       }
      );
    });
    root.render(<div className="flex-grid">{container}</div>);
  });

const root = createRoot(document.getElementById('root'));