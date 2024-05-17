import { google } from 'googleapis';

async function getData() {
  const auth = await google.auth.getClient({
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  })

  const sheets = google.sheets({ version: 'v4', auth })

  const range= 'Sheet1!A2:E100'
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range,
  })

  return {
    props: {
      data: response.data.values,
    },
  }
}

export default async function Home() {
  const data = await getData()

  return (
    <>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </>
  );
}
