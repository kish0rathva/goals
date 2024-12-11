# Singleton Pattern

## Overview
The Singleton pattern ensures a class has only one instance and provides a global point of access to it.

## Real-World Example
Think of a printer spooler in an office. There should only be one print queue manager controlling all print jobs, regardless of how many computers try to print.

## Key Characteristics
- Ensures only one instance of a class is created
- Provides global access to that instance
- Lazy initialization possible
- Thread-safe implementation important

## Use Cases
- Database connections
- Configuration managers
- Logging
- Thread pools
- Caching mechanisms

---
### **Singleton Pattern in Real-World Libraries**
**Example: Redux Store**
- Redux uses the Singleton pattern for its store to ensure there's only one global state management object throughout the app.

#### Code:
```javascript
import { createStore } from 'redux';

const reducer = (state = 0, action) => {
  if (action.type === 'INCREMENT') return state + 1;
  return state;
};

// The store is a Singleton: Only one instance is created.
const store = createStore(reducer);

store.dispatch({ type: 'INCREMENT' });
console.log(store.getState()); // Output: 1
```
---
