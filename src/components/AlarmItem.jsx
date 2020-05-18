import React from 'react';

function AlarmItem(props) {
  return (
    <li className={props.active ? 'active' : 'acknowledged'}>
      <p>{props.alarmName}<br></br>
        {Date(props.alarmDate).toString()}</p>
      <button >Acknowledge</button>
      <button>Clear</button>
    </li>
  )
}

//onClick={props.ackAlarm(props.alarm.active)}

export default AlarmItem