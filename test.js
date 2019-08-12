const test = require('tape')
const verify = require('.')

const secret = '30291a20-0bd1-4267-9b0f-e6e7b123c0bf'
const payload = '{"id":1,"scheduled_for":"2017-01-31T20:50:02Z","attempt_number":1,"event":{"id":"24934862-d980-46cb-9402-43c81b0cdba6","type":"charge:created","api_version":"2018-03-22","created_at":"2017-01-31T20:49:02Z","data":{"code":"66BEOV2A","name":"The Sovereign Individual","description":"Mastering the Transition to the Information Age","hosted_url":"https://commerce.coinbase.com/charges/66BEOV2A","created_at":"2017-01-31T20:49:02Z","expires_at":"2017-01-31T21:04:02Z","timeline":[{"time":"2017-01-31T20:49:02Z","status":"NEW"}],"metadata":{},"pricing_type":"no_price","payments":[],"addresses":{"bitcoin":"0000000000000000000000000000000000","ethereum":"0x0000000000000000000000000000000000000000","litecoin":"3000000000000000000000000000000000","bitcoincash":"bitcoincash:000000000000000000000000000000000000000000"}}}}'
const headerSignature = '8be7742c7d372f08a6a3224edadf18a22b65fa9e28f3f2de97376cdaa092590d'

const req = {
  body: payload,
  header: headerSignature,
  secret
}

test('sanity', t => {
  t.ok(true)
  t.end()
})

test('pass -- verified', t => {
  const { err, data } = verify(req)
  t.ok(!err)
  t.ok(data)
  t.end()
})

test('fail -- invalid secret key', t => {
  req.secret = 'fail'
  const { err, data } = verify(req)
  t.ok(err)
  t.equals(err.message, 'No signatures found matching the expected signature 8be7742c7d372f08a6a3224edadf18a22b65fa9e28f3f2de97376cdaa092590d for payload {"id":1,"scheduled_for":"2017-01-31T20:50:02Z","attempt_number":1,"event":{"id":"24934862-d980-46cb-9402-43c81b0cdba6","type":"charge:created","api_version":"2018-03-22","created_at":"2017-01-31T20:49:02Z","data":{"code":"66BEOV2A","name":"The Sovereign Individual","description":"Mastering the Transition to the Information Age","hosted_url":"https://commerce.coinbase.com/charges/66BEOV2A","created_at":"2017-01-31T20:49:02Z","expires_at":"2017-01-31T21:04:02Z","timeline":[{"time":"2017-01-31T20:49:02Z","status":"NEW"}],"metadata":{},"pricing_type":"no_price","payments":[],"addresses":{"bitcoin":"0000000000000000000000000000000000","ethereum":"0x0000000000000000000000000000000000000000","litecoin":"3000000000000000000000000000000000","bitcoincash":"bitcoincash:000000000000000000000000000000000000000000"}}}}')
  t.ok(!data)
  t.end()
})
