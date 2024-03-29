import { NextRequest, NextResponse } from "next/server";
import { MovieData } from "@/app/api/data";

export async function GET(request: NextRequest, response: NextResponse) {
  return NextResponse.json(MovieData, { status: 200 });
}
