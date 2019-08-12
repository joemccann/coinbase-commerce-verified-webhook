const { Webhook } = require('coinbase-commerce-node')

//
// Assumes a request object with a stringified body, the
// `X-CC-Webhook-Signature` header, and your Coinbase Commerce
// secret.
//
module.exports = (req) => {
  const {
    body,
    header,
    secret
  } = req

  if (!body) return { err: new Error('No body.') }
  if (!header) return { err: new Error('No header.') }
  if (!secret) return { err: new Error('No secret.') }

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
