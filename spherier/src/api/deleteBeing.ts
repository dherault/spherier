import { google } from 'googleapis'

async function deleteBeing(id: string) {
  const auth = await google.auth.getClient({
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const sheets = google.sheets({ version: 'v4', auth })

  await sheets.spreadsheets.values.clear({
    spreadsheetId: process.env.SHEET_ID,
    range: `Sheet1!A${id}:E${id}`,
  })
}

export default deleteBeing
