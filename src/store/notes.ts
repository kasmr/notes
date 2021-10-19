import { makeAutoObservable } from 'mobx';

export interface INote {
  id: number;
  title: string;
  content: string;
  date: string;
}

class Notes {
  notes: Array<INote> = [
    {
      id: 1,
      title: 'note 1',
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam illo esse sapiente rem quas dolorem nulla ut blanditiis cumque labore',
      date: '20-10-2021',
    },
    {
      id: 2,
      title: 'note 2',
      content: ' lorem  ipsum',
      date: '22-10-2021',
    },
  ];

  selectedNote: INote | undefined;

  constructor() {
    makeAutoObservable(this);
  }

  selectNote(id: number) {
    this.selectedNote = this.notes.find((item) => item.id === id);
  }

  addNote() {
    const newNote = {
      id: Math.random() * 100,
      title: 'New note',
      content: '',
      date: '20-10-2021',
    };
    // this.notes.push(newNote);
    const newArray = [...this.notes, newNote];
    this.notes = newArray;
  }

  deleteNote(id: number) {
    this.notes = this.notes.filter((note) => note.id !== id);
  }

  updateNote(noteToUpdate: INote) {
    console.log('this', noteToUpdate);
    if (!noteToUpdate) {
      return;
    }
    this.notes = this.notes.map((note) =>
      note.id === noteToUpdate.id
        ? { ...note, title: noteToUpdate.title, content: noteToUpdate.content }
        : note
    );
  }
}

export default new Notes();
