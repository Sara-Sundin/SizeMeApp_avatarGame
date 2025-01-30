### Project 2

# Avatar Maker Website

[View project on GitHub](https://sara-sundin.github.io/SizeMeApp_avatarGame/).

## Introduction

Welcome to the Avatar Maker! This web application allows users to design personalized avatars with ease. Whether you're looking to create a playful, professional, or unique representation of yourself, the Avatar Maker provides a variety of customization options, including gender selection, facial features, colors, and accessories. With an intuitive interface and interactive tools, you can create and download your perfect avatar in just a few clicks. Perfect for profiles, games, or creative projects!

![Screenshot of the website on multi devices](assets/images/images_read_me/mockup-techsini.png)

# CONTENT

[USER EXPERIENCE (UX)](#user-experience)
- The website across UX planes
- User Stories
<br>

[DESIGN](#design)
- Colour Scheme
- Typography
- Imagery
- Wire Frames
- Structure of the website
- Features
- Accessibility
- Aria labels
<br>

[TECHNOLOGIES USED](#technologies-used)
- Languages used to create the website
- Frameworks & Libraries
- Software
- Automated Tools
- ChatGPT
<br>

[DEPLOYMENT](#deployment)
- GitHub
<br>

[TESTING](#testing)
- Devices
- Browsers
- Testing Grid
- Chrome Dev Tools
- Lighthouse
- Validators
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

# USER EXPERIENCE

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
- Clear labels and visual cues such as headings and tooltips guide users through the avatar creation process without confusion.
  
### Surface Plane
The visual design is playful and creative, reflecting the theme of personalization and self-expression:
- Bright, welcoming colors and clean typography set a friendly tone.
- Background images and avatar previews enhance visual appeal and interactivity.
- Hover effects, animations, and transparent overlays add subtle interactivity while maintaining focus on the core functionality.
- 
<hr>

## User Stories
### First-Time Visitors
Goal: Quickly understand the purpose of the website and begin creating their avatar.
- See a welcoming homepage with a clear introduction and instructions (User Story 1).
- Learn about the Avatar Maker and its features through brief, engaging descriptions (User Story 2).
- Access the gender selection section to start creating their avatar (User Story 3).
- Experience seamless navigation across devices with responsive design (User Story 4).
- View samples of responsive avatars to get inspired and see the possibilities (User Story 9).
### Returning Visitors
Goal: Continue customizing or exploring new features.
- Revisit the Avatar Maker to experiment with different styles or features (User Story 5).
- Use the download feature to save their avatar for personal or professional use (User Story 6).
### Frequent Visitors
Goal: Engage with the website and share feedback.
- Explore updates or new features added to the Avatar Maker (User Story 7).
- Share the Avatar Maker with friends or colleagues using the site’s social sharing options (User Story 8).
- Provide feedback on their experience to contribute to future improvements (User Story 10).

<details open>
<summary><h4>User Story 1 (must-have)</h4></summary>
  
### User Story 1 (must-have)
As a visitor, I want to see a welcoming homepage with a brief introduction,
so that I can quickly understand the purpose of the Avatar Maker site.

#### Acceptance Criteria
- A clear heading introduces the Avatar Maker.
- Brief text explains what the site does.
- Navigation links to the gender selection.
- 
#### Tasks
- Design a clean homepage layout.
- Add a prominent heading and introductory text.
- Implement responsive navigation links.
</details>

<details>
<summary><h4>User Story 2 (must-have)</h4></summary>
  
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
<summary><h4>User Story 3 (must-have)</h4></summary>
  
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
<summary><h4>User Story 4 (must-have)</h4></summary>
  
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
<summary><h4>User Story 5 (must-have)</h4></summary>

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
<summary><h4>User Story 6 (should-have)</h4></summary>
  
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
<summary><h4>User Story 7 (could-have)</h4></summary>
  
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
<summary><h4>User Story 8 (could-have)</h4></summary>
  
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
<summary><h4>User Story 9 (want-have)</h4></summary>
  
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

<details>
<summary><h4>User Story 10 (want-have)</h4></summary>
  
### User Story 10 (want-have)
As a visitor, I want to provide feedback on my experience, so that I can contribute to improving the Avatar Maker site.

#### Acceptance Criteria
- A feedback form is accessible from the main navigation or footer.
- The form allows users to rate their experience and leave comments.
- A confirmation message is displayed after successful submission.

#### Tasks
- Design and implement a feedback form with fields for rating and comments.
- Add a "Submit Feedback" button that sends data to the server or stores it locally.
- Ensure the form is accessible and mobile-friendly.
</details> 

[Back to Content Table](#content)

<br>
<br>
<hr>
<hr>
<br>
<br>

# DESIGN
- [Colour Scheme](#colour-scheme)
- [Typography](#typography)
- [Imagery](#imagery)
- [Wire Frames](#wire-frames)
- [Structure of the website](#structure-of-the-website)
- [Features](#features)
- [Accessibility](#accessibility)
- [Aria labels](#aria-labels-used)
- 
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

Lato: A modern sans-serif font with a humanist touch, Lato ensures clear readability for the main content. Its clean, neutral design complements the bold playfulness of Fredoka, providing a harmonious balance that enhances the overall user experience.

<hr>

## Imagery
The images used in this site are created by myself as sketches in Adobe Illustrator. The collage of avatars was created by inviting friends and peers to design their own avatars, which were then collected and curated into a dynamic composition that celebrates creativity and individuality.

<hr>

## Wire Frames
The wireframes were created in Adobe Illustrator for mobile, tablet and desktop. I have developed and used my own toolkit for the wireframes. The outcome for the website looks slightly different than the initial wireframes but the introduction of the page remained consistent.

<details open><summary><h4>Page Wireframe</h4></summary><img src=assets/images/images_read_me/wireframes_project-2.jpg></details>

<hr>

## Features

### Features on all pages

#### Favicon
The website includes a custom favicon to enhance its identity and improve user experience. The favicon, a small yet recognizable icon displayed in the browser tab, represents the creative and interactive nature of the Avatar Maker.

I designed the favicon in Adobe Illustrator, featuring a simplified avatar icon to match the site’s overall aesthetic. Its vibrant colors and clean lines ensure visibility and clarity, even at small sizes. This attention to detail reinforces the website's branding and provides users with a polished, professional experience.

<details open><summary><h4>Favicon Image</h4></summary><img src=assets/images/images_read_me/favicon-avatar-readme.png>></details>

### Header

<details open><summary><h4>Header Image - Desktop</h4></summary><img src=assets/images/images_read_me/header-desktop.jpg>></details>

#### Introduction Section
The Avatar Maker website welcomes users with an engaging and user-friendly introduction. The homepage features a bold heading, "Your vibe, your style, your avatar – let’s get started!", which sets the tone for creativity and individuality. A brief introductory paragraph invites users to explore the avatar customization journey with an arrow pointing to the images where the avatar generator opens, highlighting the fun and versatility of the tool.

<details open><summary><h4>Introduction Section Image - Desktop</h4></summary><img src=assets/images/images_read_me/introduction-desktop.jpg>></details>

#### Choose Gender Section
The Choose-Gender section invites users to begin their avatar creation journey with a choice between male and female avatars. Featuring clear, clickable icons and hover animations, the images respond dynamically, enhancing the experience and making it clear what to do. This responsive feedback captures attention and ensures seamless navigation. Each selection opens a modal for customization, making the transition smooth and intuitive. Designed for accessibility, this section is engaging and inclusive across all devices.

<details open><summary><h4>Choose Gender Section Image - Desktop</h4></summary><img src=assets/images/images_read_me/choose-gender-desktop.jpg>></details>

#### Avatar Generator Modal
The Avatar Generator Modal is a central feature of the site, designed to provide users with an engaging and interactive experience. When triggered, the modal opens to reveal the Avatar Maker interface, where users can customize their avatars with ease. This full-screen design ensures focus on the creative process, eliminating distractions. With intuitive controls and seamless transitions, users can select features, adjust colors, and preview their avatars in real time. The modal's clean layout and responsive design enhance usability across devices, ensuring accessibility for all users.

<details open><summary><h4>Female Modal Image - Desktop</h4></summary><img src=assets/images/images_read_me/modal-avatar-female-desktop.jpg>></details>

<details open><summary><h4>Female Modal Image - Desktop</h4></summary><img src=assets/images/images_read_me/modal-avatar-male-desktop.jpg>></details>

#### Avatar Collage Section
The Avatar Collage section showcases a vibrant collection of avatars designed by users, serving as both an inspiring visual element and a navigation feature. At the center of the collage, a prominent button labeled "Download your avatar!" captures attention and provides guidance. This button links users back to the start of the introduction, ensuring a seamless flow through the site. 

<details open><summary><h4>Avatar Collage Section Image - Desktop</h4></summary><img src=assets/images/images_read_me/collage-desktop.jpg>></details>

#### Contact Section
The Contact Section offers an intuitive way for users to connect. At its heart is a prominently displayed button that, when clicked, opens a modal containing a clean and user-friendly email form. This design ensures seamless communication by allowing users to send inquiries or feedback directly without navigating away from the page. The straightforward functionality and modern design make it easy for users to engage, reinforcing accessibility and creating a streamlined user experience.

<details><summary><h4>Contact Section Image - Desktop</h4></summary><img src=assets/images/images_read_me/contact-desktop.jpg>></details>

#### Contact Modal
The contact modal is displaying a clean and simple form for submitting inquiries or feedback. The form includes fields for name, email, and message, ensuring all necessary details are collected efficiently. Designed for ease of use, the modal keeps the user on the page without the need for redirection.

<details open><summary><h4>Contact Modal Image - Desktop</h4></summary><img src=#>></details>

#### Success Modal
The Success Modal Window provides users with immediate feedback after successfully submitting the contact form. Once the "Send" button is pressed, the contact modal gracefully closes, and a success modal appears, confirming that the message has been sent. This modal includes a brief thank-you message to acknowledge the user's effort and reassure them that their inquiry has been received.

<details open><summary><h4>Success Modal Image - Desktop</h4></summary><img src=#>></details>

#### Footer
The Footer serves as a compact and functional closing section of the website, providing essential information and quick access to external links. It includes prominent social media icons, enabling users to easily connect on platforms like Instagram, LinkedIn, and WhatsApp. The footer's minimalist design aligns with the overall aesthetic of the site, ensuring it complements rather than distracts. The three social media icons are added with Font Awesome.

<details open><summary><h4>Footer Image - Desktop</h4></summary><img src=assets/images/images_read_me/footer-desktop.jpg>></details>

#### Future Pages - Avatar Inspiration Gallery
A planned addition to the website is an Avatar Inspiration Gallery, designed to inspire users and showcase the creative possibilities of the Avatar Maker. This feature will display a visually appealing grid or carousel of pre-designed avatars, each tailored to highlight unique styles and combinations. Users can browse the gallery and click on a sample to load it directly into the avatar editor for further customization. The responsive design will ensure seamless accessibility across all devices, enhancing the user experience. This gallery will serve as both an inspiration hub and a practical starting point for creating personalized avatars.

<hr>

## ARIA Labels Used

### Modal Dialogs:
Female Modal: aria-labelledby="femaleModalLabel", aria-hidden="true"
Male Modal: aria-labelledby="maleModalLabel", aria-hidden="true"

### Buttons:
Contact Button: aria-label="Open contact form modal"
Download Avatar Button: aria-label="Download your avatar and return to the introduction"

### Social Media Links:
aria-label="Visit my Instagram page (opens in a new tab)"
<br>
aria-label="Visit my LinkedIn page (opens in a new tab)"
<br>
aria-label="Connect on Whatsapp (opens in a new tab)"

### Color Picker
Pick your colors! text:
Current: aria-label="Color Picker"
Update Suggestion: Change to aria-labelledby and associate it with an ID for better semantic clarity.
Hue Slider:
aria-label="Adjust Hue"
Add role="slider".
Lightness Slider:
aria-label="Adjust Lightness"
Add role="slider".
Color Swatches:
Example for the red swatch:
aria-label="Select red color"

### Canvases:
Each canvas should include a label to describe its purpose. For instance:
aria-label="Avatar base layer"
aria-label="Skin layer"
aria-label="Hair layer"

### Buttons
Reset Button:
aria-label="Reset avatar to default"
Randomize Button:
aria-label="Generate a random avatar"
Download Button:
aria-label="Download the current avatar"

### Thumbnails
Main Thumbnails:

Each input should include a descriptive label. For example:
Base Thumbnail: aria-label="Select base background for avatar"
Hair Thumbnail: aria-label="Select hair style for avatar"
Additional Thumbnails:

Ensure each thumbnail has a unique and clear aria-label for selection. For example:
aria-label="Select long wavy hair style"

### Back Button:
aria-label="Go back to main thumbnail options"

## Download Avatar Section

### Download Button:
aria-label="Download your avatar in its current state"

[Back to Content Table](#content)

<br>
<br>
<hr>
<hr>
<br>
<br>

# TECHNOLOGIES USED
- [Languages used to create the website](#languages-used-to-create-the-website)
- [Frameworks & Libraries](#frameworks-and-libraries)
- [Software](#software)
- [Automated Tools](#automated-tools)
- [ChatGPT](#chatgpt)
- [Jest](#jest)
  
## Languages Used to Create the Website
- HTML
- CSS
- JavaScript
  
## Frameworks and Libraries
- Bootstrap (for responsive design and styling).
- Font Awesome (for icons).
- Google Fonts (for typography).
- Iloveimg.com (to compress images for faster loading).
- Jest (for testing javascript).
  
## Software
- Adobe Illustrator (for wireframes and hero image creation).
- Adobe Photoshop (for image editing and optimization).
- Git (for version control).
- GitHub (to save and store the website's code and files).
- VS Code (repository).
  
## Automated Tools
- Chrome DevTools (for debugging and testing).
- Lighthouse (to analyze performance, accessibility, and SEO).
- Am I Responsive (to test responsive design on various devices).
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
