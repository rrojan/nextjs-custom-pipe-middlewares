import { NextRequest } from "next/server"

export const logger = async (
  req: NextRequest,
  _event: any,
  next: () => any
) => {
  console.info(`\n${req.method} | ${req.url}`)
  return await next()
}
