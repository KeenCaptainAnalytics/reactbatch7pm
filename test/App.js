import './App.css';
import Contact from './components/Contact';
import Header from "./components/Header"
import Main from './components/Main';
function App() {
 
  return (
    <div>
      <Header/>
      <Main/>
      {/* <Contact/> */}
    </div>
   
  );
}

export default App;

// Any function that return jsx is called as a component
