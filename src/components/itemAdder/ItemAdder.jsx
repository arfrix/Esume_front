import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './ItemAdder.scss'

export default function ItemAdder() {
  const [stack, setstack] = useState(null)
  return (
    <div className="ItemAdder__main">
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="contained" color="primary">
        ثبت
      </Button>
    </div>
  )
}
