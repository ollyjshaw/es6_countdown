const myHandler = require('../src/handler')

//accompany -> accompayn
test('countdown solver will solve  pacomnya', done => {

  const contex = {}
  const request = {pathParameters:{letters:'accompayn'}}
  const callback = (bar, foo) => {
    expect(foo.body).toBe('accompany')
    done()
  }
  myHandler.handler(request, contex, callback)

})

//accompany -> accompayn
test('countdown solver will solve  uulz', done => {

  const contex = {}
  const request = {pathParameters:{letters:'uulz'}}
  const callback = (bar, foo) => {
    expect(foo.body).toBe('zulu')
    done()
  }
  myHandler.handler(request, contex, callback)

})