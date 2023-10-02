import React from 'react';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
function Header(){
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return(
    <nav className="navbar navbar-light bg-light">
        {/* <a class="navbar-brand" href="#">This Or That</a> */}
        <a class="navbar-brand justify-content-center px-3" href="/">This Or That</a> 
        <div>
          {Auth.loggedIn() ? (
            <>

              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
    </nav>
  )
}

export default Header;