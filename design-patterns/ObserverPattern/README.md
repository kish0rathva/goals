# Observer Pattern

## Overview
The Observer pattern defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.

## Real-World Example
Consider a weather monitoring application where multiple displays (temperature display, air conditioner) need to be updated whenever the temperature changes.

## Key Characteristics
- Establishes a publish-subscribe model
- Loose coupling between subject and observers
- Dynamic relationships between objects
- Supports broadcast communication

## Use Cases
- Event handling systems
- User interface updates
- Stock market tracking
- Sensor networks
- Reactive programming

--- 

### Real-World Libraries That Use the Observer Pattern

1. **RxJS**:
   - RxJS is a library for reactive programming.
   - It uses the Observer pattern to manage data streams and asynchronous events.
   - Observers (subscribers) listen to Observables for changes and react accordingly.
   
   Example:
   ```javascript
   const { Observable } = require('rxjs');
   
   const observable = new Observable((subscriber) => {
     subscriber.next('First message');
     subscriber.next('Second message');
     subscriber.complete();
   });

   observable.subscribe({
     next: (message) => console.log(`Received: ${message}`),
     complete: () => console.log('Observable completed'),
   });
   ```

2. **Redux** (Indirectly):
   - Redux's `subscribe` function follows the Observer pattern.
   - Components subscribe to the store for state updates.

   Example:
   ```javascript
   const { createStore } = require('redux');
   
   const reducer = (state = 0, action) => {
     if (action.type === 'INCREMENT') return state + 1;
     return state;
   };
   
   const store = createStore(reducer);

   // Observer: Log state changes
   store.subscribe(() => {
     console.log(`State updated to: ${store.getState()}`);
   });

   store.dispatch({ type: 'INCREMENT' });
   store.dispatch({ type: 'INCREMENT' });
   ```
