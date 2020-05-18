import React from 'react';
import AlarmItem from './AlarmItem'

function AlarmList({ alarms }) {
  return (
    <div>
      <h2>
        Alarm List:
    </h2>
      <ul>
        {alarms.map(([alarmName, { alarmDate, active }]) => {
          return (
            <AlarmItem alarmName={alarmName} alarmDate={alarmDate} key={alarmName} active={active} />
          )
        })}
      </ul >
    </div>
  )
}

export default AlarmList