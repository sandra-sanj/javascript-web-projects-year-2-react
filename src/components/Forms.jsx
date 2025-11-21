import {useState} from 'react';

const Forms = () => {
  // not every form in the future will need its own states but for now we will do it like this
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
  };

  return (
    <>
      <h2>Forms</h2>
      <form onSubmit={handleSubmit} style={{width: '400px', margin: 'auto'}}>
        <label htmlFor="name">
          Etunimi
          <input type="text" value={name} id="name" onChange={handleChange} />
        </label>
        <button type="submit">Send Data</button>
      </form>
    </>
  );
};

export default Forms;
