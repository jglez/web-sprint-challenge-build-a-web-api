// Import Server
const server = require('./api/server.js')

const port = 5000

// Start server
server.listen(port, () => {
  console.log(`GREAT SCOTT, IT'S WORKING!!!`)
  console.log(`Listening to port ${port}`)
  console.log(`------------------------------`)
})
