import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { Social, SkillType, Project, PageInfo, Experience } from "../typings";

const fetchWithCache = async <T>(query: string): Promise<T> => {
	return client.fetch(query, {}, { next: { revalidate: 3600 }});
};

const fetchSocials = async (): Promise<Social[]> => {
	// return client.fetch(groq`*[_type == "social"]`);
	return fetchWithCache<Social[]>(groq`*[_type == "social"]`);
};

const fetchExperience = async (): Promise<Experience[]> => {
	// return client.fetch(groq`*[_type == "experience"] {
	// 	...,
	// 	technologies[]->
	//   }`);

	return fetchWithCache<Experience[]>(groq`*[_type == "experience"] {
		...,
		technologies[]->
	  }`);
}

const fetchPageInfo = async (): Promise<PageInfo> => {
	// return client.fetch(groq`*[_type == "pageInfo"][0] {
	// 	...,
	// 	socials[]->
	//   }`);

	return fetchWithCache<PageInfo>(groq`*[_type == "pageInfo"][0] {
	...,
	socials[]->
	}`);
	
}

const fetchProjects = async (): Promise<Project[]> => {
	// return client.fetch(groq`*[_type == "project"] | order(priority asc){
	// 	...,
	// 	technologies[]->
	//   }`);
	return fetchWithCache<Project[]>(groq`*[_type == "project"] | order(priority asc){
		...,
		technologies[]->
	  }`);
}

const fetchSkills = async (): Promise<SkillType[]> => {
	// return client.fetch(groq`*[_type == "skill"]`);
	return fetchWithCache<SkillType[]>(groq`*[_type == "skill"]`);
}

export async function fetchAllData() {
	const [pageInfo, experiences, skills, socials, projects] = await Promise.all([
		fetchPageInfo(),
		fetchExperience(),
		fetchSkills(),
		fetchSocials(),
		fetchProjects(),
	]);

	return {
		pageInfo,
		experiences,
		skills,
		socials,
		projects,
	}
}