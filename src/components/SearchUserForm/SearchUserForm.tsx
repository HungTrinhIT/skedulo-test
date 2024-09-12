import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { queryGithubUsersThunk } from '../../redux/slices/githubUsers.slice';
import SearchInput from '../SearchInput/SearchInput';

const SearchUserForm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const queryUserInprogress = useAppSelector(
    (state) => state.githubUser.queryUserInprogress
  );
  const dispatch = useAppDispatch();

  const handleQueryGithubUser = async () => {
    if (!searchTerm) return;

    dispatch(queryGithubUsersThunk(searchTerm));
  };

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleQueryGithubUser();
  };

  const handleSearchTermChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <SearchInput
        name='searchTerm'
        value={searchTerm}
        queryInProgress={queryUserInprogress}
        onChange={handleSearchTermChange}
      />
    </form>
  );
};

export default SearchUserForm;
