// hijri data api
export async function fetchHijriDate() {
  const data = fetch(process.env.NEXT_PUBLIC_HIJRI_DATE_API)
    .then((res) => res.json())
  return data
}
// gold and silver data
export async function getApiData() {
  const myHeaders = new Headers()

  myHeaders.append('x-access-token', process.env.NEXT_PUBLIC_API_KEY)
  myHeaders.append('Content-Type', 'application/json')

  const requestOption = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  }
  const url = [
    process.env.NEXT_PUBLIC_GOLD_URL,
    process.env.NEXT_PUBLIC_SILVER_URL,
    process.env.NEXT_PUBLIC_SILVER_URL_USD,
    process.env.NEXT_PUBLIC_GOLD_URL_USD
  ]
  //Fetch url from array
  //map() calls function once for each element in array
  const response =  Promise.all(url.map((url) => fetch(url, requestOption).then((res) => res.json())))
  const data = await response 
  return data
}