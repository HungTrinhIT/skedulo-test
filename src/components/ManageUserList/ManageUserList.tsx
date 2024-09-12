import { shallowEqual } from 'react-redux';
import classNames from 'classnames';

import { useAppSelector } from '../../redux/store';
import GithubUserCard from '../GithubUserCard/GithubUserCard';
import RenderWhen from '../RenderWhen/RenderWhen';
import NoResult from '../NoResult/NoResult';
import ManageUserLoading from '../ManageUserLoading/ManageUserLoading';
import IconClearData from '../Icons/IconClearData';
import { formatNumber } from '../../utils/format';

type ManageUserListProps = {
  className?: string;
  handleClearSearchData: () => void;
  handleTriggerFocusSearchInputField: () => void;
};

const ManageUserList = (props: ManageUserListProps) => {
  const {
    className,
    handleClearSearchData,
    handleTriggerFocusSearchInputField,
  } = props;

  const users = useAppSelector((state) => state.githubUser.users, shallowEqual);
  const queryUserInprogress = useAppSelector(
    (state) => state.githubUser.queryUserInprogress
  );
  const queryUserError = useAppSelector(
    (state) => state.githubUser.queryUserError
  );
  const totalSearchResult = useAppSelector(
    (state) => state.githubUser.totalResults
  );

  const isEmptyResult = users.length === 0;

  if (queryUserError) {
    return (
      <div
        className='p-4 my-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400'
        role='alert'>
        <span className='font-medium'>{queryUserError.message}</span>
      </div>
    );
  } else if (queryUserInprogress) {
    return <ManageUserLoading />;
  } else if (isEmptyResult) {
    return (
      <NoResult
        handleTriggerFocusSearchInputField={handleTriggerFocusSearchInputField}
      />
    );
  }

  const formattedTotalSearchResult = formatNumber(totalSearchResult);
  const classes = classNames('', className);

  return (
    <div className={classes}>
      <RenderWhen condition={queryUserInprogress}>
        <RenderWhen.False>
          <div className='flex items-center justify-between mb-5'>
            <span>
              <strong>
                {formattedTotalSearchResult}{' '}
                {+totalSearchResult <= 1 ? 'result' : 'results'}
              </strong>
            </span>
            <div
              className='cursor-pointer flex items-center gap-x-2'
              onClick={handleClearSearchData}>
              <IconClearData />
              <span>Clear data</span>
            </div>
          </div>
          <div className='mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {users.map((user) => (
              <GithubUserCard data={user} key={user.id} />
            ))}
          </div>
        </RenderWhen.False>
      </RenderWhen>
    </div>
  );
};

export default ManageUserList;
