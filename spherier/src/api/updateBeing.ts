import { google } from 'googleapis'

import type { Being } from '~/src/types'

async function updateBeing(being: Being) {
  const auth = await google.auth.getClient({
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const sheets = google.sheets({ version: 'v4', auth })

  await sheets.spreadsheets.values.update({
    spreadsheetId: process.env.SHEET_ID,
    range: `Sheet1!A${being.id}:E${being.id}`,
    valueInputOption: 'RAW',
    requestBody: {
      values: [[
        being.name,
        being.x,
        being.y,
        being.color,
        being.info,
      ]],
    },
  })
}

export default updateBeing
