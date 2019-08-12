# SYNOPSIS

🔒 Verify incoming requests are verified/signed requests from Coinbase Commerce.

## USAGE

```sh
npm i -S joemccann/coinbase-commerce-verified-webhook
```

Then in your node.js app:

```js
const verify = require('coinbase-commerce-verified-webhook')

//
// Mock incoming request object...
//
const req = {
  body: payload,
  header: headerSignature,
  secret
}

const { err, data } = verify(req)
if (err) return console.log(err)
return console.log(data) // Return value below

/*

{
  id: '24934862-d980-46cb-9402-43c81b0cdba6',
  type: 'charge:created',
  api_version: '2018-03-22',
  created_at: '2017-01-31T20:49:02Z',
  data:
   { code: '66BEOV2A',
     name: 'The Sovereign Individual',
     description: 'Mastering the Transition to the Information Age',
     hosted_url: 'https://commerce.coinbase.com/charges/66BEOV2A',
     created_at: '2017-01-31T20:49:02Z',
     expires_at: '2017-01-31T21:04:02Z',
     timeline: [ [Object] ],
     metadata: {},
     pricing_type: 'no_price',
     payments: [],
     addresses:
      { bitcoin: '0000000000000000000000000000000000',
        ethereum: '0x0000000000000000000000000000000000000000',
        litecoin: '3000000000000000000000000000000000',
        bitcoincash: 'bitcoincash:000000000000000000000000000000000000000000' 
      }
    }
}
*/
```

## AUTHORS

- [Joe McCann](https://twitter.com/joemccann)

## LICENSE

MIT
