import React from 'react';
import axios from 'axios';

class Answer extends React.Component {

    state = {
        answer: '',
        posts: []
      };
    
      componentDidMount = () => {
        this.getBlogPost();
      };
    
    
      getBlogPost = () => {
        axios.get('https://team-toyota-api.herokuapp.com/answer')
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
          answer: this.state.answer
        };
    
    
        axios({
          url: 'https://team-toyota-api.herokuapp.com/answer',
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
          answer: ''
        });
      };
    
      displayBlogPost = (posts) => {
    console.log("clicked fetched")
        if (!posts.length) return null;
    
    
        return posts.map((post, index) => (
          <div key={index}>
            <p>{post.answer}</p>
          </div>
        ));
      };
    
    render() {
        console.log('State: ', this.state);
        return (
            <div className="app">
            <h2>EDU TOYATA REACT APP</h2>
            <form onSubmit={this.submit}>
             
              <div className="form-input">
              <label>What is your Answer?
                <input 
                  type="text"
                  name="answer"
                  placeholder=""
                  id="qn"
                  value={this.state.answer}
                  onChange={this.handleChange}
                />
                </label>
              </div>
         
    
              <button id="btn">Submit</button><br></br>
              Available Answers
            </form>
           
             <div> {this.displayBlogPost(this.state.posts)}
            
             </div> 
          </div>
        )
    }
}

export default Answer;

