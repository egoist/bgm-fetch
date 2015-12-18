import bgm from './src/index'
import { getSeason } from './src/utils'

describe('bmg', () => {
  it('should return BGMs', () => {
    bgm
      .get(1510)
      .should.be.fulfilled()
  })
  it('should return formated data', done => {
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
  it('should return current season', done => {
    const season = getSeason()
    season.length.should.equal(4)
    done()
  })
})
