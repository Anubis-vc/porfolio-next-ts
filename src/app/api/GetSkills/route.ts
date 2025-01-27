import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client"
import { NextRequest, NextResponse } from "next/server";
import { Skill } from "../../../../typings";

const query = groq`*[_type == "skill"]`;

export async function GET(request: NextRequest) {
  try {
    const skills: Skill[] = await client.fetch(query);
    return NextResponse.json({ skills }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch skills' }, 
      { status: 500 }
    );
  }
}