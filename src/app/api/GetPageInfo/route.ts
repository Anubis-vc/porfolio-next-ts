import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client"
import { NextResponse } from "next/server";
import { PageInfo } from "../../../../typings";

const query = groq`*[_type == "pageInfo"][0] {
  ...,
  socials[]->
}`;

export async function GET() {
  try {
    const pageInfo: PageInfo = await client.fetch(query);
    return NextResponse.json({ pageInfo }, { status: 200 });
  } catch (error) {
    console.error(`GetPageInfo API:`, error);
    return NextResponse.json(
      { message: `Failed to fetch Page Info` },
      { status: 500 }
    );
  }
}