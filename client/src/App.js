import React, { Component } from "react";
// import { Input, FormBtn } from "./components/Searchform";
import { List, ListItem } from "./components/List";
import { ListSaved, ListSavedItem } from "./components/Listsaved";
import Form from "./components/Searchform/Form";


class App extends Component {


  render() {
    return (
      <div className="container">
        {/*<form>
          <Input
            value={""}
            onChange={""}
            name="topic"
            placeholder="Topic (required)"
          />
          <Input
            value={""}
            onChange={""}
            name="startYear"
            placeholder="Start Year (required)"
          />
          <Input
            value={""}
            onChange={""}
            name="endYear"
            placeholder="End Year (required)"
          />
          <FormBtn>
            Submit
          </FormBtn>
        </form>
        */}
        <Form
          />



        <hr></hr>

        <List>
          <ListItem>
            list item
          </ListItem>
        </List>

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
