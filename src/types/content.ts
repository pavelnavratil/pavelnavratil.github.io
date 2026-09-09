export interface ProjectEntry {
	name: string;
	description: string;
	image: string;
	url: string;
}

export interface WorkEntry {
	dates: string;
	company: string;
	name: string;
	description: string;
	image: string;
}

export interface CertificationEntry {
	name: string;
	description: string;
	credentialBadge: string;
	credentialUrl: string;
	issueDate: string;
	category: string;
	retiringOn?: string;
}

export interface ExperienceEntry {
	dates: string;
	role: string;
	company: string;
	description: string;
	logo?: string;
}
