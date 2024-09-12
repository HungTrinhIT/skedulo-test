import { ChangeEvent, useRef, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/store';
import {
  clearSearchData,
  queryGithubUsersThunk,
} from '../../redux/slices/githubUsers.slice';
import ManageUserList from '../../components/ManageUserList/ManageUserList';
import PageLayout from '../../components/PageLayout/PageLayout';
import SearchUserForm from '../../components/SearchUserForm/SearchUserForm';
import SearchInput from '../../components/SearchInput/SearchInput';
import { isMobile } from 'react-device-detect';

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const queryUserInprogress = useAppSelector(
    (state) => state.githubUser.queryUserInprogress
  );
  const dispatch = useAppDispatch();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const isMobileDevice = isMobile;

  const handleQueryGithubUser = async () => {
    dispatch(queryGithubUsersThunk(searchTerm));
  };

  const handleClearSearchData = () => {
    setSearchTerm('');
    dispatch(clearSearchData());
  };

  const handleSubmitForm = () => {
    if (!searchTerm) {
      handleClearSearchData();
      return;
    }

    setSearchTerm('');
    handleQueryGithubUser();

    if (isMobileDevice && searchInputRef.current) {
      searchInputRef.current?.blur();
    }
  };

  const handleSearchTermChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleTriggerFocusSearchInputField = () => {
    if (searchInputRef.current) {
      searchInputRef.current?.focus();
    }
  };

  return (
    <PageLayout className='pt-10'>
      <SearchUserForm handleSubmitForm={handleSubmitForm}>
        <SearchInput
          name='searchTerm'
          value={searchTerm}
          queryInProgress={queryUserInprogress}
          onChange={handleSearchTermChange}
          ref={searchInputRef}
        />
      </SearchUserForm>
      <ManageUserList
        className='mt-8'
        handleClearSearchData={handleClearSearchData}
        handleTriggerFocusSearchInputField={handleTriggerFocusSearchInputField}
      />
    </PageLayout>
  );
};

export default Homepage;
