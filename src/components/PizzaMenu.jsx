import {useState} from 'react';
import PizzaCard from './PizzaCard';

const PizzaMenu = () => {
  const pizzaArray = [
    {id: 1, name: 'Margarita', price: 12},
    {id: 2, name: 'American', price: 14},
    {id: 3, name: 'Hawaiian', price: 10},
  ];

  const [cart, setCart] = useState(0);
  // when child component asks to add one pizza, run this parent element function
  const addToCart = () => {
    setCart((prev) => prev + 1);
    console.log(cart);
  };

  return (
    <>
      <h3>Pizza Menu</h3>
      <p>Here is the pizza menu:</p>
      <div className="pizza-container">
        {pizzaArray.map((pizza) => (
          <PizzaCard key={pizza.id} pizza={pizza} addToCart={addToCart} />
        ))}
      </div>
    </>
  );
};

export default PizzaMenu;
