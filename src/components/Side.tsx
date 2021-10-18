import { observer } from 'mobx-react-lite';
import notes, { INote } from '../store/notes';

const Side = observer(() => {
  return (
    <div className='side'>
      {notes.notes.map((note: INote) => (
        <div
          className='side-note'
          tabIndex={note.id}
          key={note.id}
          onClick={() => notes.selectNote(note)}
        >
          <h1>{note.title}</h1>
          <p>{note.content && note.content.substring(0, 40) + '...'}</p>
          <button onClick={() => notes.deleteNote(note.id)}>X</button>
        </div>
      ))}
      <button onClick={() => notes.addNote()}>Add new note</button>
    </div>
  );
});

export default Side;
