//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'


function App() {
  const title="Comiendo Pasto";
  const data = {
    greeting: "Holis!",
  };

  return(
    <>
    <NavBar/>
    <ItemListContainer greeting={data.greeting}/>
    </> 
  );
}

export default App;
