import { observer } from 'mobx-react-lite';
import notes, { INote } from '../store/notes';
import ConfirmModal from './ConfirmModal';
import { FormOutlined } from '@ant-design/icons';

const Side = observer(() => {
  return (
    <div className='side'>
      {notes.notes.map((note: INote) => (
        <div
          className='side-note'
          tabIndex={note.id}
          key={note.id}
          onClick={() => notes.selectNote(note.id)}
        >
          <h1>{note.title}</h1>
          <p>{note.content && note.content.substring(0, 40) + '...'}</p>
          <ConfirmModal {...note} />
        </div>
      ))}
      {/* <FormOutlined
        onClick={() => notes.addNote()}
        style={{
          fontSize: '3rem',
        }}
      /> */}
    </div>
  );
});

export default Side;
