import { Social, SkillType, Project, PageInfo, Experience } from "../typings";

export const fetchSocials = async (): Promise<Social[]> => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?
        process.env.NEXT_PUBLIC_BASE_URL :
        process.env.SANITY_STUDIO_BASE_URL;

    try {
        const res = await fetch(`${baseUrl}/api/GetSocials`);

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        const socials: Social[] = data.socials;

        // console.log("fetching", socials);

        return socials;
    } catch (error) {
        console.error("Error fetching socials:", error);
        throw error;
    }
}

const fetchSkills = async (): Promise<SkillType[]> => {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?
	process.env.NEXT_PUBLIC_BASE_URL :
	process.env.SANITY_STUDIO_BASE_URL;

	const res = await fetch(`${baseUrl}/api/GetSkills`);

	const data = await res.json();
	const skills: SkillType[] = data.skills;

	// console.log("fetching", skills);

	return skills;
}

const fetchProjects = async (): Promise<Project[]> => {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?
	process.env.NEXT_PUBLIC_BASE_URL :
	process.env.SANITY_STUDIO_BASE_URL;

	const res = await fetch(`${baseUrl}/api/GetProjects`);

	const data = await res.json();
	const projects: Project[] = data.projects;

	// console.log("fetching", projects);

	return projects;
}

const fetchPageInfo = async (): Promise<PageInfo> => {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?
	process.env.NEXT_PUBLIC_BASE_URL :
	process.env.SANITY_STUDIO_BASE_URL;

	const res = await fetch(`${baseUrl}/api/GetPageInfo`);

	const data = await res.json();
	const pageInfo: PageInfo = data.pageInfo;

	// console.log("fetching", pageInfo);

	return pageInfo;
}

const fetchExperiences = async (): Promise<Experience[]> => {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?
	process.env.NEXT_PUBLIC_BASE_URL :
	process.env.SANITY_STUDIO_BASE_URL;

	const res = await fetch(`${baseUrl}/api/GetExperience`);

	const data = await res.json();
	const experiences: Experience[] = data.experiences;

	// console.log("fetching", experiences);

	return experiences;
}

export async function fetchAllData() {
	const [pageInfo, experiences, skills, socials, projects] = await Promise.all([
		fetchPageInfo(),
		fetchExperiences(),
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
