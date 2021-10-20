import { Button } from 'antd';
import store from '../store/store';

const AddButton = () => {
  return (
    <Button
      type='primary'
      shape='round'
      size='large'
      onClick={() => store.addNote()}
      style={{
        position: 'absolute',
        bottom: '2rem',
        right: '2rem',
        background: 'white',
        color: 'black',
        borderColor: 'black',
      }}
    >
      Add note
    </Button>
  );
};

export default AddButton;
