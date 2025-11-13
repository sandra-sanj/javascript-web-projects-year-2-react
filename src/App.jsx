import './App.css';
import Greeting from './components/Greeting';
import Footer from './components/Footer';
import PizzaMenu from './components/PizzaMenu';

// js function which returns JSX
const App = () => {
  const siteName = 'WSK';
  const styles = {
    backgroundColor: 'gray',
    color: 'white',
  };

  return (
    <>
      <h1 style={styles}>{siteName} site</h1>
      <div style={{color: 'blue'}}>Hello World!</div>
      <Greeting name="Sandra" age={25} isTeacher={false} />
      <Greeting name="Sue" age={34} isTeacher={true} />
      <PizzaMenu />
      <ul>
        <li>apple</li>
        <li>orange</li>
      </ul>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          ipsam laboriosam rerum tempora quod id architecto illum at eaque sint,
          error impedit labore explicabo quas, pariatur, modi obcaecati corporis
          porro.
        </p>
      </div>
      <Footer />
      <button>button</button>
    </>
  );
};
export default App;
