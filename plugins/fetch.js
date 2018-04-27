import axios from 'axios'

const fetch = (url, data = {}, token = '') => {
  const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'http://115.159.104.224'
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: baseUrl + url,
      data: data,
      dataType: 'json',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }).then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}

export default fetch
