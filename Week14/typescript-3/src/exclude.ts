// In a function that can accept several types of inputs but you want to exclude specific types from being passed to it.
// for that we use 'Exclude'.

type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<EventType, 'scroll'>;       // now it works only for 'click' | 'mousemove'

const eventHandler = (event: ExcludeEvent) => {
    console.log(`Handling event: ${event}`);
}

eventHandler("click");  //ok
eventHandler("mousemove");  //ok
// eventHandler("scroll");  //error