import React from 'react'
import Slider from '@material-ui/core/Slider';

export default function SkillLevel() {

  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <div>
      <Slider
        defaultValue={0.00000005}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-small-steps"
        step={1}
        marks
        min={-2}
        max={2}
        valueLabelDisplay="auto"
        />
      
    </div>
  )
}
