import './App.css';
import './components/ClassComponents';
import ClassComponents from './components/ClassComponents';
import FunctionalComponent from './components/FunctionalComponent';
import Login from './components/Login/Login';
import Register from './components/Register/Register';


function App() {
  return (
    <div>
      <ClassComponents>

      </ClassComponents>
      <FunctionalComponent>
        
      </FunctionalComponent>
      <Login></Login>
      <Register></Register>
    </div>
  );
}

export default App;
