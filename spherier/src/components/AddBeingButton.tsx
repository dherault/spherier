'use client'

import Button from '@mui/material/Button'
import { useCallback } from 'react'
import useBeings from '~/src/hooks/useBeings'

function AddBeingButton() {
  const { createBeing } = useBeings()

  return (
    <Button
      variant="contained"
      onClick={createBeing}
    >
      Add being
    </Button>
  )
}

export default AddBeingButton
