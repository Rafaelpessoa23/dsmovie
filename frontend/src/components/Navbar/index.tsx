import "./style.css";
import { ReactComponent as GithubIcon } from 'assets/img/github-logo.svg';
function Navbar() {
  return (
    <header >
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a href="https://www.github.com/rafaelpessoa23">
            <div className="dsmovie-contact-container">
              <GithubIcon />
              <p className="dsmovie-contact-link">/Rafael Pessoa</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;