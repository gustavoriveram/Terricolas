import React from 'react';
import classNames from 'classnames';
// import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="http://www.vatican.va/content/francesco/es/encyclicals/documents/papa-francesco_20150524_enciclica-laudato-si.html" target='_blank' rel="noopener noreferrer">Encíclica</a>
        </li>
        <li>
          <a href="https://www.javeriana.edu.co/hackathon-laudato-si/"
          target='_blank' rel="noopener noreferrer">Hackathon</a>
        </li>
        {/* <li>
          <Link to="#0">FAQ's</Link>
        </li>
        <li>
          <Link to="#0">Support</Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default FooterNav;