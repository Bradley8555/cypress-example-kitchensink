require('dotenv').config()

module.exports = {
  projectId: '4b7344',
  allowCypressEnv: true,
  e2e: {
    baseUrl: 'http://localhost:8080',
    env: {
      apiUrl: process.env.API_URL,
      mySecret: process.env.MY_SECRET,
      navbarText: process.env.navbarText,
    },
  },
}
