import { Routes, Route, Link } from 'react-router-dom'; 

import './App.css';
import Home from './pages/Home';

function App() {

  // OpenSea asset collection API call

  // useEffect(() => {
  //   const options = {method: 'Get'};

  //   fetch('https://api.opensea.io/api/v1/assets?collection=99originals&limit=50&order_direction=desc', options)
  //   .then(response => response.json()) 
  //   .then(response => console.log(response))
  //   .catch(err => console.log(err));
  // }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
