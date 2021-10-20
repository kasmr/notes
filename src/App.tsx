import './App.css';
import AddButton from './components/AddButton';
import Notes from './components/Notes';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className='App'>
      <SideBar />
      <Notes />
      <AddButton />
    </div>
  );
}

export default App;
