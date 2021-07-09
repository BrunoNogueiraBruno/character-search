import axios from 'axios'
import mocked from './mocked.json'

const shouldMock = true
export const getAllCharacters = async () => {
  const url = 'https://gateway.marvel.com:443/v1/public/characters'
  const publicKey = 'bf0152d03dadfc9ac734e2c2e29f90f9'
  const md5Hash = '101765d6cb497a71fcb55f0bfc27fd85'

  const endpoint = `${url}?ts=12&apikey=${publicKey}&hash=${md5Hash}`
  const request = shouldMock ? mocked : axios.get(endpoint)

  try {
    const result = (await request).data.data.results
    return result

  } catch (err) {
    console.error(err)
  }
}