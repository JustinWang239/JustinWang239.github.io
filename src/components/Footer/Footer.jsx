import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="start" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          <a
            key={0}
            href={'https://github.com/JustinWang239?tab=repositories'}
            rel="noopener noreferrer"
            target="_blank"
            aria-label={'github'}
          >
            <i className={`fa fa-github fa-inverse`} />
          </a>
        </div>
        <hr />
      </Container>
    </footer>
  );
};

export default Footer;
