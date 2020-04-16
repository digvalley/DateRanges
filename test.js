const test = require('ava')
const FDR = require('.')

const test1 = {
  objects: [
    { date: '2020-04-01' },
    { date: '2020-04-02' },
    { date: '2020-04-03' },
    { date: '2020-04-04' },
  ],

  array: ['2020-04-01', '2020-04-02', '2020-04-03', '2020-04-04'],
}
const test2 = {
  objects: [
    { date: '2020-04-01' },
    { date: '2020-04-02' },
    { date: '2020-04-10' },
    { date: '2020-04-07' },
    { date: '2020-04-03' },
    { date: '2020-04-04' },
  ],

  array: [
    '2020-03-01',
    '2020-04-01',
    '2020-04-02',
    '2020-04-10',
    '2020-04-07',
    '2020-04-03',
    '2020-04-04',
  ],
}
const date = (d) => new Date(d)

test('Basic', (t) => {
  t.deepEqual(FDR(test1.objects), [[date('2020-04-01'), date('2020-04-04')]])
  t.deepEqual(FDR(test1.array), [[date('2020-04-01'), date('2020-04-04')]])
})

test('With induviduals', (t) => {
  t.deepEqual(FDR(test2.objects), [
    [date('2020-04-01'), date('2020-04-04')],
    [date('2020-04-07')],
    [date('2020-04-10')],
  ])
  t.deepEqual(FDR(test2.array), [
    [date('2020-03-01')],
    [date('2020-04-01'), new Date('2020-04-04')],
    [date('2020-04-07')],
    [date('2020-04-10')],
  ])
})
