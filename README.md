# DateRanges

a small function to format date ranges like "1.may - 10.may"

takes an array of **ISO** dates, or an array of objects with a `date:` property
and returns an array of arrays with date objects.

Ranges always have two elements [0] = start, [1] = end
arrays with only one element are induvidual dates that has no range

Array()

> ['2020-01-10','2020-01-11','2020-01-12'] => [[Date("2020-01-10"),Date("2020-01-12")]]

Array(Objects)

> [{date:'2020-01-10'},{date:'2020-01-11'},>{date:'2020-01-12'},] => [[Date("2020-01-10"),Date("2020-01-12")]]

Array() with induvidual dates

> ['2020-01-10','2020-01-08','2020-01-11','2020-01-12'] => [[Date("2020-01-08")],[Date("2020-01-10"),Date("2020-01-12")]]
