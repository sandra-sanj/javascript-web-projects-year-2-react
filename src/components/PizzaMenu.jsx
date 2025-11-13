import PizzaCard from './PizzaCard';

const PizzaMenu = () => {
  const pizzaArray = [
    {id: 1, name: 'Margarita', price: 12},
    {id: 2, name: 'American', price: 14},
    {id: 3, name: 'Hawaiian', price: 10},
  ];

  return (
    <>
      <h3>Pizza Menu</h3>
      <p>Here is the pizza menu:</p>
      <div className="pizza-container">
        {pizzaArray.map((pizza) => (
          <PizzaCard key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </>
  );
};

export default PizzaMenu;
