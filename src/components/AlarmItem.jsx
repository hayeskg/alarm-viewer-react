import React from 'react';

function AlarmItem(props) {
  return (
    <li className={props.active ? 'active' : 'acknowledged'}>
      <p>{props.alarmName}<br></br>
        {Date(props.alarmDate).toString()}</p>
      <button onClick={() => props.acknowledgeAlarm(props.alarmName)}>Acknowledge</button>
      <button onClick={() => props.removeAlarm(props.alarmName)}>Clear</button>
    </li >
  )
}
export default AlarmItem