import './App.css';
import ChildComponent from './components/ChildComponent';
import ChildClass from './components/ChildClass';
import Counter from './components/Counter';
import CounterClass from './components/CounterClass';
import ConditionalRendering from './components/ConditionalRendering';
import TernaryCondition from './components/TernaryCondition';
import AndCondition from './components/AndCondition';
import Navbar from './components/NavBar';
import{BrowserRouter,Routes,Route}from 'react-router-dom';
function App() {
  const msg="Hi from parent component-app";
  const msg1="Hi from parent component class";
  
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
        




      </Routes>
      
      
      
      
      </BrowserRouter>
     <ChildComponent message={msg}/>
     <ChildClass message={msg1}/>
     <Counter/>
     <CounterClass/>
     <ConditionalRendering/>
     <TernaryCondition/>
     <AndCondition></AndCondition>
    </div>
  );
}

export default App;
