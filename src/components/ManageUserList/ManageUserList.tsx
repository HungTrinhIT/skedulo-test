import { shallowEqual } from 'react-redux';
import { useAppSelector } from '../../redux/store';
import GithubUserCard from '../GithubUserCard/GithubUserCard';
import RenderWhen from '../RenderWhen/RenderWhen';

import classNames from 'classnames';
import NoResult from '../Button/NoResult/NoResult';
import ManageUserLoading from '../ManageUserLoading/ManageUserLoading';

type ManageUserListProps = {
  className?: string;
};

const ManageUserList = ({ className }: ManageUserListProps) => {
  const users = useAppSelector((state) => state.githubUser.users, shallowEqual);
  const queryUserInprogress = useAppSelector(
    (state) => state.githubUser.queryUserInprogress
  );
  const queryUserError = useAppSelector(
    (state) => state.githubUser.queryUserError
  );

  const isEmptyResult = users.length === 0;

  if (queryUserError) {
    return (
      <div
        className='p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400'
        role='alert'>
        <span className='font-medium'>{queryUserError.message}</span>
      </div>
    );
  } else if (queryUserInprogress) {
    return <ManageUserLoading />;
  } else if (isEmptyResult) {
    return <NoResult />;
  }

  const classes = classNames(
    'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4',
    className
  );

  return (
    <div className={classes}>
      <RenderWhen condition={queryUserInprogress}>
        <RenderWhen.False>
          {users.map((user) => (
            <GithubUserCard data={user} key={user.id} />
          ))}
        </RenderWhen.False>
      </RenderWhen>
    </div>
  );
};

export default ManageUserList;
