import logo from "../images/header-logo.svg"
import { Switch, Route, Link } from 'react-router-dom'

function Header({ onSignOut, userEmail }) {
  return (
    <header className="header">
      <img src={logo} alt="Логотип Место" className="header__logo" />
      <Switch>
        <Route path="/sign-in">
          <Link className="auth__link" to="/sign-up">
            Регистрация
          </Link>
        </Route>
        <Route path="/sign-up">
          <Link className="auth__link" to="/sign-in">
            Войти
          </Link>
        </Route>
        <Route path="/">
          <div>
            <span className='auth__email'>{userEmail || ''}</span>
            <Link onClick={onSignOut} className="auth__link" to="/sign-in">
              Выйти
            </Link>
          </div>
        </Route>
      </Switch>
    </header>
  );
}

export default Header