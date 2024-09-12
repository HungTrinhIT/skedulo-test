import { ChangeEvent } from 'react';

type SearchInputProps = {
  name: string;
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput = (props: SearchInputProps) => {
  const { name, onChange, value } = props;

  return (
    <div>
      <input
        onChange={onChange}
        name={name}
        value={value}
        className='py-2 px-3 outline-none rounded-lg border-red-300 border-[1px]'
      />
    </div>
  );
};

export default SearchInput;
