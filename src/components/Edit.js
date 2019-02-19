import React, { Component } from 'react';

class Edit extends Component {

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

    render() {
        return (
          <div>
            <form className="row" onSubmit={ (e) => {
              e.preventDefault()
              this.props.editMessage({id:this.props.messageToEdit.id, message:this.state.message, name:this.state.name})
                    }  }>
              <div className="col-sm">
                <input type="text" className="form-control"
                    onChange={ (e) => this.onChange(e) } name="name" id="name" defaultValue={this.props.messageToEdit.name} />
              </div>
              <div className="col-sm">
                <input type="text" className="form-control"
                  onChange={ (e) => this.onChange(e)} name="message" defaultValue={this.props.messageToEdit.message} id="message" />
              </div>
              <button type="submit" className="btn btn-secondary">submit</button>
            </form>
          </div>
        )
    }
}
export default Edit;
