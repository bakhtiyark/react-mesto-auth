import logo from "../images/header-logo.svg"
import { Switch, Route, Link } from 'react-router-dom'
import toggleList from "../utils/Navbar";
function Header({ onSignOut, userEmail }) {
  return (
    <header className="header">
      <img src={logo} alt="Логотип Место" className="header__logo" />
      <Switch>
        <Route path="/sign-in">
          <Link className="auth__link auth__link_location-header" to="/sign-up">
            Регистрация
          </Link>
        </Route>
        <Route path="/sign-up">
          <Link className="auth__link auth__link_location-header" to="/sign-in">
            Войти
          </Link>
        </Route>
        <Route path="/">
          <div className="header__bar" id="header__bar">
            <span className='auth__email header__bar-item'>{userEmail || ''}</span>
            <Link onClick={onSignOut} className="auth__link auth__link_location-header header__bar-item" to="/sign-in">
              Выйти
            </Link>
          </div>
          <Link onClick={toggleList} className="header__bar_mobile"></Link>
        </Route>
      </Switch>
    </header>
  );
}

export default Header