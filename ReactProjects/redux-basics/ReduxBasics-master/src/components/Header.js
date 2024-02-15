import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { UseDispatch } from 'react-redux';
import { authActions } from '../store';
const Header = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector(state => state.auth.isAuthenticated);

  const logoutHandler = (event) => {
      event.preventDefault();
      // note that we need to execute the function here itself
      dispatch(authActions.logout());
  }
  // is the isAuth is true we are displaying nav with li elements
  
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>

      )}
      
    </header>
  );
};

export default Header;
