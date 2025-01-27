import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client"
import { NextResponse } from "next/server";
import { Project } from "../../../../typings";

const query = groq`*[_type == "project"] | order(priority asc){
  ...,
  technologies[]->
}`;

export async function GET() {
  try {
    const projects: Project[] = await client.fetch(query);
    return NextResponse.json({ projects }, { status: 200 });
  } catch (error) {
    console.error(`GetProjects API:`, error);
    return NextResponse.json(
      { message: `Failed to fetch Projects` },
      { status: 500 }
    );
  }
}