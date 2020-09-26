const React = require("react");
const Layout = require("./layout.jsx");

class Profile extends React.Component {
  render() {
      const {user, index} = this.props
    return (
      <Layout title="Side-Bet Scrambler">
        <h1> Hello {user.username} </h1>
      </Layout>
    );
  }
}

module.exports = Profile;
