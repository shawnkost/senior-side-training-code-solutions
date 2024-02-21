# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?

  - Hooks are functions that allow you to tap into the React lifecycle and state management features from a functional component.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))

  - The Rules of Hooks are:
    - Only call hooks at the top level of a functional component.
    - Only call hooks from within the body of a functional component.
    - They must be called on every render.

- What is the purpose of state in React?

  - The purpose of state in React is to maintain the state of a component and to trigger a re-render when the state changes.

- Why can't we just maintain state in a local variable?

  - We can't just maintain state in a local variable because local variables don't trigger a re-render when they change.

- What two actions happen when you call a `state setter` function?

  - When you call a `state setter` function, two actions happen:
    - First, React caches the new value of the state variable.
    - Second, React triggers a re-render of the component.

- When does the local `state variable` get updated with the new value?

  - The local `state variable` gets updated with the new value after the component re-renders.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
