// Takes an array of dates or objects with a valid "date" property.
// Sorts and finds consecutive days and groups them together
// returns an array of arrays containing Date objects
// array length is either 1 (induvidual date) or 2 (range)
//
//  array[
//      [ start, end ],
//      [ induvidual ],
//      [ start, end ] ,
// ]
//
//NB! use ISO format  yyyy-mm-dd  (not use slash / )!

const findDateRanges = (dates = []) => {
  if (dates.length < 1) return []

  // quick check to see of array is pure, or contains objects
  const hasObjects = typeof dates[0] === 'object'

  // compares two dates and returns true/false based on the parameter
  // "n" whick is the number of days between you want to check for
  const dayDiff = (a, b, n) =>
    Math.round(Math.abs(a - b) / 1000 / 60 / 60 / 24) === n

  // Convert dates to an array of timestamps.
  // Sorts timestamps
  const sorted = dates
    .map((x) => new Date(hasObjects ? x.date : x).getTime())
    .sort((a, b) => a - b)

  // This is still a quick and VERY dirty string comp.
  // but it works for now
  return sorted
    .reduce((acc, cur, i, v) => {
      let next = v[i + 1]
      let prev = v[i - 1]

      if (!dayDiff(next, cur, 1) && !dayDiff(prev, cur, 1))
        return `${acc}|${cur}|`
      if (!dayDiff(next, cur, 1)) return `${acc}..${cur}`
      if (!dayDiff(prev, cur, 1)) return `${acc}|${cur}..`
      return acc
    }, '')
    .split('|')
    .filter((x) => x !== '')
    .map((x) => x.split('....').map((y) => new Date(+y)))
}

module.exports = findDateRanges
