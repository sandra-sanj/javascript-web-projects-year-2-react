import {useState} from 'react';

const PizzaForms = () => {
  // not every form in the future will need its own states but for now we will do it like this
  const [inputs, setInputs] = useState({
    firstname: 'Ullaa',
    mytxt: '',
    pizzaDough: 'rye',
    tomato: false,
    pineapple: false,
    mushroom: false,
    drink: 'fanta',
  });

  const handleChange = (event) => {
    /*console.log(event.target.name, event.target.value);
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
    console.log(inputs);*/

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    console.log('Values in INPUT:', name, value);
    setInputs((values) => ({...values, [name]: value}));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(name);

    alert(JSON.stringify(inputs, null, 2));
  };

  return (
    <>
      <h2>Forms</h2>
      <form onSubmit={handleSubmit} style={{width: '400px', margin: 'auto'}}>
        <label htmlFor="name">
          First Name
          <input
            type="text"
            name="firstname"
            value={inputs.firstname}
            id="first-name"
            onChange={handleChange}
          />
        </label>
        <hr />
        More Info
        <label htmlFor="tekstikentta">
          <textarea
            name="mytxt"
            value={inputs.mytxt}
            id="tekstikenttaaaa"
            onChange={handleChange}
          ></textarea>
        </label>
        <hr />
        Option
        <p>Select Pizza Dough</p>
        <select
          name="pizzaDough"
          value={inputs.pizzaDough}
          id="dough"
          onChange={handleChange}
        >
          <option value="wheat">Wheat</option>
          <option value="rye">Rye</option>
          <option value="gluten-free">Gluten Free</option>
        </select>
        <hr />
        Checkbox
        <p>Filling</p>
        <label htmlFor="">
          <input
            type="checkbox"
            name="tomato"
            checked={inputs.tomato}
            onChange={handleChange}
          />
          Tomato
        </label>
        <label htmlFor="">
          <input
            type="checkbox"
            name="pineapple"
            checked={inputs.pineapple}
            onChange={handleChange}
          />
          Pineapple
        </label>
        <label htmlFor="">
          <input
            type="checkbox"
            name="mushroom"
            checked={inputs.mushroom}
            onChange={handleChange}
          />
          Mushroom
        </label>
        <hr />
        Radio Button
        <p>Drink</p>
        <label htmlFor="">
          <input
            type="radio"
            name="drink"
            value="cola"
            checked={inputs.drink === 'cola'}
            onChange={handleChange}
          />
          Cola
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="drink"
            value="fanta"
            checked={inputs.drink === 'fanta'}
            onChange={handleChange}
          />
          Fanta
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="drink"
            value="sprite"
            checked={inputs.drink === 'sprite'}
            onChange={handleChange}
          />
          Sprite
        </label>
        <button type="submit">Send Data</button>
      </form>
    </>
  );
};

export default PizzaForms;
