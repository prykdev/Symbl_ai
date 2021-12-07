import axios from 'axios'

let { data } = await axios({
  method: 'GET',
  url: 'https://jsonplaceholder.typicode.com/users'
})

data = data.sort((a, b) => a.id - b.id)

data.forEach(({id, name}) => {
  console.log(`[${id}] ${name}`)
})
