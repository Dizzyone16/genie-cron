const client = require('../utils/mongodb')
const { ObjectId } = require('mongodb')

const minute = 1000 * 60
const hour = 1000 * 60 * 60
const day = 1000 * 60 * 60 * 24

class CatalogSearchRepo {
  async registerCatalogData(productNumber, crawledData) {
    const { db } = client
    await db.collection('catalog_search').insertOne({
      productNumber: productNumber,
      crawledData: { ...crawledData, crawledAt: new Date() },
      createdAt: new Date(),
    })
  }
}

module.exports = new CatalogSearchRepo()
