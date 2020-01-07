import React from "react";
import "../css/App.scss";
import data from "../data/giphy";
import allGiphies from "./MainContainer";

// function Preview(props) {
//   return (
//     <div className="Preview">
//       <h3>Preview {this.data.props}</h3>
//     </div>
//   );
// }

const Preview = props => {
  function findId(e) {
    e.preventDefault();
    if (e === props.data.id) {
      console.log(`id is=>`, props.data.id);
    }
  }

  return (
    <div className="preview">
      <h3>Preview</h3>
      <img src={props.data}></img>
      {/* {allGiphies} */}
      {/* <button className="btn" onClick={findId}></button> */}
    </div>
  );
};

export default Preview;
