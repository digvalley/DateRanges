# DateRanges

a small function to format date ranges like "1.may - 10.may"

takes an array of **ISO** dates, or an array of objects with a `date:` property
and returns an array of arrays with date objects.

Ranges always have two elements [0] = start, [1] = end
arrays with only one element are induvidual dates that has no range

**Array()**

```js
['2020-01-10','2020-01-11','2020-01-12']
    => [
         [
          Date("2020-01-10"), //start
          Date("2020-01-12")  //end
          ]
       ]
```

**Array(Objects)**

```js
[{date:'2020-01-10'},{date:'2020-01-11'},{date:'2020-01-12'},]
  => [
         [
          Date("2020-01-10"), //start
          Date("2020-01-12")  //end
          ]
       ]
```

**Array() with induvidual dates**

```js
['2020-01-10','2020-01-08','2020-01-11','2020-01-12']
    => [
        [ Date("2020-01-08") ], // induvidual
        [ Date("2020-01-10"),Date("2020-01-12")] //start, end
    ]
```

### Example
```jsx
import React from 'react'
import { format } from 'date-fns'
import FDR from './PATH'

const dates = ['2020-05-01','2020-05-02','2020-05-03','2020-05-07,'2020-05-08']
const dateRanges = FDR(dates)

const MyFuncComp = ()=>(
    <ul>
    {
        dateRanges.map(x=> 
            <li>
            {  format(x[0], 'dd/MM')  } 
            {  x[1] && ' - ' + format(x[1], 'dd/MM')  }
            </li>)
    }
    </ul>
)

```

output 
```html
<ul>
    <li>1.May - 5. May</li>
    <li>7.May - 8. May</li>
</ul>
```
