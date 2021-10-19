import { observer } from 'mobx-react-lite';
import { useMemo, useCallback } from 'react';
import SimpleMdeReact from 'react-simplemde-editor';
import store from '../store/store';

const AddNote = observer(() => {
  const mdeOptions = useMemo(() => {
    return {
      toolbar: false,
      maxHeight: '40vh',
      status: false,
    };
  }, []);

  const onChange = useCallback((e: any) => {
    if (!store.newNote) {
      return;
    }
    store.newNote.content = e;
  }, []);

  return (
    <div>
      <div className='notes'>
        <SimpleMdeReact
          options={mdeOptions}
          value={store.newNote?.content}
          onChange={onChange}
        />
      </div>
      {/* <button onClick={() => store.addNote()}>add todo</button> */}
    </div>
  );
});

export default AddNote;
