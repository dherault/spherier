import readBeings from '~/src/api/readBeings'
import BeingsProvider from '~/src/components/BeingsProvider'
import AddBeingButton from '~/src/components/AddBeingButton'
import Graph from '~/src/components/Graph'

export default async function Home() {
  const data = await readBeings()

  return (
    <BeingsProvider initialData={data}>
      <div
        style={{
          position: 'absolute',
          top: 16,
          right: 16,
        }}
      >
        <AddBeingButton />
      </div>
      <Graph />
    </BeingsProvider>
  )
}
