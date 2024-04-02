import { NextRequest, NextResponse } from "next/server"
import crypto from "crypto"

export const tokenValidator = async (
  req: NextRequest,
  _event: any,
  next: () => any
) => {
  const randomBytes = crypto.randomBytes(16).toString("hex")
  console.log("Crypto test: ", randomBytes)

  if (req.nextUrl.searchParams.get("token") === "1234") {
    return await next()
  }

  return NextResponse.json({ error: "Invalid token" }, { status: 401 })
}
