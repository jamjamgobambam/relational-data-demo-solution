const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000
const router = require('./config/routes')

app.use(express.json())
app.use('/api', router)

app.get('/', (req, res) => {
  res.send('<h1>Virtual Hair Salon API 💈</h1>')
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})