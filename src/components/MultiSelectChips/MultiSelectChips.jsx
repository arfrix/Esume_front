import React, { useState } from 'react'
import Chip from '@material-ui/core/Chip';


export default function MultiSelectChips(chipsData) {

  const [chipsList, setChipsList] = useState(chipsData)

  const deleteChips = (targetChipKey) => {
    setChipsList((chipsList) => chipsList.filter((chip) => chip.key !== targetChipKey))
  }


  return (
    <div>
      {chipsList.map((chip) => {

        return(
          <li key={chip.key}>
            <chip
              label={chip.label}
              onDelete={deleteChips(chip.key)}
            />
          </li>
        )
      })}
      
    </div>
  )
}
