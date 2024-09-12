import { shallowEqual } from 'react-redux';
import { useAppSelector } from '../../redux/store';
import GithubUserCard from '../GithubUserCard/GithubUserCard';
import RenderWhen from '../RenderWhen/RenderWhen';
import GithubUserCardSkeleton from '../GithubUserCardSkeleton/GithubUserCardSkeleton';

type ManageUserListProps = {};

const LOADING_CARD_COUNT = 16;
const LOADING_CARDS: number[] = Array.from(
  { length: LOADING_CARD_COUNT },
  (_, index) => index + 1
);

const ManageUserList = (props: ManageUserListProps) => {
  const users = useAppSelector((state) => state.githubUser.users, shallowEqual);
  const queryUserInprogress = useAppSelector(
    (state) => state.githubUser.queryUserInprogress
  );

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
      <RenderWhen condition={queryUserInprogress}>
        {LOADING_CARDS.map(() => (
          <GithubUserCardSkeleton />
        ))}
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
