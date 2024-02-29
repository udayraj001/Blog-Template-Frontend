import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Root from './Root';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {


  type User={
    name:string,
    age:number,
    adress:string,
    dob:string
  }
  const [count, setCount] = useState<User[]>([
    {name:"Uday",age:20,adress:"Jnec",dob:"25"},
    {name:"Soham",age:20,adress:"Jnec",dob:"12"}
  ]);

  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            
          </Route>
        </Routes>
      </Router>
    </>
  );



}

export default App
