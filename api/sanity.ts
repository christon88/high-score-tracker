const sanityClient = require('@sanity/client')
import { Game } from '../models/models'
import { SANITY_TOKEN } from '@env'

const client = sanityClient({
  projectId: '1rr7zxfm',
  dataset: 'production',
  token: SANITY_TOKEN,
  useCdn: false,
})

export async function getGames(): Promise<Game[]> {
  const query = `*[_type == "game"]`

  const games = await client.fetch(query)

  return games
}
