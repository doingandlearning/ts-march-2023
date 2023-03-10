import { Resource, SwapiSpecies } from "../util/api-lib";


export default function DataDisplay({ resource, data = [] }: { resource: Resource, data: Resource[] }) {
	console.log(data); console.log("resource", resource)

	return <div>
		<h1>SWAPI Results:</h1>
		<ul>
			{data.map((result, index) => (
				<li key={index}>
					<a href={result.url}>{result.name}</a>
				</li>
			))}
		</ul>
	</div>
}
