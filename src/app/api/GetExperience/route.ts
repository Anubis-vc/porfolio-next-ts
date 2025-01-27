import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client"
import { NextRequest, NextResponse } from "next/server";
import { Experience } from "../../../../typings";

const query = groq`*[_type == "experience"] {
  ...,
  technologies[]->
}`;

export async function GET(request: NextRequest) {
  try {
    const experiences: Experience[] = await client.fetch(query);
    return NextResponse.json({ experiences }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch experiences' }, 
      { status: 500 }
    );
  }
}