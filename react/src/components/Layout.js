import React from 'react';
import { Link } from 'react-router';

const Layout = (props) => {
  return(
    <div>
      <span>
        <button className="btn btn-success">When I grow up, I will be a dope header.</button>
      </span>
      <br />
      <Link to='/'> HOME </Link>
      <Link to='/boothbay'> Boothbay </Link>
      <br />
      <h1 className="page-title"> Bars </h1>
      { props.children }
    </div>
  )
}

export default Layout;
