import './App.css';
import Search from './components/Search';
import Notes from './components/Notes';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className='App'>
      <SideBar />
      <Notes />
    </div>
  );
}

export default App;
