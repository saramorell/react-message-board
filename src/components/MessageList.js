import React, { Component } from 'react';
class MessageList extends Component {
    render() {
        return (
          <div>
            <ul className="list-group">
              {this.props.renderMessages()}
            </ul>
          </div>
        )
    }
}
export default MessageList;
