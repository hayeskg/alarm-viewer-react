import React from 'react';
import AlarmItem from './AlarmItem'

function AlarmList(props) {
  return (
    <div>
      <h2>
        Alarm List:
    </h2>
      <ul>
        {props.alarms.map(([alarmName, { alarmDate, active }]) => {
          return (
            <AlarmItem
              alarmName={alarmName}
              alarmDate={alarmDate}
              key={alarmName}
              active={active}
              removeAlarm={props.removeAlarm}
            />
          )
        })}
      </ul >
    </div>
  )
}

export default AlarmList