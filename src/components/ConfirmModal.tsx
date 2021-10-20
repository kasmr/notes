import { Modal } from 'antd';
import { CloseCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import store from '../store/store';

interface Props {
  id: number;
  title: string;
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
      content: props.title,
      okType: 'danger',
      okText: 'Delete',
      onOk() {
        store.removeNote(props.id);
      },
    });
  }

  return <DeleteOutlined onClick={showConfirm} />;
};

export default ConfirmModal;
