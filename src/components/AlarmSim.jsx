import React from 'react';

class AlarmSim extends React.Component {
  state = {
    alarmInput: '',
  };

  render() {
    const { alarmInput } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Add New Alarm</label><br></br>
        <input
          onChange={this.handleChange}
          name='alarmInput'
          value={alarmInput}
        /><br></br>
        <button type="submit">Add</button>
      </form>
    )
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ alarmInput: value })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { alarmInput } = this.state;
    this.props.addNewAlarm(alarmInput);
    this.setState({ alarmInput: '' });
  };
}

export default AlarmSim;


