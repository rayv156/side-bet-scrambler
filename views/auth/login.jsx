const React = require("react");
const Index = require("../index.jsx");

class Login extends React.Component {
  render() {
    return (
      <Index title="Side Bet Scrambler">
        <div className="form-container">
          <img src="https://i.imgur.com/CKea2dD.png?1" style={{width: 50, backgroundColor: 'green', margin: '10px 0px'}}></img>
        <form action="/" method="post">
          <div className="form-group">
          <input type="text" className="form-control" name="username" placeholder="username" style={{border: 'solid green'}}/>
          </div>
          <div className="form-group">
          <input type="password" className="form-control" name="password" placeholder="password" style={{border: 'solid green'}} />
          </div>
          <div className="form-group" style={{marginLeft: 60}}>
          <input type="submit" className="btn btn-dark" id="login" value="Log in" />
          </div>
        </form>
        <a href="/signup"><button type="button" class="btn btn-primary" id="signup">Sign Up</button></a>
        </div>
      </Index>
    );
  }
}

module.exports = Login;
