'use client'

import { useCallback, useMemo, useState, type PropsWithChildren } from 'react';
import BeingsContext from '~/src/contexts/BeingsContext';
import { Being } from '~/src/types';

type Props = PropsWithChildren<{
  initialData: Being[]
}>

function BeingsProvider({ initialData, children }: Props) {
  const [beings, setBeings] = useState<Being[]>(initialData)

  const createBeing = useCallback(() => {
    const being: Being = {
      id: beings.length + 2,
      name: 'New being',
      x: 0,
      y: 0,
      color: '#ffffff',
      info: '',
    }

    try {
      fetch('/update-being', {
        method: 'POST',
        body: JSON.stringify(being),
      })

      setBeings(x => [...x, being])
    }
    catch (error) {
      console.error(error)
    }
  }, [beings.length])

  const updateBeing = useCallback((being: Being) => {
  },[])

  const deleteBeing = useCallback((index: number) => {
  }, [])

  const BeingsContextValue = useMemo(() => ({
    beings: beings,
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
