### Controlled Component

In React, the difference between controlled and uncontrolled components is in how they handle data flow and how they update their state.

Controlled components are those whose values are controlled by React's state. They receive their current value via props and notify changes through event handlers. This means that their state is always in sync with React's state. To update the value of a controlled component, the onChange event must be triggered, which will update the state and re-render the component.

For example, in a controlled input component, the value is passed in as a prop, and when the input changes, an event handler updates the state with the new value:

```
import React, { useState } from 'react';

function ControlledInput() {
  const [inputValue, setInputValue] = useState('');

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <input type="text" value={inputValue} onChange={handleChange} />
  );
}
```

On the other hand, uncontrolled components store their values in the DOM instead of in React's state. They do not receive their current value via props, and changes are not monitored through event handlers. Instead, to retrieve their values, you have to use the DOM API, such as getElementById or querySelector. This means that their state is not always in sync with React's state.

For example, in an uncontrolled input component, the value is not passed in as a prop, and you can retrieve the value using the DOM API:

```
import React, { useRef } from 'react';

function UncontrolledInput() {
  const inputRef = useRef(null);

  function handleClick() {
    const inputValue = inputRef.current.value;
    console.log(inputValue);
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Log Value</button>
    </div>
  );
}
```
Overall, controlled components provide a more predictable data flow and are easier to test, while uncontrolled components can be useful for simple forms with default values or for integrating with non-React code.