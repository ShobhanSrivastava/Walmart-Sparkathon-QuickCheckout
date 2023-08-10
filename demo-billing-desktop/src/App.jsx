import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from "../components";
import { Cart, CheckoutScreen } from "../screens";

function App() {
  return (
    <Router>
      <div className="w-[100vw] h-max min-h-[100vh] px-[10vw] bg-[#13131A] text-white">
        <Navbar />
        <Routes>
          <Route path='/' element={<CheckoutScreen />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App
