const cron = require('node-cron')
const SearchService = require('./src/services/SearchService')

const express = require('express')
const app = express()
const port = 3000

const queries = [
  '삼다수',
  '삼다수2L',
  '삼다수2L12개',
  '삼다수2L6개',
  '삼다수500',
  '삼다수500ML',
  '삼다수500ML20개',
  '삼다수500ML40개',
]
const catalogs = [
  '27965424524',
  '5638876776',
  '28856087586',
  '31036822620',
  '5752848813',
  '23645048490',
]

// Schedule cron jobs
cron.schedule(
  '0 7-23,0-1 * * *',
  async () => {
    console.log('Running cron job')

    try {
      const productData = await SearchService?.crawlProductData(queries)
      const catalogData = await SearchService?.crawlCatalogData(catalogs)
      console.log('Product Data:', productData)
      console.log('Catalog Data:', catalogData)
    } catch (err) {
      console.error('Error in test cron job:', err)
    }

    console.log('Cron job ended')
  },
  {
    scheduled: true,
    timezone: 'Asia/Seoul',
  }
)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server running at ${port}`)
})
