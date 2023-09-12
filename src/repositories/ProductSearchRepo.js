const client = require('../utils/mongodb')
const { ObjectId } = require('mongodb')

const minute = 1000 * 60
const hour = 1000 * 60 * 60
const day = 1000 * 60 * 60 * 24

class ProductSearchRepo {
  async registerProductData(query, crawledData) {
    const { db } = client
    await db.collection('product_search').insertOne({
      productName: query,
      crawledData: crawledData,
      createdAt: new Date(),
    })
  }
}

module.exports = new ProductSearchRepo()
