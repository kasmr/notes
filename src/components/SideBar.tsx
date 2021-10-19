import { observer } from 'mobx-react-lite';
import store, { INote } from '../store/store';
import ConfirmModal from './ConfirmModal';
import Search from './Search';

const SideBar = observer(() => {
  //   const search = '';

  const searchItems = (note: INote) => {
    return (
      note.title.indexOf(store.search) !== -1 ||
      note?.content.indexOf(store.search) !== -1
    );
  };

  const renderItem = (note: INote) => {
    return (
      <>
        <div
          className='side-note'
          tabIndex={note.id}
          key={note.id}
          onClick={() => store.selectNote(note.id)}
        >
          <h1>{note.title}</h1>
          <p>{note.content?.substring(0, 100) + '...'}</p>
          <ConfirmModal {...note} />
          <button onClick={() => store.handleEditing()}>Edit</button>
        </div>
        <button onClick={() => store.addNote()}>Add new</button>
      </>
    );
  };

  return (
    <div className='side'>
      {store.notes.map((note: INote) => {
        if (store.search && searchItems(note)) {
          return renderItem(note);
        } else if (store.search) {
          return null;
        } else {
          return renderItem(note);
        }
      })}
    </div>
  );
});

export default SideBar;
