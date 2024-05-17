import { google } from 'googleapis'

import AddBeingButton from '~/src/components/AddBeingButton'

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

    return response.data.values
  }
  catch (error) {
    console.error(error)

    return []
  }
}

export default async function Home() {
  const data = await getData()

  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: 16,
          right: 16,
        }}
      >
        <AddBeingButton />
      </div>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </>
  )
}
