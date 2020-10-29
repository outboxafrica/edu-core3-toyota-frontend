import React from 'react';
import axios from 'axios';
import {Link } from "react-router-dom";

class Question extends React.Component {

    state = {
        question: '',
        posts: []
      };
    
      componentDidMount = () => {
        this.getBlogPost();
      };
    
    
      getBlogPost = () => {
        axios.get('https://team-toyota-api.herokuapp.com/question')
          .then((response) => {
            const data = response.data;
            this.setState({ posts: data });
            console.log('Data has been received!!');
          })
          .catch(() => {
            alert('Error retrieving data!!!');
          });
      }
    
      handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
      };
    
    
      submit = (event) => {
        event.preventDefault();
    
        const payload = {
        question: this.state.question
        };
    
    
        axios({
          url: 'https://team-toyota-api.herokuapp.com/questionid',
          method: 'POST',
          data: payload
        })
          .then(() => {
            console.log('Data has been sent to the server');
            this.resetUserInputs();
            this.getBlogPost();
          })
          .catch(() => {
            console.log('Internal server error');
            alert("Invalid input")
          });;
      };
    
      resetUserInputs = () => {
        this.setState({
          question: ''
        });
      };
    
      displayBlogPost = (posts) => {
    console.log("clicked fetched")
        if (!posts.length) return null;
    
    
        return posts.map((post, index) => (
          <div key={index}>
            <p>{post.question}</p>
          </div>
        ));
      };
    
    render() {
        console.log('State: ', this.state);
        return (
            <div className="app">
            <h2>Welcome to our app</h2>
            <form onSubmit={this.submit}>
             
              <div className="form-input">
              <label>What is your Question?
                <input 
                  type="text"
                  name="question"
                  placeholder=""
                  id="qn"
                  value={this.state.question}
                  onChange={this.handleChange}
                />
                </label>
              </div>
         
    
              <button>Submit</button>
              <Link to="/answer"><button id="btn">Go to answers</button></Link> <br></br>
              Available Questions
            </form>
           
             <div> {this.displayBlogPost(this.state.posts)}
            
             </div> 
          </div>
        )
    }
}

export default Question;

