import { observer } from 'mobx-react-lite';
import { useMemo, useCallback } from 'react';
import SimpleMdeReact from 'react-simplemde-editor';
import store from '../store/store';
import 'easymde/dist/easymde.min.css';
import ReactMarkdown from 'react-markdown';

const Notes = observer(() => {
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

  const onTitleChange = useCallback((e: string) => {
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

  if (!store.selectedNote) {
    return (
      <div className='notes'>
        <h1>To begin please select the note</h1>
      </div>
    );
  }

  return (
    <div className='notes'>
      <span>
        <p>{store.selectedNote.date}</p>
      </span>
      {store.selectedNote.isEditing ? (
        <>
          <div>
            <SimpleMdeReact
              id='tile'
              options={mdeTitleOptions}
              value={store.selectedNote?.title}
              onChange={onTitleChange}
            />
          </div>
          <div>
            <SimpleMdeReact
              id='content'
              options={mdeContentOptions}
              value={store.selectedNote?.content}
              onChange={onContentChange}
            />
          </div>
        </>
      ) : (
        <>
          {<ReactMarkdown>{store.selectedNote?.title}</ReactMarkdown>}
          {<ReactMarkdown>{store.selectedNote?.content}</ReactMarkdown>}
        </>
      )}
    </div>
  );
});

export default Notes;
