import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client"
import { NextRequest, NextResponse } from "next/server";
import { Social } from "../../../../typings";

const query = groq`*[_type == "social"]`;

export async function GET(request: NextRequest) {
  try {
    const socials: Social[] = await client.fetch(query);
    return NextResponse.json({ socials }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch socials' }, 
      { status: 500 }
    );
  }
}