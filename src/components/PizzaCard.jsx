import pizzaImg from '../assets/images/pizza.jpg';

const PizzaCard = (props) => {
  console.log('props', props);
  const {name, price, addToCart} = props.pizza;

  return (
    <div className="card">
      <h4>{name}</h4>
      <p>Price: {price} €</p>
      <img src={pizzaImg} alt="pizza" />
      <button onClick={addToCart}>Add One</button>
    </div>
  );
};

export default PizzaCard;
