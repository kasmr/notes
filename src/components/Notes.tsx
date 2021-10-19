import { observer } from 'mobx-react-lite';
import { useCallback, useState, useMemo, useEffect } from 'react';
// import notes, { INote } from '../store/notes';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import { INote } from '../store/notes';

interface IProps {
  selectedNote: INote;
  title?: string;
  updateNote: () => any;
}

const Notes = observer((notes: IProps) => {
  const mdeOptions = useMemo(() => {
    return {
      toolbar: false,
      maxHeight: '40vh',
      status: false,
    };
  }, []);

  return (
    <div className='note'>
      {/* <SimpleMDE
        value={notes.selectedNote?.title}
        onChange={() =>
          notes.updateNote({
            ...notes.selectedNote,
            title: notes.selectedNote?.title,
          } as INote)
        }
        options={mdeOptions}
      /> */}
      <SimpleMDE value={notes.selectedNote?.content} options={mdeOptions} />
    </div>
  );
});

export default Notes;
