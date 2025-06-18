import { useAppSelector } from '../storeHooks';
import { selectCartItems, selectCartTotal } from '../features/cart/cartSelectors';

export default function Checkout() {
  const cartItems = useAppSelector(selectCartItems);
  const total = useAppSelector(selectCartTotal);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Resumo da Compra</h1>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} x{item.quantity} = R${(item.price * item.quantity).toFixed(2)}
            </li>
          ))}
        </ul>
      )}
      <h2>Total: R${total.toFixed(2)}</h2>
      <button onClick={() => alert('Pagamento simulado!')}>Finalizar Compra</button>
    </div>
  );
}
