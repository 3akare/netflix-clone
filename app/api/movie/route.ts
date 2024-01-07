import { NextRequest, NextResponse } from "next/server";
import { MovieData } from "@/app/api/data";

export async function GET(request: NextRequest, response: NextResponse) {
  const random = Math.floor(Math.random() * MovieData.length);
  return NextResponse.json(MovieData[random], { status: 200 });
}
