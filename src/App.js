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
        <AlarmList alarms={Object.entries(this.state.alarms)} />
        <AlarmSim addNewAlarm={this.addNewAlarm} />
      </div>
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

  //removeAlarm (alarmName)

  //active 

  //remoteDidMount


};


export default App;
