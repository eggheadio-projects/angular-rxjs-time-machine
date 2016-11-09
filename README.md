# Managing State in RxJS with StartWith and Scan

## Summary
The scan operator in RxJS is the main key to managing values and states in your stream. Scan behaves just as a reduce function would, but scan is able to collect values from streams over time. This lesson covers using startWith to set the initial accumulator value then using scan to update the value of the clock from the clicks and interval.

## Plunker
This code can be found on [Plunker](https://embed.plnkr.co/github/eggheadio-projects/egghead-wikipedia-demo/angular-2-managing-state-in-rxjs-with-startwith-and-scan?preview=plnkr.html&show=src%2Fapp%2Fapp.component.ts,preview)