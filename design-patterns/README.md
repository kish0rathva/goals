
### **1. Creational Patterns**
#### **a. Singleton**
- Ensures a class has only one instance and provides a global access point.
- **Used in**: Redux store, Database connection pools (e.g., MongoDB, Sequelize).

#### **b. Factory**
- Provides a method to create objects without specifying their concrete classes.
- **Used in**: React's `createElement`, Webpack loaders and plugins, Logger libraries (e.g., Winston).

#### **c. Builder**
- Constructs complex objects step by step.
- **Used in**: Fluent APIs like `Knex.js` query builders or `Axios` configuration chaining.
    ```javascript
    axios.get('/url', { params: { id: 1 } }).then(...);

---

### **2. Structural Patterns**
#### **a. Adapter**
- Converts an interface into one that a client expects.
- **Used in**: Database libraries (e.g., `Mongoose`, `Knex.js` adapt to different databases), `Express` middleware to unify different request/response formats.

#### **b. Decorator**
- Adds behavior to objects dynamically.
- **Used in**: Redux middleware, Higher-Order Components (HOCs) in React.
    ```javascript
    const withLogger = (Component) => (props) => {
      console.log('Props:', props);
      return <Component {...props} />;
    };
    ```

#### **e. Facade**
- Provides a simplified interface to a complex subsystem.
- **Used in**: Libraries like jQuery, Axios (hiding XHR complexity), `Express.js` (simplifies HTTP server creation).

---

### **3. Behavioral Patterns**
#### **a. Observer**
- Allows objects to notify subscribed observers of changes.
- **Used in**: Node.js `EventEmitter`, RxJS observables, React state management libraries like Redux or MobX.

#### **b. Strategy**
- Enables selecting an algorithm's behavior at runtime.
- **Used in**: Payment gateway libraries, Authentication strategies in `Passport.js`.

#### **c. Command**
- Encapsulates a request as an object to parameterize clients with different requests.
- **Used in**: Undo/Redo functionality, Redux actions.

#### **d. Mediator**
- Defines an object that centralizes communication between components.
- **Used in**: Chat applications (WebSocket-based brokers), Redux reducers.

#### **e. Chain of Responsibility**
- Passes a request along a chain of handlers.
- **Used in**: Express.js middleware, Redux middleware.

---

### **Common Open-Source Examples**
1. **React**:
   - Composite (component tree), Decorator (HOCs).
2. **Redux**:
   - Singleton (store), Observer (subscriptions), Command (actions).
3. **Express**:
   - Facade (simplifies server creation), Chain of Responsibility (middleware).
4. **RxJS**:
   - Observer (streams), Strategy (operators like `map`, `filter`).
5. **Angular**:
   - Dependency Injection, Mediator (services for communication).
---
