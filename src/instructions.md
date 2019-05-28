# Mouse Tracker

Create an app that does the following:

- splits the screen into 4 quadrants
- each quadrant should have a different background color
- each quadrant should track a user's mouse movement in that quadrant
- each quadrant should print out it's relative mouse position

Check out the [final result](https://v81p37wln5.codesandbox.io/) for visual acceptance criteria.

Your main app should hold absolutely no state. Each quadrant should use the `withMouse` HOC to track movements separately.

Make sure to declare propTypes for `PositionIndicator` and `Quadrant`.

## Tips

### PositionIndicator
- update to accept a color prop (add a propType for it as well!)

### withMouse
- should handle the mouse tracking functionality
- you can track the mouse position using an `onMouseMove` event
- you can get the mouse position from an event object using the `clientX` and `clientY` properties
- you'll want to stick the component passed to the HOC inside a span and add the mousemove listener to the span
- make sure to hoist statics and set the display name

The mouse coordinates are always relative to the screen, but you need them relative to the component wrapped by `withMouse`.
- Add a ref to the span in `withMouse`
- After mounting store an instance prop with the offset of the first child found inside your span.
- Adjust the mouse position by subtracting the quadrant offset.
- You'll want to recalculate the offset when the window is resized (make sure to cleanup event listeners on unmount!)

### Quadrant

Create a component called `Quadrant` in a new file.

Quadrants will be responsible for showing:
  - a background color
  - the relative mouse position
  - a colored `PositionIndicator`

Create a prop api that allows the bg color and indicator color to be customized.

Because you have to create a new component to use an HOC (no HOCs in render methods!), you'll have to create
4 separate components for your main app, 1 for each quadrant.
