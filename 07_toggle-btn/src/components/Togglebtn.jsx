import React, { useState } from 'react';
import './ToggleSwitch.css';

function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  const  toggleSwitch = () => setIsOn(!isOn);

  return (
    
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
       
      <label className="switch">
       
        <input type="checkbox" checked={isOn} onChange={toggleSwitch} />
        <span className="slider"></span>
      </label>
      <span style={{ fontSize: '18px', fontWeight: 'bold' }}>
        {isOn ? 'ON' : 'OFF'}
      </span>
    </div>
  );
}

export default ToggleSwitch;

