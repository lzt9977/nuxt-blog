import axios from 'axios'

const fetch = (url, data = {}, token = '') => {
  const baseUrl = 'http://localhost:3000'
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: baseUrl + url,
      data: data,
      dataType: 'json',
      headers: {
        'Content-Type': 'application/json',
        'token': token,
      },
    }).then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}

export default fetch
