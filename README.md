### Project 2

# Avatar Maker Website

[View project on GitHub](https://sara-sundin.github.io/SizeMeApp_avatarGame/).

## Introduction

Welcome to the Avatar Maker! This web application allows users to design personalized avatars with ease. Whether you're looking to create a playful, professional, or unique representation of yourself, the Avatar Maker provides a variety of customization options, including gender selection, facial features, colors, and accessories. With an intuitive interface and interactive tools, you can create and download your perfect avatar in just a few clicks. Perfect for profiles, games, or creative projects!

![Screenshot of the website on multi devices](assets/images/images_read_me/mockup-techsini.jpg)

# CONTENT

[REPOSITORY OVERVIEW](#repository-overview)
- Project Structure & Explanation
<br>

[USER EXPERIENCE (UX)](#user-experience)
- The website across UX planes
- User Stories
- Accessibility
- Aria labels
<br>

[DESIGN](#design)
- Design Planning
- Colour Scheme
- Typography
- Imagery
- Wire Frames
- Structure of the website
- Features
<br>

[TECHNOLOGIES USED](#technologies-used)
- Languages used to create the website
- Summary of the Javascript's functions and features
- Frameworks & Libraries
- Software
- Automated Tools
- ChatGPT
<br>

[DEPLOYMENT](#deployment)
- GitHub
<br>

[TESTING](#testing)
- Manual vs. Automated Testing
- Devices
- Browsers
- User Story Testing
- Testing Grid
- Chrome Dev Tools
- Lighthouse
- Validators
- Testing with Jest
- Bugs & Fixes
<br>

[REFERENCES](#references)
- Media References
- Content References
<br>

[CREDITS](#credits)
- Images
- Code
<br>

[PERSONAL NOTES](#personal-notes)

[ACKNOWLEDGMENTS](#acknowledgments)

<br>
<br>
<hr>
<hr>
<br>
<br>

# REPOSITORY OVERVIEW

## Project Structure & Explanation
I have included a diagram to provide a clear overview of the project's file structure, categorizing files based on their type and purpose. The project consists of HTML, CSS, and JavaScript files, along with automated tests written using Jest.

### HTML (Content)
index.html – The main entry point of the application, linking all necessary styles and scripts.

avatar-female.html & avatar-male.html – Separate pages for different avatar selections.

### CSS (Styling)
style.css – Main stylesheet for the project.

style-avatar.css – Specific styles for avatar-related pages.

### JavaScript (Functionality)
script.js – Primary script handling general interactions.

script-avatar.js – Control avatar-related interactions. <br>
(I originally had separate scripts for the two avatar modals (avatar-female.js & script-avatar-male.js). In my final mentor session for this project my mentor advised me to combine the two files due to repeating code. I then created a file with a function to select the avatar type depending on female or male modal.

script-contact.js – Manages the contact form and modal. I separated this since I tested this code with jest.

### Testing (Jest)
script-contact-test.js – Jest test suite ensuring that script-contact.js functions correctly.

<details open>
  <summary>Repository Overview</summary>

  ![Repository](assets/images/images_read_me/repository-overview.jpg)

</details>

[Back to Content Table](#content)

<hr>

- # USER EXPERIENCE
- [UX planes](#the-website-across-UX-planes)
- [User Stories](#user-stories)
- [Accessibility](#accessibility)
- [Aria labels](#aria-labels-used)

## The website across UX planes

### Strategy Plane
The primary goal of the website is to provide users with an engaging, interactive tool to create personalized avatars while showcasing my technical and creative abilities. The target audience includes casual users looking for a fun avatar generator, as well as potential collaborators or employers interested in my web development and design skills. The website meets user needs by offering a seamless avatar creation experience and a visually appealing, intuitive interface.

### Scope Plane
The website includes essential features like an avatar creation tool, gender selection, and customization options. Additional features, such as randomization and a download button for created avatars, enhance the experience. The design focuses on must-have functionality for accessibility and entertainment while offering optional features that make the process more enjoyable and engaging.

### Structure Plane
The website is structured to ensure ease of navigation and interaction:
- A welcoming homepage introduces the Avatar Maker with clear instructions.
- A gender selection section allows users to start their journey with tailored avatar options.
- Customization tools are presented logically, offering intuitive interaction.
- A download feature lets users save their creations effortlessly.
  
### Skeleton Plane
The layout is simple and user-friendly:
- Interactive elements like buttons, sliders, and thumbnails are placed where users naturally expect them.
- A responsive design ensures the website adapts seamlessly to mobile, tablet, and desktop devices.
- Clear labels and visual cues guide users through the avatar creation process without confusion.
  
### Surface Plane
The visual design is playful and creative, reflecting the theme of personalization and self-expression:
- Bright, welcoming colors and clean typography set a friendly tone.
- Background images and avatar previews enhance visual appeal and interactivity.
- Hover effects, animations, and transparent overlays add subtle interactivity while maintaining focus on the core functionality.

<hr>

## User Stories
### First-Time Visitors
Goal: Quickly understand the purpose of the website and begin creating their avatar.
- See a welcoming homepage with a clear introduction and instructions (User Story 1).
- Explore the Avatar Maker and its features through brief, engaging descriptions (User Story 2).
- Access the gender selection section to start creating their avatar (User Story 3).
- Experience seamless navigation across devices with responsive design (User Story 4).
- View samples of responsive avatars to get inspired and see the possibilities (User Story 9).
### Returning Visitors
Goal: Continue customizing or exploring new features.
- Revisit the Avatar Maker to experiment with different styles or features (User Story 5).
- Use the download feature to save their avatar for personal or professional use (User Story 6).
### Frequent Visitors
Goal: Engage with the website and share feedback.
- Share the Avatar Maker with friends or colleagues using the site’s social sharing options (User Story 7).
- Provide feedback on their experience to contribute to future improvements (User Story 8).

<details open>
<summary>User Story 1 (must-have)</summary>
  
### User Story 1 (must-have)
As a visitor, I want to see a welcoming homepage with a brief introduction,
so that I can quickly understand the purpose of the Avatar Maker site.

#### Acceptance Criteria
- A clear heading introduces the Avatar Maker.
- Brief text explains what the site does.
- Navigation links to the gender selection.
  
#### Tasks
- Design a clean homepage layout.
- Add a prominent heading and introductory text.
- Implement responsive navigation links.
</details>

<details>
<summary>User Story 2 (must-have)</summary>
  
### User Story 2 (must-have)
As a visitor, I want to explore the features of the Avatar Maker,
so that I can understand what customizations are available.

#### Acceptance Criteria
- A section highlights the customization features (e.g., gender, clothing, accessories).
- Buttons or links guide users to start creating their avatar.
- Responsive design ensures usability on all devices.- 

#### Tasks
- Create a features section with descriptive icons or images.
- Add buttons to direct users to the customization interface.
- Test responsiveness across various screen sizes.
</details>  

<details>
<summary>User Story 3 (must-have)</summary>
  
### User Story 3 (must-have)
As a visitor, I want to select a gender to begin my avatar creation,
so that I can personalize my experience.

#### Acceptance Criteria
- Male and female options are presented clearly.
- Clicking on an option opens the avatar editor.
- A modal or page transition confirms the selected option.

#### Tasks
- Design a visually appealing gender selection section.
- Implement clickable gender options linked to their respective modals or pages.
- Test functionality to ensure a seamless experience.
</details>  

<details>
<summary>User Story 4 (must-have)</summary>
  
### User Story 4 (must-have)
As a visitor, I want the site to be responsive, so that I can navigate and use it across devices.

#### Acceptance Criteria
- The site layout adjusts seamlessly on mobile, tablet, and desktop screens.
- All interactive elements (e.g., buttons, modals) remain functional on touch devices.

#### Tasks
- Use a responsive grid system for layout design.
- Test the site’s usability across various devices and browsers.
</details>  

<details>
<summary>User Story 5 (must-have)</summary>

### User Story 5 (could-have)
- As a returning visitor, I want to experiment with new styles and features, so that I can further customize my avatar.

#### Acceptance Criteria
- The customization interface offers a variety of options.
- New styles or features are clearly marked.
- Users can easily apply changes and see them reflected in real time.

#### Tasks
- Add diverse customization options for clothing, accessories, etc.
- Highlight new features with labels or icons.
- Ensure real-time updates on the avatar canvas.
</details> 

<details>
<summary>User Story 6 (should-have)</summary>
  
### User Story 6 (should-have)
As a visitor, I want to download my avatar, so that I can save it for personal or professional use.

#### Acceptance Criteria
- A download button is prominently displayed in the editor or final screen.
- Clicking the button saves the avatar as a high-resolution image.

#### Tasks
- Implement a download feature that merges all avatar layers.
- Optimize the download button for both desktop and mobile.
</details> 

<details>
<summary>User Story 7 (could-have)</summary>
  
### User Story 7 (could-have)
- As a frequent visitor, I want to provide feedback about the Avatar Maker, so that I can contribute to its improvement.

#### Acceptance Criteria
- A feedback form is easily accessible.
- Users can rate their experience and leave comments.
- A confirmation message is displayed after submission.

#### Tasks
- Design a feedback form with rating options and a text box.
- Add a backend to collect and store feedback data.
- Display a confirmation message or thank-you page.
</details> 

<details>
<summary>User Story 8 (could-have)</summary>
  
#### User Story 8 (could-have)
As a frequent visitor, I want to share the Avatar Maker with others, so that my friends or colleagues can use it too.

#### Acceptance Criteria
- Social sharing buttons are prominently displayed.
- Users can share the site link via social media or email.

#### Tasks
- Add social media sharing buttons (e.g., Facebook, Twitter, LinkedIn).
- Test sharing functionality to ensure links work correctly.
</details> 

<details>
<summary>User Story 9 (want-have)</summary>
  
### User Story 9 (want-have)
As a visitor, I want to view samples of responsive avatars, so that I can get inspired and see the possibilities before creating my own.

#### Acceptance Criteria
- A gallery section showcases a variety of pre-designed avatars.
- Clicking on a sample opens it in the editor for further customization.
- The gallery is visually appealing and easy to navigate.

#### Tasks
- Design a gallery layout with a grid or carousel of avatars.
- Link gallery items to the avatar editor with the preloaded design.
- Ensure the gallery is responsive and loads efficiently
</details> 

[Back to Content Table](#content)

<hr>

## Accessibility
The following measures has been taken to make sure the website is accessible.
- Semantic Elements: Elements like header, main, and footer are used to provide clear structure, making it easier for screen readers to interpret content.
- Descriptive Headings: Properly structured heading levels (e.g., h1, h2, h3) to create a logical document outline.
- Alt Attributes: Every image includes meaningful alt text, ensuring visually impaired users understand the content.
- Focusable Elements: Navigation links, buttons, and forms are fully accessible using only the keyboard (e.g., via tab and enter keys).
- High Contrast: Text and background colors are chosen to meet the standards.
- Flexible Layouts: The website is fully responsive, ensuring accessibility across various devices, including desktops, tablets, and smartphones.
- Viewport Meta Tag: Ensures proper scaling and readability on mobile devices.
- Labels for Form Fields: All form fields include <label> tags or appropriate aria-label attributes to guide users through form completion.
- ARIA labels: Aria roles are added where necessary to define regions of the page for assistive technologies.
- Readable Fonts: Fonts like "Lato" are legible with sufficient size and line spacing for comfortable reading.
- Scalable Text: Text can be resized without loss of content or functionality.
- Accessibility Testing Tools: Lighthouse has been used to identify and address accessibility issues.

<hr>

## ARIA Labels Used

### Female Modal
- aria-labelledby="femaleModalLabel"
- aria-hidden="true"

### Male Modal
- aria-labelledby="maleModalLabel"
 - aria-hidden="true"

### Close Button (Female Modal & Male Modal)
- aria-label="Close"

### Social Media Links
- Instagram: aria-label="Visit my Instagram page (opens in a new tab)"
- LinkedIn: aria-label="Visit my LinkedIn page (opens in a new tab)"
- WhatsApp: aria-label="Connect on Whatsapp (opens in a new tab)"

[Back to Content Table](#content)

<br>
<br>
<hr>
<hr>
<br>
<br>

# DESIGN
- [Design Planning](#design-planning)
- [Colour Scheme](#colour-scheme)
- [Typography](#typography)
- [Imagery](#imagery)
- [Wire Frames](#wire-frames)
- [Structure of the website](#structure-of-the-website)
- [Features](#features)

## Design Planning
The original concept for the website was more extensive than the final outcome. The avatar maker was first intended to be part of a larger flow in registration as a user for another application. This diagram represents the initial planning and user flow for the website, designed to create a personalized user experience by incorporating body type selection, user preferences, and avatar customization. The diagram illustrates the planning of the journey and serves as a reference for future improvements and expansion.

<details open>
  <summary>Design Planning Diagram</summary>

  ![Design Planning](assets/images/images_read_me/design_planning.jpg)

</details>

<hr>
  
## Colour Scheme
![Colour Scheme](assets/images/images_read_me/colours-project-2.png)
<br>
<br>
The Avatar Maker website employs a vibrant and dynamic color scheme with bright red and blue accents set against a clean black-and-white foundation. Red is used to highlight actions, drawing attention and evoking a sense of energy and urgency, while blue provides a calming counterbalance, fostering trust, balance, and creativity. The deliberate use of these colors creates a striking visual hierarchy that guides users intuitively. The strong contrast ensures excellent accessibility, readability, and a visually engaging experience across devices.

<hr>

## Typography
The chosen typography for my website are both Google fonts and combine Fredoka for headings and Lato for the main content. This pairing enhances the user experience by creating a playful and approachable aesthetic while maintaining excellent readability and a clean design throughout.

![Fonts](assets/images/images_read_me/fonts-project-2.png)

Fredoka: This rounded, bold typeface brings a sense of friendliness and vibrancy to the website. Its approachable design makes it perfect for attention-grabbing headings, aligning well with the creative and interactive theme of the site.

Lato: A modern sans-serif font with a humanist touch, Lato ensures clear readability for the main content. Its clean, neutral design complements the playfulness of Fredoka, providing a harmonious balance that enhances the overall user experience.

<hr>

## Imagery
The images used on this site are created by myself as sketches in Adobe Illustrator. The collage of avatars was created by inviting friends and peers to design their own avatars, which were then collected and curated into a dynamic composition that celebrates creativity and individuality.

<hr>

## Wire Frames
The wireframes were created in Adobe Illustrator for mobile, tablet and desktop. I have developed and used my own toolkit for the wireframes. The outcome for the website looks slightly different than the initial wireframes but the introduction of the page remained consistent.

<details open>
  <summary>Page Wireframe</summary>

  ![Wireframes](assets/images/images_read_me/wireframes_project-2.jpg)

</details>

<hr>

## Features

### Animation Intro
When accessing the website an animation intro displaying Ready.. Set.. Create! One word showing at a time with the word expanding at the end of each display. The intro becomes hidden and the main page displays.

<details open>
  <summary>Animation Intro</summary>

  ![Intro](assets/images/images_read_me/animation-intro.jpg)

</details>

#### Favicon
The website includes a custom favicon to enhance its identity and improve user experience. The favicon, a small yet recognizable icon displayed in the browser tab, represents the creative and interactive nature of the Avatar Maker.

I designed the favicon in Adobe Illustrator, featuring a simplified avatar icon to match the site’s overall aesthetic. Its vibrant colors and clean lines ensure visibility and clarity, even at small sizes. This attention to detail reinforces the website's branding and provides users with a polished, professional experience.

<details open>
  <summary>Favicon Image</summary>

  ![Favicon](assets/images/images_read_me/favicon-avatar-readme.png)

</details>

### Header
The header of the Avatar Maker website provides a clear and engaging introduction, featuring the site title that sets the creative tone. It ensures easy navigation and a strong visual identity, making the user experience seamless and inviting.

<details open>
  <summary>Header Image - Desktop</summary>

  ![Header Desktop](assets/images/images_read_me/header-desktop.jpg)

</details>

<details>
  <summary>Header Image - Mobile</summary>

  ![Header Mobile](assets/images/images_read_me/header-mobile.jpg)

</details>

#### Introduction Section
The Avatar Maker website welcomes users with an engaging and user-friendly introduction. The homepage features a bold heading, "Your vibe, your style, your avatar – let’s get started!", which sets the tone for creativity and individuality. A brief introductory paragraph invites users to explore the avatar customization journey with an arrow pointing to the images where the avatar generator opens, highlighting the fun and versatility of the tool.

<details open>
  <summary>Introduction Section Image - Desktop</summary>

  ![Introduction Desktop](assets/images/images_read_me/introduction-desktop.jpg)

</details>

<details>
  <summary>Introduction Section Image - Mobile</summary>

  ![Introduction Mobile](assets/images/images_read_me/introduction-mobile.jpg)

</details>

#### Choose Gender Section
The Choose-Gender section invites users to begin their avatar creation journey with a choice between male and female avatars. Featuring clear, clickable icons and hover animations, the images respond dynamically, enhancing the experience and making it clear what to do. This responsive feedback captures attention and ensures seamless navigation. Each selection opens a modal for customization, making the transition smooth and intuitive. Designed for accessibility, this section is engaging and inclusive across all devices.

<details open>
  <summary>Choose Gender Section Image - Desktop</summary>

  ![Choose Gender Desktop](assets/images/images_read_me/choose-gender-desktop.jpg)

</details>

<details>
  <summary>Choose Gender Section Image - Mobile</summary>

  ![Choose Gender Mobile](assets/images/images_read_me/choose-gender-mobile.jpg)

</details>

#### Avatar Generator Modals - Female & Male
The Avatar Generator Modals are the central features of the site, designed to provide users with an engaging and interactive experience. When triggered, the modals open to reveal the Avatar Maker interface, where users can customize their avatars with ease. The full-screen design ensures focus on the creative process, eliminating distractions. With intuitive controls and seamless transitions, users can select features, adjust colors, and preview their avatars in real time. The modals clean layout and responsive design enhance usability across devices, ensuring accessibility for all users.

<details open>
  <summary>Female Modal Image - Desktop</summary>

  ![Female Modal Desktop](assets/images/images_read_me/modal-avatar-female-desktop.jpg)

</details>

<details open>
  <summary>Female Modal Image - Mobile</summary>

  ![Female Modal Mobile](assets/images/images_read_me/modal-avatar-female-mobile.jpg)

</details>

<details open>
  <summary>Male Modal Image - Desktop</summary>

  ![Male Modal Desktop](assets/images/images_read_me/modal-avatar-male-desktop.jpg)

</details>

<details open>
  <summary>Male Modal Image - Mobile</summary>

  ![Male Modal Mobile](assets/images/images_read_me/modal-avatar-male-mobile.jpg)

</details>

#### Avatar Collage Section
The Avatar Collage section showcases a vibrant collection of avatars designed by users, serving as both an inspiring visual element and a navigation feature. At the center of the collage, a prominent button labeled "Download your avatar!" captures attention and provides guidance. This button links users back to the start of the introduction, ensuring a seamless flow through the site. 

<details open>
  <summary>Avatar Collage Section Image - Desktop</summary>

  ![Gallery Avatars](assets/images/images_read_me/collage-desktop.jpg)

</details>

<details>
  <summary>Avatar Collage Section Image - Mobile</summary>

  ![Gallery Avatars](assets/images/images_read_me/collage-mobile.jpg)

</details>

#### Contact Section
The Contact Section offers an intuitive way for users to connect. At its heart is a prominently displayed button that, when clicked, opens a modal containing a clean and user-friendly email form. This design ensures seamless communication by allowing users to send inquiries or feedback directly without navigating away from the page. The straightforward functionality and modern design make it easy for users to engage, reinforcing accessibility and creating a streamlined user experience.

<details>
  <summary>Contact Section Image - Desktop</summary>

  ![Contact Section Desktop](assets/images/images_read_me/contact-desktop.jpg)

</details>

<details open>
  <summary>Contact Section Image - Mobile</summary>

  ![Contact Section Desktop](assets/images/images_read_me/contact-mobile.jpg)

</details>

#### Contact Modal
The contact modal is displaying a clean and simple form for submitting inquiries or feedback. The form includes fields for name, email, and message, ensuring all necessary details are collected efficiently. Designed for ease of use, the modal keeps the user on the page without the need for redirection.

<details open>
  <summary>Contact Modal Image - Desktop</summary>

  ![Contact Modal Desktop](assets/images/images_read_me/contact-modal-desktop.jpg)

</details>

<details>
  <summary>Contact Modal Image - Mobile</summary>

  ![Contact Modal Mobile](assets/images/images_read_me/contact-modal-mobile.jpg)

</details>

#### Success Modal
The Success Modal Window provides users with immediate feedback after successfully submitting the contact form. Once the "Send" button is pressed, the contact modal gracefully closes, and a success modal appears, confirming that the message has been sent. 

<details>
  <summary>Success Modal Image - Desktop</summary>

  ![Success Modal Desktop](assets/images/images_read_me/success-modal-desktop.jpg)

</details>

<details open>
  <summary>Success Modal Image - Mobile</summary>

  ![Success Modal Mobile](assets/images/images_read_me/success-modal-mobile.jpg)

</details>

#### Footer
The Footer serves as a compact and functional closing section of the website with quick access to external links. It includes prominent social media icons, enabling users to easily connect on platforms like Instagram, LinkedIn, and WhatsApp. The footer's minimalist design aligns with the overall aesthetic of the site, ensuring it complements rather than distracts. The three social media icons are added with Font Awesome.

<details open>
  <summary>Footer Image - Desktop</summary>

  ![Footer Desktop](assets/images/images_read_me/footer-desktop.jpg)

</details>

<details>
  <summary>Footer Image - Mobile</summary>

  ![Footer Mobile](assets/images/images_read_me/footer-mobile.jpg)

</details>

#### 404 Page
The 404 Page is an essential feature of the website that enhances the user experience by providing a clear and friendly response when a user navigates to a non-existent or broken link. Instead of displaying a generic browser error, the custom 404 page ensures that users are guided back to the homepage or other relevant sections of the site.

<details open>
  <summary>404 Page - Desktop</summary>

  ![404 Page Desktop](assets/images/images_read_me/404-page.jpg)

</details>

#### Future Pages - Avatar Inspiration Gallery
A planned addition to the website is an Avatar Inspiration Gallery, designed to inspire users and showcase the creative possibilities of the Avatar Maker. This feature will display a visually appealing grid or carousel of pre-designed avatars, each tailored to highlight unique styles and combinations. Users can browse the gallery and click on a sample to load it directly into the avatar editor for further customization. The responsive design will ensure seamless accessibility across all devices, enhancing the user experience. This gallery will serve as both an inspiration hub and a practical starting point for creating personalized avatars.

<br>
<br>
<hr>
<hr>
<br>
<br>

# TECHNOLOGIES USED
- [Languages used to create the website](#languages-used-to-create-the-website)
- [Summary of the Javascript's functions and features](#summary-of-the-javascripts-functions-and-features)
- [Frameworks & Libraries](#frameworks-and-libraries)
- [Software](#software)
- [Automated Tools](#automated-tools)
- [ChatGPT](#chatgpt)
- [Jest](#jest)
  
## Languages Used to Create the Website
- HTML
- CSS
- JavaScript

## Summary of the Javascript's functions and features
The JavaScript in this project powers the interactive experience of the Avatar Maker, handling everything from rendering the custom avatars on a canvas to managing user interactions. It dynamically updates different avatar layers such as skin, hair, and clothing — allowing users to personalize their creations in real time.

Key features include:

- Canvas-based rendering: Each avatar element is drawn on separate layers, enabling smooth updates without affecting the entire image.
- Event-driven interactions: User selections instantly update the avatar through event listeners, ensuring a responsive experience.
- Color customization: Using HSL-to-RGB conversion, the code allows users to adjust colors dynamically.
- Randomization and resets: Users can randomize their avatar’s features or reset them with a single click.
- Download functionality: The avatar can be saved as an image, enabling users to keep their custom designs.

### Summary of Functions in the Avatar script (script-avatar.js)
- initializeCanvases() - Sets up canvas dimensions and initializes the avatar type.
- setAvatarType() -	Loads the appropriate default canvas for male or female avatar.
- hslToRgb() -	Converts HSL values to RGB for color processing.
- rgbToHsl() -	Converts RGB values back to HSL.
- hexToRgb() -	Converts HEX color codes to RGB. This is used for the swatches selections.
- loadAndDrawLayer() -	Loads and draws selected avatar features on the canvas.
- handleThumbnailSelection() -	Handles user feature selection like choosing a nose or eyes thumbnail.
- updateColor() -	Applies color changes to selected features.
- randomizeAvatar() -	Randomly generates avatar features and colors.
- resetCanvas() -	Clears all layers and resets the avatar.
- setupAdditionalThumbnails() -	Controls visibility of extra feature selections inside the main selection thumbnails.
- setupClearThumbnail() -	Allows users to remove specific features in the additional thumbnail menus.
- setupBackButtons() -	Navigates back to the main selection menu.
- applyColorToActiveLayer() -	Enables dynamic color changes with sliders included.
- DOMContentLoaded event () -	Ensures that the DOM elements are fully loaded before manipulating visibility.

### Summary of Functions in the Index script (script-index.js)
- anime.timeline() - Controls the sequence of text animations with different scaling and opacity effects.
- setTimeout() -	Hides the intro animation and makes the main content visible after a delay.
- DOMContentLoaded event () -	Ensures that the DOM elements (header, main, footer) are fully loaded before manipulating visibility.

### Summary of Functions in the Contact script (script-contact-modal.js)
- showContactModal()	- Displays the contact modal by removing the "hidden" class.
- closeContactModal()	- Hides the contact modal by adding the "hidden" class.
- showSuccessModal()	- Hides the contact modal and displays the success modal upon form submission.
- closeSuccessModal()	- Hides the success modal by adding the "hidden" class.

### Features in the scripts
- Objects -	Store canvases, feature layers and avatar options.
- Event Listeners -	Handle user interactions (selecting features, downloading the avatar, handle contact form submit).
- Loops -	Iterate through options using forEach() and for...in.

### Bootstrap events for the Contact Modal
- show.bs.modal event	Removes aria-hidden and inert attributes when a modal opens, allowing interaction.
- shown.bs.modal event	Sets focus on the first interactive element inside the modal after it appears.
- hide.bs.modal event	Reapplies aria-hidden and inert attributes when a modal is closed to prevent background interaction.

  <hr>
  
## Frameworks and Libraries
- Bootstrap (for responsive design and styling).
- Font Awesome (for icons).
- Google Fonts (for typography).
- Iloveimg.com (to compress images for faster loading).
- Jest (for testing javascript).
  
## Software
- Adobe Illustrator (for wireframes and image creation).
- Adobe Photoshop (for image editing and optimization).
- Git (for version control).
- GitHub (to save and store the website's code and files).
  
## Automated Tools
- Chrome DevTools (for debugging and testing).
- Lighthouse (to analyze performance, accessibility, and SEO).
- W3C HTML & CSS Validator (to validate and check the html and css).
- JSHint (to validate and check the javascript code).
- Techsini.com (for multidevice image and testing responsiveness).

## Jest
I used Jest to test the javascript code for the contact modal. Due to this I separated the javascript code for the contact modal in the repository.

[Back to Content Table](#content)

<br>
<br>
<hr>
<hr>
<br>
<br>

# DEPLOYMENT

## Ensure your website files (HTML, CSS, JavaScript, etc.) are committed to a GitHub repository.
- Go to Repository Settings
- Navigate to the repository on GitHub.
- Click on the Settings tab.
- Enable GitHub Pages
- Scroll down to the Pages section.
- Under "Branch," select the branch you want to deploy (typically main or master).
- Click Save.

## Access Your Website
After a few moments, GitHub Pages will generate a URL for your site (e.g., https://username.github.io/repository-name).
Visit this URL to view your deployed website.

<details open>
  <summary>GitHub Deployment Page</summary>

  ![GitHub Deployment](assets/images/images_read_me/deployment_github.jpg)

</details>

[Back to Content Table](#content)

<br>
<br>
<hr>
<hr>
<br>
<br>

# TESTING
- [Manual vs. Automated Testing](#manual-vs-automated-testing)
- [Devices](#devices)
- [Browsers](#browsers)
- [User Story Testing](#user-story-testing)
- [Testing Grid](#testing-grid)
- [Chrome Dev Tools](#chrome-dev-tools)
- [Lighthouse](#lighthouse)
- [Validation](#validation)
- [Testing with Jest](#testing-with-jest)
- [Bugs & Fixes](#bugs-and-fixes)
  
## Manual vs Automated Testing
Software testing ensures that applications work as expected, are free of critical bugs, and provide a good user experience. Testing can be done manually by human testers or automatically using scripts and testing frameworks. The choice between manual and automated testing depends on factors like project complexity, budget, and the need for speed and accuracy. Both manual and automated testing play crucial roles in software development. Manual testing is best for exploratory testing and user experience evaluation, while automated testing is essential for repetitive tasks and continuous testing in large projects. A combination of both approaches often provides the best results.

The manual testing in this project has been done to check the responsiveness on different devices and browsers as well as the user experience both in terms of functionality and various workflows to find unexpected behavior. I have used a testing grid to make sure all components are being included.

The automated testing have used frameworks and tools such as Lighthouse, W3C Validators, JSHint, and Jest  to run test cases, making it more efficient for large-scale and repetitive testing.

<hr>

## Devices

### The testing on the site has been made on four different devices:
Samsung Galaxy Mobile A25 <br>
Apple IPad Mini <br>
Apple IPad  <br>
Lenovo Desktop 15"

<hr>

## Browsers
### The different browsers used for testing:
Google Chrome <br>
Microsoft Edge <br>
Safari <br>
Firefox <br>
Samsung Internet

<hr>

## User Story Testing
I have included some examples of the manual testing conducted for the user stories. These tests ensure that the application meets user expectations by verifying functionality, usability, and responsiveness. Each user story is tested through real interactions, checking that the intended experience aligns with the actual behavior of the application.

### User Story 1 - See a welcoming homepage with a clear introduction and instructions.
As a visitor, I want to see a welcoming homepage with a brief introduction,
so that I can quickly understand the purpose of the Avatar Maker site. To ensure that the homepage provides a welcoming experience with clear instructions, the following tests were conducted:

#### Browser used - Google Chrome, Safari, Samsung Internet
- Visual Inspection – Manually reviewed the homepage layout to verify that the introduction text is prominently displayed and easy to read.
- Usability Testing – Asked test users to navigate the homepage and provide feedback on whether the instructions were clear and intuitive.
- Accessibility Testing – Verified color contrast, keyboard navigation, and screen reader compatibility to ensure inclusivity.
- Automated UI Testing – Used browser dev tools to confirm correct element placement and ensure key sections load as expected.
  
The homepage successfully meets the user story criteria, providing a clear, engaging, and accessible introduction to the application.

 ![Test User Story 1 Desktop](assets/images/images_read_me/test-user-story-1-desktop.jpg)

 <details>
  <summary>Test User Story 1 - mobile view</summary>

  ![Testing Grid](assets/images/images_read_me/test-user-story-1-mobile.jpg)

</details>

### User Story 2  - Explore the Avatar Maker and its features through brief, engaging descriptions.
As a visitor, I want to explore the features of the Avatar Maker, so that I can understand what customizations are available. To verify that users can easily understand the Avatar Maker and its features, the following manual tests were conducted:

#### Browser used - Google Chrome, Safari, Samsung Internet
- Visibility Check: Ensured that descriptions of the Avatar Maker’s features are clearly displayed on the homepage and relevant sections.
- Readability Test: Checked that the descriptions are concise, engaging, and free from jargon to ensure accessibility for all users.
- Guidance Evaluation: Tested whether users could follow the instructions without confusion and begin customizing their avatar seamlessly.
- Mobile and Desktop Comparison: Verified that descriptions and instructions are legible and properly formatted across different screen sizes.
- User Feedback: Gathered informal feedback from testers to determine if the information provided was clear and sufficient for a smooth onboarding experience.

The tests confirmed that users can quickly understand the purpose of the Avatar Maker and how to interact with it effectively.

 ![Test User Story 2 Desktop](assets/images/images_read_me/test-user-story-2-desktop.jpg)
  ![Test User Story 2 Mobile](assets/images/images_read_me/test-user-story-2-mobile.jpg)

### User Story 4 - Experience seamless navigation across devices with responsive design.
As a visitor, I want the site to be responsive, so that I can navigate and use it across devices.To ensure a smooth and consistent navigation experience across different devices, the following tests were conducted:

#### Browser used - Microsoft Edge, Google Chrome, Safari, Firefox, Samsung Internet
.- Responsive Design Testing – Manually resized the browser window and tested on various screen sizes (mobile, tablet, desktop) to verify layout adaptability.
- Cross-Browser Testing – Checked navigation functionality on multiple browsers (Chrome, Firefox, Safari, Edge) to ensure consistent performance.
- Mobile Usability Testing – Interacted with the site on both iOS and Android devices to confirm touch responsiveness and intuitive navigation.
- Navigation Flow Testing – Clicked through all menu options and links to confirm that users can access key sections without errors or unexpected behavior.
- Automated Lighthouse Audit – Ran an automated test using Chrome DevTools Lighthouse to evaluate mobile-friendliness and accessibility.
  
The tests confirmed that the application provides a seamless and responsive navigation experience across different devices and screen sizes.

### User Story 6 - Use the download feature to save their avatar for personal or professional use.
As a visitor, I want to download my avatar, so that I can save it for personal or professional use. To ensure users can successfully download their customized avatar, the following manual tests were performed:

#### Browser used - Microsoft Edge, Google Chrome, Safari, Samsung Internet
- Button Visibility & Accessibility: Confirmed that the download button is clearly visible, labeled appropriately, and accessible via keyboard navigation and screen readers.
- Click Functionality: Tested that clicking the download button triggers the expected action without delays or errors.
- File Format & Quality: Verified that the downloaded avatar is saved in the correct format with high image quality, maintaining all customizations.
- Cross-Browser Testing: Ensured the feature works consistently across multiple browsers, including Chrome, Samsung, Safari, and Edge.
- Mobile & Desktop Compatibility: Checked that users can download their avatar on both mobile and desktop devices without issues.
- Error Handling: Simulated potential issues (e.g., incomplete avatar customizations, multiple rapid clicks) to ensure the system prevents unexpected failures.
  
The tests confirmed that users can reliably download their avatar in a user-friendly and efficient manner.

 ![Test User Story 6 Desktop](assets/images/images_read_me/test-user-story-6-desktop.jpg)
  ![Test User Story 6 Mobile](assets/images/images_read_me/test-user-story-6-mobile.jpg)

<hr>

## Testing grid
I have used a grid for testing all components of the website. After testing I have fixed any issues arising and put a note in the grid what has been done. See below dropdown menu for the grid that I created in an excel spreadsheet using a free template as base. [Link to excel spreadsheet](assets/docs/test_checklist_project-2.xlsx)

<details open>
  <summary>Testing Grid</summary>

  ![Testing Grid](assets/images/images_read_me/checklist-project-2.jpg)

</details>

<hr>

## Chrome Dev Tools
I have used Chrome Dev Tools throughout the development of the website to test for responsiveness and troubleshooting.

<hr>

## Lighthouse
I used Chrome Dev Tools Lightouse to help improve the website's performance, accessibility, SEO, and user experience. The first time I ran the testing I received messages for improvement that I have recorded below. The Lighthouse tool provided actionable insights to optimize speed and fix issues. For the second run with Lighthouse I disabled the intro animation since it disturbed the accessability in terms of the color choices on the third word in the animation (Create!). I did not want to change the color since it was obvious it would not interfere with the overall user experience. After fixing the issues recorded below  all areas turned green and I received a score of 100 for all categories accompanied with a firework animation on the page.

<details>
  <summary>1st run with Lighthouse</summary>

  ![Lighthouse 1st run](assets/images/images_read_me/lighthouse_1st_run.jpg)

</details>

Improvement messages: 
- Organise the headings for better accessability.
- The word Create! in the animation intro do not have enough contrast.
- Missing meta tag for description.
  
<details open>
  <summary>2nd run with Lighthouse - after fixing the issues</summary>

  ![Lighthouse 2nd run](assets/images/images_read_me/lighthouse_2nd_run.jpg)

</details>

<hr>

## Validation
The HTML, CSS and Javascript code has been validated on below editors. The issues arising has been recorded in the dropdown menus.

### W3C HTML Validator
I have included screenprints of the first and final validation of the HTML with W3C validation.
<br>

<details>
  <summary>Index Page HTML- Initial Check</summary>

  ![Validation HTML Index 1st](assets/images/images_read_me/index_page_html_initial_check.jpg)

</details>

- space on text for image favicon - removed<br>
- missing heading for gallery section - added.
  
<details open>
  <summary>Index Page HTML- Final Check</summary>

  ![Validation HTML Index Final](assets/images/images_read_me/index_page_html_final_check.jpg)

</details>

<details>
  <summary>Female Avatar Modal HTML- Initial Check</summary>

  ![Validation HTML Female Avatar 1st](assets/images/images_read_me/female_avatar_html_initial_check.jpg)

</details>

- misuse of aria-label - removed.<br>
- backlash on open tags - removed.

<details open>
  <summary>Female Avatar Modal HTML- Final Check</summary>

  ![Validation HTML Female Final](assets/images/images_read_me/female_avatar_html_final_check.jpg)

</details>

<details open>
  <summary>Male Avatar Modal HTML- Initial Check (no fixes)</summary>

  ![Validation HTML Male Final](assets/images/images_read_me/male_avatar_html_final_check.jpg)

</details>

<details open>
  <summary>404 Page HTML- Initial Check (no fixes)</summary>

  ![Validation HTML 404 Final](assets/images/images_read_me/male_avatar_html_final_check.jpg)

</details>

### W3C CSS Validator
The CSS was succesfully validated for all pages.

![Screenshot of the CSS Validation](assets/images/images_read_me/css_validation_all_pages.jpg)

### JSHint Validator
I have included screenprints of the first and final validation for each script validated with JSHint.

<details>
  <summary>Index Page Script- Initial Check</summary>

  ![Index JSHint Check](assets/images/images_read_me/index_page_jshint_first_check.jpg)

</details>

- use  esversion: 6 - included /* jshint esversion: 6 */ to enforce ES6 syntax in JSHint.<br>
- undefined variable (anime) - included /* global anime */ due to (anime) defined in html head script.
- added aria-hidden forcement function after first check.
  
<details open>
  <summary>Index Page Script- Final Check</summary>

  ![Index JSHint Final Check](assets/images/images_read_me/index_page_jshint_final_check.jpg)

</details>

<details>
  <summary>Female Avatar Modal Script- Initial Check (this script was later refactored and deleted)</summary>

  ![Female Avatar JSHint Check](assets/images/images_read_me/female_avatar_page_jshint_first_check.jpg)

</details>

- loop should be wrapped in if statement - fixed.<br>
- use dont notation instead of brackets for "animal" and "nose" - fixed.<br>
- unused variable - defined.
  
<details open>
  <summary>Female Avatar Modal Script- Final Check</summary>

  ![Female Avatar JSHint Final Check](assets/images/images_read_me/female_avatar_page_jshint_final_check.jpg)

</details>

<details>
  <summary>Male Avatar Modal Script- Initial Check (this script was later refactored and deleted)</summary>

  ![Male Avatar JSHint Check](assets/images/images_read_me/female_avatar_page_jshint_first_check.jpg)

</details>

- loop should be wrapped in if statement - fixed.<br>

<details open>
  <summary>Male Avatar Modal Script- Final Check</summary>

  ![Male Avatar JSHint Final Check](assets/images/images_read_me/male_avatar_page_jshint_final_check.jpg)

</details>

<details>
  <summary>Avatar Modal Script- Initial Check (this script is refactored from previous avatar scripts)</summary>

  ![Avatar JSHint Check](assets/images/images_read_me/refactored_avatar_page_jshint_first_check.jpg)

</details>

- loop should be wrapped in if statement - fixed.<br>
- remove unused variable - fixed.<br>

<details open>
  <summary>Avatar Modal Script- Final Check</summary>

  ![Avatar JSHint Final Check](assets/images/images_read_me/refactored_avatar_page_jshint_final_check.jpg)

</details>

<details>
  <summary>Contact Modal Script- Initial Check</summary>

  ![Contact Modal JSHint Check](assets/images/images_read_me/contact_page_jshint_first_check.jpg)

</details>

- loop should be wrapped in if statement - fixed.<br>

<details open>
  <summary>Contact Modal Script- Final Check</summary>

  ![Contact Modal JSHint Final Check](assets/images/images_read_me/contact_page_jshint_final_check.jpg)

</details>

<hr>

## Testing with Jest
I used Jest testing framework to perform unit tests on the contact modal functionality, ensuring a smooth and error-free user experience. These tests verify that the modal behaves as expected when opened, closed, and submitted. There are five tests in the Jest test file (script-contact-modal.test.js):

- Opening the Contact Modal,	showContactModal() -	Ensures clicking the "Contact" button removes the hidden class, making the modal visible.
- Closing the Contact Modal,	closeContactModal() -	Verifies that clicking the close button adds the hidden class, hiding the modal.
- Displaying the Success Modal,	showSuccessModal() -	Checks that calling this function hides the contact modal and displays the success modal.
- Calling showSuccessModal on Form Submission,	handleFormSubmit(event) -	Uses a mock function to confirm that submitting the form triggers showSuccessModal().
- Closing the Success Modal,	closeSuccessModal()	- Ensures that clicking the close button on the success modal adds the hidden class, hiding it.

Each test focuses on a key interaction, ensuring that the contact form and modals function properly within the application. Three of the tests passed on the first run while two tests (showContactModal, handleFormSubmit) failed on the first run. After fixing the issues all tests passed in this file and I transferred the code to the script-contact-modal.js file to be implemented in the project.

<hr>

## Bugs and Fixes
Here I have recorded some issues that I spent excessive time solving with the solutions indicated below.

### Media Queirys Avatar Modals
The media queirys for the male and female modals did not work. I noticed the media queiry for 768px and up was applied to the modals instead of the intended media queiry for 1024px. Due to this I first applied the media queirys I wanted for the larger screen to the medium size screen.

#### Solution
After removing below css from the iframe the media queiry returned back to normal.<br>
 .responsive-iframe-container iframe {<br>
    width: 120%;<br>
    height: 130%;<br>
    border: 0;<br>
    transform: scale(0.7);<br>
    /* Scale down to 80% of the original size */<br>
    transform-origin: top left;<br>
    /* Scale from the top-left corner */<br>
}

### Swatches Color Picker
The swatches in the color picker did not work when picking the colors.

#### Solution
Since I had hex colors indicated in the swatches for the color picker they did not work due to the color-picker being set up as rgb. When adding the HexToRgb as the code in the dropdown menu the swatches became active.

  ![Code for HEX Swatches](assets/images/images_read_me/hex-to-rgb.jpg)

### Bootstrap Blocking Modal Accessibility
When opening the avatar modals, the framework automatically sets aria-hidden="true" on the modal container. This prevents assistive technologies from recognizing the modal content. The browser blocks this behavior, leading to the following console warning:

  ![Console Warning aria-hidden](assets/images/images_read_me/aria-hidden-true.jpg)

#### Solution
I tried to changing to the inert attribute instead, but still got the warning. I even removed all the bootstrap from the modal, using only css but still got the warning. In the final solution I implemented a JavaScript fix to override Bootstrap’s aria-hidden behavior and ensure accessibility compliance.
- On show.bs.modal: Removes aria-hidden and inert to make the modal accessible.
- On shown.bs.modal: Moves focus to the first interactive element inside the modal.
- On hide.bs.modal: Restores aria-hidden="true" and inert when closing.

<details>
  <summary>Javascript Solution Console Warning</summary>

  ![Contact Modal JSHint Check](assets/images/images_read_me/aria-hidden-solution.jpg)

</details>

### Handling Multiple Canvases
The canvas did not draw for several reasons during the development.

#### Solution
I spent a lot of my time debugging why the canvas did not draw after adding another function or changing something in the css. Mostly the main thumbnails and the additional thumbnail functions were conflicting with each other. After a while I realised that if I changed something in the handleThumbnailSelection function I also needed to implement updates for the setupAdditionalThumbnails function. Since most of the functions in my scripts for the avatar generators are related to the canvas I had to investigate and see the script as a whole.

[Back to Content Table](#content)

<br>
<br>
<hr>
<hr>
<br>
<br>

# REFERENCES
- [Media References](#media-references)
- [Content References](#content-references)

## Media References
https://www.youtube.com/watch?v=xwKbtUP87Dk<br>
https://www.youtube.com/watch?v=W6NZfCO5SIk<br>
https://www.youtube.com/watch?v=PkZNo7MFNFg<br>
https://www.w3schools.com/html/html5_canvas.asp<br>
- Slack Community and information
- Stand Ups with Kay on Thursdays

## Content References
- Free Download Template for website checking from https://www.hubspot.com
- Code Institute Tutorials and Learning Content

[Back to Content Table](#content)

<br>
<br>
<hr>
<hr>
<br>
<br>

# CREDITS
- [Images](#images)
- [Code](#code)

## Images
All images are created by myself in Adobe Illustrator.

## Code

### Animation Intro
The JavaScript for the animation intro at the start of the page is based on code by designer Tobias Ahlin. You can find his work at https://tobiasahlin.com. I modified the code by changing the letters and colors of the text to match my own design.

### ChatGPT
I have used ChatGPT throughout the process as a sparring partner for ideas, troubleshooting, and problem-solving. I have asked ChatGPT on solutions with the HTML, styling CSS and solutions for Javascript that I have followed in either writing or copied snippets of code into the IDE.

<br>
<br>
<hr>
<hr>
<br>
<br>

# PERSONAL NOTES
This project was a fun yet challenging deep dive into canvas-based rendering, allowing users to customize avatars by layering different facial features, clothing, and accessories. My goal was to create an intuitive, interactive experience with a clean UI and smooth interactions.  While there’s always room for improvement, I’m happy with what I was able to accomplish.

Throughout this process, I not only came to understand event-driven JavaScript but also refined my experience with HTML, CSS, and Chrome Developer Tools. There were moments when I genuinely doubted I would be able to finish due to JavaScript syntax. But working through those challenges made the process all the more rewarding.
 
One personal touch I added was the red and blue color scheme in the shape selection - a subtle nod to the iconic red pill vs. blue pill scene in The Matrix. Just as Neo’s choice symbolized stepping into the unknown, tackling this project pushed me beyond my comfort zone, forcing me to confront challenges head on. And in the end, that’s what growth is all about - choosing to keep going, even when the code feels like the Matrix’s cascading green symbols, leaving me wondering if I’ll ever fully decode it.

![Red and Blue Pill](assets/images/images_read_me/red_blue_pill.jpg)

<hr>

# ACKNOWLEDGMENTS
I want to thank my mentor Rory Patrick for always being so supporting and engaging in showing me new tips and tricks. Also a big thank you to the Slack community at Code Institute and the peers who are always eager to help out.

[Back to Content Table](#content)


<br>
<br>
<hr>
<hr>
<br>
<br>
