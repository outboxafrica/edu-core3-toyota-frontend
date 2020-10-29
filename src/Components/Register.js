import React from 'react';
import axios from 'axios';
import {Link } from "react-router-dom";
import "../App"

class Register extends React.Component {

    state = {
        name: '',
        email: '',
        password: '',
        posts: []
      };
    
      componentDidMount = () => {
        this.getApiPost();
      };
    
    
      getApiPost = () => {
        axios.get('https://team-toyota-api.herokuapp.com/register')
          .then((response) => {
            const data = response.data;
            this.setState({ posts: data });
            console.log('Data has been received!!');
          })
          .catch(() => {
          });
      }
    
      handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
      };
    
    
      submit = (event) => {
        event.preventDefault();
    
        const payload = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
        };
    
    
        axios({
          url: 'https://team-toyota-api.herokuapp.com/register',
          method: 'POST',
          data: payload
        })
          .then(() => {
            console.log('Data has been sent to the server');
            alert("Data has been saved")
            this.resetUserInputs();
            this.getApiPost();
          })
          .catch(() => {
            console.log('Internal server error');
            alert("Invalid input")
          });;
      };
    
      resetUserInputs = () => {
        this.setState({
          name: '',
          email: '',
          password: ''
        });
      };
    
      displayApiPost = (posts) => {
    console.log("clicked fetched")
        if (!posts.length) return null;
    
    
        return posts.map((post, index) => (
          <div key={index}>
           <div>{post.name}</div>
           <div> {post.email}</div>
          </div>
        ));
      };
    
    render() {
        console.log('State: ', this.state);
        return (
            <div className="app">
            <h2>Edu Toyota App</h2>
            <form onSubmit={this.submit}>
             
              <div className="form-input">
              <label>Name
                <input 
                  type="text"
                  name="name"
                  placeholder=""
                  id="namme"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                </label><br></br>
                <label>Email
                <input 
                  type="text"
                  name="email"
                  placeholder=""
                  id="emmail"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                </label><br></br>
                <label>Password
                <input 
                  type="password"
                  name="password"
                  placeholder=""
                  id="pd"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                </label>
              </div>
         
  <button>Submit</button>
  <Link to="/home"><small>Go to homepage</small></Link> 
            </form>
           
             {/* <div> {this.displayApiPost(this.state.posts)}
             </div>  */}
          </div>
        )
    }
}

export default Register;

