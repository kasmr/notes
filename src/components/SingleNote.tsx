import { Card } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import ConfirmModal from './ConfirmModal';
import store, { INote } from '../store/store';

const SingleNote = (props: INote) => {
  console.log(props);
  return (
    <Card
      onClick={() => store.selectNote(props.id)}
      style={{ cursor: 'default' }}
      actions={[
        <EditOutlined key='edit' onClick={() => store.handleEditing()} />,
        <ConfirmModal key='delete' {...props} />,
      ]}
      tabIndex={props.id}
    >
      <Card.Meta
        title={props.title.substring(0, 25)}
        description={`${props.date} 
            ${
              props.content.length <= 40
                ? props.content
                : props.content?.substring(0, 40) + '...'
            }`}
      />
    </Card>
  );
};

export default SingleNote;
