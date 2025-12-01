const questionBank = {
WebdesignTest1:[
  {
    "type": "mcq",
    "question": "What are the four main steps in the Iterative Development Methodology?",
    "options": ["Plan, Build, Test, Review", "Design, Develop, Deliver, Deploy", "Plan, Code, Debug, Launch", "Research, Code, Test, Deploy"],
    "answer": "Plan, Build, Test, Review"
  },
  {
    "type": "mcq",
    "question": "After completing iterative cycles for each page, what comes next in the process?",
    "options": ["Client Review", "Final Review and Deployment", "Code Refactoring", "UI Redesign"],
    "answer": "Final Review and Deployment"
  },
  {
    "type": "mcq",
    "question": "Which of the following is NOT a reason to develop iteratively?",
    "options": ["Flexibility during evolving requirements", "Improved team communication", "Reduced testing needs", "Better project management"],
    "answer": "Reduced testing needs"
  },
  {
    "type": "mcq",
    "question": "What benefit of iterative development helps prevent last-minute surprises before deadlines?",
    "options": ["Flexibility", "Testing small sections early", "Teamwork", "Workflow balance"],
    "answer": "Testing small sections early"
  },
  {
    "type": "mcq",
    "question": "Which of the following describes 'Staggered Launch' in iterative development?",
    "options": ["Deploying all features at once", "Launching the project in stages while adding more over time", "Pausing development between iterations", "Testing after full completion"],
    "answer": "Launching the project in stages while adding more over time"
  },
  {
    "type": "tf",
    "question": "Iterative development allows flexibility because project requirements can evolve during production.",
    "answer": true
  },
  {
    "type": "tf",
    "question": "In iterative development, testing is delayed until all features are complete.",
    "answer": false
  },
  {
    "type": "tf",
    "question": "Building iteratively helps maintain steady workflow for both designers and developers.",
    "answer": true
  },
  {
    "type": "tf",
    "question": "Team members in iterative development only perform their individual tasks without influencing the project’s direction.",
    "answer": false
  },
  {
    "type": "tf",
    "question": "One of the benefits of iterative web development is that it helps discover scope issues early.",
    "answer": true
  },
  {
    "type": "code",
    "question": "Complete the meta tag to make the page responsive: ",
    "answer": "<meta name=“viewport” content=“width=device-width, initial-scale=1”>"
  },
  {
    "type": "code",
    "question": "Write a CSS media query that applies a green background when the viewport width is at least 600px:\n@media only screen and (min-width: ___) {\n  body { background-color: green; }\n}",
    "answer": "600px"
  },
  {
    "type": "code",
    "question": "Fill in the correct CSS rule to target devices wider than 50em:\n@media only screen and (___: 50em) {\n  p { font-size: 1.2em; }\n}",
    "answer": "min-width"
  },
  {
    "type": "code",
    "question": "Complete the following to ensure the viewport matches device width and no zoom:\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=___\">",
    "answer": "1"
  },
  {
    "type": "mcq",
    "question": "Where should the viewport meta tag be placed in an HTML document?",
    "options": ["Inside <body>", "At the bottom of the page", "Inside <head>", "Before <!DOCTYPE html>"],
    "answer": "Inside <head>"
  },
  {
    "type": "mcq",
    "question": "What does width=device-width tell the browser?",
    "options": ["To match the viewport width to the device’s screen width", "To fix the width at 1024px", "To zoom out the content", "To disable responsive behavior"],
    "answer": "To match the viewport width to the device’s screen width"
  },
  {
    "type": "mcq",
    "question": "In a media query, what does (min-width: 40em) mean?",
    "options": ["The style applies only if the width is less than 40em", "The style applies if the viewport is at least 40em wide", "The style applies when the height is at least 40em", "The style applies to all screens smaller than 40em"],
    "answer": "The style applies if the viewport is at least 40em wide"
  },
  {
    "type": "tf",
    "question": "The meta viewport tag helps make web pages responsive on different devices.",
    "answer": true
  },
  {
    "type": "tf",
    "question": "The media query @media only screen and (min-width: 40em) applies styles only when the viewport width is smaller than 40em.",
    "answer": false
  },
  {
    "type": "tf",
    "question": "Setting initial-scale=1 in the viewport tag means the page will display at its natural (100%) size without zoom.",
    "answer": true
  },
  {
    "type": "mcq",
    "question": "What are the two primary ways to use media queries in web development?",
    "options": [
      "Including media queries in regular stylesheets or linking to separate stylesheets",
      "Using JavaScript or HTML comments",
      "Embedding media queries in meta tags or scripts",
      "Applying media queries only through inline styles"
    ],
    "answer": "Including media queries in regular stylesheets or linking to separate stylesheets"
  },
  {
    "type": "mcq",
    "question": "When using media queries to link to a separate stylesheet, which HTML element is used?",
    "options": ["<script>", "<meta>", "<style>", "<link>"],
    "answer": "<link>"
  },
  {
    "type": "tf",
    "question": "Media queries can only be written inside CSS files and cannot be linked externally.",
    "answer": false
  },
  {
    "type": "tf",
    "question": "You can include media queries directly inside your main stylesheet or link to a different stylesheet for specific conditions.",
    "answer": true
  },
  {
    "type": "code",
    "question": "Write a CSS rule that makes all <h1> elements blue:\n___ { color: blue; }",
    "answer": "h1"
  },
  {
    "type": "code",
    "question": "Fill in the missing property to make all paragraphs use Arial font:\np { ___: Arial; }",
    "answer": "font-family"
  },
  {
    "type": "code",
    "question": "Complete the inline style to make text red:\n<p style=\"color: ___;\">Hello</p>",
    "answer": "red"
  },
  {
    "type": "code",
    "question": "Fill in the missing part of the external stylesheet link:\n<link rel=\"stylesheet\" href=\"___\">",
    "answer": "styles.css"
  },
  {
    "type": "code",
    "question": "Complete the font-family declaration:\np { font-family: \"Times New Roman\", ___; }",
    "answer": "serif"
  },
  {
    "type": "mcq",
    "question": "What does CSS stand for?",
    "options": [
      "Cascading Style Sheets",
      "Creative Style Syntax",
      "Computer Style System",
      "Custom Style Script"
    ],
    "answer": "Cascading Style Sheets"
  },
  {
    "type": "mcq",
    "question": "Which part of a CSS rule specifies the element being styled?",
    "options": ["Selector", "Declaration", "Property", "Attribute"],
    "answer": "Selector"
  },
  {
    "type": "mcq",
    "question": "Where are inline styles defined?",
    "options": [
      "In the head section",
      "In a separate .css file",
      "Inside the HTML tag using the style attribute",
      "In a JavaScript file"
    ],
    "answer": "Inside the HTML tag using the style attribute"
  },
  {
    "type": "mcq",
    "question": "Which HTML element is used to embed CSS styles directly inside a webpage?",
    "options": ["<style>", "<link>", "<meta>", "<css>"],
    "answer": "<style>"
  },
  {
    "type": "mcq",
    "question": "What is true about font-family declarations?",
    "options": [
      "The last font should always be a generic font family like serif or sans-serif",
      "Font names cannot include spaces",
      "Font-family must always include three fonts",
      "Quotation marks are never used in font names"
    ],
    "answer": "The last font should always be a generic font family like serif or sans-serif"
  },
  {
    "type": "tf",
    "question": "CSS is used to define the structure and meaning of a webpage.",
    "answer": false
  },
  {
    "type": "tf",
    "question": "A CSS declaration is written inside curly braces and contains a property and a value.",
    "answer": true
  },
  {
    "type": "tf",
    "question": "External styles are written inside the <head> section of an HTML document using the <style> element.",
    "answer": false
  },
  {
    "type": "tf",
    "question": "Inline styles apply only to the specific element where the style attribute is used.",
    "answer": true
  },
  {
    "type": "tf",
    "question": "If a font name contains more than one word, it should be written in quotation marks.",
    "answer": true
  },
  {
    "type": "code",
    "question": "Set all paragraphs to have a font size of 100%:\np { font-size: ___; }",
    "answer": "100%"
  },
  {
    "type": "code",
    "question": "Make text bold using the font-weight property:\nh1 { font-weight: ___; }",
    "answer": "bold"
  },
  {
    "type": "code",
    "question": "Italicize all <em> elements using font-style:\nem { font-style: ___; }",
    "answer": "italic"
  },
  {
    "type": "code",
    "question": "Double the line spacing of paragraph text:\np { line-height: ___; }",
    "answer": "200%"
  },
  {
    "type": "code",
    "question": "Center align all <h2> headings:\nh2 { text-align: ___; }",
    "answer": "center"
  },
  {
    "type": "code",
    "question": "Indent the first line of paragraph text by 5em:\np { text-indent: ___; }",
    "answer": "5em"
  },
  {
    "type": "code",
    "question": "Remove underline from hyperlinks:\na { text-decoration: ___; }",
    "answer": "none"
  },
  {
    "type": "code",
    "question": "Make all headings appear in uppercase:\nh1 { text-transform: ___; }",
    "answer": "uppercase"
  },
  {
    "type": "code",
    "question": "Add a shadow to text with 2px horizontal, 2px vertical, and black color:\nh1 { text-shadow: 2px 2px ___; }",
    "answer": "black"
  },
  {
    "type": "code",
    "question": "Apply a left-to-right gradient from red to yellow to a <div>:\ndiv { background: ___(to right, red, yellow); }",
    "answer": "linear-gradient"
  },
  {
    "type": "mcq",
    "question": "What does font-size: 1em represent?",
    "options": [
      "100% of the parent element’s font size",
      "1 pixel",
      "A fixed browser default size",
      "Twice the normal font size"
    ],
    "answer": "100% of the parent element’s font size"
  },
  {
    "type": "mcq",
    "question": "Which property controls the space between individual characters?",
    "options": ["word-spacing", "line-height", "letter-spacing", "text-indent"],
    "answer": "letter-spacing"
  },
  {
    "type": "mcq",
    "question": "Which CSS property changes all text to uppercase?",
    "options": ["text-decoration", "text-transform", "text-align", "text-style"],
    "answer": "text-transform"
  },
  {
    "type": "mcq",
    "question": "Which value of opacity makes an element completely transparent?",
    "options": ["1", "0.5", "0", "100"],
    "answer": "0"
  },
  {
    "type": "mcq",
    "question": "Which property would you use to create a background that smoothly transitions between two colors?",
    "options": ["color", "gradient", "linear-gradient", "background-color"],
    "answer": "linear-gradient"
  },
  {
    "type": "tf",
    "question": "The property text-indent controls the spacing between words in a sentence.",
    "answer": false
  },
  {
    "type": "tf",
    "question": "The property text-decoration can be used to remove the underline from hyperlinks.",
    "answer": true
  },
  {
    "type": "tf",
    "question": "Opacity values range from 0 (transparent) to 1 (fully opaque).",
    "answer": true
  },
  {
    "type": "tf",
    "question": "The text-shadow property can only define shadow color, not its offset or blur.",
    "answer": false
  },
  {
    "type": "tf",
    "question": "Using font-size: 100% and font-size: 1em will render the same size in most browsers.",
    "answer": true
  },
  {
    "type": "code",
    "question": "Create a div element with a class named 'container':\n<___ class=\"container\"></___>",
    "answer": "div"
  },
  {
    "type": "code",
    "question": "Write a CSS rule to give all divs a yellow dotted border that is 1px wide:\ndiv { border: ___ dotted yellow; }",
    "answer": "1px"
  },
  {
    "type": "code",
    "question": "Set padding in the order: top 2px, right 3px, bottom 8px, left 1px:\n.box { padding: ___; }",
    "answer": "2px 3px 8px 1px"
  },
  {
    "type": "code",
    "question": "Select all elements with the class 'highlight' in CSS:\n___.highlight { color: red; }",
    "answer": "."
  },
  {
    "type": "code",
    "question": "Select an element with id='main':\n___main { background-color: lightgray; }",
    "answer": "#"
  },
  {
    "type": "mcq",
    "question": "What is the main purpose of the <div> element?",
    "options": [
      "To create a clickable button",
      "To define a division or section for layout",
      "To insert a line break",
      "To format inline text"
    ],
    "answer": "To define a division or section for layout"
  },
  {
    "type": "mcq",
    "question": "What does the border property control?",
    "options": [
      "The space outside an element",
      "The visible edge around an element",
      "The background color of an element",
      "The internal spacing of an element"
    ],
    "answer": "The visible edge around an element"
  },
  {
    "type": "mcq",
    "question": "What does padding control in CSS?",
    "options": [
      "The space between the element’s content and its border",
      "The space outside an element’s border",
      "The element’s outline thickness",
      "The text alignment inside a box"
    ],
    "answer": "The space between the element’s content and its border"
  },
  {
    "type": "mcq",
    "question": "Which CSS property is used to create space outside an element’s border?",
    "options": ["padding", "margin", "border", "outline"],
    "answer": "margin"
  },
  {
    "type": "mcq",
    "question": "Which is the correct shorthand order for padding values?",
    "options": [
      "top, right, bottom, left",
      "left, right, top, bottom",
      "right, left, top, bottom",
      "top, bottom, left, right"
    ],
    "answer": "top, right, bottom, left"
  },
  {
    "type": "mcq",
    "question": "What symbol is used before a class selector in CSS?",
    "options": [".", "#", "/", "@"],
    "answer": "."
  },
  {
    "type": "mcq",
    "question": "What symbol is used before an ID selector in CSS?",
    "options": [".", "#", "$", "%"],
    "answer": "#"
  },
  {
    "type": "mcq",
    "question": "Which statement is true about class selectors?",
    "options": [
      "They can only be used once per page.",
      "They can be applied to multiple elements.",
      "They are used only for inline elements.",
      "They must match the element’s tag name."
    ],
    "answer": "They can be applied to multiple elements."
  },
  {
    "type": "mcq",
    "question": "Which statement is true about ID selectors?",
    "options": [
      "They can be reused across multiple elements.",
      "They must be unique within a page.",
      "They are applied automatically to all divs.",
      "They cannot be used in CSS."
    ],
    "answer": "They must be unique within a page."
  },
  {
    "type": "mcq",
    "question": "What does a descendant selector do?",
    "options": [
      "Applies styles to an element’s parent only",
      "Applies styles to specific child elements within a parent",
      "Applies styles globally to all elements",
      "Applies styles based on an element’s ID"
    ],
    "answer": "Applies styles to specific child elements within a parent"
  },
  {
    "type": "mcq",
    "question": "Which HTML element is used for inline formatting within another element?",
    "options": ["<div>", "<span>", "<section>", "<article>"],
    "answer": "<span>"
  },
  {
    "type": "mcq",
    "question": "Which example correctly uses a descendant selector?",
    "options": [
      "div, p { color: red; }",
      "div p { color: red; }",
      "div > p { color: red; }",
      "#div p { color: red; }"
    ],
    "answer": "div p { color: red; }"
  },
  {
    "type": "tf",
    "question": "The <div> element is typically used to structure a webpage layout.",
    "answer": true
  },
  {
    "type": "tf",
    "question": "The <span> element creates a new block-level section on the page.",
    "answer": false
  },
  {
    "type": "tf",
    "question": "Padding adds space outside the border of an element.",
    "answer": false
  },
  {
    "type": "tf",
    "question": "ID selectors can be used multiple times on the same page.",
    "answer": false
  },
  {
    "type": "tf",
    "question": "A descendant selector targets an element nested within another element.",
    "answer": true
  },
  {
    "type": "code",
    "question": "Fill in the blank to make the total element width 230px:\nwidth: 200px;\npadding: 10px;\nborder: 5px solid black;\nbox-sizing: ___;",
    "answer": "content-box"
  },
  {
    "type": "code",
    "question": "Fill in the blank to make the element width include content, padding, and border:\nwidth: 200px;\npadding: 10px;\nborder: 5px solid black;\nbox-sizing: ___;",
    "answer": "border-box"
  },
  {
    "type": "code",
    "question": "Set a fluid layout container that always takes up the full viewport width:\n.container { width: ___; }",
    "answer": "100%"
  },
  {
    "type": "code",
    "question": "Prevent parent collapse when it contains floated child elements:\narticle { overflow: ___; }",
    "answer": "auto"
  },
  {
    "type": "code",
    "question": "Clear both left and right floats for the footer element:\nfooter { clear: ___; }",
    "answer": "both"
  },
  {
    "type": "mcq",
    "question": "Which of the following statements about 'content-box' is TRUE?",
    "options": [
      "Width includes padding and border",
      "Width applies only to the content area",
      "It automatically creates a BFC",
      "It clips overflowing content"
    ],
    "answer": "Width applies only to the content area"
  },
  {
    "type": "mcq",
    "question": "In the 'border-box' model, which areas are included in the specified width?",
    "options": [
      "Only content",
      "Content + padding + border",
      "Padding + margin",
      "Content + margin"
    ],
    "answer": "Content + padding + border"
  },
  {
    "type": "mcq",
    "question": "A fluid layout adjusts its width based on:",
    "options": [
      "Fixed pixel values",
      "Percentage or flexible units",
      "em-based media queries",
      "Viewport height only"
    ],
    "answer": "Percentage or flexible units"
  },
  {
    "type": "mcq",
    "question": "Which CSS property can create a Block Formatting Context (BFC)?",
    "options": [
      "float: left",
      "overflow: auto",
      "margin: 0 auto",
      "display: inline-block"
    ],
    "answer": "overflow: auto"
  },
  {
    "type": "mcq",
    "question": "If an element’s content overflows its container and you want to hide the extra content, which property do you use?",
    "options": [
      "overflow: visible",
      "overflow: auto",
      "overflow: hidden",
      "overflow: scroll"
    ],
    "answer": "overflow: hidden"
  },
  {
    "type": "mcq",
    "question": "Which property aligns block elements horizontally to the center?",
    "options": [
      "text-align: center",
      "margin: auto",
      "float: center",
      "align-items: center"
    ],
    "answer": "margin: auto"
  },
  {
    "type": "mcq",
    "question": "What happens when you do not specify any positioning or floating?",
    "options": [
      "Elements will overlap",
      "Elements will follow normal document flow",
      "Elements will disappear",
      "Elements will stack horizontally only"
    ],
    "answer": "Elements will follow normal document flow"
  },
  {
    "type": "mcq",
    "question": "Which of the following is NOT true about 'float'?",
    "options": [
      "It can align block elements horizontally",
      "It removes the element from normal flow",
      "It automatically centers elements",
      "It can cause parent collapse without clearfix"
    ],
    "answer": "It automatically centers elements"
  },
  {
    "type": "mcq",
    "question": "What does the 'clear' property do?",
    "options": [
      "Resets margins",
      "Controls how an element behaves next to floated elements",
      "Changes overflow behavior",
      "Defines padding space"
    ],
    "answer": "Controls how an element behaves next to floated elements"
  },
  {
    "type": "mcq",
    "question": "If a parent doesn’t account for the height of its floated children, it means:",
    "options": [
      "The parent’s BFC is active",
      "The parent collapsed because of floats",
      "The parent used overflow:auto",
      "The parent used border-box"
    ],
    "answer": "The parent collapsed because of floats"
  },
  {
    "type": "tf",
    "question": "In 'content-box', padding and borders are included in the total width.",
    "answer": false
  },
  {
    "type": "tf",
    "question": "Setting overflow: hidden both creates a BFC and hides overflowing content.",
    "answer": true
  },
  {
    "type": "tf",
    "question": "A fluid layout uses fixed pixel widths for all elements.",
    "answer": false
  },
  {
    "type": "tf",
    "question": "clear: both; is used to prevent elements from being affected by floats on either side.",
    "answer": true
  },
  {
    "type": "tf",
    "question": "Block elements normally stack side by side in the default flow.",
    "answer": false
  },
  {
    "type": "code",
    "question": "Create an absolute link to Yahoo:\n<a href=\"___\">Yahoo</a>",
    "answer": "http://yahoo.com"
  },
  {
    "type": "code",
    "question": "Create a relative link to index.html on your own site:\n<a href=\"___\">Home</a>",
    "answer": "index.html"
  },
  {
    "type": "code",
    "question": "Link to shampoo.html located in the same folder as the current page:\n<a href=\"___\">Shampoo</a>",
    "answer": "shampoo.html"
  },
  {
    "type": "code",
    "question": "Link to index.html one folder up:\n<a href=\"___\">Home</a>",
    "answer": "../index.html"
  },
  {
    "type": "code",
    "question": "Link to bathing.html inside services folder one level up:\n<a href=\"___\">Dog Bathing</a>",
    "answer": "../services/bathing.html"
  },
  {
    "type": "code",
    "question": "Create a named location with id 'top':\n<p ___> … </p>",
    "answer": "id=\"top\""
  },
  {
    "type": "code",
    "question": "Link to the named fragment 'top' on the same page:\n<a href=\"___\">Back to Top</a>",
    "answer": "#top"
  },
  {
    "type": "code",
    "question": "Link to named location 'info' on page2.html:\n<a href=\"___\">Go to info on p. 2</a>",
    "answer": "page2.html#info"
  },
  {
    "type": "code",
    "question": "Create a clickable email link:\n<a href=\"___\">Email Me</a>",
    "answer": "mailto:email@go.com"
  },
  {
    "type": "code",
    "question": "Clickable email link with pre-filled subject 'Information':\n<a href=\"___\">Send Info By Email</a>",
    "answer": "mailto:email@go.com?subject=Information"
  },
  {
    "type": "code",
    "question": "Clickable email link with CC:\n<a href=\"___\">Email</a>",
    "answer": "mailto:hi@hi.ca?cc=hey@hi.ca"
  },
  {
    "type": "code",
    "question": "Use an image as a clickable link to kirkBio.html:\n<a href=\"kirkBio.html\">\n    <img src=\"___\" alt=\"kirk photo\" />\n</a>",
    "answer": "JamesTKirk.jpg"
  },
  {
    "type": "code",
    "question": "Style unvisited links in CSS:\na:link { color: ___; }",
    "answer": "blue"
  },
  {
    "type": "code",
    "question": "Style visited links in CSS:\na:visited { color: ___; }",
    "answer": "grey"
  },
  {
    "type": "code",
    "question": "Style links when the mouse hovers over them:\na:hover { color: ___; }",
    "answer": "red"
  },
  {
    "type": "code",
    "question": "Style links when they are active:\na:active { color: ___; }",
    "answer": "green"
  },
  {
    "type": "code",
    "question": "In CSS, which pseudo-class must come after a:link and a:visited?",
    "answer": "a:hover"
  },
  {
    "type": "code",
    "question": "In CSS, which pseudo-class must come after a:hover?",
    "answer": "a:active"
  },
  {
    "type": "code",
    "question": "Link to a page in the parent folder named services.html:\n<a href=\"___\">Services</a>",
    "answer": "../services.html"
  },
  {
    "type": "code",
    "question": "Link to a fragment named 'section1' in the same page:\n<a href=\"___\">Go to Section 1</a>",
    "answer": "#section1"
  },
  {
    "type": "mcq",
    "question": "Which of the following is an absolute link?",
    "options": [
      "<a href='index.html'>Home</a>",
      "<a href='http://example.com'>Example</a>",
      "<a href='#top'>Top</a>",
      "<a href='../about.html'>About</a>"
    ],
    "answer": "<a href='http://example.com'>Example</a>"
  },
  {
    "type": "mcq",
    "question": "Which symbol is used in href to link to a fragment within the same page?",
    "options": ["#", ".", "/", "%"],
    "answer": "#"
  },
  {
    "type": "mcq",
    "question": "What does '../' in a relative link mean?",
    "options": [
      "Go into a subfolder",
      "Go up one level in the folder structure",
      "Link to an external website",
      "Link to a named fragment"
    ],
    "answer": "Go up one level in the folder structure"
  },
  {
    "type": "mcq",
    "question": "Which attribute identifies a named location for fragment links?",
    "options": ["class", "id", "name", "href"],
    "answer": "id"
  },
  {
    "type": "mcq",
    "question": "How do you pre-fill an email subject line in a mailto link?",
    "options": [
      "<a href='mailto:email@go.com'>Email</a>",
      "<a href='mailto:email@go.com?subject=Info'>Email</a>",
      "<a href='mailto:email@go.com#subject'>Email</a>",
      "<a href='email@go.com?subject=Info'>Email</a>"
    ],
    "answer": "<a href='mailto:email@go.com?subject=Info'>Email</a>"
  },
  {
    "type": "mcq",
    "question": "Which link pseudo-class indicates the link currently being clicked?",
    "options": ["a:link", "a:hover", "a:visited", "a:active"],
    "answer": "a:active"
  },
  {
    "type": "mcq",
    "question": "Which link pseudo-class changes color when the mouse hovers over it?",
    "options": ["a:link", "a:hover", "a:visited", "a:active"],
    "answer": "a:hover"
  },
  {
    "type": "mcq",
    "question": "Which pseudo-class must come last in the link styling order?",
    "options": ["a:link", "a:visited", "a:hover", "a:active"],
    "answer": "a:active"
  },
  {
    "type": "mcq",
    "question": "Which pseudo-class must come after a:link and a:visited?",
    "options": ["a:active", "a:hover", "a:focus", "a:checked"],
    "answer": "a:hover"
  },
  {
    "type": "tf",
    "question": "Absolute links point to other websites.",
    "answer": true
  },
  {
    "type": "tf",
    "question": "Relative links can be used to link to pages on your own site.",
    "answer": true
  },
  {
    "type": "tf",
    "question": "The href='#id' syntax links to a named fragment on another website.",
    "answer": false
  },
  {
    "type": "tf",
    "question": "You can make an image clickable by placing it inside an <a> tag.",
    "answer": true
  },
  {
    "type": "tf",
    "question": "The correct CSS order for link pseudo-classes is: a:link, a:visited, a:active, a:hover.",
    "answer": false
  },
  {
    "type": "code",
    "question": "Create a description list term and description:\n<dl>\n  <dt>Term</dt>\n  <dd>___</dd>\n</dl>",
    "answer": "Description"
  },
  {
    "type": "code",
    "question": "Insert a horizontal line in HTML:\n<___>",
    "answer": "hr"
  },
  {
    "type": "code",
    "question": "Insert an image with src 'photo.jpg' and alt text 'My Photo':\n<img src=\"___\" alt=\"___\">",
    "answer": "photo.jpg / My Photo"
  },
  {
    "type": "code",
    "question": "Quote text from another source:\n<___>This is a quote</___>",
    "answer": "blockquote"
  },
  {
    "type": "code",
    "question": "Make text semantically important:\n<___>Important Text</___>",
    "answer": "strong"
  },
  {
    "type": "code",
    "question": "Make text bold but not semantically important:\n<___>Bold Text</___>",
    "answer": "b"
  },
  {
    "type": "code",
    "question": "Emphasize text (semantic stress):\n<___>Emphasized Text</___>",
    "answer": "em"
  },
  {
    "type": "code",
    "question": "Italicize text (for foreign words or to set off from normal prose):\n<___>Italic Text</___>",
    "answer": "i"
  },
  {
    "type": "code",
    "question": "Create a list of two terms and their descriptions:\n<dl>\n  <dt>Term1</dt>\n  <dd>___</dd>\n  <dt>Term2</dt>\n  <dd>___</dd>\n</dl>",
    "answer": "Description1 / Description2"
  },
  {
    "type": "code",
    "question": "Which element defines a block-level container?\n<___>Block Content</___>",
    "answer": "div"
  },
  {
    "type": "mcq",
    "question": "Which tag is used to define a term in a description list?",
    "options": ["<dl>", "<dt>", "<dd>", "<list>"],
    "answer": "<dt>"
  },
  {
    "type": "mcq",
    "question": "Which tag is used to define the description of a term?",
    "options": ["<dl>", "<dt>", "<dd>", "<desc>"],
    "answer": "<dd>"
  },
  {
    "type": "mcq",
    "question": "Which element renders a horizontal line?",
    "options": ["<hr>", "<line>", "<br>", "<h1>"],
    "answer": "<hr>"
  },
  {
    "type": "mcq",
    "question": "Which tag is used for content of greater semantic importance?",
    "options": ["<b>", "<strong>", "<i>", "<em>"],
    "answer": "<strong>"
  },
  {
    "type": "mcq",
    "question": "Which tag is used to visually emphasize text without semantic importance?",
    "options": ["<b>", "<strong>", "<em>", "<i>"],
    "answer": "<b>"
  },
  {
    "type": "mcq",
    "question": "Which tag represents text that is stressed or emphasized?",
    "options": ["<b>", "<i>", "<em>", "<strong>"],
    "answer": "<em>"
  },
  {
    "type": "mcq",
    "question": "Which tag is used for italicized text like foreign words?",
    "options": ["<i>", "<em>", "<b>", "<strong>"],
    "answer": "<i>"
  },
  {
    "type": "mcq",
    "question": "Which element defines a block-level container?",
    "options": ["<span>", "<b>", "<div>", "<i>"],
    "answer": "<div>"
  },
  {
    "type": "mcq",
    "question": "Which element is inline by default?",
    "options": ["<div>", "<p>", "<span>", "<blockquote>"],
    "answer": "<span>"
  },
  {
    "type": "tf",
    "question": "<dl> is used to define a description list.",
    "answer": true
  },
  {
    "type": "tf",
    "question": "<dt> defines the description of a term.",
    "answer": false
  },
  {
    "type": "tf",
    "question": "<strong> is semantically stronger than <b>.",
    "answer": true
  },
  {
    "type": "tf",
    "question": "<em> and <i> have exactly the same semantic meaning.",
    "answer": false
  },
  {
    "type": "tf",
    "question": "Block-level elements are containers and take up the full width available by default.",
    "answer": true
  },
  {
    "type": "code",
    "question": "Top-level container that can hold other block-level elements:\n<___> ... </___>",
    "answer": "div"
  },
  {
    "type": "code",
    "question": "Paragraph tag that cannot contain other block-level elements:\n<___>This is a paragraph.</___>",
    "answer": "p"
  },
  {
    "type": "code",
    "question": "The body section may only contain block-level elements:\n<body> ... </body>\nExample paragraph:\n<___>Text inside paragraph</___>",
    "answer": "p"
  },
  {
    "type": "code",
    "question": "Text should not float inside the body without being contained in a block-level element. Wrap text in:\n<___>Text content</___>",
    "answer": "div"
  },
  {
    "type": "code",
    "question": "Define contact information using the appropriate tag:\n<___>123 Main Street, City, Country</___>",
    "answer": "address"
  },
  {
    "type": "code",
    "question": "Add preformatted text that preserves spaces and line breaks:\n<___>   Preformatted   text\n   Second line</___>",
    "answer": "pre"
  },
  {
    "type": "code",
    "question": "Open a link in the same window:\n<a href=\"https://example.com\" target=\"___\">Link</a>",
    "answer": "_self"
  },
  {
    "type": "code",
    "question": "Open a link in a new tab or window:\n<a href=\"https://example.com\" target=\"___\">Link</a>",
    "answer": "_blank"
  },
  {
    "type": "code",
    "question": "Open a link in the top-level window:\n<a href=\"https://example.com\" target=\"___\">Link</a>",
    "answer": "_top"
  },
  {
    "type": "code",
    "question": "A div can contain multiple block-level elements:\n<___>\n  <p>Paragraph 1</p>\n  <p>Paragraph 2</p>\n</___>",
    "answer": "div"
  },
  {
    "type": "mcq",
    "question": "Which tag is the top-level container for block-level elements?",
    "options": ["<p>", "<div>", "<span>", "<body>"],
    "answer": "<div>"
  },
  {
    "type": "mcq",
    "question": "Which tag cannot contain other block-level elements?",
    "options": ["<div>", "<p>", "<body>", "<address>"],
    "answer": "<p>"
  },
  {
    "type": "mcq",
    "question": "Which element usually goes inside header or footer to define contact information?",
    "options": ["<pre>", "<address>", "<p>", "<div>"],
    "answer": "<address>"
  },
  {
    "type": "mcq",
    "question": "Text inside the <pre> tag is displayed in:",
    "options": ["Proportional font", "Fixed-width font", "Bold font", "Italic font"],
    "answer": "Fixed-width font"
  },
  {
    "type": "mcq",
    "question": "Which target attribute opens the link in a new tab?",
    "options": ["_self", "_blank", "_top", "_parent"],
    "answer": "_blank"
  },
  {
    "type": "mcq",
    "question": "Which target attribute opens the link in the same window?",
    "options": ["_self", "_blank", "_top", "_parent"],
    "answer": "_self"
  },
  {
    "type": "mcq",
    "question": "Which target attribute opens the link in the topmost window?",
    "options": ["_self", "_blank", "_top", "_parent"],
    "answer": "_top"
  },
  {
    "type": "mcq",
    "question": "All text in the body must be contained within:",
    "options": ["Inline elements", "Block-level elements", "Images", "Links only"],
    "answer": "Block-level elements"
  },
  {
    "type": "mcq",
    "question": "Which tag preserves spaces and line breaks exactly as typed?",
    "options": ["<p>", "<pre>", "<div>", "<span>"],
    "answer": "<pre>"
  },
  {
    "type": "mcq",
    "question": "Which tag renders its content in italic by default across all browsers?",
    "options": ["<em>", "<i>", "<address>", "<strong>"],
    "answer": "<address>"
  },
  {
    "type": "tf",
    "question": "A <div> tag can contain multiple block-level elements.",
    "answer": true
  },
  {
    "type": "tf",
    "question": "<p> tags can contain other block-level elements.",
    "answer": false
  },
  {
    "type": "tf",
    "question": "Text should always be held inside block-level elements in the body.",
    "answer": true
  },
  {
    "type": "tf",
    "question": "The <pre> tag preserves spaces and line breaks.",
    "answer": true
  },
  {
    "type": "tf",
    "question": "Using target='_blank' opens a link in the same window.",
    "answer": false
  },
  {
    "type": "code",
    "question": "Complete the CSS to make a div take the full width of the viewport while including padding and border:\ndiv { width: 100%; padding: 10px; border: 5px solid black; box-sizing: ___; }",
    "answer": "border-box"
  },
  {
    "type": "code",
    "question": "Create a preformatted block of text that preserves spaces and line breaks:\n<___>   Line 1\n   Line 2</___>",
    "answer": "pre"
  },
  {
    "type": "code",
    "question": "Link to a fragment named 'section2' in another page 'page3.html':\n<a href=\"___\">Go to Section 2</a>",
    "answer": "page3.html#section2"
  },
  {
    "type": "code",
    "question": "Create a clickable image link to 'profile.html' using 'user.jpg' as the image:\n<a href=\"profile.html\">\n  <img src=\"___\" alt=\"User Photo\">\n</a>",
    "answer": "user.jpg"
  },
  {
    "type": "code",
    "question": "Make the hovered state of links red, visited grey, and active green:\na:link { color: blue; }\na:visited { color: grey; }\na:hover { color: ___; }\na:active { color: ___; }",
    "answer": "red / green"
  },
  {
    "type": "mcq",
    "question": "Which of the following correctly creates a floating BFC container to prevent parent collapse?",
    "options": [
      "div { float: left; }",
      "div { overflow: auto; }",
      "div { display: inline; }",
      "div { margin: 0 auto; }"
    ],
    "answer": "div { overflow: auto; }"
  },
  {
    "type": "mcq",
    "question": "Which statement about the 'content-box' model is correct?",
    "options": [
      "Width includes padding and border",
      "Width applies only to the content area",
      "It automatically creates a BFC",
      "It collapses if child floats are not cleared"
    ],
    "answer": "Width applies only to the content area"
  },
  {
    "type": "mcq",
    "question": "What is the correct order for link pseudo-classes in CSS?",
    "options": [
      "a:link, a:visited, a:hover, a:active",
      "a:hover, a:link, a:visited, a:active",
      "a:active, a:link, a:visited, a:hover",
      "a:visited, a:link, a:active, a:hover"
    ],
    "answer": "a:link, a:visited, a:hover, a:active"
  },
  {
    "type": "mcq",
    "question": "Which HTML element is semantically used for content that is more important than normal text?",
    "options": ["b", "strong", "i", "em"],
    "answer": "strong"
  },
  {
    "type": "mcq",
    "question": "Which of the following tags cannot contain block-level elements?",
    "options": ["div", "p", "body", "address"],
    "answer": "p"
  },
  {
    "type": "mcq",
    "question": "Which of the following is a correct absolute link?",
    "options": ["index.html", "page2.html#info", "http://example.com", "../about.html"],
    "answer": "http://example.com"
  },
  {
    "type": "mcq",
    "question": "Which CSS property can center a block-level element horizontally?",
    "options": ["float: center", "margin: 0 auto", "text-align: center", "display: inline-block"],
    "answer": "margin: 0 auto"
  },
  {
    "type": "mcq",
    "question": "Which of these statements about iterative web development is FALSE?",
    "options": [
      "It allows for flexibility as requirements evolve",
      "Testing is better done only at the final stage",
      "Team members contribute to project evolution",
      "Staggered launch allows progressive deployment"
    ],
    "answer": "Testing is better done only at the final stage"
  },
  {
    "type": "mcq",
    "question": "When nesting elements, what is true about block-level elements?",
    "options": [
      "They cannot contain inline elements",
      "They always collapse when floated",
      "They define sections and can contain other block-level elements",
      "They are automatically inline"
    ],
    "answer": "They define sections and can contain other block-level elements"
  },
  {
    "type": "mcq",
    "question": "Which HTML tag defines preformatted text?",
    "options": ["blockquote", "pre", "address", "strong"],
    "answer": "pre"
  },
  {
    "type": "mcq",
    "question": "Which method allows linking to a specific location on another page?",
    "options": [
      "Relative link without fragment",
      "Absolute link without fragment",
      "Fragment identifier with id attribute",
      "Mailto link"
    ],
    "answer": "Fragment identifier with id attribute"
  },
  {
    "type": "mcq",
    "question": "Which of the following is NOT a type of CSS style sheet?",
    "options": ["Inline", "Embedded", "External", "Automatic"],
    "answer": "Automatic"
  },
  {
    "type": "mcq",
    "question": "What is the effect of overflow: hidden in a container?",
    "options": [
      "Creates a BFC and hides overflowing content",
      "Expands the container beyond viewport",
      "Removes all child elements",
      "Scrollbars appear if content overflows"
    ],
    "answer": "Creates a BFC and hides overflowing content"
  },
  {
    "type": "code",
    "question": "Complete the HTML to link to an email address with pre-filled subject 'Info':\n<a href=\"___\">Email Me</a>",
    "answer": "mailto:email@domain.com?subject=Info"
  },
  {
    "type": "code",
    "question": "Create a relative link to 'services/bathing.html' from one folder up:\n<a href=\"___\">Dog Bathing</a>",
    "answer": "../services/bathing.html"
  },
  {
    "type": "code",
    "question": "Make a div container that includes two paragraphs:\n<___>\n  <p>Paragraph 1</p>\n  <p>Paragraph 2</p>\n</___>",
    "answer": "div"
  },
  {
    "type": "tf",
    "question": "The <address> tag renders text in italic by default across all browsers.",
    "answer": true
  },
  {
    "type": "tf",
    "question": "Using <p> inside another <p> is valid HTML.",
    "answer": false
  },
  {
    "type": "tf",
    "question": "A block-level element can contain multiple block-level elements.",
    "answer": true
  },
  {
    "type": "tf",
    "question": "The width in 'border-box' model includes content, padding, and border.",
    "answer": true
  },
  {
    "type": "tf",
    "question": "A fragment link can target a specific id on the same page or another page.",
    "answer": true
  },
  {
    "type": "tf",
    "question": "Using inline styles is preferred over external styles for maintainability.",
    "answer": false
  },
  {
    "type": "tf",
    "question": "Overflow: auto only creates a BFC but never shows scrollbars.",
    "answer": false
  },
  {
    "type": "tf",
    "question": "Floating elements can cause their parent to collapse if BFC or clearfix is not applied.",
    "answer": true
  }

],
DatabaseTest1:[
 {
  "type": "mcq",
  "question": "Which of the following best defines an entity in an ER model?",
  "options": [
    "A person, place, or thing of interest to the organization",
    "A numeric value describing a property",
    "A relationship between two tables",
    "A database key used for identification"
  ],
  "answer": "A person, place, or thing of interest to the organization"
},
{
  "type": "mcq",
  "question": "Which of the following is TRUE about entity names?",
  "options": [
    "Entity names should be singular and nouns",
    "Entity names should be plural and verbs",
    "Entity names should always describe relationships",
    "Entity names can include multiple words and actions"
  ],
  "answer": "Entity names should be singular and nouns"
},
{
  "type": "mcq",
  "question": "What is the main purpose of an attribute in an ER model?",
  "options": [
    "To describe the characteristics or properties of an entity",
    "To connect two unrelated entities",
    "To create physical tables in a database",
    "To define relationships between databases"
  ],
  "answer": "To describe the characteristics or properties of an entity"
},
{
  "type": "mcq",
  "question": "Which statement about the modeling process is correct?",
  "options": [
    "It is an iterative process that evolves by adding entities, attributes, and relationships",
    "It is a one-time process that must be completed before adding attributes",
    "It starts with all relationships and then adds entities at the end",
    "It only involves physical database design"
  ],
  "answer": "It is an iterative process that evolves by adding entities, attributes, and relationships"
},
{
  "type": "mcq",
  "question": "If something exists only as a single instance and not multiple, it is most likely:",
  "options": [
    "An attribute of another entity",
    "A separate entity",
    "A weak relationship",
    "A redundant key"
  ],
  "answer": "An attribute of another entity"
},
{
  "type": "tf",
  "question": "Attribute names must be unique within an entity.",
  "answer": true
},
{
  "type": "tf",
  "question": "An entity can be either tangible (like Employee) or intangible (like Sale).",
  "answer": true
},
{
  "type": "tf",
  "question": "In ER modeling, event entities should be named for the activity, not the result.",
  "answer": false
},
{
  "type": "tf",
  "question": "The ER model represents entities, their attributes, and their relationships.",
  "answer": true
},
{
  "type": "tf",
  "question": "Building an ER model is a linear process that must be completed in one pass.",
  "answer": false
},
{
  "type": "mcq",
  "question": "What does the Crow’s Foot notation represent in an ER diagram?",
  "options": [
    "Different types of relationships between entities",
    "The data types of each attribute",
    "The physical layout of tables in a database",
    "A flowchart for process modeling"
  ],
  "answer": "Different types of relationships between entities"
},
{
  "type": "mcq",
  "question": "In a one-to-many relationship, the entity on the 'one' side is known as the:",
  "options": [
    "Parent entity",
    "Child entity",
    "Primary entity",
    "Foreign entity"
  ],
  "answer": "Parent entity"
},
{
  "type": "mcq",
  "question": "Which statement best describes a many-to-many (M:M) relationship?",
  "options": [
    "Many instances in one entity are related to many instances in another entity",
    "Each instance in one entity is related to exactly one instance in another entity",
    "Each parent can only have one child entity",
    "It connects attributes instead of entities"
  ],
  "answer": "Many instances in one entity are related to many instances in another entity"
},
{
  "type": "mcq",
  "question": "In an ER diagram, relationships are often labeled with:",
  "options": [
    "A short descriptive verb phrase",
    "A numeric value",
    "A noun representing the entity",
    "An arbitrary symbol"
  ],
  "answer": "A short descriptive verb phrase"
},
{
  "type": "mcq",
  "question": "In a one-to-one (1:1) relationship:",
  "options": [
    "A single record in Entity A is related to a single record in Entity B",
    "A single record in Entity A can relate to multiple records in Entity B",
    "Many records in Entity A relate to many in Entity B",
    "One record in Entity A may have no corresponding record in Entity B"
  ],
  "answer": "A single record in Entity A is related to a single record in Entity B"
},
{
  "type": "tf",
  "question": "Relationships in an ER model describe how entities are linked to one another.",
  "answer": true
},
{
  "type": "tf",
  "question": "Crow’s Foot notation is widely considered one of the least intuitive notations for ER diagrams.",
  "answer": false
},
{
  "type": "tf",
  "question": "Relationships can be thought of as verbs linking two or more nouns (entities).",
  "answer": true
},
{
  "type": "tf",
  "question": "In a one-to-many relationship, the 'many' side is referred to as the child entity.",
  "answer": true
},
{
  "type": "tf",
  "question": "In a many-to-many relationship, each record in one entity is linked to exactly one record in another entity.",
  "answer": false
},
{
  "type": "mcq",
  "question": "In an ER model, what does 'cardinality' describe?",
  "options": [
    "The number of entities that can participate in a relationship",
    "The type of attribute in an entity",
    "The order in which entities are created",
    "The naming convention for entity attributes"
  ],
  "answer": "The number of entities that can participate in a relationship"
},
{
  "type": "mcq",
  "question": "If the minimum cardinality of a relationship is zero, what does that indicate?",
  "options": [
    "Participation in the relationship is optional",
    "Participation in the relationship is mandatory",
    "There can be only one related entity",
    "The relationship must always exist"
  ],
  "answer": "Participation in the relationship is optional"
},
{
  "type": "mcq",
  "question": "What is another term for 'cardinality' in an ER model?",
  "options": [
    "Degree of the association",
    "Level of normalization",
    "Attribute domain",
    "Entity identity"
  ],
  "answer": "Degree of the association"
},
{
  "type": "mcq",
  "question": "What does maximum cardinality represent in a relationship?",
  "options": [
    "The highest number of entities that can participate in a relationship",
    "The minimum number of entities that can exist in a database",
    "The total number of attributes in an entity",
    "The unique identifier for each entity"
  ],
  "answer": "The highest number of entities that can participate in a relationship"
},
{
  "type": "mcq",
  "question": "Which notation is most commonly used to represent cardinality in ER diagrams?",
  "options": [
    "Crow’s Foot notation",
    "Chen notation",
    "UML activity notation",
    "Bachman notation"
  ],
  "answer": "Crow’s Foot notation"
},
{
  "type": "tf",
  "question": "Cardinality defines how many entities are associated with another entity in a relationship.",
  "answer": true
},
{
  "type": "tf",
  "question": "Minimum cardinality represents the fewest number of entity instances that can participate in a relationship.",
  "answer": true
},
{
  "type": "tf",
  "question": "If minimum cardinality is one or more, it indicates optional participation.",
  "answer": false
},
{
  "type": "tf",
  "question": "Maximum cardinality defines the upper limit of entities that can participate in a relationship.",
  "answer": true
},
{
  "type": "tf",
  "question": "Crow’s Foot notation is commonly used to visually represent both minimum and maximum cardinality.",
  "answer": true
},
{
  "type": "mcq",
  "question": "Which of the following is NOT a principal of effective data model design?",
  "options": [
    "The model must depend on a specific database implementation",
    "The model must be flexible to account for business changes",
    "The model must accurately reflect the real world",
    "The scope of the model must be sufficiently broad"
  ],
  "answer": "The model must depend on a specific database implementation"
},
{
  "type": "mcq",
  "question": "Which of the following is a benefit of a database in maintaining data integrity?",
  "options": [
    "Reducing redundancy and providing security",
    "Increasing data duplication for performance",
    "Allowing uncontrolled data modification",
    "Eliminating relationships between entities"
  ],
  "answer": "Reducing redundancy and providing security"
},
{
  "type": "mcq",
  "question": "Which rule is part of the First Normal Form (1NF)?",
  "options": [
    "Each attribute must contain only atomic (single) values",
    "Tables can contain repeating groups",
    "Attributes can store multiple types of data",
    "Rows do not need unique identifiers"
  ],
  "answer": "Each attribute must contain only atomic (single) values"
},
{
  "type": "mcq",
  "question": "Which characteristic makes an attribute a good primary key candidate?",
  "options": [
    "Its value is unlikely to change over time",
    "It is long and descriptive",
    "It contains multiple columns combined",
    "It changes frequently with business rules"
  ],
  "answer": "Its value is unlikely to change over time"
},
{
  "type": "mcq",
  "question": "What is denormalization used for?",
  "options": [
    "To improve database performance after normalization",
    "To enforce strict data integrity rules",
    "To remove redundant data and anomalies",
    "To reduce the scope of the data model"
  ],
  "answer": "To improve database performance after normalization"
},
{
  "type": "tf",
  "question": "A good data model must be implementation independent and work on any database system.",
  "answer": true
},
{
  "type": "tf",
  "question": "Normalization is applied to increase redundancy in a database.",
  "answer": false
},
{
  "type": "tf",
  "question": "In 1NF, each row must be uniquely identifiable, and there should be no repeating groups.",
  "answer": true
},
{
  "type": "tf",
  "question": "A primary key should be chosen based on its simplicity, stability, and shortness.",
  "answer": true
},
{
  "type": "tf",
  "question": "Denormalization decreases performance by introducing redundant data structures.",
  "answer": false
},
{
  "type": "mcq",
  "question": "What is the main role of the Database Management System (DBMS)?",
  "options": [
    "To perform back-end processing and manage database operations",
    "To provide a graphical interface for users to write SQL commands",
    "To serve as a word processing application",
    "To store application source code"
  ],
  "answer": "To perform back-end processing and manage database operations"
},
{
  "type": "mcq",
  "question": "Which of the following is an example of client software used to interact with a database server?",
  "options": [
    "SQL Server Management Studio (SSMS)",
    "Windows File Explorer",
    "Oracle Disk Manager",
    "Task Manager"
  ],
  "answer": "SQL Server Management Studio (SSMS)"
},
{
  "type": "mcq",
  "question": "Which statement best describes how SQL works in a client-server environment?",
  "options": [
    "The client sends SQL requests, and the DBMS processes and returns results",
    "The DBMS sends SQL requests, and the client executes them locally",
    "SQL commands are stored in text files and never executed",
    "The client directly accesses data files without using the server"
  ],
  "answer": "The client sends SQL requests, and the DBMS processes and returns results"
},
{
  "type": "mcq",
  "question": "Which of the following functions is performed by a SQL server?",
  "options": [
    "Stores databases and handles multiple user access safely",
    "Translates programming languages into SQL",
    "Provides a web interface for browsing the internet",
    "Compiles application code into machine language"
  ],
  "answer": "Stores databases and handles multiple user access safely"
},
{
  "type": "mcq",
  "question": "What is the purpose of a data access API in client software?",
  "options": [
    "To let the application communicate with the database server",
    "To store and back up large data files",
    "To secure hardware-level communication between computers",
    "To design user interfaces for the database"
  ],
  "answer": "To let the application communicate with the database server"
},
{
  "type": "tf",
  "question": "The DBMS is responsible for processing SQL commands and managing data storage on the server.",
  "answer": true
},
{
  "type": "tf",
  "question": "The client software performs back-end data processing while the server displays results.",
  "answer": false
},
{
  "type": "tf",
  "question": "SQL Server can handle multiple users accessing data at the same time.",
  "answer": true
},
{
  "type": "tf",
  "question": "SQL is a special language used by applications to communicate with the database.",
  "answer": true
},
{
  "type": "tf",
  "question": "SQL Server Management Studio (SSMS) is a type of DBMS software.",
  "answer": false
},
{
  "type": "mcq",
  "question": "What does SQL stand for?",
  "options": [
    "Structured Query Language",
    "Sequential Query Logic",
    "Systematic Query Library",
    "Stored Question List"
  ],
  "answer": "Structured Query Language"
},
{
  "type": "mcq",
  "question": "In a client file-handling system, where is all the processing done?",
  "options": [
    "On the client’s computer",
    "On the database server",
    "In the cloud storage",
    "Through a distributed network of servers"
  ],
  "answer": "On the client’s computer"
},
{
  "type": "mcq",
  "question": "What is a relational database based on?",
  "options": [
    "The relational model of data",
    "A document-oriented model",
    "A hierarchical structure of files",
    "A key-value pair structure"
  ],
  "answer": "The relational model of data"
},
{
  "type": "mcq",
  "question": "In a database table, what does a single row (record) represent?",
  "options": [
    "A single instance of an entity",
    "A column heading",
    "A type of relationship between tables",
    "A command in SQL"
  ],
  "answer": "A single instance of an entity"
},
{
  "type": "mcq",
  "question": "When a table has a mandatory foreign key, what rule applies?",
  "options": [
    "You cannot add a row unless there is a matching primary key in the related table",
    "The foreign key can contain any random value",
    "Rows can be added without referencing another table",
    "The foreign key column must always be empty"
  ],
  "answer": "You cannot add a row unless there is a matching primary key in the related table"
},
{
  "type": "tf",
  "question": "SQL is a common language used to ask questions and send commands to a database.",
  "answer": true
},
{
  "type": "tf",
  "question": "In a client file-handling system, the server performs most of the searching and editing work.",
  "answer": false
},
{
  "type": "tf",
  "question": "In a relational database, tables are modeled after real-world entities such as invoices or vendors.",
  "answer": true
},
{
  "type": "tf",
  "question": "Each column in a table represents an attribute of the entity.",
  "answer": true
},
{
  "type": "tf",
  "question": "A foreign key allows data to be entered into a table even if no matching primary key exists in the related table.",
  "answer": false
},
{
  "type": "mcq",
  "question": "In a Crow’s Foot ERD, what do dashed lines typically represent?",
  "options": [
    "Identifying relationships",
    "Non-identifying relationships",
    "Recursive relationships",
    "Composite relationships"
  ],
  "answer": "Non-identifying relationships"
},
{
  "type": "mcq",
  "question": "In a non-identifying relationship, what is true about the foreign key?",
  "options": [
    "It forms part of the child’s primary key",
    "It is always mandatory",
    "It does not form part of the child’s primary key",
    "It must be unique across all tables"
  ],
  "answer": "It does not form part of the child’s primary key"
},
{
  "type": "mcq",
  "question": "What does a solid line usually represent in a Crow’s Foot ERD?",
  "options": [
    "A weak relationship",
    "An identifying relationship",
    "An optional relationship",
    "A recursive relationship"
  ],
  "answer": "An identifying relationship"
},
{
  "type": "mcq",
  "question": "Which statement best describes an identifying relationship?",
  "options": [
    "The child’s identity depends on the parent, and the parent’s key is part of the child’s primary key",
    "The child’s identity is independent of the parent",
    "The relationship is always optional",
    "The foreign key can be null"
  ],
  "answer": "The child’s identity depends on the parent, and the parent’s key is part of the child’s primary key"
},
{
  "type": "mcq",
  "question": "In Visual Paradigm, a dashed line between Artist and Artwork means:",
  "options": [
    "The Artwork entity’s identity depends on the Artist’s key",
    "The Artwork entity has a foreign key but it’s not part of its primary key",
    "The Artwork entity cannot exist without the Artist",
    "The relationship is recursive"
  ],
  "answer": "The Artwork entity has a foreign key but it’s not part of its primary key"
},
{
  "type": "tf",
  "question": "Dashed lines in an ERD often represent non-identifying relationships.",
  "answer": true
},
{
  "type": "tf",
  "question": "Solid lines in an ERD indicate that the foreign key is not part of the child’s primary key.",
  "answer": false
},
{
  "type": "tf",
  "question": "Optional participation in a relationship can be shown using dashed lines.",
  "answer": true
},
{
  "type": "tf",
  "question": "In an identifying relationship, the child entity’s primary key includes the parent’s primary key.",
  "answer": true
},
{
  "type": "tf",
  "question": "In Visual Paradigm, dashed lines always mean recursive relationships.",
  "answer": false
},
{
  "type": "mcq",
  "question": "Which of the following is a key rule of First Normal Form (1NF)?",
  "options": [
    "All attributes must contain atomic (single) values",
    "Each table must have at least one repeating group",
    "Columns can contain multiple types of data",
    "Row order must be preserved to maintain integrity"
  ],
  "answer": "All attributes must contain atomic (single) values"
},
{
  "type": "mcq",
  "question": "In 1NF, values in a column should:",
  "options": [
    "Be of the same domain (type)",
    "Contain mixed data types",
    "Allow arrays or lists",
    "Depend on the order of storage"
  ],
  "answer": "Be of the same domain (type)"
},
{
  "type": "mcq",
  "question": "What is a major focus of 1NF when designing a table?",
  "options": [
    "Recognize and remove repeating groups",
    "Add redundant data for faster queries",
    "Combine multiple entities into one table",
    "Store multiple values in a single column"
  ],
  "answer": "Recognize and remove repeating groups"
},
{
  "type": "mcq",
  "question": "In 1NF, how should each row in a table be identified?",
  "options": [
    "Uniquely identifiable by some attribute or combination of attributes",
    "By the order in which the rows are inserted",
    "By the number of columns in the table",
    "By repeating group values"
  ],
  "answer": "Uniquely identifiable by some attribute or combination of attributes"
},
{
  "type": "mcq",
  "question": "Which of the following is NOT required in 1NF?",
  "options": [
    "All columns have unique names",
    "Rows are uniquely identifiable",
    "Data is free of repeating groups",
    "Tables must have foreign keys"
  ],
  "answer": "Tables must have foreign keys"
},
{
  "type": "tf",
  "question": "1NF requires that each column contains only atomic (single) values.",
  "answer": true
},
{
  "type": "tf",
  "question": "Repeating groups in a table are allowed in 1NF.",
  "answer": false
},
{
  "type": "tf",
  "question": "In 1NF, the order in which data is stored does not matter.",
  "answer": true
},
{
  "type": "tf",
  "question": "Each row in a 1NF table must be uniquely identifiable.",
  "answer": true
},
{
  "type": "tf",
  "question": "Columns in a 1NF table can have duplicate names as long as rows are unique.",
  "answer": false
},
{
  "type": "mcq",
  "question": "What is required for a table to be in Second Normal Form (2NF)?",
  "options": [
    "It must first be in 1NF and all non-key attributes must depend on the whole primary key",
    "It must allow repeating groups for multi-valued attributes",
    "It must remove all primary keys",
    "It must contain only one row per table"
  ],
  "answer": "It must first be in 1NF and all non-key attributes must depend on the whole primary key"
},
{
  "type": "mcq",
  "question": "Which problem does 2NF address that 1NF does not?",
  "options": [
    "Partial dependency of non-key attributes on part of a composite primary key",
    "Repeating groups in a table",
    "Non-atomic values in a column",
    "Rows that are not uniquely identifiable"
  ],
  "answer": "Partial dependency of non-key attributes on part of a composite primary key"
},
{
  "type": "mcq",
  "question": "Third Normal Form (3NF) requires that:",
  "options": [
    "It is in 2NF and all attributes are only dependent on the primary key, not on other non-key attributes",
    "It contains no primary keys",
    "All tables are merged into one table",
    "All columns can have multi-valued attributes"
  ],
  "answer": "It is in 2NF and all attributes are only dependent on the primary key, not on other non-key attributes"
},
{
  "type": "mcq",
  "question": "A transitive dependency occurs when:",
  "options": [
    "A non-key attribute depends on another non-key attribute",
    "A row contains repeating groups",
    "A column stores multiple values",
    "A primary key is missing from the table"
  ],
  "answer": "A non-key attribute depends on another non-key attribute"
},
{
  "type": "mcq",
  "question": "Which of the following is a goal of 3NF?",
  "options": [
    "Eliminate transitive dependencies to reduce redundancy",
    "Allow partial dependencies for composite keys",
    "Store multiple entities in one table",
    "Permit multi-valued attributes"
  ],
  "answer": "Eliminate transitive dependencies to reduce redundancy"
},
{
  "type": "tf",
  "question": "A table must be in 1NF before it can be in 2NF.",
  "answer": true
},
{
  "type": "tf",
  "question": "2NF eliminates partial dependencies of non-key attributes on a composite primary key.",
  "answer": true
},
{
  "type": "tf",
  "question": "3NF allows non-key attributes to depend on other non-key attributes.",
  "answer": false
},
{
  "type": "tf",
  "question": "Transitive dependency is a concept addressed in 3NF.",
  "answer": true
},
{
  "type": "tf",
  "question": "In 2NF, single-column primary keys still require checking for transitive dependencies.",
  "answer": false
},
{
  "type": "mcq",
  "question": "One of the main benefits of Second Normal Form (2NF) is:",
  "options": [
    "Avoiding data redundancy by storing each piece of data only once",
    "Allowing repeating groups for convenience",
    "Combining multiple tables into a single table",
    "Storing multiple values in one column"
  ],
  "answer": "Avoiding data redundancy by storing each piece of data only once"
},
{
  "type": "mcq",
  "question": "How does 2NF help ensure data integrity?",
  "options": [
    "By preventing anomalies in insertion, deletion, or updates",
    "By permitting partial dependencies",
    "By merging unrelated entities",
    "By storing duplicate data in multiple tables"
  ],
  "answer": "By preventing anomalies in insertion, deletion, or updates"
},
{
  "type": "mcq",
  "question": "Which of the following scenarios illustrates 2NF avoiding redundancy?",
  "options": [
    "Storing an instructor’s name only once in a separate Instructor table rather than repeating it in every enrollment record",
    "Storing multiple instructors’ names in a single column in the enrollment table",
    "Repeating all course details in each student record",
    "Storing all data in one massive table without keys"
  ],
  "answer": "Storing an instructor’s name only once in a separate Instructor table rather than repeating it in every enrollment record"
},
{
  "type": "mcq",
  "question": "2NF is primarily concerned with:",
  "options": [
    "Eliminating partial dependencies on a composite primary key",
    "Eliminating transitive dependencies",
    "Allowing non-atomic values in columns",
    "Removing primary keys from tables"
  ],
  "answer": "Eliminating partial dependencies on a composite primary key"
},
{
  "type": "mcq",
  "question": "Which normalization form comes after 2NF and addresses transitive dependencies?",
  "options": [
    "Third Normal Form (3NF)",
    "First Normal Form (1NF)",
    "Fourth Normal Form (4NF)",
    "Boyce-Codd Normal Form (BCNF)"
  ],
  "answer": "Third Normal Form (3NF)"
},
{
  "type": "tf",
  "question": "2NF helps prevent data anomalies by ensuring that each piece of data is stored in only one place.",
  "answer": true
},
{
  "type": "tf",
  "question": "2NF allows partial dependency of non-key attributes on part of a composite key.",
  "answer": false
},
{
  "type": "tf",
  "question": "One benefit of 2NF is avoiding repeated storage of data such as instructor names in multiple rows.",
  "answer": true
},
{
  "type": "tf",
  "question": "Third Normal Form (3NF) addresses transitive dependencies that 2NF does not.",
  "answer": true
},
{
  "type": "tf",
  "question": "2NF focuses on eliminating transitive dependencies between non-key attributes.",
  "answer": false
},
{
  "type": "mcq",
  "question": "What is a transitive dependency in a table?",
  "options": [
    "When a non-key attribute depends on another non-key attribute through an intermediate attribute",
    "When a primary key depends on a foreign key",
    "When an attribute has multiple values in a single column",
    "When rows are not uniquely identifiable"
  ],
  "answer": "When a non-key attribute depends on another non-key attribute through an intermediate attribute"
},
{
  "type": "mcq",
  "question": "Which normalization form is specifically designed to remove transitive dependencies?",
  "options": [
    "Third Normal Form (3NF)",
    "First Normal Form (1NF)",
    "Second Normal Form (2NF)",
    "Boyce-Codd Normal Form (BCNF)"
  ],
  "answer": "Third Normal Form (3NF)"
},
{
  "type": "mcq",
  "question": "In 3NF, non-key attributes should:",
  "options": [
    "Depend only on the primary key",
    "Depend on other non-key attributes",
    "Contain multi-valued data",
    "Be part of a repeating group"
  ],
  "answer": "Depend only on the primary key"
},
{
  "type": "mcq",
  "question": "Why should transitive dependencies be removed from a table?",
  "options": [
    "To prevent redundancy and maintain data integrity",
    "To allow non-key attributes to depend on each other",
    "To merge multiple tables into one",
    "To store duplicate values for performance"
  ],
  "answer": "To prevent redundancy and maintain data integrity"
},
{
  "type": "mcq",
  "question": "Which of the following is an example of a transitive dependency?",
  "options": [
    "City depends on ZIP code, and ZIP code depends on CustomerID",
    "CustomerID directly determines Name",
    "EmployeeID is the primary key",
    "Table contains atomic values only"
  ],
  "answer": "City depends on ZIP code, and ZIP code depends on CustomerID"
},
{
  "type": "tf",
  "question": "A transitive dependency occurs when a non-key attribute depends on another non-key attribute.",
  "answer": true
},
{
  "type": "tf",
  "question": "3NF requires that all non-key attributes depend only on the primary key.",
  "answer": true
},
{
  "type": "tf",
  "question": "In 3NF, it is acceptable for a non-key attribute to determine another non-key attribute.",
  "answer": false
},
{
  "type": "tf",
  "question": "Removing transitive dependencies helps reduce redundancy and improve data integrity.",
  "answer": true
},
{
  "type": "tf",
  "question": "Transitive dependency is the same as a partial dependency on a composite key.",
  "answer": false
}
],
Nov05webdesignquiz:[
  {
    "type": "mcq",
    "question": "What is a key characteristic of a fluid or liquid layout in web design?",
    "options": [
      "It automatically centers all elements on the page",
      "It adjusts based on the browser viewport using percentage widths",
      "It prevents elements from resizing when the window changes",
      "It uses fixed pixel widths for all containers"
    ],
    "answer": "It adjusts based on the browser viewport using percentage widths"
  },
  {
    "type": "mcq",
    "question": "Which CSS property can be applied to a parent container to create a Block Formatting Context (BFC)?",
    "options": [
      "float: left;",
      "overflow: auto;",
      "display: block;",
      "position: relative;"
    ],
    "answer": "overflow: auto;"
  },
  {
    "type": "mcq",
    "question": "What does the CSS property clear: both; typically fix in a layout?",
    "options": [
      "It removes all margins from floated elements",
      "It hides overflowing content",
      "It forces a footer to stay below floated elements",
      "It centers text within an element"
    ],
    "answer": "It forces a footer to stay below floated elements"
  },
  {
    "type": "tf",
    "question": "A Block Formatting Context (BFC) ensures that floated elements inside a container are included in its height calculation.",
    "answer": true
  },
  {
    "type": "tf",
    "question": "Using overflow: hidden; on a container will always show scrollbars when content overflows.",
    "answer": false
  },
  {
    "type": "mcq",
    "question": "What does it mean when elements are nested in HTML?",
    "options": [
      "Elements are displayed side by side",
      "One element is contained within another element",
      "Elements are linked to external websites",
      "Elements are styled using CSS"
    ],
    "answer": "One element is contained within another element"
  },
  {
    "type": "mcq",
    "question": "In the normal flow of a document, how do block and inline elements render by default?",
    "options": [
      "Block elements stack vertically; inline elements flow left to right and wrap",
      "Block elements float left; inline elements float right",
      "Block elements are hidden; inline elements are shown",
      "Block elements display inline; inline elements stack vertically"
    ],
    "answer": "Block elements stack vertically; inline elements flow left to right and wrap"
  },
  {
    "type": "mcq",
    "question": "Which type of link points to a page on your own website relative to the current page?",
    "options": [
      "Absolute link",
      "Relative link",
      "External link",
      "Anchor link"
    ],
    "answer": "Relative link"
  },
  {
    "type": "tf",
    "question": "An absolute link in HTML points to a page on a different website.",
    "answer": true
  },
  {
    "type": "tf",
    "question": "Using '../' in a relative link moves you down one level in the folder structure.",
    "answer": false
  },
  {
    "type": "mcq",
    "question": "What attribute is required to create a named location (fragment identifier) in HTML?",
    "options": [
      "class",
      "id",
      "href",
      "src"
    ],
    "answer": "id"
  },
  {
    "type": "mcq",
    "question": "How do you link to a named location on another page?",
    "options": [
      "<a href=\"#top\">Back to Top</a>",
      "<a href=\"page2.html#info\">Go to info on p. 2</a>",
      "<a href=\"mailto:info@site.com\">Email</a>",
      "<a href=\"JamesTKirk.jpg\">Kirk Photo</a>"
    ],
    "answer": "<a href=\"page2.html#info\">Go to info on p. 2</a>"
  },
  {
    "type": "mcq",
    "question": "How can an image be used as a clickable link in HTML?",
    "options": [
      "Wrap the image tag inside an anchor tag <a>…</a>",
      "Use the image’s alt attribute to point to a URL",
      "Set the image’s src attribute to the target page",
      "Use CSS background-image property"
    ],
    "answer": "Wrap the image tag inside an anchor tag <a>…</a>"
  },
  {
    "type": "tf",
    "question": "You can create clickable email links in HTML using the mailto: protocol in the href attribute.",
    "answer": true
  },
  {
    "type": "tf",
    "question": "To link to a named location on the same page, you must always include the page filename in the href.",
    "answer": false
  },
  {
  "type": "mcq",
    "question": "Which CSS pseudo-class is used to style a link when the mouse hovers over it?",
    "options": [
      "a:visited",
      "a:hover",
      "a:active",
      "a:link"
    ],
    "answer": "a:hover"
  },
  {
    "type": "mcq",
    "question":"In CSS, what order should link pseudo-classes be written to ensure proper styling?",
    "options": [
      "a:link, a:visited, a:hover, a:active",
      "a:hover, a:link, a:visited, a:active",
      "a:active, a:hover, a:link, a:visited",
      "a:visited, a:link, a:hover, a:active"
    ],
    "answer": "a:link, a:visited, a:hover, a:active"
  },
  {
    "type": "mcq",
    "question": "Which pseudo-class styles a link that has already been clicked by the user?",
    "options": [
      "a:active",
      "a:hover",
      "a:visited",
      "a:link"
    ],
    "answer": "a:visited"
  },
  {
    "type": "tf",
    "question": "The a:active pseudo-class should be written after a:hover in the CSS rules.",
    "answer": true
  },
  {
    "type": "tf",
    "question": "The a:hover pseudo-class can be placed before a:link without affecting link behavior.",
    "answer": false
  }
],
Nov14ProgrammingQuiz:[
  {
  "type": "mcq",
  "question": "Which statement best describes an algorithm?",
  "options": [
    "A graphical representation of program logic",
    "A finite, step-by-step procedure for solving a problem",
    "A data type used to store values",
    "A hardware instruction used by the CPU"
  ],
  "answer": "A finite, step-by-step procedure for solving a problem"
},
{
  "type": "mcq",
  "question": "What does 'flow of control' represent in programming?",
  "options": [
    "The amount of memory required by the program",
    "The order in which program statements are executed",
    "The number of variables created in the program",
    "The type of compiler used to run the program"
  ],
  "answer": "The order in which program statements are executed"
},
{
  "type": "mcq",
  "question": "How do sequential statements behave in a program?",
  "options": [
    "They execute only if a condition is true",
    "They execute in the order they appear",
    "They execute randomly depending on system load",
    "They execute only when called by another function"
  ],
  "answer": "They execute in the order they appear"
},
{
  "type": "mcq",
  "question": "What is the main purpose of a selection statement?",
  "options": [
    "To repeat a block of code multiple times",
    "To decide whether a block of code executes based on a condition",
    "To organize data into logical groups",
    "To convert data types during execution"
  ],
  "answer": "To decide whether a block of code executes based on a condition"
},
{
  "type": "mcq",
  "question": "Which expression can be used as a condition in a selection statement?",
  "options": [
    "Any expression that evaluates to a Boolean value",
    "Only arithmetic equations",
    "Only variables with integer data types",
    "Only string comparison operations"
  ],
  "answer": "Any expression that evaluates to a Boolean value"
},
{
  "type": "mcq",
  "question": "What does the ternary operator return?",
  "options": [
    "A value based on whether the condition is true or false",
    "Always a Boolean value",
    "Only integer values",
    "A reference to a method"
  ],
  "answer": "A value based on whether the condition is true or false"
},
{
  "type": "mcq",
  "question": "What is the purpose of the ternary operator in C#?",
  "options": [
    "To use a conditional statement as an expression",
    "To replace all if statements",
    "To declare multiple variables at once",
    "To perform arithmetic operations"
  ],
  "answer": "To use a conditional statement as an expression"
},
{
  "type": "mcq",
  "question": "Which of the following is a valid ternary operator expression?",
  "options": [
    "int x = if (a > b) 1 else 2;",
    "int x = (a > b) ? 1 : 2;",
    "int x = a > b : 1 ? 2;",
    "int x = (a > b ? : 1 2);"
  ],
  "answer": "int x = (a > b) ? 1 : 2;"
},
{
  "type": "mcq",
  "question": "What does the expression (x == 0) ? \"Zero\" : \"Non-zero\" return?",
  "options": [
    "\"Zero\" if x equals 0, otherwise \"Non-zero\"",
    "\"Non-zero\" if x equals 0, otherwise \"Zero\"",
    "It always returns \"Zero\"",
    "It will cause a compilation error"
  ],
  "answer": "\"Zero\" if x equals 0, otherwise \"Non-zero\""
},
{
  "type": "mcq",
  "question": "Which of the following statements about the ternary operator is true?",
  "options": [
    "It can take four operands",
    "It can be used where a value is expected",
    "It can replace all loops",
    "It cannot be used inside an assignment"
  ],
  "answer": "It can be used where a value is expected"
},
{
  "type": "mcq",
  "question": "Which part of the ternary operator determines which value is chosen?",
  "options": [
    "The second value after the colon",
    "The Boolean condition before the question mark",
    "The parentheses surrounding the expression",
    "The type of the assigned variable"
  ],
  "answer": "The Boolean condition before the question mark"
},
{
  "type": "mcq",
  "question": "Which operator is the only ternary operator in C#?",
  "options": [
    "?:",
    "++",
    "&&",
    "="
  ],
  "answer": "?:"
},
{
  "type": "mcq",
  "question": "Why can't a regular if statement be used as a value in C#?",
  "options": [
    "Because if statements do not produce a value",
    "Because C# does not support conditional logic",
    "Because if statements must end with a semicolon",
    "Because only loops can be used as values"
  ],
  "answer": "Because if statements do not produce a value"
},
{
  "type": "mcq",
  "question": "Which expression correctly assigns a string using the ternary operator?",
  "options": [
    "string msg = (x > 10) ? \"High\" : \"Low\";",
    "string msg = if (x > 10) \"High\" else \"Low\";",
    "string msg = (x > 10 : ? \"High\" \"Low\");",
    "string msg = x > 10 ? : \"High\" \"Low\";"
  ],
  "answer": "string msg = (x > 10) ? \"High\" : \"Low\";"
},
{
  "type": "mcq",
  "question": "What is the primary purpose of pseudocode?",
  "options": [
    "To help you think through an algorithm without worrying about syntax",
    "To visually represent program flow",
    "To compile C# programs directly",
    "To optimize program performance"
  ],
  "answer": "To help you think through an algorithm without worrying about syntax"
},
{
  "type": "mcq",
  "question": "Which statement accurately describes pseudocode?",
  "options": [
    "It is a formal programming language used by compilers",
    "It is similar to everyday English and is not an actual programming language",
    "It can only be used for UML diagrams",
    "It is required for all C# programs to run"
  ],
  "answer": "It is similar to everyday English and is not an actual programming language"
},
{
  "type": "mcq",
  "question": "What does a flowchart primarily model?",
  "options": [
    "The visual structure of a database",
    "The flow of control in a program",
    "The memory allocation of a program",
    "The syntax of a programming language"
  ],
  "answer": "The flow of control in a program"
},
{
  "type": "mcq",
  "question": "What is UML best described as?",
  "options": [
    "A type of pseudocode used for algorithm planning",
    "A method for compiling code into machine language",
    "A visual modelling language that includes 14 different diagram types",
    "A flowchart tool used only for C# development"
  ],
  "answer": "A visual modelling language that includes 14 different diagram types"
},
{
  "type": "mcq",
  "question": "Why is pseudocode especially useful before writing a C# program?",
  "options": [
    "It allows programmers to test code execution directly",
    "It automatically generates UML diagrams",
    "It replaces the need for writing actual code",
    "It helps simplify algorithm design before applying strict syntax rules"
  ],
  "answer": "It helps simplify algorithm design before applying strict syntax rules"
},
{
  "type": "mcq",
  "question": "Which of the following best defines a loop in programming?",
  "options": [
    "A block that repeats code as long as a condition is true",
    "A statement that only declares variables",
    "A data structure for storing key-value pairs",
    "A method for compiling source code"
  ],
  "answer": "A block that repeats code as long as a condition is true"
},
{
  "type": "mcq",
  "question": "When is the condition of a while loop evaluated?",
  "options": [
    "After each execution of the loop body",
    "Before the loop body is executed",
    "Only once at program start",
    "Only when a break is encountered"
  ],
  "answer": "Before the loop body is executed"
},
{
  "type": "mcq",
  "question": "Which statement about a do-while loop is correct?",
  "options": [
    "The condition is checked before the first execution",
    "It cannot use break or continue",
    "The loop body always runs at least once",
    "It is identical to a for loop"
  ],
  "answer": "The loop body always runs at least once"
},
{
  "type": "mcq",
  "question": "What must you ensure to avoid an infinite while loop?",
  "options": [
    "That the loop body never executes",
    "That the loop variable is declared outside the loop",
    "That the condition is always true",
    "That the loop body eventually makes the condition false"
  ],
  "answer": "That the loop body eventually makes the condition false"
},
{
  "type": "mcq",
  "question": "Which loop structure is most appropriate when you know exactly how many times to iterate?",
  "options": [
    "while loop",
    "do-while loop",
    "for loop",
    "recursive call"
  ],
  "answer": "for loop"
},
{
  "type": "mcq",
  "question": "Which part of a for loop is responsible for updating the loop control variable after each iteration?",
  "options": [
    "Initialization",
    "Condition",
    "Increment",
    "Declaration"
  ],
  "answer": "Increment"
},
{
  "type": "mcq",
  "question": "What effect does the break statement have when used inside a loop?",
  "options": [
    "It skips the remainder of the current iteration and continues",
    "It immediately exits the loop and transfers control after the loop",
    "It restarts the loop from the first iteration",
    "It converts the loop to a recursive call"
  ],
  "answer": "It immediately exits the loop and transfers control after the loop"
},
{
  "type": "mcq",
  "question": "What does the continue statement do inside a loop?",
  "options": [
    "Terminates the program",
    "Exits the loop immediately",
    "Restarts the program from the beginning",
    "Skips the rest of the current iteration and checks the loop condition for the next iteration"
  ],
  "answer": "Skips the rest of the current iteration and checks the loop condition for the next iteration"
},
{
  "type": "mcq",
  "question": "Which of the following describes while(true) in typical usage?",
  "options": [
    "A conditional loop that runs only if a variable is true",
    "An infinite loop that continues until interrupted (for example by break)",
    "A loop that executes exactly once",
    "A compile-time directive"
  ],
  "answer": "An infinite loop that continues until interrupted (for example by break)"
},
{
  "type": "mcq",
  "question": "When is the condition evaluated in a do-while loop compared to a while loop?",
  "options": [
    "It is never evaluated",
    "It is evaluated before the first iteration like a while loop",
    "It is evaluated after the loop body executes, unlike a while loop",
    "It is evaluated only if a continue is used"
  ],
  "answer": "It is evaluated after the loop body executes, unlike a while loop"
},
{
  "type": "mcq",
  "question": "What does the following code output?\n\nfor (int i = 1; i <= 3; i++)\n{\n    for (int j = 1; j <= i; j++)\n    {\n        Console.Write(j);\n    }\n}",
  "options": [
    "112123",
    "123",
    "111222333",
    "123123"
  ],
  "answer": "112123"
},
{
  "type": "mcq",
  "question": "What will be printed by this code?\n\nint i = 0;\nwhile (i < 5)\n{\n    i++;\n    if (i % 2 == 0)\n        continue;\n    Console.Write(i);\n}",
  "options": [
    "12345",
    "246",
    "135",
    "12"
  ],
  "answer": "135"
},
{
  "type": "mcq",
  "question": "What does this code output?\n\nint sum = 0;\nfor (int i = 1; i <= 4; i++)\n{\n    for (int j = i; j <= 4; j++)\n    {\n        sum += 1;\n    }\n}\nConsole.Write(sum);",
  "options": [
    "12",
    "16",
    "8",
    "10"
  ],
  "answer": "10"
},
{
  "type": "mcq",
  "question": "What happens when this code runs?\n\nint i = 0;\ndo\n{\n    i++;\n    if (i == 3)\n        break;\n    Console.Write(i);\n} while (i < 5);",
  "options": [
    "1",
    "12345",
    "12",
    "Infinite loop"
  ],
  "answer": "12"
},
{
  "type": "mcq",
  "question": "What will this code print?\n\nfor (int i = 0; i < 3; i++)\n{\n    for (int j = 0; j < 3; j++)\n    {\n        if (i == j) continue;\n        Console.Write(i + \"\" + j + \" \");\n    }\n}",
  "options": [
    "01 02 10 12 20 21 ",
    "00 11 22 ",
    "01 12 20 ",
    "01 02 12 21 20 "
  ],
  "answer": "01 02 10 12 20 21 "
},
{
  "type": "mcq",
  "question": "Which of the following best defines a function in programming?",
  "options": [
    "A reusable block of code that performs a specific task",
    "A loop that repeats a block of code",
    "A variable that stores multiple values",
    "A compiler directive"
  ],
  "answer": "A reusable block of code that performs a specific task"
},
{
  "type": "mcq",
  "question": "When is a function executed?",
  "options": [
    "Automatically at program start",
    "Only when a loop reaches it",
    "Only when it is called",
    "Continuously throughout the program"
  ],
  "answer": "Only when it is called"
},
{
  "type": "mcq",
  "question": "Which of the following is NOT a common alternative name for functions?",
  "options": [
    "Method",
    "Subroutine",
    "Procedure",
    "Classifier"
  ],
  "answer": "Classifier"
},
{
  "type": "mcq",
  "question": "What happens when a function is called?",
  "options": [
    "Flow of control jumps to the function, executes it, and returns to the call point",
    "The program pauses until the function is deleted",
    "The function executes in parallel without returning control",
    "Flow of control ignores the function and continues"
  ],
  "answer": "Flow of control jumps to the function, executes it, and returns to the call point"
},
{
  "type": "mcq",
  "question": "Which of the following is part of the basic structure of a C# function?",
  "options": [
    "Return type, function name, and parameters",
    "Loop variable, conditional statement, and return",
    "Class name, object type, and message",
    "Namespace, enumeration, and property"
  ],
  "answer": "Return type, function name, and parameters"
},
{
  "type": "mcq",
  "question": "What is the purpose of parameters in a function?",
  "options": [
    "They act as placeholders for values provided when calling the function",
    "They store global variables for the program",
    "They define the return type of the function",
    "They are used to pause program execution"
  ],
  "answer": "They act as placeholders for values provided when calling the function"
},
{
  "type": "mcq",
  "question": "By default, how are parameters passed to functions in C#?",
  "options": [
    "By value",
    "By reference using the ref keyword",
    "By read-only reference using in",
    "By output reference using out"
  ],
  "answer": "By value"
},
{
  "type": "mcq",
  "question": "Which keyword allows a function to modify the original variable passed in?",
  "options": [ 
    "in",
    "out",
    "ref",
    "val"
  ],
  "answer": "ref"
},
{
  "type": "mcq",
  "question": "What is the purpose of the in keyword when passing a parameter?",
  "options": [
    "To pass the parameter by reference in a read-only way",
    "To initialize a parameter inside the method",
    "To make the parameter optional",
    "To allow the parameter to be modified"
  ],
  "answer": "To pass the parameter by reference in a read-only way"
},
{
  "type": "mcq",
  "question": "Which of the following is true about out parameters?",
  "options": [
    "They must be initialized before passing and cannot be modified",
    "They must be assigned a value inside the method but do not need to be initialized before being passed",
    "They cannot be modified inside the method", 
    "They are the same as in parameters"
  ],
  "answer": "They must be assigned a value inside the method but do not need to be initialized before being passed"
},
{
  "type": "mcq",
  "question": "What will be printed by this code?\n\nvoid Increment(int x) {\n    x++;\n}\n\nint a = 5;\nIncrement(a);\nConsole.WriteLine(a);",
  "options": [
    "5",
    "6",
    "Error",
    "0"
  ],
  "answer": "5"
},
{
  "type": "mcq",
  "question": "What will this code output?\n\nvoid Increment(ref int x) {\n    x++;\n}\n\nint a = 5;\nIncrement(ref a);\nConsole.WriteLine(a);",
  "options": [
    "0",
    "5",
    "Error",
    "6"
  ],
  "answer": "6"
},
{
  "type": "mcq",
  "question": "What happens if you try to call this function?\n\nvoid SetValue(out int x) {\n    x = 10;\n}\n\nint a;\nSetValue(out a);\nConsole.WriteLine(a);",
  "options": [
    "10",
    "0",
    "Error: a not initialized",
    "Nothing"
  ],
  "answer": "10"
},
{
  "type": "mcq",
  "question": "What will this code print?\n\nvoid Modify(in int x) {\n    // x++;\n    Console.Write(x);\n}\n\nint a = 3;\nModify(a);",
  "options": [
    "4",
    "3",
    "Error",
    "0"
  ],
  "answer": "3"
},
{
  "type": "mcq",
  "question": "What is printed by this code?\n\nvoid Swap(ref int a, ref int b) {\n    int temp = a;\n    a = b;\n    b = temp;\n}\n\nint x = 1, y = 2;\nSwap(ref x, ref y);\nConsole.WriteLine(x + \",\" + y);",
  "options": [
    "2,1",
    "1,2",
    "1,1",
    "2,2"
  ],
  "answer": "2,1"
},
{
  "type": "mcq",
  "question": "What does this code output?\n\nvoid Test(int a, out int b) {\n    b = a * 2;\n}\n\nint x = 3;\nint y;\nTest(x, out y);\nConsole.WriteLine(y);",
  "options": [
    "0",
    "3",
    "6",
    "Error"
  ],
  "answer": "6"
},
{
  "type": "mcq",
  "question": "What will be printed?\n\nvoid ChangeValue(int x) {\n    x = x + 5;\n}\n\nint a = 7;\nChangeValue(a);\nConsole.WriteLine(a);",
  "options": [
    "7",
    "12",
    "5",
    "Error"
  ],
  "answer": "7"
},
{
  "type": "mcq",
  "question": "What is the output of this code?\n\nvoid Double(ref int x) {\n    x *= 2;\n}\n\nint n = 4;\nDouble(ref n);\nConsole.WriteLine(n);",
  "options": [
    "0",
    "4",
    "8",
    "Error"
  ],
  "answer": "8"
},
{
  "type": "mcq",
  "question": "What happens when you run this?\n\nvoid AssignValues(out int a, out int b) {\n    a = 1;\n    b = 2;\n}\n\nint x, y;\nAssignValues(out x, out y);\nConsole.WriteLine(x + y);",
  "options": [
    "3",
    "0",
    "12",
    "Error"
  ],
  "answer": "3"
},
{
  "type": "mcq",
  "question": "Which line will cause an error?\n\nvoid Foo(int a, in int b, ref int c, out int d) {\n    // a++; // ok\n    // b++; // ???\n    c++; // ok\n    d = 5; // ok\n}\n\nint x = 1, y = 2, z = 3, w;\nFoo(x, in y, ref z, out w);",
  "options": [
    "a++;",
    "c++;",
    "d = 5;",
    "b++;"
  ],
  "answer": "b++;"
},
{
  "type": "mcq",
  "question": "What is a method signature in C#?",
  "options": [
    "The function name together with its parameter list",
    "The return type of a function",
    "The access modifier and function name",
    "The class name containing the function"
  ],
  "answer": "The function name together with its parameter list"
},
{
  "type": "mcq",
  "question": "What is method overloading?",
  "options": [
    "Using a function with the same name in different classes",
    "Having two or more functions with the same name but different parameter lists",
    "Creating a function that calls itself recursively",
    "Overriding a function in a subclass"
  ],
  "answer": "Having two or more functions with the same name but different parameter lists"
},
{
  "type": "mcq",
  "question": "Which of the following is NOT a valid way to differentiate overloaded methods?",
  "options": [
    "Changing the number of parameters",
    "Changing the order of parameters",
    "Changing the data types of parameters",
    "Changing only the return type"
  ],
  "answer": "Changing only the return type"
},
{
  "type": "mcq",
  "question": "Why is method overloading useful?",
  "options": [
    "It simplifies code and improves readability",
    "It automatically generates default values for parameters",
    "It prevents infinite loops",
    "It allows functions to be called without parentheses"
  ],
  "answer": "It simplifies code and improves readability"
},
{
  "type": "mcq",
  "question": "Can overloaded methods have different return types?",
  "options": [
    "Yes, but only if their parameter lists are different",
    "Yes, regardless of parameter lists",
    "No, return types must always be the same",
    "No, C# does not allow overloading at all"
  ],
  "answer": "Yes, but only if their parameter lists are different"
},
{
  "type": "mcq",
  "question": "What does this code print?\n\nvoid Print(int x) {\n    Console.WriteLine(\"Int: \" + x);\n}\n\nvoid Print(string s) {\n    Console.WriteLine(\"String: \" + s);\n}\n\nPrint(5);\nPrint(\"Hello\");",
  "options": [
    "Int: 5\nString: Hello",
    "String: 5\nInt: Hello",
    "Int: 5\nInt: Hello",
    "Hello\n5"
  ],
  "answer": "Int: 5\nString: Hello"
},
{
  "type": "mcq",
  "question": "Which method will be called?\n\nvoid Display(int x, string y) { Console.WriteLine(\"A\"); }\nvoid Display(string y, int x) { Console.WriteLine(\"B\"); }\n\nDisplay(\"Test\", 10);",
  "options": [
    "A",
    "B",
    "Error",
    "Nothing"
  ],
  "answer": "B"
},
{
  "type": "mcq",
  "question": "What is printed by this code?\n\nint Add(int a, int b) { return a + b; }\ndouble Add(double a, double b) { return a + b; }\n\nConsole.WriteLine(Add(2, 3));\nConsole.WriteLine(Add(2.5, 3.5));",
  "options": [
    "5\n6",
    "5\n5",
    "2\n5",
    "Error"
  ],
  "answer": "5\n6"
},
{
  "type": "mcq",
  "question": "Which overloaded method is called?\n\nvoid Show(int x, int y) { Console.WriteLine(\"X\"); }\nvoid Show(int x) { Console.WriteLine(\"Y\"); }\n\nShow(10);",
  "options": [
    "Error",
    "Y",
    "X",
    "Nothing"
  ],
  "answer": "Y"
},
{
  "type": "mcq",
  "question": "What will this code output?\n\nvoid Print(int a, double b) { Console.WriteLine(\"First\"); }\nvoid Print(double a, int b) { Console.WriteLine(\"Second\"); }\n\nPrint(5, 5);",
  "options": [
    "First",
    "Second",
    "Error: ambiguous call",
    "Nothing"
  ],
  "answer": "First"
},
{
  "type": "mcq",
  "question": "What happens when a function with optional parameters is called without specifying some arguments?",
  "options": [
    "The default values provided in the function definition are used",
    "An error occurs",
    "The function skips execution",
    "The parameters are automatically set to null"
  ],
  "answer": "The default values provided in the function definition are used"
},
{
  "type": "mcq",
  "question": "Where must optional parameters be placed in the parameter list of a function?",
  "options": [
    "At the beginning of the parameter list",
    "In the middle of the parameter list",
    "At the end of the parameter list",
    "Anywhere in the parameter list"
  ],
  "answer": "At the end of the parameter list"
},
{
  "type": "mcq",
  "question": "Why are optional parameters useful?",
  "options": [
    "They keep code concise and simplify maintenance by reducing the need for multiple method definitions",
    "They force all arguments to be specified",
    "They automatically generate overloaded methods",
    "They prevent functions from being called incorrectly"
  ],
  "answer": "They keep code concise and simplify maintenance by reducing the need for multiple method definitions"
},
{
  "type": "mcq",
  "question": "When is method overloading preferred over optional parameters?",
  "options": [
    "When only one optional parameter exists",
    "When each method variation requires different parameter types or significantly different logic",
    "When all parameters have default values",
    "When the function has no parameters"
  ],
  "answer": "When each method variation requires different parameter types or significantly different logic"
},
{
  "type": "mcq",
  "question": "Which of the following is a key advantage of overloading for complex parameter sets?",
  "options": [
    "It improves readability and provides explicit control for different parameter combinations",
    "It allows omitting arguments automatically",
    "It enforces all arguments to be the same type",
    "It reduces the number of methods in the code"
  ],
  "answer": "It improves readability and provides explicit control for different parameter combinations"
},
{
  "type": "mcq",
  "question": "What will be printed by this code?\n\nvoid PrintMessage(string msg, int times = 2) {\n    for (int i = 0; i < times; i++) Console.Write(msg + \" \");\n}\n\nPrintMessage(\"Hi\");",
  "options": [
    "Hi Hi ",
    "Hi ",
    "Error",
    "Hi Hi Hi "
  ],
  "answer": "Hi Hi "
},
{
  "type": "mcq",
  "question": "What is the output?\n\nvoid Show(int a, int b = 10) { Console.WriteLine(a + b); }\nvoid Show(int a) { Console.WriteLine(a); }\n\nShow(5);",
  "options": [
    "15",
    "5",
    "Error: ambiguous call",
    "10"
  ],
  "answer": "5"
},
{
  "type": "mcq",
  "question": "Which method is called?\n\nvoid Display(int x, int y = 5) { Console.WriteLine(\"A\"); }\nvoid Display(int x) { Console.WriteLine(\"B\"); }\n\nDisplay(3);",
  "options": [
    "Error",
    "B",
    "A",
    "Nothing"
  ],
  "answer": "B"
},
{
  "type": "mcq",
  "question": "What does this code print?\n\nvoid Calculate(int x, int y = 2) { Console.WriteLine(x * y); }\n\nCalculate(4, 3);\nCalculate(4);",
  "options": [
    "12\n8",
    "8\n12",
    "4\n4",
    "Error"
  ],
  "answer": "12\n8"
},
{
  "type": "mcq",
  "question": "Which line will produce an error?\n\nvoid Foo(int a, int b = 5) {}\nvoid Foo(int a) {}\n\nFoo(10);",
  "options": [
    "Foo(10);",
    "void Foo(int a, int b = 5) {}",
    "void Foo(int a) {}",
    "No error"
  ],
  "answer": "Foo(10);"
},
{
  "type": "mcq",
  "question": "What is recursion in programming?",
  "options": [
    "A function that calls itself to solve a problem",
    "A loop that iterates over a collection",
    "A function that cannot return a value",
    "A technique to declare global variables"
  ],
  "answer": "A function that calls itself to solve a problem"
},
{
  "type": "mcq",
  "question": "What is the base case in a recursive function?",
  "options": [
    "The first statement executed in the function",
    "The recursive call itself",
    "A loop inside the recursive function",
    "The condition that stops the recursion"
  ],
  "answer": "The condition that stops the recursion"
},
{
  "type": "mcq",
  "question": "What happens to each recursive call in memory?",
  "options": [
    "It runs in a separate thread",
    "It is placed on the call stack and removed after completion",
    "It overwrites the previous call in memory",
    "It is executed in parallel without using the stack"
  ],
  "answer": "It is placed on the call stack and removed after completion"
},
{
  "type": "mcq",
  "question": "What will this code print?\n\nint Factorial(int n) {\n    if (n == 0) return 1;\n    return n * Factorial(n - 1);\n}\n\nConsole.WriteLine(Factorial(4));",
  "options": [
    "24",
    "10",
    "4",
    "0"
  ],
  "answer": "24"
},
{
  "type": "mcq",
  "question": "What does this recursive function print?\n\nvoid PrintNumbers(int n) {\n    if (n == 0) return;\n    Console.Write(n + \" \");\n    PrintNumbers(n - 1);\n}\n\nPrintNumbers(3);",
  "options": [
    "3 2 1 0",
    "1 2 3 ",
    "0 1 2 3 ",
    "3 2 1 "
  ],
  "answer": "3 2 1 "
}
],
Nov15WebdesignTableQuiz:[
{
  "type": "mcq",
  "question": "Which HTML tag is used to define a table?",
  "options": [
    "<tbody>",
    "<table>",
    "<tab>",
    "<tgroup>"
  ],
  "answer": "<table>"
},
{
  "type": "mcq",
  "question": "Which tag is used to define a table row in HTML?",
  "options": [
    "<row>",
    "<td>",
    "<tr>",
    "<th>"
  ],
  "answer": "<tr>"
},
{
  "type": "mcq",
  "question": "What does the <th> element represent in an HTML table?",
  "options": [
    "A table heading cell",
    "A table caption",
    "A standard data cell",
    "A table border"
  ],
  "answer": "A table heading cell"
},
{
  "type": "mcq",
  "question": "Which tag is used to group table rows that contain the main body content?",
  "options": [
    "<tfoot>",
    "<thead>",
    "<tbody>",
    "<section>"
  ],
  "answer": "<tbody>"
},
{
  "type": "mcq",
  "question": "What is the purpose of the <caption> tag in an HTML table?",
  "options": [
    "To display a summary of the table",
    "To define column headers",
    "To add spacing between cells",
    "To create rows automatically"
  ],
  "answer": "To display a summary of the table"
},
{
  "type": "mcq",
  "question": "Which attribute is used to merge table cells horizontally?",
  "options": [
    "cellpadding",
    "rowspan",
    "colspan",
    "border"
  ],
  "answer": "colspan"
},
{
  "type": "mcq",
  "question": "Which HTML element is used to group header content in a table?",
  "options": [
    "<thead>",
    "<tbody>",
    "<header>",
    "<th-group>"
  ],
  "answer": "<thead>"
},
{
  "type": "mcq",
  "question": "What is the default alignment of text inside a <th> element?",
  "options": [
    "Left-aligned",
    "Right-aligned",
    "Center-aligned",
    "Justified"
  ],
  "answer": "Center-aligned"
},
{
  "type": "mcq",
  "question": "Which attribute controls the space between the cell border and content inside a table?",
  "options": [
    "cellpadding",
    "cellspacing",
    "border",
    "padding-left"
  ],
  "answer": "cellpadding"
},
{
  "type": "mcq",
  "question": "What is the purpose of the <tfoot> element in an HTML table?",
  "options": [
    "To display column titles",
    "To group footer rows",
    "To create cell spacing",
    "To control table responsiveness"
  ],
  "answer": "To group footer rows"
},
{
  "type": "mcq",
  "question": "Which CSS property is commonly used to collapse the borders of a table into a single border?",
  "options": [
    "border-collapse",
    "table-border",
    "collapse-border",
    "border-style"
  ],
  "answer": "border-collapse"
},
{
  "type": "mcq",
  "question": "What does the HTML 'width' attribute on a <table> element control?",
  "options": [
    "The width of individual cells only",
    "The total width of the entire table",
    "The width of the table header only",
    "The width of each column automatically"
  ],
  "answer": "The total width of the entire table"
},
{
  "type": "mcq",
  "question": "Which attribute allows a cell to span multiple rows?",
  "options": [
    "rowspan",
    "rows",
    "colspan",
    "spanrow"
  ],
  "answer": "rowspan"
},
{
  "type": "mcq",
  "question": "What is the function of the table header created using <th>?",
  "options": [
    "To define a data cell",
    "To create clickable sorting",
    "To label columns or rows",
    "To style captions automatically"
  ],
  "answer": "To label columns or rows"
},
{
  "type": "mcq",
  "question": "Which CSS property changes the spacing *between* table cells?",
  "options": [
    "padding",
    "border-width",
    "border-spacing",
    "margin"
  ],
  "answer": "border-spacing"
},
{
  "type": "mcq",
  "question": "What does the 'colspan' attribute do in an HTML table?",
  "options": [
    "Allows a column to span across multiple rows",
    "Allows a cell to span across multiple columns",
    "Increases the width of all columns",
    "Combines table borders into one"
  ],
  "answer": "Allows a cell to span across multiple columns"
},
{
  "type": "mcq",
  "question": "Which CSS property is commonly used to change the background color of a table header?",
  "options": [
    "background-color",
    "header-color",
    "color",
    "th-background"
  ],
  "answer": "background-color"
},
{
  "type": "mcq",
  "question": "If you want to add a border to every cell in a table, which CSS selector is typically used?",
  "options": [
    "table td, table th",
    "table-only",
    "table-header",
    "td-all"
  ],
  "answer": "table td, table th"
},
{
  "type": "mcq",
  "question": "Which HTML attribute can be used to set the height of a table?",
  "options": [
    "size",
    "length",
    "table-height",
    "height"
  ],
  "answer": "height"
},
{
  "type": "mcq",
  "question": "Which HTML code correctly merges two columns in a table row?",
  "options": [
    "<td colspan='2'>Merged</td>",
    "<td rowspan='2'>Merged</td>",
    "<th colspan='3'>Merged</th>",
    "<td merge='2'>Merged</td>"
  ],
  "answer": "<td colspan='2'>Merged</td>"
},
{
  "type": "mcq",
  "question": "Which code sets padding inside table cells using CSS?",
  "options": [
    "td { padding: 10px; }",
    "table { padding: 10px; }",
    "tr { cell-padding: 10px; }",
    "td { margin: 10px; }"
  ],
  "answer": "td { padding: 10px; }"
},
{
  "type": "mcq",
  "question": "How do you collapse borders in a table using CSS?",
  "options": [
    "table { border-collapse: collapse; }",
    "table { border-style: collapse; }",
    "table { collapse-border: true; }",
    "td, th { border-collapse: collapse; }"
  ],
  "answer": "table { border-collapse: collapse; }"
},
{
  "type": "mcq",
  "question": "Which code correctly adds a table header with 3 columns?",
  "options": [
    "<tr>\n <th>Name</th>\n <th>Age</th>\n <th>City</th>\n</tr>",
    "<thead>\n <td>Name</td>\n <td>Age</td>\n <td>City</td>\n</thead>",
    "<table>\n <th>Name</th>\n <th>Age</th>\n <th>City</th>\n</table>",
    "<header>\n <th>Name</th>\n <th>Age</th>\n <th>City</th>\n</header>"
  ],
  "answer": "<tr>\n <th>Name</th>\n <th>Age</th>\n <th>City</th>\n</tr>"
},
{
  "type": "mcq",
  "question": "How do you set a table width of 80% using HTML attribute?",
  "options": [
    "<table width='80%'>",
    "<table size='80%'>",
    "<table style='width: 80%'>",
    "<table column='80%'>"
  ],
  "answer": "<table width='80%'>"
},
{
  "type": "mcq",
  "question": "Which CSS code changes the background color of table headers?",
  "options": [
    "th { background-color: #f2f2f2; }",
    "td { background-color: #f2f2f2; }",
    "table { header-color: #f2f2f2; }",
    "tr { bg-color: #f2f2f2; }"
  ],
  "answer": "th { background-color: #f2f2f2; }"
},
{
  "type": "mcq",
  "question": "Which code correctly adds spacing between table cells?",
  "options": [
    "table { border-spacing: 5px; }",
    "td { padding: 5px; }",
    "table { cell-padding: 5px; }",
    "table { margin-spacing: 5px; }"
  ],
  "answer": "table { border-spacing: 5px; }"
},
{
  "type": "mcq",
  "question": "Which snippet correctly applies a 1px solid border to all table cells?",
  "options": [
    "td, th { border: 1px solid black; }",
    "table { border: 1px solid black; }",
    "td { border-width: 1px; }",
    "tr { border: solid 1px black; }"
  ],
  "answer": "td, th { border: 1px solid black; }"
}

],
Nov25DatabaseQuiz:[

  // --- Topic 1: Using DISTINCT (5 MCQ, 5 Code, 5 Short Answer) ---
  {
    "type": "mcq",
    "question": "What happens when the DISTINCT keyword is applied to a SELECT statement with multiple columns?",
    "options": ["It filters out rows where the values in the first column are repeated.", "It ensures that the **combination of values** across all specified columns is unique.", "It treats each selected column independently for uniqueness.", "It can only be used if there is no WHERE clause in the query."],
    "answer": "It ensures that the **combination of values** across all specified columns is unique."
  },
  {
    "type": "mcq",
    "question": "If a column contains multiple NULL values, how does the standard DISTINCT keyword handle them?",
    "options": ["It ignores all NULL values from the result.", "It treats the NULL values as unique entries.", "It treats all NULL values as duplicates and keeps only one NULL row in the final result set.", "It converts all NULL values to zero before checking for uniqueness."],
    "answer": "It treats all NULL values as duplicates and keeps only one NULL row in the final result set."
  },
  {
    "type": "mcq",
    "question": "The primary logical function of the DISTINCT keyword in SQL is:",
    "options": ["To sort the result set based on the first selected column.", "To apply a filter that returns only the rows with unique values in the selected column(s).", "To aggregate data into groups for calculating summaries.", "To limit the total number of rows returned by the query."],
    "answer": "To apply a filter that returns only the rows with unique values in the selected column(s)."
  },
  {
    "type": "mcq",
    "question": "Which statement correctly describes the placement of the DISTINCT keyword in a standard SELECT query?",
    "options": ["The DISTINCT keyword must immediately precede the FROM clause.", "The DISTINCT keyword is placed immediately after the SELECT keyword and before the column list.", "The DISTINCT keyword can be placed anywhere within the column list.", "The DISTINCT keyword is placed after the WHERE clause."],
    "answer": "The DISTINCT keyword is placed immediately after the SELECT keyword and before the column list."
  },
  {
    "type": "mcq",
    "question": "Which of the following scenarios is a practical use case for `COUNT(DISTINCT column_name)`?",
    "options": ["Finding the total number of products sold.", "Counting the number of records with a non-NULL value in a column.", "Determining the number of unique product categories available.", "Calculating the average salary across all employees."],
    "answer": "Determining the number of unique product categories available."
  },
  {
    "type": "code",
    "question": "Write the SQL query to find the unique `Country` names from the `Suppliers` table.",
    "answer": "SELECT DISTINCT Country FROM Suppliers;"
  },
  {
    "type": "code",
    "question": "Complete the SQL statement to count the number of different `ProductID` values in the `OrderDetails` table: SELECT COUNT(______ ProductID) FROM OrderDetails;",
    "answer": "DISTINCT"
  },
  {
    "type": "code",
    "question": "Write the SQL query to select all unique rows (where all columns' values combined are unique) from a table named `AuditLog`.",
    "answer": "SELECT DISTINCT * FROM AuditLog;"
  },
  {
    "type": "code",
    "question": "Write the SQL statement to find unique combinations of `DepartmentID` and `LocationID` from the `EmployeeLocations` table.",
    "answer": "SELECT DISTINCT DepartmentID, LocationID FROM EmployeeLocations;"
  },
  {
    "type": "code",
    "question": "If a query selects `CustomerName` and `City`, complete the statement to ensure the result set shows each city only once: SELECT ______ City, CustomerName FROM Customers;",
    "answer": "DISTINCT"
  },
  

  // --- Topic 2: The TOP Clause (5 MCQ, 5 Code, 5 Short Answer) ---
  {
    "type": "mcq",
    "question": "When using `TOP N`, what is the outcome if the `ORDER BY` clause is omitted?",
    "options": ["The database engine automatically sorts the data by the Primary Key.", "The query fails because `TOP` requires `ORDER BY` for execution.", "The result set is arbitrary, returning the first N rows encountered by the database, with no guaranteed logical order.", "The result set is automatically sorted by the first column selected."],
    "answer": "The result set is arbitrary, returning the first N rows encountered by the database, with no guaranteed logical order."
  },
  {
    "type": "mcq",
    "question": "The purpose of using `TOP N PERCENT` is to:",
    "options": ["Select a fixed N number of records.", "Ensure that only N percent of records are returned regardless of the total count.", "Return a number of records equal to N percent of the total result set size.", "Return the first N records that exceed a certain percentage threshold."],
    "answer": "Return a number of records equal to N percent of the total result set size."
  },
  {
    "type": "mcq",
    "question": "If you execute `SELECT TOP 5 WITH TIES * FROM Products ORDER BY Price DESC`, and the 5th highest-priced product is tied with two other products, how many rows will be returned?",
    "options": ["Exactly 5 rows will be returned.", "6 rows will be returned, as the ties are ignored.", "7 rows will be returned, including the 5 top products and the two tied products.", "Only 3 rows (the three tied products) will be returned."],
    "answer": "7 rows will be returned, including the 5 top products and the two tied products."
  },
  {
    "type": "mcq",
    "question": "In the context of `TOP`, the `WITH TIES` clause ensures that:",
    "options": ["Only rows with unique values are returned.", "Only rows that match the value of the final row in the limited set are included, even if this exceeds the TOP N count.", "The N value is adjusted if there are too many ties.", "The query sorts the data after limiting the rows."],
    "answer": "Only rows that match the value of the final row in the limited set are included, even if this exceeds the TOP N count."
  },
  {
    "type": "mcq",
    "question": "Which of the following SQL clauses provides similar functionality to the `TOP` clause in SQL dialects like MySQL and PostgreSQL?",
    "options": ["ROWNUM", "LIMIT", "FIRST", "SKIP"],
    "answer": "LIMIT"
  },
  {
    "type": "code",
    "question": "Write the SQL statement to select the top 20 most recent employees from the `Personnel` table, sorted by `HireDate`.",
    "answer": "SELECT TOP 20 * FROM Personnel ORDER BY HireDate DESC;"
  },
  {
    "type": "code",
    "question": "Complete the SQL statement to find the 10 lowest test scores from the `StudentScores` table: SELECT TOP 10 * FROM StudentScores ORDER BY Score ______;",
    "answer": "ASC"
  },
  {
    "type": "code",
    "question": "Write the SQL statement to retrieve the highest `Salary` from the `Employees` table, including all employees tied at that maximum salary.",
    "answer": "SELECT TOP 1 WITH TIES * FROM Employees ORDER BY Salary DESC;"
  },
  {
    "type": "code",
    "question": "Complete the SQL statement to find the top 5 percent of customers based on their `TotalOrders`: SELECT TOP 5 ______ * FROM Customers ORDER BY TotalOrders DESC;",
    "answer": "PERCENT"
  },
  {
    "type": "code",
    "question": "Write the SQL query to select the single product with the highest `Cost` from the `Inventory` table.",
    "answer": "SELECT TOP 1 * FROM Inventory ORDER BY Cost DESC;"
  },
  

  // --- Topic 3: The ORDER BY Clause (5 MCQ, 5 Code, 5 Short Answer) ---
  {
    "type": "mcq",
    "question": "If no keyword is explicitly used with a column in the `ORDER BY` clause, what is the default sort behavior?",
    "options": ["The data is sorted in Descending order (DESC).", "The data is sorted in Ascending order (ASC).", "The sort order is determined by the server's locale settings.", "The data is sorted randomly."],
    "answer": "The data is sorted in Ascending order (ASC)."
  },
  {
    "type": "mcq",
    "question": "Which of the following methods for referencing a column in the `ORDER BY` clause is generally discouraged in production code due to potential fragility?",
    "options": ["Using the column's explicit name.", "Using a column alias defined in the SELECT list.", "Using the column's ordinal position (number) in the SELECT list.", "Using the column name qualified with the table name."],
    "answer": "Using the column's ordinal position (number) in the SELECT list."
  },
  {
    "type": "mcq",
    "question": "When sorting by multiple columns (e.g., `ORDER BY ColA, ColB DESC`), how is the priority applied?",
    "options": ["All columns are sorted by the last specified order (DESC).", "The sort is applied simultaneously to both columns.", "The results are first sorted by `ColA`, and then within each `ColA` group, they are sorted by `ColB`.", "Only the first column (`ColA`) is sorted; `ColB` is ignored."],
    "answer": "The results are first sorted by `ColA`, and then within each `ColA` group, they are sorted by `ColB`."
  },
  {
    "type": "mcq",
    "question": "In the logical query processing order, when is the `ORDER BY` clause executed?",
    "options": ["It is the first clause executed, right after the FROM clause.", "It is executed immediately before the WHERE clause.", "It is executed after the SELECT clause, making it the last logical step in the query.", "It is executed simultaneously with the GROUP BY clause."],
    "answer": "It is executed after the SELECT clause, making it the last logical step in the query."
  },
  {
    "type": "mcq",
    "question": "Which SQL statement correctly sorts the `Sales` table first by `Region` in descending order, and then within each region, by `SalesAmount` in ascending order?",
    "options": ["SELECT * FROM Sales ORDER BY SalesAmount ASC, Region DESC", "SELECT * FROM Sales ORDER BY Region ASC, SalesAmount DESC", "SELECT * FROM Sales ORDER BY SalesAmount DESC, Region ASC", "SELECT * FROM Sales ORDER BY Region DESC, SalesAmount ASC"],
    "answer": "SELECT * FROM Sales ORDER BY Region DESC, SalesAmount ASC"
  },
  {
    "type": "code",
    "question": "Write the SQL statement to retrieve all records from the `Clients` table and sort them by `ZipCode` in descending order.",
    "answer": "SELECT * FROM Clients ORDER BY ZipCode DESC;"
  },
  {
    "type": "code",
    "question": "Complete the SQL statement to sort the `Products` table by `Name` using its column alias `Product_Name`: SELECT Name AS Product_Name, Price FROM Products ORDER BY ______ ASC;",
    "answer": "Product_Name"
  },
  {
    "type": "code",
    "question": "Write the SQL statement to sort the `Transactions` table by `Amount` (descending) and then by `TransactionDate` (ascending).",
    "answer": "SELECT * FROM Transactions ORDER BY Amount DESC, TransactionDate ASC;"
  },
  {
    "type": "code",
    "question": "If you are sorting the `Employees` table by `LastName`, complete the statement to explicitly use the ascending sort modifier: SELECT * FROM Employees ORDER BY LastName ______;",
    "answer": "ASC"
  },
  {
    "type": "code",
    "question": "Write the SQL query to select `FirstName` and `LastName` from the `Users` table and sort the result using the ordinal position of `FirstName` in the SELECT list.",
    "answer": "SELECT FirstName, LastName FROM Users ORDER BY 1;"
  },
  
  
  // --- Topic 1: Comparison Operators (4 MCQ, 3 Code, 3 Short Answer) ---
  {
    "type": "mcq",
    "question": "Which comparison operator is used in standard SQL to mean 'not equal to'?",
    "options": ["=", ">=", "!=", "<>"],
    "answer": "<>"
  },
  {
    "type": "mcq",
    "question": "What is the logical result of comparing two strings 'apple' and 'Apple' using the `=` operator in a case-sensitive database system?",
    "options": ["TRUE (because they are the same length)", "FALSE (due to case difference)", "TRUE (case is ignored by default)", "Error (string comparison is not supported)"],
    "answer": "FALSE (due to case difference)"
  },
  {
    "type": "mcq",
    "question": "The `>=` comparison operator tests for which condition?",
    "options": ["Whether the value on the left is less than the value on the right.", "Whether the value on the left is greater than or equal to the value on the right.", "Whether the value on the left is exactly greater than the value on the right.", "Whether the value on the left is only equal to the value on the right."],
    "answer": "Whether the value on the left is greater than or equal to the value on the right."
  },
  {
    "type": "mcq",
    "question": "Which of the following statements correctly uses the less than operator to find employees whose salary is strictly below $50,000?",
    "options": ["SELECT * FROM Employees WHERE Salary <= 50000;", "SELECT * FROM Employees WHERE Salary =< 50000;", "SELECT * FROM Employees WHERE Salary < 50000;", "SELECT * FROM Employees WHERE Salary IS LESS THAN 50000;"],
    "answer": "SELECT * FROM Employees WHERE Salary < 50000;"
  },
  {
    "type": "code",
    "question": "Complete the query to find all orders with an amount exactly $100: SELECT * FROM Orders WHERE Amount ___ 100;",
    "answer": "="
  },
  {
    "type": "code",
    "question": "Write a query to find products whose stock quantity is not equal to 0, using the standard SQL 'not equal' operator.",
    "answer": "SELECT * FROM Products WHERE Stock <> 0;"
  },
  {
    "type": "code",
    "question": "Complete the query to find all customers whose `RegistrationDate` is after '2025-01-01': SELECT * FROM Customers WHERE RegistrationDate ___ '2025-01-01';",
    "answer": ">"
  },
  

  // --- Topic 2: Logical Operators (4 MCQ, 3 Code, 3 Short Answer) ---
  {
    "type": "mcq",
    "question": "Which logical operator has the highest precedence in SQL, meaning it is evaluated first?",
    "options": ["AND", "OR", "XOR", "NOT"],
    "answer": "NOT"
  },
  {
    "type": "mcq",
    "question": "If a condition is determined to be TRUE AND NULL (UNKNOWN), what is the resulting truth value of the entire expression?",
    "options": ["TRUE", "FALSE", "UNKNOWN (NULL)", "Error"],
    "answer": "UNKNOWN (NULL)"
  },
  {
    "type": "mcq",
    "question": "Which logical operator returns TRUE if at least one of the separate conditions it connects is TRUE?",
    "options": ["AND", "NOT", "OR", "EXISTS"],
    "answer": "OR"
  },
  {
    "type": "mcq",
    "question": "In the complex condition `A OR (B AND C)`, which sub-expression will the database evaluate first?",
    "options": ["B AND C", "A OR B", "The expression is evaluated strictly left to right.", "A OR (B AND C) is invalid syntax."],
    "answer": "B AND C"
  },
  {
    "type": "code",
    "question": "Write a query to find employees who work in the 'HR' department OR have a salary greater than 80000.",
    "answer": "SELECT * FROM Employees WHERE Department = 'HR' OR Salary > 80000;"
  },
  {
    "type": "code",
    "question": "Complete the condition to select products that are in the 'Electronics' category AND cost less than 500: WHERE Category = 'Electronics' ___ Price < 500;",
    "answer": "AND"
  },
  {
    "type": "code",
    "question": "Write a query to find all orders that were NOT placed in the year 2025.",
    "answer": "SELECT * FROM Orders WHERE NOT (OrderDate BETWEEN '2025-01-01' AND '2025-12-31');"
  },
  

  // --- Topic 3: IN Operator (3 MCQ, 4 Code, 3 Short Answer) ---
  {
    "type": "mcq",
    "question": "The `IN` operator is a shorthand equivalent for a series of which repeated logical/comparison combination?",
    "options": ["Equality comparisons combined with the AND operator.", "Range checks combined with the BETWEEN operator.", "Equality comparisons combined with the OR operator.", "Pattern matching combined with the LIKE operator."],
    "answer": "Equality comparisons combined with the OR operator."
  },
  {
    "type": "mcq",
    "question": "Which clause is the correct way to select products whose `SupplierID` is not 10, 20, or 30?",
    "options": ["WHERE SupplierID != (10, 20, 30)", "WHERE SupplierID NOT IN (10, 20, 30)", "WHERE SupplierID NOT = 10 OR 20 OR 30", "WHERE SupplierID IS NOT IN (10, 20, 30)"],
    "answer": "WHERE SupplierID NOT IN (10, 20, 30)"
  },
  {
    "type": "mcq",
    "question": "What is a major advantage of using the `IN` operator over manually listing multiple equivalent `OR` conditions?",
    "options": ["It allows for pattern matching with wildcards.", "It is only used for subqueries, not static lists.", "It improves query readability and is often more efficiently optimized by the database engine.", "It can only check against a maximum of three values."],
    "answer": "It improves query readability and is often more efficiently optimized by the database engine."
  },
  {
    "type": "code",
    "question": "Write a query to find all products that are NOT in the categories 'Electronics', 'Apparel', or 'Home Goods'.",
    "answer": "SELECT * FROM Products WHERE Category NOT IN ('Electronics', 'Apparel', 'Home Goods');"
  },
  {
    "type": "code",
    "question": "Write the equivalent condition for `WHERE Country IN ('USA', 'Canada', 'Mexico')` using only the `=` and `OR` operators.",
    "answer": "WHERE Country = 'USA' OR Country = 'Canada' OR Country = 'Mexico';"
  },
  {
    "type": "code",
    "question": "Complete the query to find employees whose `JobTitle` is one of the three specified titles: WHERE JobTitle ___ ('Manager', 'Analyst', 'Engineer');",
    "answer": "IN"
  },
  {
    "type": "code",
    "question": "Complete the condition to select records where the `PriorityLevel` is 1, 2, or 3: WHERE PriorityLevel IN ______;",
    "answer": "(1, 2, 3)"
  },
  
  // --- Topic 4: BETWEEN Operator (3 MCQ, 4 Code, 3 Short Answer) ---
  {
    "type": "mcq",
    "question": "What is the correct logical equivalence for `WHERE Age BETWEEN 20 AND 30`?",
    "options": ["WHERE Age >= 20 OR Age <= 30", "WHERE Age > 20 AND Age < 30", "WHERE Age >= 20 AND Age <= 30", "WHERE Age < 20 AND Age > 30"],
    "answer": "WHERE Age >= 20 AND Age <= 30"
  },
  {
    "type": "mcq",
    "question": "The `NOT BETWEEN` operator is used to filter values that fall into which area?",
    "options": ["Only inside the specified range (exclusive of boundaries).", "Only on the lower boundary value.", "Outside the specified range (i.e., less than the lower bound or greater than the upper bound).", "Only on the upper boundary value."],
    "answer": "Outside the specified range (i.e., less than the lower bound or greater than the upper bound)."
  },
  {
    "type": "mcq",
    "question": "What is the key characteristic of the `BETWEEN` operator regarding the range boundaries?",
    "options": ["It is exclusive of both the starting and ending values.", "It includes only the starting value but excludes the ending value.", "It is inclusive, meaning it includes both the starting and ending values of the range.", "It only works with integer data types."],
    "answer": "It is inclusive, meaning it includes both the starting and ending values of the range."
  },
  {
    "type": "code",
    "question": "Complete the query to find orders placed between the two specified dates (inclusive): WHERE OrderDate ______ '2025-06-01' AND '2025-06-30';",
    "answer": "BETWEEN"
  },
  {
    "type": "code",
    "question": "Write a query using `BETWEEN` to find all employees with a `YearsOfService` value from 5 to 10, inclusive.",
    "answer": "SELECT * FROM Employees WHERE YearsOfService BETWEEN 5 AND 10;"
  },
  {
    "type": "code",
    "question": "Write the condition using comparison operators that is equivalent to `WHERE Quantity NOT BETWEEN 100 AND 200`.",
    "answer": "WHERE Quantity < 100 OR Quantity > 200"
  },
  {
    "type": "code",
    "question": "Complete the `BETWEEN` query to find temperatures from 0 to 32, inclusive: WHERE Temperature BETWEEN 0 ______ 32;",
    "answer": "AND"
  },
  

  // --- Topic 5: LIKE Operator (4 MCQ, 3 Code, 3 Short Answer) ---
  {
    "type": "mcq",
    "question": "In the `LIKE` operator, the `_` (underscore) wildcard character is used to represent:",
    "options": ["A space character only.", "Zero or more characters.", "Any single character.", "Any single number."],
    "answer": "Any single character."
  },
  {
    "type": "mcq",
    "question": "Which of the following patterns will successfully find names that have the letter 's' as the **third** character (e.g., 'Jason', 'Cesar')?",
    "options": ["%s%", "__s%", "%s__", "_s%"],
    "answer": "__s%"
  },
  {
    "type": "mcq",
    "question": "What is the function of the `%` wildcard character in the `LIKE` operator?",
    "options": ["It represents exactly one character.", "It represents zero, one, or multiple characters.", "It represents a list of possible characters.", "It indicates that the match must be case-insensitive."],
    "answer": "It represents zero, one, or multiple characters."
  },
  {
    "type": "mcq",
    "question": "Which SQL statement correctly finds all product names that have 'box' anywhere in the name?",
    "options": ["SELECT * FROM Products WHERE ProductName LIKE 'box_';", "SELECT * FROM Products WHERE ProductName LIKE '%box%';", "SELECT * FROM Products WHERE ProductName LIKE 'box%';", "SELECT * FROM Products WHERE ProductName LIKE '_box_';"],
    "answer": "SELECT * FROM Products WHERE ProductName LIKE '%box%';"
  },
  {
    "type": "code",
    "question": "Write a query using `LIKE` to find all customers whose `LastName` starts with the letter 'M'.",
    "answer": "SELECT * FROM Customers WHERE LastName LIKE 'M%';"
  },
  {
    "type": "code",
    "question": "Complete the query to find all cities that have exactly 6 characters in their name: WHERE City LIKE ______;",
    "answer": "'______'"
  },
  {
    "type": "code",
    "question": "Write a query to find all file names in the `Documents` table that end with the file extension '.pdf'.",
    "answer": "SELECT * FROM Documents WHERE FileName LIKE '%.pdf';"
  },
  

  // --- Topic 6: IS Operator (4 MCQ, 3 Code, 3 Short Answer) ---
  {
    "type": "mcq",
    "question": "The `IS` operator in SQL is used for testing which specific state or value?",
    "options": ["Numerical range checks.", "String pattern matching.", "The absence of a value (NULL).", "Case sensitivity of strings."],
    "answer": "The absence of a value (NULL)."
  },
  {
    "type": "mcq",
    "question": "Which condition is the only correct way to check if the `Commission` column is missing a value?",
    "options": ["WHERE Commission = NULL", "WHERE Commission == NULL", "WHERE Commission IS NULL", "WHERE Commission IS EMPTY"],
    "answer": "WHERE Commission IS NULL"
  },
  {
    "type": "mcq",
    "question": "Which statement correctly finds all records where the `ShipDate` column contains a valid, non-NULL value?",
    "options": ["WHERE ShipDate IS NOT NULL", "WHERE ShipDate != NULL", "WHERE NOT ShipDate = NULL", "WHERE ShipDate IS NOT EMPTY"],
    "answer": "WHERE ShipDate IS NOT NULL"
  },
  {
    "type": "mcq",
    "question": "Why does the expression `Value = NULL` always evaluate to UNKNOWN (or NULL) instead of TRUE or FALSE?",
    "options": ["The `=` operator is reserved for numeric comparisons only.", "NULL is not a data type, so comparison is impossible.", "NULL represents an unknown or missing value, and an unknown value cannot be logically equal to another unknown value.", "The expression should be written as `Value == NULL`."],
    "answer": "NULL represents an unknown or missing value, and an unknown value cannot be logically equal to another unknown value."
  },
  {
    "type": "code",
    "question": "Complete the query to find all employees whose `ManagerID` has not been assigned a value: WHERE ManagerID ______ NULL;",
    "answer": "IS"
  },
  {
    "type": "code",
    "question": "Write a query to select all records from the `Returns` table where the `Reason` column has no value recorded.",
    "answer": "SELECT * FROM Returns WHERE Reason IS NULL;"
  },
  {
    "type": "code",
    "question": "Complete the condition to find products that have a non-NULL `ExpirationDate`: WHERE ExpirationDate ______ NULL;",
    "answer": "IS NOT"
  }
  
],
Dec2DatabaseQuiz:[
  {
  "type": "mcq",
  "question": "Which condition must already be satisfied before a table can be in Second Normal Form (2NF)?",
  "options": [
    "The table must be in Third Normal Form (3NF).",
    "The table must have only numeric data types.",
    "The table must already be in First Normal Form (1NF).",
    "The table must not contain any foreign keys."
  ],
  "answer": "The table must already be in First Normal Form (1NF)."
},
{
  "type": "mcq",
  "question": "What is a partial dependency in the context of database normalization?",
  "options": [
    "When a non-key attribute depends on another non-key attribute.",
    "When a non-key attribute depends on part of a composite primary key.",
    "When multiple primary keys have the same values.",
    "When a table has more than one foreign key."
  ],
  "answer": "When a non-key attribute depends on part of a composite primary key."
},
{
  "type": "mcq",
  "question": "For a table to be in Second Normal Form (2NF), what must be true about all non-key attributes?",
  "options": [
    "They must depend only on the first column of the primary key.",
    "They must depend on at least one foreign key.",
    "They must depend on the entire primary key.",
    "They must not contain NULL values."
  ],
  "answer": "They must depend on the entire primary key."
},
{
  "type": "mcq",
  "question": "Why should attributes that are partially dependent on a composite key be removed from the table?",
  "options": [
    "Because they violate First Normal Form.",
    "Because they describe a different entity that should be in its own table.",
    "Because they slow down SELECT queries.",
    "Because they cannot be indexed."
  ],
  "answer": "Because they describe a different entity that should be in its own table."
},
{
  "type": "mcq",
  "question": "One of the main benefits of converting a table to Second Normal Form (2NF) is:",
  "options": [
    "Avoiding data redundancy and preventing update anomalies",
    "Increasing the size of the database",
    "Eliminating the need for primary keys",
    "Allowing duplicate data for faster access"
  ],
  "answer": "Avoiding data redundancy and preventing update anomalies"
},
{
  "type": "mcq",
  "question": "Which condition must a table satisfy before it can be in Third Normal Form (3NF)?",
  "options": [
    "The table must already be in Second Normal Form (2NF).",
    "The table must have no foreign keys.",
    "The table must contain only numeric columns.",
    "The table must have multiple primary keys."
  ],
  "answer": "The table must already be in Second Normal Form (2NF)."
},
{
  "type": "mcq",
  "question": "What type of dependency is NOT allowed in a table that follows Third Normal Form (3NF)?",
  "options": [
    "Functional dependency",
    "Partial dependency",
    "Transitive dependency",
    "Composite dependency"
  ],
  "answer": "Transitive dependency"
},
{
  "type": "mcq",
  "question": "What is a transitive dependency in the context of database normalization?",
  "options": [
    "When a non-key attribute depends on the primary key.",
    "When a primary key depends on a foreign key.",
    "When a non-key attribute depends on another non-key attribute.",
    "When two tables share the same column name."
  ],
  "answer": "When a non-key attribute depends on another non-key attribute."
},
{
  "type": "mcq",
  "question": "In Third Normal Form (3NF), all non-key attributes must:",
  "options": [
    "Depend only on foreign keys.",
    "Be part of a composite primary key.",
    "Contain unique values.",
     "Depend directly on the primary key and nothing else."
  ],
  "answer": "Depend directly on the primary key and nothing else."
},
{
  "type": "mcq",
  "question": "What is one main benefit of converting a table to Third Normal Form (3NF)?",
  "options": [
    "Increasing the number of rows in the table",
    "Allowing faster data input",
    "Reducing data redundancy and improving data integrity",
    "Eliminating the need for relationships between tables"
  ],
  "answer": "Reducing data redundancy and improving data integrity"
},
{
  "type": "mcq",
  "question": "What does referential integrity primarily ensure in a database?",
  "options": [
    "Foreign key values always reference valid primary key values",
    "All columns contain numeric data",
    "Data is stored in alphabetical order",
    "No duplicate rows exist in a table"
  ],
  "answer": "Foreign key values always reference valid primary key values"
},
{
  "type": "mcq",
  "question": "Referential integrity is a subset of which broader concept?",
  "options": [
    "Normalization",
    "Data integrity",
    "Index optimization",
    "Transaction control"
  ],
  "answer": "Data integrity"
},
{
  "type": "mcq",
  "question": "Referential integrity is a subset of which broader concept?",
  "options": [
    "Data integrity",
    "Normalization",
    "Index optimization",
    "Transaction control"
  ],
  "answer": "Data integrity"
},
{
  "type": "mcq",
  "question": "What is the role of a foreign key in maintaining referential integrity?",
  "options": [
    "It allows duplicate values in a column",
    "It references a primary key in another (parent) table",
    "It creates a new primary key in the child table",
    "It automatically deletes data"
  ],
  "answer": "It references a primary key in another (parent) table"
},
{
  "type": "mcq",
  "question": "Why are constraints described as \"proactive\"?",
  "options": [
    "They run after data is updated",
    "They only run when a trigger executes",
    "They enforce rules before a change operation occurs",
    "They only work on SELECT statements"
  ],
  "answer": "They enforce rules before a change operation occurs"
},
{
  "type": "mcq",
  "question": "Why are triggers considered \"reactive\" mechanisms?",
  "options": [
    "They operate before INSERT operations",
    "They execute only when the DBA runs them",
    "They occur after a change operation happens",
    "They only work on SELECT statements"
  ],
  "answer": "They occur after a change operation happens"
},
{
  "type": "mcq",
  "question": "Which constraint ensures that a column cannot contain NULL values?",
  "options": [
    "UNIQUE",
    "PRIMARY KEY",
    "NOT NULL",
    "CHECK"
  ],
  "answer": "NOT NULL"
},
{
  "type": "mcq",
  "question": "Which constraint guarantees that all values in a column are different?",
  "options": [
    "UNIQUE",
    "CHECK",
    "DEFAULT",
    "FOREIGN KEY"
  ],
  "answer": "UNIQUE"
},
{
  "type": "mcq",
  "question": "A PRIMARY KEY is best described as:",
  "options": [
    "A column that allows duplicates",
    "A combination of NOT NULL and UNIQUE",
    "A column used only for sorting data",
    "Another name for FOREIGN KEY"
  ],
  "answer": "A combination of NOT NULL and UNIQUE"
},
{
  "type": "mcq",
  "question": "Which constraint ensures that values in a column meet a specific condition?",
  "options": [
    "DEFAULT",
    "NOT NULL",
    "CHECK",
    "INDEX"
  ],
  "answer": "CHECK"
},
{
  "type": "mcq",
  "question": "Which database object is mainly used to improve data retrieval speed?",
  "options": [
    "TRIGGER",
    "INDEX",
    "CHECK",
    "FOREIGN KEY"
  ],
  "answer": "INDEX"
},
{
  "type": "mcq",
  "question": "What is the main purpose of a Logical Data Model (LDM)?",
  "options": [
    "Define physical storage details like data types and indexes",
    "Describe business entities, attributes and relationships without DBMS-specific details",
    "Optimize query performance and disk storage",
    "Automatically generate SQL code for a database"
  ],
  "answer": "Describe business entities, attributes and relationships without DBMS-specific details"
},
{
  "type": "mcq",
  "question": "Which of the following is typically included in a Physical Data Model (PDM) but NOT in a Logical Data Model (LDM)?",
  "options": [
    "Entity relationships",
    "Business-level entity names",
    "Column data types, indexes, and storage details",
    "Primary key definitions"
  ],
  "answer": "Column data types, indexes, and storage details"
},
{
  "type": "mcq",
  "question": "What is the main purpose of a Conceptual Data Model?",
  "options": [
    "To define database-specific column data types",
    "To establish entities, their attributes, and their relationships at a business level",
    "To build indexes and optimize performance",
    "To generate SQL scripts automatically"
  ],
  "answer": "To establish entities, their attributes, and their relationships at a business level"
},
{
  "type": "mcq",
  "question": "Which model focuses on defining the structure of data elements and their relationships, but is still DBMS-independent?",
  "options": [
    "Physical Data Model",
    "Conceptual Data Model",
    "Logical Data Model",
    "Network Data Model"
  ],
  "answer": "Logical Data Model"
},
{
  "type": "mcq",
  "question": "Which statement best describes a Physical Data Model?",
  "options": [
    "It shows general business objects only",
    "It represents the detailed, database-specific implementation of the data model",
    "It ignores data types and constraints",
    "It is used only by business users"
  ],
  "answer": "It represents the detailed, database-specific implementation of the data model"
},
{
  "type": "mcq",
  "question": "In a Conceptual ERD, many-to-many relationships are usually shown as:",
  "options": [
    "Separate associative tables",
    "Unrelated entities",
    "Relationships without resolving tables or cardinality details",
    "Foreign key constraints with indexes"
  ],
  "answer": "Relationships without resolving tables or cardinality details"
},
{
  "type": "mcq",
  "question": "Which type of model supports generalization (\"is-a\" relationship), such as Triangle being a kind of Shape?",
  "options": [
    "Logical Data Model only",
    "Physical Data Model only",
    "All data models equally",
    "Conceptual Data Model only"
  ],
  "answer": "Conceptual Data Model only"
},
{
  "type": "mcq",
  "question": "What is added in the Logical Data Model that is not fully defined in the Conceptual Model?",
  "options": [
    "Business rules only",
    "Entity color and layout",
    "Columns/attributes for each entity and operational entities",
    "DBMS storage paths"
  ],
  "answer": "Columns/attributes for each entity and operational entities"
},
{
  "type": "mcq",
  "question": "Which of the following is typically specified only in the Physical Data Model?",
  "options": [
    "Entity names",
    "Business relationships",
    "Column type, length, and nullable properties",
    "High-level system overview"
  ],
  "answer": "Column type, length, and nullable properties"
},
{
  "type": "mcq",
  "question": "Why must the Physical Data Model consider the specific DBMS being used?",
  "options": [
    "Because it uses natural language",
    "Because it must ensure supported data types and avoid reserved words",
    "Because it removes all relationships",
    "Because it is created by business users"
  ],
  "answer": "Because it must ensure supported data types and avoid reserved words"
},
{
  "type": "mcq",
  "question": "What is the main goal of designing data models?",
  "options": [
    "To reduce the number of tables used",
    "To make sure the system runs faster than competitors",
    "To represent business data objects accurately",
    "To remove relationships between entities"
  ],
  "answer": "To represent business data objects accurately"
}


]
}