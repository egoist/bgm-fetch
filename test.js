import test from 'ava'
import bgm from './src/index'

test('main', async t => {
  const data = await bgm({
    year: 2017,
    season: 4,
    format: true
  })
  t.is(data[6][1].title, '進撃の巨人 Season2')
})
