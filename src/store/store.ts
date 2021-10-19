import { makeAutoObservable } from 'mobx';

export interface INote {
  id: number;
  title: string;
  content: string;
  date: boolean;
}

const addNote = (notes: Array<INote>, text: string): Array<INote> => [
  ...notes,
  {
    id: Math.random() * 100,
    title: text,
    content: '',
    date: false,
  },
];

const removeNote = (id: number, notes: INote[]): Array<INote> => {
  return notes.filter((note) => note.id !== id);
};

const selectNote = (id: number, notes: INote[]): INote | undefined => {
  return notes.find((note) => note.id === id);
};

class Store {
  notes: Array<INote> = [
    {
      id: 1,
      title: 'note 1',
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam illo esse sapiente rem quas dolorem nulla ut blanditiis cumque labore',
      date: false,
    },
    {
      id: 2,
      title: 'note 2',
      content: 'lorem  ipsum',
      date: false,
    },
  ];
  newNote: undefined | INote;

  constructor() {
    makeAutoObservable(this);
  }

  //   addNote() {
  //     this.notes = addNote(this.notes, this.newNote);
  //   }

  removeNote(id: number) {
    this.notes = removeNote(id, this.notes);
  }

  selectNote(id: number) {
    this.newNote = selectNote(id, this.notes);
  }
}

const store = new Store();
export default store;
