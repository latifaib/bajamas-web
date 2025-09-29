import ProductCard from './ProductCard';
import '../styles/product.css';

import redBenchImg from '../assets/images/RedBench2(1).png';
import eggImg1 from '../assets/images/EggImage2.1(1).png';
import eggImg2 from '../assets/images/eggImage2.2(1).png';
import manStandingImg from '../assets/images/ManStandinginwaterImage2.4(1).png';
import architectureAImg from '../assets/images/ArchitectureImage2.5(2).png';
import architectureBImg from '../assets/images/ArchitectureImage2.5(3).png';

const PRODUCTS = [
  {
    id: 1,
    name1: 'People',
    name2: 'Red Bench',
    price: 3.89,
    image: redBenchImg,
  },
  { id: 2, name1: 'Food', name2: 'Egg Balloon', price: 93.89, image: eggImg1 },
  { id: 3, name1: 'Food', name2: 'Egg Balloon', price: 93.89, image: eggImg2 },
  { id: 4, name1: 'People', name2: 'Man', price: 100.0, image: manStandingImg },
  {
    id: 5,
    name1: 'Landmarks',
    name2: 'Architecture',
    price: 101.0,
    image: architectureAImg,
  },
  {
    id: 6,
    name1: 'Landmarks',
    name2: 'Architecture',
    price: 101.0,
    image: architectureBImg,
  },
];

const ProductGrid = ({ addToCart }) => {
  return (
    <div className="products-grid">
      {PRODUCTS.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductGrid;
