import { Resource } from "./api-lib";

export async function getByResourceAndId<T>(
	resource: Resource,
	id?: number
): Promise<T> {
	try {
		const response = await fetch(
			`https://swapi.dev/api/${resource}/${id > 0 ? id : ""}`
		);
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
		const data: T = await response.json();
		return data;
	} catch (error) {
		console.error(error);
		throw new Error("Failed to fetch data from SWAPI");
	}
}