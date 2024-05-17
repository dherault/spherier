'use client'

import Button from '@mui/material/Button'
import { useCallback } from 'react'

type Props = {
  nextIndex: number
}

function AddBeingButton({ nextIndex }: Props) {
  const handleAdd = useCallback(async () => {
    await fetch('/update-being', {
      method: 'POST',
      body: JSON.stringify({
        index: nextIndex,
        name: 'New being',
        x: 0,
        y: 0,
        color: '#ffffff',
        info: '',
      }),
    })
  }, [nextIndex])

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
