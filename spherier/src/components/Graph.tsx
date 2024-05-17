'use client'

import useBeings from '~/src/hooks/useBeings'

function Graph() {
  const { beings } = useBeings()

  return (
    <pre>
      {JSON.stringify(beings, null, 2)}
    </pre>
  )
}

export default Graph
