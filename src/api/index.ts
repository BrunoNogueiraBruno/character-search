import axios from 'axios'
export const getAllCharacters = async () => {
  const url = 'https://gateway.marvel.com:443/v1/public/characters'
  const publicKey = '3d532eea33b732649bf27500b91e67af'
  const md5Hash = '47abdeaf65755dbac3c6a20605673de6'

  // const endpoint = `${url}?ts=1&apikey=${publicKey}&hash=${md5Hash}`
  const endpoint = 'https://gateway.marvel.com/v1/public/characters?ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b'

  try {
    const result = (await axios.get(endpoint)).data.data.results
    return result

  } catch (err) {
    console.error(err)
  }
}