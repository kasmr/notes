import store from '../store/store';
import { Input } from 'antd';

const Search = () => {
  return (
    <Input.Search
      type='text'
      value={store.search}
      onChange={(e) => (store.search = e.target.value)}
      style={{ width: '101%' }}
    />
  );
};

export default Search;
