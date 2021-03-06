//Page to take user to journaling suite or meditation resources

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink, withRouter } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class JournalPrompts extends React.Component {
	
  constructor(props) {
    super(props);

    this.onChangePrompt = this.onChangePrompt.bind(this);
    this.onChangeResponse = this.onChangeResponse.bind(this);
	this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      prompt: 'p0',
      response: 'essay goes here',
	  date: new Date(),
    }
  }
  
  
    onChangePrompt(e) {
    this.setState({
      prompt: e.target.value
    })
  }

  onChangeResponse(e) {
    this.setState({
      response: e.target.value
    })
  }
  
    onChangeDate(date) {
    this.setState({
      date: date
    })
  }


  onSubmit(e) {
    e.preventDefault();

    const entry = {
      prompt: this.state.prompt,
      response: this.state.response,
	  date: this.state.date
    }

    console.log(entry);

    axios.post('https://t2serve.herokuapp.com/entries/add', entry)
      .then(res => console.log(res.data));

    window.location = '/JournalPast';
  }
  
  
  

			
	
	render() {
		return(
			<div className="App">


				<h1>Please Select one of the Prompts Below</h1>

		<div>
        <label>
		
		
		
          <select name="prompt" value={this.state.prompt} onChange={this.onChangePrompt}>
            
			<option value = "p0">
				Please Select A Prompt:
			</option>
			
			<option value="Describe something that happened in the last week you have strong feelings about. What happened? What did you do in response?">
				Describe something that happened in the last week you have strong feelings about. What happened? What did you do in response?
			</option>
			
            <option value="Describe a goal you have for the next three months. What steps do you need to take in order to achieve it? How can you start to do so now?">
				Describe a goal you have for the next three months. What steps do you need to take in order to achieve it? How can you start to do so now?
			</option>
			
            <option value="Write about a song you have been listening to a lot recently. Why do you think you are drawn to it?">
				Write about a song you have been listening to a lot recently. Why do you think you are drawn to it?
			</option>
			
            <option value="What is the last dream you had that you remember?">
				What is the last dream you had that you remember?
			</option>
			
			<option value="Describe something you're looking forward to this week:">
				Describe something you're looking forward to this week:
			</option>
			
			<option value="Think about the last time you had strong conflict with someone. What did you do to resolve it? What did you learn from that experience for the next time a similar situation occurs?">
				Think about the last time you had strong conflict with someone. What did you do to resolve it? What did you learn from that experience for the next time a similar situation occurs?
			</option>
          
		  </select>
        </label>
	  </div>
	  
	  
	  
	  
	  
	  <div>
	  
	  <form onSubmit={this.onSubmit}>
        <label>
		<div>
          Response:
		</div>
          <textarea rows="10" cols="100" name="essay" value={this.state.response} onChange={this.onChangeResponse} />
        <div>
			<label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
		  </div>
		<div>
        <input type="submit" value="Submit" />
		</div>
		
		</label>
		
	  </form>
	  
	</div>
	

		  

	
	<div>
		Note: After typing your response, you must click outside of the text box before pressing submit in order to save your response. You may want to copy your response to your clipboard in case there is a submission error.
	</div>
	

	</div>
			
		);
	}
}

export default JournalPrompts;
