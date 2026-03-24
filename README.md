# Enrollment Form Study Project

## Description

This is a study project implementing an enrollment form for "Estrelas do Amanhã", a Brazilian private kindergarten. The form is designed to collect comprehensive information for new student registrations, including child details, residential address, guardian information, and enrollment preferences.

The project demonstrates modern web development practices with a focus on user experience, form validation, and integration with Brazilian-specific services.

### Key Functionalities

- **CEP Auto-lookup**: Integrates with ViaCEP API to automatically populate address fields
- **Phone Validation**: Advanced validation for Brazilian phone numbers including area code verification
- **File Upload**: Drag-and-drop interface for birth certificate submission
- **Form Validation**: Real-time validation with visual feedback
- **Responsive Design**: Mobile-first approach with flexible layouts

## Technologies Studied

- **HTML5**: Semantic markup, form elements, accessibility attributes
- **CSS3**: Custom properties, Grid/Flexbox layouts, responsive design, modular architecture, custom form controls (checkboxes, radio buttons, file inputs)
- **Vanilla JavaScript**: ES6+ features, DOM API, Fetch API, event handling
- **Web APIs**: File API, FormData, XMLHttpRequest alternatives
- **External APIs**: RESTful API integration, JSON parsing, error handling

## Skills Developed

- **Problem Solving**: Breaking down complex requirements into manageable components
- **Code Organization**: Structuring projects with clear separation of concerns
- **Debugging**: Identifying and fixing issues in form validation and API integration
- **Documentation**: Creating clear, maintainable code with comments
- **Version Control**: Using Git for project management and collaboration

## Future Learning Opportunities

This project could be extended to include:

- Backend integration for form submission
- Database storage for form data
- User authentication and session management
- Advanced validation with server-side verification
- Progressive Web App features

## Project Structure

```
formulariodematricula/
├── index.html                 # Main HTML file
├── assets/
│   ├── icons/                 # Form icons and graphics
│   └── images/                # Static images
├── js/
│   ├── cep.js                 # CEP lookup functionality
│   ├── fileUpload.js          # File upload handling
│   └── validatePhone.js       # Phone number validation
└── styles/
    ├── global.css             # Design tokens and global styles
    ├── layout.css             # Layout and grid system
    ├── form.css               # Form-specific styling
    ├── utils.css              # Utility classes
    └── fields/
        ├── checkbox.css       # Checkbox styling
        ├── droparea.css       # File drop area styling
        ├── input.css          # Input field styling
        └── radio.css          # Radio button styling
```

## License

This is a study project for educational purposes only.</content>
<parameter name="filePath">e:\Projetos de estudo\formulariodematricula\README.md
