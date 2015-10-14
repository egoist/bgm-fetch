const bgm = require('./')
const should = require('should')
const promised = require('should-promised')

describe('bmg', () => {
  it('should return BGMs', () => {
    bgm
      .get(1510)
      .should.be.fulfilled()
  })

  it('should be rejected', () => {
    bgm
      .get(151)
      .should.be.rejected()
  })
})