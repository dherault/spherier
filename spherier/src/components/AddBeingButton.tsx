'use client'

import Button from '@mui/material/Button'
import { useCallback } from 'react'

function AddBeingButton() {
  const handleAdd = useCallback(async () => {
    await fetch('/create-being', {
      method: 'POST',
      body: JSON.stringify({
        name: 'New being',
        x: 0,
        y: 0,
        color: '#ffffff',
        info: '',
      }),
    })
  }, [])

  return (
    <Button
      variant="contained"
      onClick={handleAdd}
    >
      Add being
    </Button>
  )
}

export default AddBeingButton
