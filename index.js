require('dotenv').config()
const { Webhook } = require('coinbase-commerce-node')
const WEBHOOK_SECRET = process.env.COINBASE_COMMERCE_WEBHOOK_SECRET

//
// Assumes a request object with a stringified body and header as
// the `X-CC-Webhook-Signature` header value.
//
module.exports = (req) => {
  const {
    body,
    header,
    secret = WEBHOOK_SECRET
  } = req

  let data = null

  try {
    data = Webhook.verifyEventBody(
      body,
      header,
      secret
    )
    return { data }
  } catch (err) {
    return { err }
  }
}
