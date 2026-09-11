import administrator from "@assets/images/certifications/badges/administrator.png";
import aiAssociate from "@assets/images/certifications/badges/aiassociate.png";
import applicationArchitect from "@assets/images/certifications/badges/applicationarchitect.png";
import dataArchitect from "@assets/images/certifications/badges/dataarchitect.png";
import omnistudioDeveloper from "@assets/images/certifications/badges/omnistudiodeveloper.png";
import platformAppBuilder from "@assets/images/certifications/badges/platformappbuilder.png";
import platformDeveloperI from "@assets/images/certifications/badges/platformdeveloperi.png";
import platformDeveloperII from "@assets/images/certifications/badges/platformdeveloperii.png";
import sharingArchitect from "@assets/images/certifications/badges/sharingandvisibilityarchitect.png";
import eloquentForce from "@assets/images/projects/eloquentforce.png";
import customerSupport from "@assets/images/worked/csui.png";
import merchandiser from "@assets/images/worked/merchandiser.png";
import type { ImageMetadata } from "astro";

const images: Record<string, ImageMetadata> = {
	"/assets/images/projects/eloquentforce.png": eloquentForce,
	"/assets/images/worked/csui.png": customerSupport,
	"/assets/images/worked/merchandiser.png": merchandiser,
	"/assets/images/certifications/badges/administrator.png": administrator,
	"/assets/images/certifications/badges/aiassociate.png": aiAssociate,
	"/assets/images/certifications/badges/applicationarchitect.png":
		applicationArchitect,
	"/assets/images/certifications/badges/dataarchitect.png": dataArchitect,
	"/assets/images/certifications/badges/omnistudiodeveloper.png":
		omnistudioDeveloper,
	"/assets/images/certifications/badges/platformappbuilder.png":
		platformAppBuilder,
	"/assets/images/certifications/badges/platformdeveloperi.png":
		platformDeveloperI,
	"/assets/images/certifications/badges/platformdeveloperii.png":
		platformDeveloperII,
	"/assets/images/certifications/badges/sharingandvisibilityarchitect.png":
		sharingArchitect,
};

export function getImage(path: string): ImageMetadata {
	const image = images[path];
	if (!image) throw new Error(`Unknown image path: ${path}`);
	return image;
}
