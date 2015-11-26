import bgm from './'

describe('bmg', () => {
  it('should return BGMs', () => {
    bgm
      .get(1510)
      .should.be.fulfilled()
  })

  it('should opts format ture return format data', done => {
    bgm
      .get(1510, true)
      .then(data => {
        data.should.with.lengthOf(7)
        done()
      })
  })

  it('should be rejected', () => {
    bgm
      .get(151)
      .should.be.rejected()
  })
})
