const React = require("react");
const Layout = require("./layout.jsx");

class Profile extends React.Component {
  render() {
      const {user} = this.props
    return (
      <Layout title="Side-Bet Scrambler">
        <h1> Hello {user.username} </h1>
        <a href="/profile/edit"><button>Edit</button></a>
      </Layout>
    );
  }
}

module.exports = Profile;
