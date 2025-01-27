import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client"
import { NextResponse } from "next/server";
import { Experience } from "../../../../typings";

const query = groq`*[_type == "experience"] {
  ...,
  technologies[]->
}`;

export async function GET() {
  try {
    const experiences: Experience[] = await client.fetch(query);
    return NextResponse.json({ experiences }, { status: 200 });
  } catch (error) {
    console.error(`GetExperience API:`, error);
    return NextResponse.json(
      { message: `Failed to fetch experiences` },
      { status: 500 }
    );
  }
}