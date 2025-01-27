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

export interface Skill extends SanityBody {
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
	technologies: Skill[];
}

export interface Experience extends SanityBody {
	_type: "experience";
	companyImg: Image;
	company: string;
	dateStarted: Date; // uppercase or lowercase d?
	dateEnded: Date;
	isCurrentJob: boolean;
	jobTitle: string;
	technologies: Skill[];
	points: string[];
}

export interface Social extends SanityBody {
	_type: "social";
	title: string;
	url: string;
}