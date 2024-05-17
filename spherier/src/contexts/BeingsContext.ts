'use client'

import { createContext } from 'react';
import { Being } from '~/src/types';

type BeingsContextType = {
  beings: Being[]
  createBeing: () => void
  updateBeing: (being: Being) => void
  deleteBeing: (index: number) => void
}

export default createContext<BeingsContextType>({
  beings: [],
  createBeing: () => {},
  updateBeing: () => {},
  deleteBeing: () => {},
})
