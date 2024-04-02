import { pipe } from "next-route-handler-pipe"
import { NextRequest, NextResponse } from "next/server"
import { logger } from "../middlewares/logger"
import { tokenValidator } from "../middlewares/tokenValidator"

const getAllUsersHandler = (_: NextRequest) => {
  return NextResponse.json({ msg: "Meow meow biralo" })
}

export const GET = pipe(logger, tokenValidator, getAllUsersHandler)
