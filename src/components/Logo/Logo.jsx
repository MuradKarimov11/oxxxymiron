
import { Link } from 'react-router-dom';
import logo from '../../images/logo.webp';

export const Logo = () => {
  return (
    <div className='logo'>
      <Link to='/'>
        <img src={logo} alt="oxxxymiron"/>
      </Link>
    </div>
  )
}
