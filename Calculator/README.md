# Calculator

This is a simple web-based calculator application built using HTML, CSS, and JavaScript.

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, and division.
- Clear button to reset the input.
- Responsive design.

## Files

- `index.html`: The main HTML file that contains the structure of the calculator.
- `styles.css`: The CSS file that contains the styles for the calculator.
- `script.js`: The JavaScript file that contains the logic for the calculator.

## Usage

1. Open `index.html` in a web browser.
2. Use the buttons to perform calculations.
3. The result will be displayed in the input field.

## Code Overview

### HTML

The HTML file contains the structure of the calculator, including the input field and buttons.

- **DOCTYPE Declaration**: Specifies the HTML version.
- **HTML Tag**: The root element of the HTML document.
- **Head Section**: Contains meta information, title, and link to the CSS file.
- **Body Section**: Contains the navigation bar, calculator structure, and script link.

### CSS

The CSS file contains styles for the calculator, including layout, colors, and button styles.

- **Body**: Sets the font, background color, and layout properties.
- **Nav**: Styles the navigation bar.
- **Calc**: Styles the calculator container.
- **H1**: Styles the heading.
- **Result**: Styles the input field for displaying results.
- **Btn**: Styles the button container and individual buttons.

### JavaScript

The JavaScript file contains the logic for the calculator, including event listeners for button clicks and the calculation logic.

- **Result**: Gets the result input field.
- **Buttons**: Gets all the buttons.
- **Current Input**: Stores the current input string.
- **Operator Clicked**: Tracks if an operator was clicked.
- **Event Listeners**: Adds click event listeners to buttons to handle input and calculations.

## How to Run

1. Clone the repository or download the files.
2. Open `index.html` in a web browser.

## Example

![Calculator Screenshot](screenshot.png)

## Detailed Explanations

### HTML

- **DOCTYPE Declaration**: Ensures the document is parsed as HTML5.
- **HTML Tag**: The root element that contains all other elements.
- **Head Section**: Contains meta information, title, and link to the CSS file.
  - **Meta Charset**: Specifies the character encoding.
  - **Title**: Sets the title of the web page.
  - **Link**: Links the CSS file for styling.
- **Body Section**: Contains the main content of the web page.
  - **Nav**: Provides navigation links.
  - **Div (Calc)**: Contains the calculator structure.
  - **Input**: Displays the result.
  - **Div (Btn)**: Contains the calculator buttons.
  - **Script**: Links the JavaScript file for functionality.

### CSS

- **Body**: Sets the font, background color, and layout properties.
  - **Font Family**: Specifies the font.
  - **Background Color**: Sets the background color.
  - **Flex Properties**: Centers the content.
- **Nav**: Styles the navigation bar.
  - **Text Align**: Centers the text.
  - **Background Color**: Sets the background color.
  - **Padding**: Adds padding.
  - **Font Size**: Sets the font size.
  - **Color**: Sets the text color.
  - **Font Weight**: Makes the text bold.
  - **Font Style**: Italicizes the text.
  - **Text Transform**: Uppercases the text.
  - **Box Shadow**: Adds a shadow effect.
  - **Border Radius**: Rounds the corners.
  - **Border Color**: Sets the border color.
  - **Border Style**: Sets the border style.
- **Calc**: Styles the calculator container.
  - **Margin**: Centers the container.
  - **Background**: Sets the background color.
  - **Border Radius**: Rounds the corners.
  - **Padding**: Adds padding.
  - **Box Shadow**: Adds a shadow effect.
  - **Text Align**: Centers the text.
  - **Width**: Sets the width.
- **H1**: Styles the heading.
  - **Font Size**: Sets the font size.
  - **Font Family**: Specifies the font.
  - **Color**: Sets the text color.
  - **Font Weight**: Makes the text bold.
  - **Text Align**: Centers the text.
  - **Margin**: Adds margin.
- **Result**: Styles the input field for displaying results.
  - **Width**: Sets the width.
  - **Height**: Sets the height.
  - **Font Size**: Sets the font size.
  - **Text Align**: Aligns the text to the right.
  - **Margin**: Adds margin.
- **Btn**: Styles the button container and individual buttons.
  - **Display**: Sets the display to grid.
  - **Grid Template Columns**: Defines the grid columns.
  - **Grid Gap**: Sets the gap between grid items.
  - **Button**: Styles the buttons.
    - **Background Color**: Sets the background color.
    - **Color**: Sets the text color.
    - **Font Size**: Sets the font size.
    - **Padding**: Adds padding.
    - **Border**: Removes the border.
    - **Border Radius**: Rounds the corners.
    - **Cursor**: Changes the cursor on hover.
    - **Transition**: Adds a transition effect.
  - **Button Hover**: Styles the buttons on hover.
    - **Background Color**: Changes the background color on hover.
  - **Button nth-child(4)**: Styles the fourth button.
    - **Background Color**: Sets the background color.
  - **Button first-child**: Styles the first button.
    - **Background Color**: Sets the background color.
  - **Button first-child Hover**: Styles the first button on hover.
    - **Background Color**: Changes the background color on hover.
  - **Button last-child**: Styles the last button.
    - **Grid Column**: Spans the button across two columns.
    - **Text Align**: Centers the text.
    - **Justify Content**: Centers the content.
    - **Width**: Sets the width.
    - **Margin Left**: Adds left margin.

### JavaScript

- **Result**: Gets the result input field using `document.getElementById`.
- **Buttons**: Gets all the buttons using `document.querySelectorAll`.
- **Current Input**: Stores the current input string.
- **Operator Clicked**: Tracks if an operator was clicked.
- **Event Listeners**: Adds click event listeners to buttons to handle input and calculations.
  - **Clear Button**: Resets the input and result.
  - **Equal Button**: Evaluates the input and displays the result.
  - **Operator Buttons**: Prevents consecutive operators.
  - **Number Buttons**: Adds the number to the current input and displays it.

## Alternatives

- **HTML**: No direct alternatives, but you can use frameworks like React or Vue for more complex applications.
- **CSS**: You can use CSS frameworks like Bootstrap or Tailwind CSS for easier styling.
- **JavaScript**: You can use libraries like jQuery for simpler DOM manipulation or frameworks like Angular for more complex applications.

