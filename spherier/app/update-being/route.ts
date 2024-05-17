import type { Being } from '~/src/types'
import updateBeing from '~/src/api/updateBeing'

export async function POST(request: Request) {
  const being = await request.json() as Being

  await updateBeing(being)

  return Response.json(true)
}
