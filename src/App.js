import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/user-shared/Layout';
import Daseboard from './components/pages/Daseboard';
import UserForm from './components/user-shared/AddUserForm';


function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Daseboard />} />
        <Route path="adduser-form" element={<UserForm />} />
          </Route>
    </Routes>
</Router>
  );
}

export default App;
