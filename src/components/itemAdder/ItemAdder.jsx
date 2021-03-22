import React from 'react'
import Button from '@material-ui/core/Button';


export default function ItemAdder() {
  const [stack, setstack] = useState(null)
  return (
    <div>
      <Button variant="contained" color="primary">
        ثبت
      </Button>
    </div>
  )
}
