import classNames from 'classnames';

import { GithubUserType } from '../../types/users';
import Button from '../Button/Button';

type GithubUserCardProps = {
  data: GithubUserType;
  className?: string;
};

const GithubUserCard = (props: GithubUserCardProps) => {
  const {
    data: { login, avatar_url, type, score, html_url },
    className,
  } = props;

  const handleNavigateToGithubProfile = () => {
    window.open(html_url, '_blank');
  };

  const classes = classNames(
    'relative max-w-sm p-4 pt-14 border border-gray-200 rounded shadow hover:shadow-black/25 transition-all md:p-6 md:pt-12 dark:border-gray-700 flex flex-col items-center justify-center',
    className
  );

  return (
    <div className={classes}>
      <div className='absolute top-3 right-3 flex items-center'>
        <span className=' bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300'>
          {type}
        </span>
        <span className='bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300'>
          {score} / 1.0
        </span>
      </div>

      <div className='flex items-center justify-center h-16  w-16 rounded-full mb-4 overflow-hidden border-gray border-[1px] border-dashed bg-gray-300'>
        <img
          alt={login}
          className='w-full h-full object-cover'
          src={avatar_url}
        />
      </div>
      <h6 className='mb-4'>{login}</h6>
      <Button onClick={handleNavigateToGithubProfile}>More</Button>
    </div>
  );
};

export default GithubUserCard;
