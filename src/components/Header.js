import React from 'react'

export default function Header() {
  return (
    <div>
        <nav className="navbasr navbar-expand-lg navbar-light bg-dark">
          <a className="navbar-brand text-light" href="www.google.com">Album</a><i class="fa fa-camera" aria-hidden="true"></i>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
          </div>
        </nav>
        <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Album example</h1>
          <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
          <p>
            <a href="www.google.com" className="btn btn-primary my-3 mx-2">Main call to action</a>
            <a href="www.google.com" className="btn btn-secondary my-3 mx-2">Secondary action </a>
          </p>
        </div>
      </section>
    </div>
  )
}
