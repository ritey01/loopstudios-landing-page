# Loopstudios landing page solution



## Table of contents
- [Loopstudios landing page solution](#loopstudios-landing-page-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Author](#author)
  


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size


### Screenshot

![](src/images/my-designs/desktopMyDesign.png)

![](src/images/my-designs/mobileMyDesign.png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- React
- React Router
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles



### What I learned

My biggest learnings came from flexbox and its use in layout design.  This went hand and hand with learning the importance of HTML to get the desired effect of flexbox and CSS grid.  I furthered my understanding of images and getting the desired effect with responsive design.

I have gotten more comfortable using psuedo selectors in particular 
```css 
::after and ::before
```

I used these psuedo selectors to create the opacity effect on the main images so that the text was not effected.
```css
&:hover::before {
      content: "";
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      background-color: rgba(255, 255, 255, 0.25);
    }
    &:hover {
      a {
        color: black;
      }
    }
```

I enjoyed using and developing my skills with styled components.


### Continued development

Further my understanding and effciency with flexbox, CSS and responsive design.


## Author

- linkedIn - [Sally Wright](https://www.linkedin.com/in/sally-wright-411b541a0/)



