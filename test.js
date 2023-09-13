const cron = require('node-cron')
const SearchService = require('./src/services/SearchService')

// Test cron job
async function test() {
  console.log('Testing cron job...')

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

  console.log('Running test job')

  try {
    const productData = await SearchService?.crawlProductData(queries)
    const catalogData = await SearchService?.crawlCatalogData(catalogs)
    console.log('Product Data:', productData)
    console.log('Catalog Data:', catalogData)
  } catch (err) {
    console.error('Error in test cron job:', err)
  }

  console.log('Test job ended')

  // cron.schedule(
  //   '* * * * *',
  //   async () => {
  //     console.log('Running test cron job')

  //     try {
  //       const productData = await SearchService?.crawlProductData(queries)
  //       const catalogData = await SearchService?.crawlCatalogData(catalogs)
  //       console.log('Product Data:', productData)
  //       console.log('Catalog Data:', catalogData)
  //     } catch (err) {
  //       console.error('Error in test cron job:', err)
  //     }

  //     console.log('Test cron job ended')
  //   },
  //   {
  //     scheduled: true,
  //     timezone: 'Asia/Seoul',
  //   }
  // )
}

test()
