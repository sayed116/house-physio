# HousePhysio - Physiotherapy Website

This is a professional physiotherapy website template built with HTML, CSS, and JavaScript. It's designed to showcase services, team members, and allow patients to book appointments online.

## Features

- Responsive design that works on all devices
- Service showcase section
- Team member profiles
- Testimonials slider
- Online appointment booking form
- FAQ section
- Newsletter subscription
- Contact information with map integration

## File Structure

```
housephysio-website/
├── index.html                # Main HTML file
├── style.css                 # CSS styles
├── script.js                 # JavaScript functionality
├── Physiotherapy-Logo.png    # Logo image
└── README.md                 # This documentation file
```

## How to Use

1. Clone or download this repository
2. Open index.html in your browser to view the website
3. Customize the content to match your physiotherapy practice:
   - Replace placeholder images with your own
   - Update text content, services, and team information
   - Add your actual contact information and location on the map
   - Configure the appointment form to connect with your preferred backend/email service

## Customization

### Changing Colors

The website uses CSS variables for colors, making it easy to update the color scheme. Edit the following variables in the `style.css` file:

```css
:root {
    --primary-color: #0077b6;
    --primary-dark: #005f8f;
    --secondary-color: #4ecdc4;
    /* other color variables */
}
```

### Adding Services

To add or modify services, edit the service cards in the Services section of the `index.html` file:

```html
<div class="service-card">
    <div class="icon">
        <i class="fas fa-icon-name"></i>
    </div>
    <h3>Service Name</h3>
    <p>Service description goes here.</p>
</div>
```

### Adding Team Members

To add a team member, duplicate the team card structure in the Team section of the `index.html` file:

```html
<div class="team-card">
    <div class="team-image">
        <img src="path/to/image.jpg" alt="Member Name">
    </div>
    <h3>Member Name</h3>
    <p class="position">Position</p>
    <p class="bio">Short biography.</p>
    <div class="social-links">
        <a href="#"><i class="fab fa-linkedin"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
    </div>
</div>
```

## Browser Compatibility

The website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Credits

This template uses:
- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) for typography (Poppins)
- [Placeholder.com](https://placeholder.com/) for placeholder images (replace with actual images)

## License

This template is available for personal and commercial use. Feel free to modify it to suit your needs. 
