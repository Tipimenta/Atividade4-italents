import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { ListaReceitas } from './components/ListaReceitas/ListaReceitas';


function App() {
  return (
    <div className="App">
      <Header/>
      <ListaReceitas />
      <Footer />
    </div>
  );
}

export default App
