'use client'

import { useCallback, useMemo } from 'react'
import ReactFlow, {
  type Connection,
  type Edge,
  addEdge,
  useEdgesState,
  useNodesState,
} from 'reactflow'

import 'reactflow/dist/style.css'
import useBeings from '~/src/hooks/useBeings'

function Graph() {

  const { beings } = useBeings()
  const initialNodes = useMemo(() => beings.map(being => ({
    id: being.id.toString(),
    position: { x: being.x, y: being.y },
    data: { label: being.name },
  })), [beings])
  const initialEdges: Edge[] = []

  const [nodes,, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback((params: Edge | Connection) => {
    setEdges(eds => addEdge(params, eds))
  }, [setEdges])

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        proOptions={{
          hideAttribution: true,
        }}
      />
    </div>
  )
}

export default Graph
