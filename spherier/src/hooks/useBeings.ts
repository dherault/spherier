'use client'

import { useContext } from 'react';
import DataContext from '~/src/contexts/BeingsContext';

function useBeings() {
  return useContext(DataContext)
}

export default useBeings
