const React = require("react");
const Index = require("../index.jsx");

class Login extends React.Component {
  render() {
    return (
      <Index title="LOGIN">
        <form action="/" method="post">
          <div className="form-group">
          <label>User Name: </label> 
          <input type="text" className="form-control" name="username" placeholder="username"/>
          </div>
          <div className="form-group">
          <lable>Password: </lable>
          <input type="password" className="form-control" name="password" placeholder="password"/>
          </div>
          <input type="submit" className="btn btn-dark" value="Log in"/>
        </form>
        <a href="/signup"><button type="button" class="btn btn-primary" id="signup">Sign Up</button></a>
      </Index>
    );
  }
}

module.exports = Login;
