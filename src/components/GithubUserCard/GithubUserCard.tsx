import classNames from 'classnames';

import { GithubUserType } from '../../types/users';
import Button from '../Button/Button';

type GithubUserCardProps = {
  data: GithubUserType;
  className?: string;
};

const GithubUserCard = (props: GithubUserCardProps) => {
  const {
    data: { login, avatar_url },
    className,
  } = props;

  const classes = classNames(
    'max-w-sm p-4 border border-gray-200 rounded shadow hover:shadow-black/25 transition-all md:p-6 dark:border-gray-700 flex flex-col items-center justify-center',
    className
  );

  return (
    <div className={classes}>
      <div className='flex items-center justify-center h-16  w-16 rounded-full mb-4 overflow-hidden border-gray border-[1px] border-dashed bg-gray-300'>
        <img
          alt={login}
          className='w-full h-full object-cover'
          src={avatar_url}
        />
      </div>
      <h6 className='mb-4'>{login}</h6>
      <Button>More</Button>
    </div>
  );
};

export default GithubUserCard;
