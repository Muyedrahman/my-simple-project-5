

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

---

1/ getElementById_ Selects a single element based on its unique id attribute. This method

   assumes the id is unique within the document.

 getElementsByClassName_ Selects all elements that possess a specific class name.

 querySelectorAll_ Selects all elements that match a given CSS selector

 2/ create use document.createElement() to make a new element.

 3/ Event bubbling is a way events propagate in the DOM.

 5/  When we call preventDefault() in an event listener, it prevents the browser's  default behavior for an event, such as stopping a form submission from reloading the webpage or a link from navigating to its URL. The event still propagates through the DOM.

By default, events bubble up through the DOM tree to parent elements. Calling stopPropagation() in an event listener stops this propagation, preventing parent or child elements from handling the event, but it does not affect the browser's default behavior.

Thus, preventDefault() addresses the browser's default action for an HTML element's event, while stopPropagation() controls the event's propagation through the DOM tree.