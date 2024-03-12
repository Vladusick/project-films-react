function Header() {
  return (
    <nav className="deep-purple darken-2">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Movies
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/Vladusick/project-films-react">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
