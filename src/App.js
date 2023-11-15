import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/user-shared/Layout';
import Daseboard from './components/user-shared/Daseboard';
import Products from './components/user-shared/Products';


function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Daseboard />} />
        <Route path="products" element={<Products />} />
          </Route>
    </Routes>
</Router>
  );
}

export default App;
