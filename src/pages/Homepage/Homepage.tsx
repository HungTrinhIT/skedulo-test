import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { isMobile } from 'react-device-detect';
import debounce from 'lodash/debounce';

import { useAppDispatch, useAppSelector } from '../../redux/store';
import {
  clearSearchData,
  queryGithubUsersThunk,
} from '../../redux/slices/githubUsers.slice';
import ManageUserList from '../../components/ManageUserList/ManageUserList';
import PageLayout from '../../components/PageLayout/PageLayout';
import SearchUserForm from '../../components/SearchUserForm/SearchUserForm';
import SearchInput from '../../components/SearchInput/SearchInput';
import { QUERY_USER_DEBOUNCE_TIMEOUT } from '../../utils/constants';

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const queryUserInprogress = useAppSelector(
    (state) => state.githubUser.queryUserInprogress
  );
  const dispatch = useAppDispatch();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const isMobileDevice = isMobile;

  const handleQueryGithubUser = useCallback(
    debounce((searchValue: string) => {
      return dispatch(queryGithubUsersThunk(searchValue));
    }, QUERY_USER_DEBOUNCE_TIMEOUT),
    [dispatch]
  );

  const handleClearSearchData = () => {
    setSearchTerm('');
    dispatch(clearSearchData());
  };

  const handleSubmitForm = () => {
    if (!searchTerm) {
      handleClearSearchData();
      return;
    }

    handleQueryGithubUser(searchTerm);

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

  useEffect(() => {
    const countSearchTermLetter = searchTerm.length;

    if (countSearchTermLetter === 0) {
      handleClearSearchData();
      return;
    }

    if (countSearchTermLetter >= 3) {
      handleSubmitForm();
    }
  }, [searchTerm]);

  return (
    <PageLayout className='pt-10'>
      <SearchUserForm>
        <SearchInput
          name='searchTerm'
          value={searchTerm}
          queryInProgress={queryUserInprogress}
          onChange={handleSearchTermChange}
          ref={searchInputRef}
          hideSubmitButton
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
