import './App.css';
import AddNote from './components/AddNote';
import NewSide from './components/NewSide';
import Notes from './components/Notes';
import Side from './components/Side';
import notes from './store/notes';

function App() {
  return (
    <div className='App'>
      {/* <Side />
      <Notes {...notes} /> */}
      <NewSide />
      <AddNote />
    </div>
  );
}

export default App;
