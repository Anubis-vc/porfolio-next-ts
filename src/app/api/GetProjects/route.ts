import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client"
import { NextRequest, NextResponse } from "next/server";
import { Project } from "../../../../typings";

const query = groq`*[_type == "project"] {
  ...,
  technologies[]->
}`;

export async function GET(request: NextRequest) {
  try {
    const projects: Project[] = await client.fetch(query);
    return NextResponse.json({ projects }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch projects' }, 
      { status: 500 }
    );
  }
}