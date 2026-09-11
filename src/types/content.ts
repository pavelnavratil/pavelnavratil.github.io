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
	issuingOrg: string;
	credentialNo: string;
	category: string;
	/** Retirement month as `YYYY-MM`; empty when the certification has no end date. */
	retiringOn?: string;
}

export interface ExperienceEntry {
	dates: string;
	role: string;
	company: string;
	description: string;
}
