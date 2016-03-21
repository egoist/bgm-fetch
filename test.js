import test from 'ava'
import bgm from './src/index'

test('main', async t => {
  const data = await bgm('1507', {format: true})
  t.is(data[6][0].titleCN, '名侦探柯南')
})
