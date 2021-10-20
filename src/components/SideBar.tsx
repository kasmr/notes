import { observer } from 'mobx-react-lite';
import store, { INote } from '../store/store';
import Search from './Search';
import SingleNote from './SingleNote';

const SideBar = observer(() => {
  const searchItems = (note: INote) => {
    return (
      note.title.indexOf(store.search) !== -1 ||
      note?.content.indexOf(store.search) !== -1
    );
  };

  const renderItem = (note: INote) => {
    return <SingleNote {...note} key={note.id} />;
  };

  return (
    <div className='side'>
      <Search />
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
