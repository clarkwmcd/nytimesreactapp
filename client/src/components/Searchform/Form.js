import React from "react";
import axios from "axios";

class Form extends React.Component {
  // Setting the initial values of this.state.term and this.state.startYear
  state = {
    term: "",
    startYear: "",
    endYear: ""
  };

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  searching = () => {
    const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
    const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
    authKey + "&q=" + this.state.term + "&begin_date=" + this.state.startYear + "0101&end_date=" + this.state.endYear + "1231";

    return axios.get(queryURL)
    .then(res => console.log(res));
  };


  // When the form is submitted, prevent the default event and alert the term and startYear
  handleFormSubmit = event => {
    event.preventDefault();
    // alert(`Username: ${this.state.term}\nStart Year: ${this.state.startYear}\nEnd Year: ${this.state.endYear}`);
    // this.setState({ term: "", startYear: "", endYear: "" });
    this.searching();
  }



  render() {
    return (
      <div className="form-group">
        {/*<p>Username: {this.state.term}</p>
      <p>Password: {this.state.startYear}</p>
        */}
        <input
          className="form-control"
          type="text"
          placeholder="Search Term"
          name="term"
          value={this.state.term}
          onChange={this.handleInputChange}
        />
        <input
          className="form-control"
          type="text"
          placeholder="Start Year"
          name="startYear"
          value={this.state.startYear}
          onChange={this.handleInputChange}
        />
        <input
          className="form-control"
          type="text"
          placeholder="End Year"
          name="endYear"
          value={this.state.endYear}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleFormSubmit}>Submit</button>
      </div>
    );
  }
}

export default Form;
