const myHandler = require("../handler")
const FakeContext = require("./fake_context").FakeContext

test("countdown solver will reject longer than 9", done => {

  const context = new FakeContext()
  const request = {pathParameters:{letters:"paccomnyaa"}}
  const callback = (bar, foo) => {

    expect(foo.body).toBe("String too large. 9 letters max")
    expect(foo.statusCode).toEqual(400)
    done()
  }
  myHandler.handler(request, context, callback)

})

//accompany -> accompayn
test("countdown solver will solve  accompany", done => {

  const context = new FakeContext()
  const request = {pathParameters:{letters:"accompayn"}}
  const callback = (bar, foo) => {
    expect(foo.statusCode).toEqual(200)
    expect(foo.body.word).toEqual("accompany")
    expect(foo.body.length).toEqual(9)
    done()
  }
  myHandler.handler(request, context, callback)

})

test("countdown solver will solve abandonde", done => {
  const context = new FakeContext()
  const request = {pathParameters:{letters:"abandonde"}}
  const callback = (bar, foo) => {
    expect(foo.statusCode).toEqual(200)
    expect(foo.body.word).toEqual("abandoned")
    expect(foo.body.length).toEqual(9)
    done()
  }
  myHandler.handler(request, context, callback)

})

test("countdown solver will solve froglegs", done => {
  const context = new FakeContext()
  const request = {pathParameters:{letters:"froglegs"}}
  const callback = (bar, foo) => {
    expect(foo.statusCode).toEqual(200)
    expect(foo.body.word).toEqual("floggers")
    expect(foo.body.length).toEqual(8)
    done()
  }
  myHandler.handler(request, context, callback)

})

test("countdown solver will solve nudefred", done => {

  const context = new FakeContext()
  const request = {pathParameters:{letters:"nudefred"}}
  const callback = (bar, foo) => {
    expect(foo.statusCode).toEqual(200)
    expect(foo.body.word).toEqual("refunded")
    expect(foo.body.length).toEqual(8)    
    done()
  }
  myHandler.handler(request, context, callback)

})

//accompany -> accompayn
test("countdown solver will solve  zulu", done => {

  const context = new FakeContext()
  const request = {pathParameters:{letters:"uulz"}}
  const callback = (bar, foo) => {
    expect(foo.statusCode).toEqual(200)
    expect(foo.body.word).toEqual("zulu")
    expect(foo.body.length).toEqual(4)    
    done()
  }
  myHandler.handler(request, context, callback)

})

test("countdown solver will not find accompany due to lack of c", done => {

  const context = new FakeContext()
  const request = {pathParameters:{letters:"pacomnya"}}
  const callback = (bar, foo) => {
    expect(foo.statusCode).toEqual(200)
    expect(foo.body.word).toEqual("company")
    expect(foo.body.length).toEqual(7)
    done()
  }
  myHandler.handler(request, context, callback)

})

test("countdown solver is not case sensitive", done => {

  const context = new FakeContext()
  const request = {pathParameters:{letters:"PACOMNYA"}}
  const callback = (bar, foo) => {
    expect(foo.statusCode).toEqual(200)
    expect(foo.body.word).toEqual("company")
    expect(foo.body.length).toEqual(7)    
    done()
  }
  myHandler.handler(request, context, callback)

})

test("countdown solver does not break early", done => {

  const context = new FakeContext()
  const request = {pathParameters:{letters:"nnnnksi"}}
  const callback = (bar, foo) => {
    expect(foo.statusCode).toEqual(200)
    expect(foo.body.word).toEqual("kins")
    expect(foo.body.length).toEqual(4)    
    done()
  }
  myHandler.handler(request, context, callback)

})

test("countdown solver finds yell", done => {

  const context = new FakeContext()
  const request = {pathParameters:{letters:"llye"}}
  const callback = (bar, foo) => {
    expect(foo.statusCode).toEqual(200)
    expect(foo.body.word).toEqual("yell")
    expect(foo.body.length).toEqual(4)    
    done()
  }
  myHandler.handler(request, context, callback)

})

test("countdown solver fails gracefully", done => {

  const context = new FakeContext()
  const request = {pathParameters:{letters:"xxxxx"}}
  const callback = (bar, foo) => {
    expect(foo.statusCode).toEqual(204)
    expect(foo.body).toEqual({})
    done()
  }
  myHandler.handler(request, context, callback)

})
