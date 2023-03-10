import React from 'react'
import './App.css'
import Dropdown from './components/Dropdown'
import { getByResourceAndId } from './util/api'
import { Resource, SwapiResponse } from './util/api-lib'
import DataDisplay from './components/DataDisplay'

function App() {
  const [id, setId] = React.useState<number>(0)
  const [resource, setResource] = React.useState<Resource>("planets")
  const [data, setData] = React.useState({})

  const handleFetch = async () => {
    const data = await getByResourceAndId<Resource>(resource, id);
    setData(data)
    console.log(data)
  }

  const resourceArray: { value: Resource, label: string }[] = [{ value: "planets", label: "Planets" }, { value: "people", label: "People" }, { value: "species", label: "Species" }, { value: "vehicles", label: "Vehicles" }, { value: "starships", label: "Starships" }]
  return (
    <div className="App">
      <div>

        <Dropdown onChange={e => setResource(e.value)} options={resourceArray} />
        <input value={id} onChange={(e: React.FormEvent<HTMLInputElement>) => setId(e.target.value)} placeholder="Enter id" />
        <button onClick={handleFetch}>Go</button>
      </div>
      <div>
        {Array.isArray(data.results) ? <DataDisplay resource={resource} data={data?.results} /> : JSON.stringify(data)}
      </div>
    </div>
  )
}

export default App
