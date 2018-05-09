import React from "react";

export const ListItem = props => (
  <li className="list-group-item">
    <p>{props.title}</p>
    <p>{props.date}</p>
    <p>{props.url}</p>
    <button className="btn btn-success">
      Save Article
    </button>
  </li>
);
