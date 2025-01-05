# BMI Calculator

This is a simple web-based BMI (Body Mass Index) calculator application built using HTML, CSS, and JavaScript.

## Features

- Calculate BMI based on height and weight inputs.
- Display BMI result and a weight guide.
- Responsive design.

## Files

- `index.html`: The main HTML file that contains the structure of the BMI calculator.
- `styles.css`: The CSS file that contains the styles for the BMI calculator.
- `script.js`: The JavaScript file that contains the logic for the BMI calculator.

## Usage

1. Open `index.html` in a web browser.
2. Enter height in centimeters and weight in kilograms.
3. Click the "Calculate" button to see the BMI result.
4. The result will be displayed along with a BMI weight guide.

## Code Overview

### HTML

The HTML file contains the structure of the BMI calculator, including the input fields and buttons.

- **DOCTYPE Declaration**: Specifies the HTML version.
- **HTML Tag**: The root element of the HTML document.
- **Head Section**: Contains meta information, title, and link to the CSS file.
- **Body Section**: Contains the navigation bar, form structure, and script link.

### CSS

The CSS file contains styles for the BMI calculator, including layout, colors, and button styles.

- **Body**: Sets the font, background color, and layout properties.
- **Nav**: Styles the navigation bar.
- **Form**: Styles the form container.
- **H1**: Styles the heading.
- **Label**: Styles the labels for input fields.
- **Input**: Styles the input fields.
- **Button**: Styles the calculate button.
- **Result**: Styles the result display.
- **BMI Guide**: Styles the BMI weight guide.

### JavaScript

The JavaScript file contains the logic for the BMI calculator, including event listeners for form submission and the calculation logic.

- **Form**: Gets the form element using `document.querySelector`.
- **Event Listener**: Adds a submit event listener to the form to handle the calculation.
- **Height and Weight**: Gets the height and weight input values.
- **Result**: Gets the result display element.
- **Validation**: Validates the input values.
- **Calculation**: Calculates the BMI and displays the result.

## How to Run

1. Clone the repository or download the files.
2. Open `index.html` in a web browser.


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
  - **Div (Form)**: Contains the form structure.
  - **H1**: Displays the heading.
  - **Label and Input**: Provides input fields for height and weight.
  - **Button**: Provides the calculate button.
  - **Div (Result)**: Displays the BMI result.
  - **Div (BMI Guide)**: Displays the BMI weight guide.
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
- **Form**: Styles the form container.
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
- **Label**: Styles the labels for input fields.
  - **Font Size**: Sets the font size.
  - **Color**: Sets the text color.
  - **Margin Bottom**: Adds bottom margin.
- **Input**: Styles the input fields.
  - **Width**: Sets the width.
  - **Padding**: Adds padding.
  - **Font Size**: Sets the font size.
  - **Margin**: Adds margin.
  - **Border**: Sets the border properties.
  - **Focus**: Changes the border color on focus.
- **Button**: Styles the calculate button.
  - **Font Family**: Specifies the font.
  - **Font Size**: Sets the font size.
  - **Display**: Sets the display properties.
  - **Margin**: Adds margin.
  - **Padding**: Adds padding.
  - **Color**: Sets the text color.
  - **Background Color**: Sets the background color.
  - **Hover**: Changes the background color on hover.
- **Result**: Styles the result display.
  - **Margin**: Adds margin.
  - **Text Align**: Centers the text.
  - **Font Size**: Sets the font size.
  - **Font Weight**: Makes the text bold.
  - **Color**: Sets the text color.
- **BMI Guide**: Styles the BMI weight guide.
  - **Margin**: Adds margin.

### JavaScript

- **Form**: Gets the form element using `document.querySelector`.
- **Event Listener**: Adds a submit event listener to the form to handle the calculation.
- **Height and Weight**: Gets the height and weight input values using `document.querySelector`.
- **Result**: Gets the result display element using `document.querySelector`.
- **Validation**: Validates the input values to ensure they are numbers and not empty.
- **Calculation**: Calculates the BMI using the formula `weight / ((height * height) / 10000)` and displays the result.

## Alternatives

- **HTML**: No direct alternatives, but you can use frameworks like React or Vue for more complex applications.
- **CSS**: You can use CSS frameworks like Bootstrap or Tailwind CSS for easier styling.
- **JavaScript**: You can use libraries like jQuery for simpler DOM manipulation or frameworks like Angular for more complex applications.

## License

This project is licensed under the MIT License.
