import { observer } from 'mobx-react-lite';
import { useMemo } from 'react';
import ConfirmModal from './ConfirmModal';
import { FormOutlined } from '@ant-design/icons';
import store, { INote } from '../store/store';
import SimpleMdeReact from 'react-simplemde-editor';

const NewSide = observer(() => {
  return (
    <div className='side'>
      {store.notes.map((note: INote) => (
        <div
          className='side-note'
          tabIndex={note.id}
          key={note.id}
          onClick={() => store.selectNote(note.id)}
        >
          <h1>{note.title}</h1>
          <p>{note.content}</p>
          <button onClick={() => store.removeNote(note.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
});

export default NewSide;
