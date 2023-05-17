import React, { Component } from "react";

export class ProductCard extends Component {
  state = {
    likeCount: 0,
  };

  likePost = () => {
    this.setState((likeCount) => {
      return {
        likeCount: ++likeCount,
      };
    });
    console.log(this.state.likeCount);
  };

  render() {
    return (
      <div className="likepost">
        <h1>{this.orios.title}</h1>
        <p>{this.props.description}</p>
        <button onClick={() => alert(this.props.pos)}>Like</button>
        {this.state.likeCount}
      </div>
    );
  }
}

export default ProductCard;
