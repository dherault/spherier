import { google } from 'googleapis'

import type { Being } from '~/src/types'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  const data = await request.json() as Being

  const auth = await google.auth.getClient({
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  })

  const sheets = google.sheets({ version: 'v4', auth })

  const result = await sheets.spreadsheets.values.update({
    spreadsheetId: process.env.SHEET_ID,
    range: `Sheet1!A${data.index + 1}:E${data.index + 1}`,
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

  return Response.json(result.data.updatedData)
}
