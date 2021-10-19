import { Modal, Button } from 'antd';
import { CloseCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import notes from '../store/notes';

interface Props {
  id: number;
}

const ConfirmModal = (props: Props) => {
  const { confirm } = Modal;

  function showConfirm() {
    confirm({
      title: 'Do you really want to delete this note?',
      icon: (
        <CloseCircleOutlined
          style={{
            color: '#ff4d4f',
          }}
        />
      ),
      content: 'Some descriptions',
      okType: 'danger',
      okText: 'Delete',
      onOk() {
        notes.deleteNote(props.id);
      },
    });
  }

  return (
    <DeleteOutlined
      onClick={showConfirm}
      style={{
        fontSize: '1.8rem',
      }}
    />
  );
};

export default ConfirmModal;
