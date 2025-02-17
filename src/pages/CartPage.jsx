import Cart from '../components/Cart';

const CartPage = ({ cartItems }) => {
  return (
    <div>
      <h1>Your Cart</h1>
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default CartPage;