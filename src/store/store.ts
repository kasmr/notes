import { makeAutoObservable } from 'mobx';

export interface INote {
  id: number;
  title: string;
  content: string;
  isEditing: boolean;
}

const removeNote = (id: number, notes: INote[]): INote[] => {
  return notes.filter((note) => note.id !== id);
};

const selectNote = (id: number, notes: INote[]): INote | undefined => {
  return notes.find((note) => note.id === id);
};

class Store {
  notes: INote[] = [
    {
      id: 1,
      title: 'note 1',
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam illo esse sapiente rem quas dolorem nulla ut blanditiis cumque labore',
      isEditing: false,
    },
    {
      id: 2,
      title: 'note 2',
      content: 'lorem  ipsum',
      isEditing: false,
    },
  ];
  selectedNote: undefined | INote;
  search = '';

  constructor() {
    makeAutoObservable(this);
  }

  addNote() {
    const newNote = {
      id: Math.random() * 100,
      title: 'New note',
      content: 'Add content here',
      isEditing: false,
    };
    this.notes.push(newNote);
  }

  removeNote(id: number) {
    this.notes = removeNote(id, this.notes);
  }

  selectNote(id: number) {
    this.selectedNote = selectNote(id, this.notes);
  }

  handleEditing() {
    store.selectedNote!.isEditing = !store.selectedNote?.isEditing;
  }
}

const store = new Store();
export default store;
