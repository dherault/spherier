import { google } from 'googleapis'

import AddBeingButton from '~/src/components/AddBeingButton'
import type { Being } from '~/src/types'

async function getData() {
  try {
    const auth = await google.auth.getClient({
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    })

    const sheets = google.sheets({ version: 'v4', auth })

    const range = 'Sheet1!A2:E100'
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID,
      range,
    })

    return response.data.values?.map(([name, x, y, color, info], index) => ({
      index,
      name,
      x: Number(x),
      y: Number(y),
      color,
      info,
    })) ?? []
  }
  catch (error) {
    console.error(error)

    return []
  }
}

export default async function Home() {
  const data = await getData() as Being[]

  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: 16,
          right: 16,
        }}
      >
        <AddBeingButton nextIndex={data.length} />
      </div>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </>
  )
}
