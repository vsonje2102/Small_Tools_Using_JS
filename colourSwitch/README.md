# Colour Switch Project

This project demonstrates a simple web application that allows users to change the background color of the webpage by clicking on different color buttons. The project consists of three main files: `index.html`, `styles.css`, and `scripts.js`.

## Files

### index.html

This is the main HTML file that structures the webpage. It includes references to the CSS and JavaScript files.

- **DOCTYPE declaration**: Defines the document type and version of HTML.
- **html element**: The root element of the HTML document.
- **head element**: Contains meta-information about the document, such as the title and links to stylesheets.
- **link element**: Links the CSS file to the HTML document.
- **title element**: Sets the title of the webpage.
- **body element**: Contains the content of the webpage.
- **nav element**: Represents a section of navigation links.
- **a element**: Defines a hyperlink.
- **div element**: A container for other HTML elements.
- **span element**: An inline container for text and other inline elements.
- **script element**: Links the JavaScript file to the HTML document.

### styles.css

This file contains the CSS styles for the webpage. It defines the layout, colors, and transitions for various elements.

- **CSS reset**: Resets default browser styles for consistency.
- **body styles**: Sets the font, background color, text color, layout, and alignment for the body element.
- **nav styles**: Styles the navigation bar, including background color, padding, and text alignment.
- **a styles**: Styles the hyperlinks, including color, text decoration, font size, background color, padding, border radius, and transitions.
- **boxes styles**: Styles the container for the color buttons, including alignment, background color, padding, border radius, and box shadow.
- **h1 and h2 styles**: Styles the headings, including font size, margin, and color.
- **button styles**: Styles the color buttons, including display, margin, border radius, color, font size, padding, text decoration, and transitions.
- **color-specific styles**: Sets the background color for each color button.
- **hover effects**: Adds hover effects for the navigation links and color buttons, including background color change and scaling.

### scripts.js

This JavaScript file adds interactivity to the webpage by changing the background color when a button is clicked.

- **querySelectorAll**: Selects all elements with the class "button".
- **querySelector**: Selects the body element.
- **forEach**: Iterates over the NodeList of buttons.
- **addEventListener**: Adds a click event listener to each button.
- **event object**: Provides information about the event, such as the target element.
- **style property**: Changes the background color of the body element based on the clicked button's ID.

## Alternatives

### HTML

- Instead of using `<span>` elements for buttons, you could use `<button>` elements for better semantics and accessibility.
- The `nav` element can include more navigation links or a logo.

### CSS

- Use CSS variables for colors to make it easier to manage and update them.
- Use Flexbox or Grid for more complex layouts.
- Add media queries for responsive design.

### JavaScript

- Use `switch` statements instead of multiple `if-else` statements for better readability.
- Use event delegation for better performance if the number of buttons increases.
- Consider using a framework/library like React or Vue.js for more complex applications.

## Conclusion

This project is a simple demonstration of how to change the background color of a webpage using HTML, CSS, and JavaScript. It can be extended and improved in various ways, including better semantics, responsive design, and more efficient JavaScript code.
