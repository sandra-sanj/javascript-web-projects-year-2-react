import {useState, useEffect, useRef} from 'react';

function HookDemo() {
  const [count, setCount] = useState(0);
  const testElement = useRef(null);

  useEffect(() => {
    // Update div element's color based on count
    testElement.current?.style.setProperty(
      'background-color',
      `rgb(${count * 5}, 0, 0)`,
    );
  }, [count]); // Only re-run the effect if count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button ref={testElement} onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default HookDemo;
