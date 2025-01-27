import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client"
import { NextResponse } from "next/server";
import { Social } from "../../../../typings";

const query = groq`*[_type == "social"]`;

export async function GET() {
  try {
    const socials: Social[] = await client.fetch(query);
    return NextResponse.json({ socials }, { status: 200 });
  } catch (error) {
    console.error(`GetSocials API:`, error);
    return NextResponse.json(
      { message: `Failed to fetch Socials` },
      { status: 500 }
    );
  }
}