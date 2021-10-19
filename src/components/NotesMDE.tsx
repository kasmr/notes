import { observer } from 'mobx-react-lite';
import { useMemo, useCallback } from 'react';
import SimpleMdeReact from 'react-simplemde-editor';
import store from '../store/store';
import 'easymde/dist/easymde.min.css';

const NotesMDE = observer(() => {
  const mdeTitleOptions = useMemo(() => {
    return {
      toolbar: false,
      maxHeight: '10vh',
      status: false,
    };
  }, []);

  const mdeContentOptions = useMemo(() => {
    return {
      toolbar: false,
      maxHeight: '70vh',
      status: false,
    };
  }, []);

  const onTitleChange = useCallback((e: any) => {
    if (!store.selectedNote) {
      return;
    }
    store.selectedNote.title = e;
  }, []);

  const onContentChange = useCallback((e: string) => {
    if (!store.selectedNote) {
      return;
    }
    store.selectedNote.content = e;
  }, []);

  return (
    <div>
      <div className='notes'>
        <SimpleMdeReact
          id='tile'
          options={mdeTitleOptions}
          value={store.selectedNote?.title}
          onChange={onTitleChange}
        />
      </div>
      <div className='notes'>
        <SimpleMdeReact
          id='content'
          options={mdeContentOptions}
          value={store.selectedNote?.content}
          onChange={onContentChange}
        />
      </div>
    </div>
  );
});

export default NotesMDE;
