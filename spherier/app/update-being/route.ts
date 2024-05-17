import path from 'node:path'

import { google } from 'googleapis'

import type { Being } from '~/src/types'

export async function POST(request: Request) {
  const data = await request.json() as Being

  const auth = await google.auth.getClient({
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const sheets = google.sheets({ version: 'v4', auth })

  await sheets.spreadsheets.values.update({
    spreadsheetId: process.env.SHEET_ID,
    range: `Sheet1!A${data.id}:E${data.id}`,
    valueInputOption: 'RAW',
    requestBody: {
      values: [[
        data.name,
        data.x,
        data.y,
        data.color,
        data.info,
      ]],
    },
  })

  return Response.json(true)
}
