import React, { Component } from 'react';


class Compose extends Component {

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addNewMessage({message: e.target.message.value, name:e.target.name.value})
  }


    render() {

        return (
          <div>
            <form
            style={{paddingTop: 2 +'em'}} onSubmit={this.onSubmit} >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <input type="text" className="form-control" id="message" />
              </div>
              <button type="submit" className="btn btn-info">Submit</button>

              <button style={{marginLeft: .5 +'em'}}className="btn btn-primary" onClick={this.props.composeToggle}>close</button>

            </form>



          </div>
        )
    }
}

export default Compose;
