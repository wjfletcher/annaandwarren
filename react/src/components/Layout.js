import React from 'react';
import { Link } from 'react-router';

const Layout = (props) => {
  return(
    <div>
      <br />
      <Link to='/'> HOME </Link>
      <Link to='/boothbay'> Boothbay </Link>
      <br />
      { props.children }
    </div>
  )
}

export default Layout;
