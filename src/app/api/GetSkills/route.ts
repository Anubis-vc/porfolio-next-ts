import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client"
import { NextResponse } from "next/server";
import { SkillType } from "../../../../typings";

const query = groq`*[_type == "skill"]`;

export async function GET() {
  try {
    const skills: SkillType[] = await client.fetch(query);
    return NextResponse.json({ skills }, { status: 200 });
  } catch (error) {
    console.error(`GetSkills API:`, error);
    return NextResponse.json(
      { message: `Failed to fetch Skills` },
      { status: 500 }
    );
  }
}