import React from "react";

export const List = ({ children }) => {
  return (
    <div className="alert alert-success">
      <h1>Articles from Search</h1>
      <div className="list-overflow-container">
        <ul className="list-group">
          {children}
        </ul>
      </div>
    </div>
  );
};
