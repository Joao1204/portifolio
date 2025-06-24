import './App.css';
import MainNavbar from './components/mainNavbar/MainNavbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <MainNavbar/>
      </header>
      <main>
       <Outlet/>
      </main>
      <footer>
       
      </footer>
    </div>
  );
}

export default App;
