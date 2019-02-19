import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Message from './components/Message';
import MessageList from './components/MessageList';
import Compose from './components/Compose';

class App extends Component {

  state = {
    messages: [],
    composeOn: false
  }

  async componentDidMount() {
      const response = await fetch('https://sm-assessment.herokuapp.com/messages')
      const json = await response.json()
      this.setState({messages: json} )
    }

    renderMessages = () => {
     return this.state.messages.map((m, i) => {
      return <Message {...m} key={i}
        messages={this.state.messages}
        deleteMessage={this.deleteMessage}
        editMessage={this.editMessage}
       />
    })
    this.setState({ messages:[...this.state.messages] })
  }

  composeToggle = () => {
    this.setState({ composeOn: !this.state.composeOn })
  }

  addNewMessage = async (message) => {
    const response = await fetch('https://sm-assessment.herokuapp.com/messages', {
        method: 'POST',
        body: JSON.stringify(message),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      const updatedMessages = await response.json()
      this.setState({ messages: [...this.state.messages, updatedMessages] })
    }

    deleteMessage = async (id) => {
      await fetch(`https://sm-assessment.herokuapp.com/messages/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      this.setState({ messages: this.state.messages.filter((message) => message.id !== id) })
    }

    editMessage = async (obj) => {
      // let data={id, message, name}

      const response =  await fetch(`https://sm-assessment.herokuapp.com/messages/${obj.id}`, {
        method: 'PATCH',
        body: JSON.stringify(obj),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      const editedMessage = await response.json()
      console.log(editedMessage)

      let indexOfEditedMessage = this.state.messages.findIndex(message => message.id === obj.id)

      this.setState({
          messages: [...this.state.messages.slice(0,indexOfEditedMessage), editedMessage, ...this.state.messages.slice(indexOfEditedMessage + 1)]
      })
    }




  render() {
    return (
      <div className="App">
      <div className="container">
      <Header
        composeToggle={this.composeToggle}
      />
      <MessageList
        renderMessages={this.renderMessages}
        messages={this.state.messages}
        />
        <div className="container">
            <div className="col-md-6">
            {this.state.composeOn &&
              <Compose
                addNewMessage={this.addNewMessage}
                composeToggle={this.composeToggle}
              />}
            </div>
          </div>
      </div>
      </div>
    );
  }
}

export default App;
