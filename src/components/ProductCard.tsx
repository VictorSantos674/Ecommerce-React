import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { Product } from '../features/products/productsSlice';

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <Card>
      <img src={product.image} alt={product.name} width="100%" />
      <h3>{product.name}</h3>
      <p>R${product.price.toFixed(2)}</p>
      <button onClick={handleAdd}>Adicionar ao Carrinho</button>
    </Card>
  );
}
