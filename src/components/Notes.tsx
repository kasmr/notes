import { observer } from 'mobx-react-lite';
import { useCallback, useState, useMemo } from 'react';
import notes from '../store/notes';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

interface ISelectedNote {
  content?: string;
  title?: string;
}

const Notes = observer(() => {
  const mdeOptions = useMemo(() => {
    return {
      toolbar: false,
      maxHeight: '100vh',
      status: false,
    };
  }, []);

  let { content, title }: ISelectedNote = notes.selectedNote;

  // const [value, setValue] = useState(content);

  // const onChange = useCallback((value) => {
  //   setValue(value);
  // }, []);

  return (
    <div className='note'>
      <SimpleMDE
        value={content}
        // onChange={onChange}
        options={mdeOptions}
      />
    </div>
  );
});

export default Notes;
