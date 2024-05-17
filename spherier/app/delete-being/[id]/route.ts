import deleteBeing from '~/src/api/deleteBeing'

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  await deleteBeing(params.id)

  return Response.json(true)
}
