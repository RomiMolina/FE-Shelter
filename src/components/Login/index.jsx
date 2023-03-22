import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { LoginForm } from '../Login/LoginForm/index';
import { Profile } from '../Login/Profile/index';

const LoginPage = () => {
  const user = useSelector((state) => state.login.user);
  console.log('soy el user', user);
  const history = useNavigate();
  // if (user) {
  //   history('/perfil');
  //   return null;
  // }

  return (
    <div className='flex items-center justify-center h-screen'>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
