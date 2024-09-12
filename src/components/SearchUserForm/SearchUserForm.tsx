import { FormEvent, PropsWithChildren } from 'react';

type SearchUserFormProps = PropsWithChildren & {
  handleSubmitForm: () => void;
};

const SearchUserForm = (props: SearchUserFormProps) => {
  const { handleSubmitForm, children } = props;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmitForm();
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
};

export default SearchUserForm;
