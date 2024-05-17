import { google } from 'googleapis'

import type { Being } from '~/src/types'

async function readBeings() {
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
      ?.map(([name, x, y, color, info], index) => ({
        id: index + 2,
        name,
        x: Number(x),
        y: Number(y),
        color,
        info,
      }) as Being)
      .filter(being => being.name) ?? []
  }
  catch (error) {
    console.error(error)

    return []
  }
}

export default readBeings
