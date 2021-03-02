import React, { useState } from 'react'
import Chip from '@material-ui/core/Chip';
import './MultiSelectChips.scss'

export default function MultiSelectChips({chipsData}) {

  const [chipsList, setChipsList] = useState(chipsData)

  const deleteChips = (targetChipKey) => {
    setChipsList((chipsList) => chipsList.filter((chip) => chip.key !== targetChipKey))
  }

  return (
    <div className="multiSelectChips">
      {chipsList && chipsList.map((chip) => {

        return(
          <div key={chip.key}>
            <Chip
            className="test"
              label={chip.label}
              onDelete={() => deleteChips(chip.key)}
            />
          </div>
        )
      })}
      
    </div>
  )
}
