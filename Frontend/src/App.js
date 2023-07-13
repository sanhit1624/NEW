
import './App.css';
import Accounts from './Components/Accounts';
import {Routes,Route} from "react-router-dom"
import Transaction from './Components/Transaction';
import DistProduct from './Components/DistProduct';


function App() {
  return (
    <div className="w-full mt-6">
      <Routes>
        <Route path="/" element={<Accounts/>}/>
        <Route path="/transaction/:id" element={<Transaction/>}/>
        <Route path="/DistProduct" element={<DistProduct/>}/>


      </Routes>
     
      

     
    </div>
  );
}

export default App;
