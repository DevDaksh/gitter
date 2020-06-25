import React from 'react';
import Profile from './Profile';
import Nav from './Nav'
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      username: "",
      profileImage: "",
      repos: "",
      repoList: [""],
      followers: "",
      following: "",
      site: "",
      email: "",
      bio: "",
      profLink: "",
      twitter: "",
      renderData: false
    }
  }

  render() {

    const api = `https://api.github.com/users/${this.state.username}`;
    const repoApi = `https://api.github.com/users/${this.state.username}/repos`;

    const getData = (e) => {
      document.querySelector(".spinner-border").style.visibility = "visible";
      e.preventDefault();

      axios.get(api)
        .then(el => {
          const res = el.data;
          this.setState({
            profileImage: res.avatar_url,
            repos: res.public_repos,
            followers: res.followers,
            following: res.following,
            site: res.blog,
            email: res.email,
            bio: res.bio,
            profLink: res.html_url,
            twitter: res.twitter,
            name: res.name,
            renderData: true
          })
        })

      setTimeout(() => {
        document.querySelector(".spinner-border").style.visibility = "hidden";
        if ((this.state.profileImage === undefined)) {
          document.querySelector(".card").style.visibility = "hidden";
        } else {
          document.querySelector(".card").style.visibility = "visible";
        }
      }, 1000);

      axios.get(repoApi)
        .then(res => {
          this.setState({
            repoList: res.data
          })
        })


    }
    return (

      <div>
        <Nav />
        <div className="App-header">
          <div className="dataForm">
            <div className="terminal">~$ git --view </div>

            <div className="input">
              <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="material-addon1" onChange={e => this.setState({ username: e.target.value })} />
            </div>
            <div className="btn btn-social-icon btn-github" onClick={getData}>
              <span className="fa fa-github"></span>
            </div>
            <br />
          </div>


          <div className="d-flex justify-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>

          <div>
            <Profile details={this.state} />
          </div>

        </div >
      </div >
    );
  }
}

export default App;
