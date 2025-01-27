import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client"
import { NextRequest, NextResponse } from "next/server";
import { PageInfo } from "../../../../typings";

const query = groq`*[_type == "pageInfo"][0] {
  ...,
  socials[]->
}`;

export async function GET(request: NextRequest) {
  try {
    const pageInfo: PageInfo = await client.fetch(query);
    return NextResponse.json({ pageInfo }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch page info' }, 
      { status: 500 }
    );
  }
}