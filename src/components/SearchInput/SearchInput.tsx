import { ChangeEvent, forwardRef } from 'react';

import IconSearch from '../Icons/IconSearch';
import Button from '../Button/Button';

type SearchInputProps = {
  name: string;
  queryInProgress: boolean;
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (props, ref) => {
    const { name, onChange, value, queryInProgress } = props;

    return (
      <div>
        <div>
          <label
            htmlFor='default-search'
            className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
            Search
          </label>
          <div className='relative'>
            <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
              <IconSearch />
            </div>
            <input
              ref={ref}
              onChange={onChange}
              name={name}
              value={value}
              type='search'
              id='default-search'
              className='outline-none block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-[16px]'
              placeholder='Find github user all around the world ...'
            />
            <Button
              type='submit'
              isLoading={queryInProgress}
              className='absolute end-2.5 top-1/2 translate-y-[-50%] hidden md:block'>
              Search
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

export default SearchInput;
