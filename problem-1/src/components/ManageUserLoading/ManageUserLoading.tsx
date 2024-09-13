const LOADING_CARD_COUNT = 16;
const LOADING_CARDS: number[] = Array.from(
  { length: LOADING_CARD_COUNT },
  (_, index) => index + 1
);

const GithubUserCardSkeleton = () => {
  return (
    <div
      role='status'
      className='max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700 flex flex-col items-center justify-center'>
      <div className='flex items-center justify-center h-16  w-16 rounded-full mb-4 bg-gray-300 dark:bg-gray-700'>
        <svg
          className='w-full h-full text-gray-200 dark:text-gray-700'
          aria-hidden='true'
          fill='currentColor'
          viewBox='0 0 20 20'>
          <path d='M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z' />
        </svg>
      </div>
      <div className='h-4 bg-gray-200 rounded-sm dark:bg-gray-700 w-48 mb-4' />
      <div className='h-6 bg-gray-200 rounded-sm dark:bg-gray-700 w-[110px]' />
    </div>
  );
};

const ManageUserLoading = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
      {LOADING_CARDS.map(() => (
        <GithubUserCardSkeleton />
      ))}
    </div>
  );
};

export default ManageUserLoading;
