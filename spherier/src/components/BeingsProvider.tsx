'use client'

import { type PropsWithChildren, useCallback, useMemo, useState } from 'react'

import BeingsContext from '~/src/contexts/BeingsContext'
import { Being } from '~/src/types'

type Props = PropsWithChildren<{
  initialData: Being[]
}>

function BeingsProvider({ initialData, children }: Props) {
  const [beings, setBeings] = useState<Being[]>(initialData)

  const createBeing = useCallback(() => {
    const being: Being = {
      id: (beings.at(-1)?.id ?? 1) + 1,
      name: 'New being',
      x: 0,
      y: 0,
      color: '#ffffff',
      info: '',
    }

    fetch('/update-being', {
      method: 'POST',
      body: JSON.stringify(being),
    })

    setBeings(x => [...x, being])
  }, [beings])

  const updateBeing = useCallback((being: Being) => {
    fetch('/update-being', {
      method: 'POST',
      body: JSON.stringify(being),
    })

    setBeings(x => x.map(y => y.id === being.id ? being : y))
  }, [])

  const deleteBeing = useCallback((id: number) => {
    fetch(`/delete-being/${id}`, {
      method: 'DELETE',
    })

    setBeings(x => x.map(y => y.id === id ? null : y).filter(Boolean) as Being[])
  }, [])

  const BeingsContextValue = useMemo(() => ({
    beings,
    createBeing,
    updateBeing,
    deleteBeing,
  }), [beings, createBeing, updateBeing, deleteBeing])

  return (
    <BeingsContext.Provider value={BeingsContextValue}>
      {children}
    </BeingsContext.Provider>
  )
}

export default BeingsProvider
