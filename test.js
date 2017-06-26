import test from 'ava'
import bgm from './src/index'

test('main', async t => {
  const data = await bgm({
    year: 2015,
    season: 7,
    format: true
  })
  t.is(data[6][0].title, '戦姫絶唱シンフォギアGX')
})
