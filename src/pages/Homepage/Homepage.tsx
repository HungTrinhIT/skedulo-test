import { ChangeEvent, FormEvent, useState } from 'react';
import SearchInput from '../../components/SearchInput/SearchInput';
import api from '../../config/api';

type Props = {};

const Homepage = (props: Props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState<any[]>([]);

  const handleQueryGithubUser = async () => {
    try {
      const apiResponse = await api.get(`/search/users?q=${searchTerm}`);
      const data = apiResponse.data;
      setUsers(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleQueryGithubUser();
  };

  const handleSearchTermChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  const isDisableSubmitSearch = !searchTerm;

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <SearchInput
          name='searchTerm'
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        <button type='submit' disabled={isDisableSubmitSearch}>
          Search
        </button>
      </form>
      <div>
        {users &&
          users.map((user: any) => {
            return (
              <div className='border-[1px] border-blue-500' key={user.id}>
                <h6>{user.login}</h6>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Homepage;
