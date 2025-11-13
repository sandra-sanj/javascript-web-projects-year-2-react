import {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); // set count to 0

  // wrong way
  /*let countWrong = 0;
  const handleClickWrong = () => {
    countWrong++;
    console.log(countWrong);
  };*/

  const handleClickRight = () => {
    setCount(count + 1);
    console.log(count);
  };

  const [name, setName] = useState('Guest');

  const handleNameTyping = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  return (
    <>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={handleClickRight}>Click Me</button>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => handleNameTyping(e)}
      />
    </>
  );
};

export default Counter;
