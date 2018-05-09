import React, { Component } from "react";
// import { Input, FormBtn } from "./components/Searchform";
import {ListItem} from "./components/List";
import { ListSaved, ListSavedItem } from "./components/Listsaved";
import Form from "./components/Searchform/Form";


class App extends Component {

  state = {
    articles: []
  }

  articleState = (param) => {
    this.setState({
      articles: param
    })
  };



  render() {
    return (
      <div className="container">
        {/*
          .bind binds the this from app.js as it currently is
        */}
        <Form
          name={this.articleState.bind(this)}
        />

        <hr></hr>

        <div className="alert alert-success">
          <h1>Articles From Search</h1>
          <div className="list-overflow-container">
            <ul className="list-group">
              {
                this.state.articles.map(i => (
                <ListItem
                  title={i.headline.main}
                  date={i.pub_date}
                  url={i.web_url}
                  key={i.headline.main}
                />
                ))
              }
            </ul>
          </div>
        </div>


        <hr></hr>

        <ListSaved>
          <ListSavedItem>
            List Saved Item
          </ListSavedItem>
        </ListSaved>

        <hr></hr>

      </div>
    );
  }
}

export default App;
