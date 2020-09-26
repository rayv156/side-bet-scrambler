const React = require("react");
const Layout = require("../layout.jsx");

class Login extends React.Component {
  render() {
    return (
      <Layout title="LOGIN">
        <form action="/" method="post">
          <div className="form-group">
          <label>User Name: </label> 
          <input type="text" className="form-control" name="username" placeholder="username"/>
          </div>
          <div className="form-group">
          <lable>Password: </lable>
          <input type="password" className="form-control" name="password" placeholder="password"/>
          </div>
          <input type="submit" className="btn btn-success" value="Log in"/>
        </form>
        <a href="/signup"><button type="button" class="btn btn-primary" id="signup">Sign Up</button></a>
      </Layout>
    );
  }
}

module.exports = Login;
