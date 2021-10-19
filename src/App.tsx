import './App.css';
import Search from './components/Search';
import NotesMDE from './components/NotesMDE';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className='App'>
      <SideBar />
      <NotesMDE />
    </div>
  );
}

export default App;
