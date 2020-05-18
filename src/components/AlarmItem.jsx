import React from 'react';

function AlarmItem(props) {
  console.dir(props)
  return (
    <li className={props.active ? 'active' : 'acknowledged'}>
      <p>{props.alarmName}<br></br>
        {Date(props.alarmDate).toString()}</p>
      <button >Acknowledge</button>
      <button onClick={() => props.removeAlarm(props.alarmName)}>Clear</button>
    </li >
  )
}

//onClick={props.ackAlarm(props.alarm.active)}

export default AlarmItem