import React, { Component } from "react";
class MessageDetail extends Component {
  render() {
  return (
    <div className="Message">
      <p>{this.props.message}</p>
      <button onClick={() => this.props.removeItem(this.props.id)}>Remove me</button>
    </div>
  );
  }
    componentWillUnmount() {
    console.log('Removing item', this.props);
    }
}
export default MessageDetail;