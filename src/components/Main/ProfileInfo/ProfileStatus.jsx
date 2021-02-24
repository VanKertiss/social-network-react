import React from "react";
//import HS from "../Main.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditeMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deactivateEditeMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState ({
        status:this.props.status
      })
    }
  }
  
  render() {
    console.log ('render')
    
    return (
      <div>
        {!this.state.editMode && (
          <div>
            
            <span onDoubleClick={this.activateEditeMode}>
              {this.props.status || "Статуса нет :("}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <span>Статус: </span>
            <input
              autoFocus={true}
              onChange={this.onStatusChange}
              onBlur={this.deactivateEditeMode}
              value={this.state.status}
            ></input>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
