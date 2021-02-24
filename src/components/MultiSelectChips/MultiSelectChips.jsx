import React, { useState } from 'react'
import Chip from '@material-ui/core/Chip';


export default function MultiSelectChips({chipsData}) {

  const [chipsList, setChipsList] = useState(chipsData)

  const deleteChips = (targetChipKey) => {
    setChipsList((chipsList) => chipsList.filter((chip) => chip.key !== targetChipKey))
  }

  return (
    <div>
      {chipsList && chipsList.map((chip) => {

        return(
          <div key={chip.key}>
            <Chip
              label={chip.label}
              onDelete={deleteChips(chip.key)}
            />
            {/* <div>
              {chip.label}
            </div> */}
          </div>
        )
      })}
      
    </div>
  )
}
