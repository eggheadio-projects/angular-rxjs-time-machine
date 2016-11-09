# Handling Click Events with Subjects

## Summary
While Angular 2 usually uses event handlers to manage events and RxJS typically uses Observable.fromEvent, a good practice when using Angular 2 and RxJS combined is to use Subjects and push the value through each event so that you can use it as part of your stream.

## Plunker
This code can be found on [Plunker](https://embed.plnkr.co/github/eggheadio-projects/egghead-wikipedia-demo/angular-2-handling-click-events-with-subjects?preview=plnkr.html&show=src%2Fapp%2Fapp.component.ts,preview)