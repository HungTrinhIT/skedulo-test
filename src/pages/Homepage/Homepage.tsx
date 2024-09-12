import ManageUserList from '../../components/ManageUserList/ManageUserList';
import PageLayout from '../../components/PageLayout/PageLayout';
import SearchUserForm from '../../components/SearchUserForm/SearchUserForm';

const Homepage = () => {
  return (
    <PageLayout className='pt-10'>
      <SearchUserForm />
      <ManageUserList className='mt-8' />
    </PageLayout>
  );
};

export default Homepage;
