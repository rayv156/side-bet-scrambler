const React = require("react");


class Index extends React.Component {
  render() {
    return (
      <html>
      <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="css/style.css"/>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
          <script src='https://kit.fontawesome.com/a076d05399.js'></script>
          <script src="/js/app.js"></script>
          <link href="https://fonts.googleapis.com/css2?family=Calligraffitti&display=swap" rel="stylesheet"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </head>
      <body>
          <header>
              <nav className="navbar navbar-dark bg-dark"> 
              <a className="navbar-brand" href="/"><span className="brand" style={{fontFamily: "'Calligraffitti', cursive"}}>Side-Bet Scrambler </span><i class='fas fa-golf-ball'></i></a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mr-auto">
                          <li className="nav-item active">
                          <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                          </li>
                          <li className="nav-item">
                          <a className="nav-link" href="/">Log In</a>
                          </li>
                          <li className="nav-item">
                          <a className="nav-link" href="/signup">Sign Up</a>
                          </li>
                      </ul>
                  </div>
              </nav>
          </header>
          <main>
              {this.props.children}
          </main>

          <footer>
          </footer>
          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
      </body>
  </html>
    );
  }
}

module.exports = Index;
