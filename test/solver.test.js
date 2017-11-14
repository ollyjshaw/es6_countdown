const myHandler = require('../handler')
const FakeContex = require('./fake_context').FakeContext

test('countdown solver will reject longer than 9', done => {

  const contex = new FakeContex()
  const request = {pathParameters:{letters:'paccomnyaa'}}
  const callback = (bar, foo) => {

    expect(foo.body).toBe('String too large. 9 letters max')
    expect(foo.statusCode).toBe(400)
    done()
  }
  myHandler.handler(request, contex, callback)

})

//accompany -> accompayn
test('countdown solver will solve  accompany', done => {

  const contex = new FakeContex()
  const request = {pathParameters:{letters:'accompayn'}}
  const callback = (bar, foo) => {
    expect(foo.body).toBe('accompany')
    done()
  }
  myHandler.handler(request, contex, callback)

})

test('countdown solver will solve nudefred', done => {

  const contex = new FakeContex()
  const request = {pathParameters:{letters:'nudefred'}}
  const callback = (bar, foo) => {
    expect(foo.body).toBe('refunded')
    done()
  }
  myHandler.handler(request, contex, callback)

})

//accompany -> accompayn
test('countdown solver will solve  zulu', done => {

  const contex = new FakeContex()
  const request = {pathParameters:{letters:'uulz'}}
  const callback = (bar, foo) => {
    expect(foo.body).toBe('zulu')
    done()
  }
  myHandler.handler(request, contex, callback)

})

test('countdown solver will not find accompany due to lack of c', done => {

  const contex = new FakeContex()
  const request = {pathParameters:{letters:'pacomnya'}}
  const callback = (bar, foo) => {
    expect(foo.body).toBe('company')
    done()
  }
  myHandler.handler(request, contex, callback)

})

test('countdown solver is not case sensitive', done => {

  const contex = new FakeContex()
  const request = {pathParameters:{letters:'PACOMNYA'}}
  const callback = (bar, foo) => {
    expect(foo.body).toBe('company')
    done()
  }
  myHandler.handler(request, contex, callback)

})

test('countdown solver does not break early', done => {

  const contex = new FakeContex()
  const request = {pathParameters:{letters:'nnnnksi'}}
  const callback = (bar, foo) => {
    expect(foo.body).toBe('kins')
    done()
  }
  myHandler.handler(request, contex, callback)

})

test('countdown solver finds yell', done => {

  const contex = new FakeContex()
  const request = {pathParameters:{letters:'llye'}}
  const callback = (bar, foo) => {
    expect(foo.body).toBe('yell')
    done()
  }
  myHandler.handler(request, contex, callback)

})

test('countdown solver fails gracefully', done => {

  const contex = new FakeContex()
  const request = {pathParameters:{letters:'xxxxx'}}
  const callback = (bar, foo) => {
    expect(foo.statusCode).toBe(200)
    expect(foo.body).toBe('No match found')
    done()
  }
  myHandler.handler(request, contex, callback)

})