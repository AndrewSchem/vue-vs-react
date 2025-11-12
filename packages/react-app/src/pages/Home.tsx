import { useEffect, useState } from 'react'
import DisplayCount from '../components/DisplayCount'

type Pokemon = {
  name: string
  weight: number
}

export default function Home() {
  const [data, setData] = useState<Pokemon>()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>()

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')

        if (!res.ok) throw new Error('Network Error')
        setData(await res.json())
      } catch (e: any) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <h1>Home</h1>

      {loading && <h1>Loading...</h1>}
      {error && <p style={{ color: 'red' }}> {error}</p>}
      {data && (
        <p>
          <h3>Pokemon</h3>

          <h5 style={{ color: 'green' }}> Name: {data.name}</h5>
          <h5 style={{ color: 'green' }}> Weight: {data.weight}</h5>
        </p>
      )}

      {/* <h4 style="color: red:">{error}</h4>
      <h1 style="color: green:">{data}</h1> */}

      <DisplayCount />
    </>
  )
}
