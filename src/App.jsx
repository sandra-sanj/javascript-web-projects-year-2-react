import './App.css';
import Home from './views/Home';
import Counter from './components/Counter';
import {Route, BrowserRouter, Routes} from 'react-router';
import Layout from './views/Layout';
import Profile from './views/Profile';
import Upload from './views/Upload';
import Single from './views/Single';

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* TODO: add missing routes */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/single" element={<Single />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
