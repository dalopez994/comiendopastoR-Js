//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


function App() {
  const data = {
    greeting: "Holis!",
  };

  return(
    <>
    <NavBar/>
    <ItemListContainer greeting={data.greeting}/>
    <ItemCount stock={10} initial={1} />
    </> 
  );
}

export default App;
