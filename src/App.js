import React from 'react';
import './App.css';
import Header from './components/Header';
import AlarmList from './components/AlarmList';
import AlarmSim from './components/AlarmSim';


class App extends React.Component {
  state = {
    alarms: {
      'Machine 1 power fail': {
        alarmDate: Date.now(),
        active: true,
      },
      'Pallet Full': {
        alarmDate: Date.now(),
        active: false,
      }
    }
  }

  render() {
    return (
      <div className="App" >
        <Header />
        <AlarmList alarms={Object.entries(this.state.alarms)} removeAlarm={this.removeAlarm} acknowledgeAlarm={this.acknowledgeAlarm} />
        <AlarmSim addNewAlarm={this.addNewAlarm} />
        <button onClick={this.handleAlarmSave}>SAVE ALARMS</button>
      </div >
    )
  }

  addNewAlarm = (alarmInput) => {
    this.setState((currentState) => {
      return {
        alarms: {
          ...currentState.alarms, [alarmInput]: {
            alarmDate: Date.now(),
            active: true,
          }
        },
      };
    });
  };

  removeAlarm = (alarmName) => {
    this.setState((currentState) => {
      const temp = { ...currentState.alarms };
      delete temp[alarmName];
      return {
        alarms: { ...temp }
      }
    })
  }

  acknowledgeAlarm = (alarmName) => {
    this.setState((currentState) => {
      return {
        alarms: {
          ...currentState.alarms,
          [alarmName]: {
            ...currentState.alarms[alarmName], active: !currentState.alarms[alarmName].active
          }
        }
      }
    }
    )
  }

  handleAlarmSave = (event) => {
    localStorage.setItem('data', JSON.stringify(this.state.alarms));
    console.log('data saved');
  };

  loadAlarmData = () => {
    const data = localStorage.getItem('data');
    if (data) this.setState({ alarms: JSON.parse(data) });
  }

  componentDidMount = () => {
    console.log('mounted')
    this.loadAlarmData();

  };

};


export default App;
