interface SanityBody {
	_createdAt: string;
	_id: string;
	_rev: string;
	_updatedAt: string;
}

interface Image {
	_type: "image";
	asset: {
		_ref: string;
		_type: "reference";
	};
}

export interface PageInfo extends SanityBody {
	_type: "pageInfo";
	address: string;
	backgroundInfo: string;
	email: string;
	role: string;
	heroImage: Image;
	name: string;
	phoneNumber: string;
	profilePic: Image;
}

export interface SkillType extends SanityBody {
	_type: "skill",
	image: Image;
	progress: number;
	title: string;
}

export interface Project extends SanityBody {
	_type: "project";
	title: string;
	link: string;
	summary: string;
	image: Image;
	priority: number;
	technologies: SkillType[];
}

export interface Experience extends SanityBody {
	_type: "experience";
	companyImg: Image;
	company: string;
	dateStarted: date; // uppercase or lowercase d?
	dateEnded: date;
	isCurrentJob: boolean;
	jobTitle: string;
	technologies: SkillType[];
	points: string[];
}

export interface Social extends SanityBody {
	_type: "social";
	title: string;
	url: string;
}

export interface HomeProps {
	pageInfo: PageInfo;
	experiences: Experience[];
	skills: Skill[];
	socials: Social[];
	projects: Project[];
}