describe('My First Test', () => {
  it('Doesnt do much, but everything it should be!', () => {
    expect(true).to.equal(true)
  })
})

describe('My First Failing Test', () => {
  it('Fail Fail Fail!', () => {
    expect(false).to.equal(true)
  })
})
