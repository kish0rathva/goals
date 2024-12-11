# Factory Pattern

## Overview
The Factory pattern provides an interface for creating objects in a superclass, allowing subclasses to alter the type of objects created.

## Real-World Example
Consider a logistics management system where you need to create different types of transportation (truck, ship, aircraft) based on the delivery requirements.

## Key Characteristics
- Encapsulates object creation logic
- Provides flexibility in object creation
- Promotes loose coupling
- Simplifies adding new object types

## Use Cases
- Creating different types of UI elements
- Generating different database connections
- Implementing cross-platform UI frameworks
- Payment gateway integrations


---


### **Factory Pattern in Real-World Libraries**
**Example: React's `createElement`**
- React's `React.createElement` acts as a Factory method to create elements based on type and props.

#### Code:
```javascript
import React from 'react';

const element = React.createElement(
  'button',
  { className: 'btn', onClick: () => alert('Clicked!') },
  'Click Me'
);

console.log(element);
/*
Output:
{
  type: 'button',
  props: { className: 'btn', onClick: [Function], children: 'Click Me' },
  key: null,
  ref: null
}
*/
```
---
