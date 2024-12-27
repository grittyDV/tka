# TKA Law Website

A professional lawyer's presentation website used for lead generation.

## Features

- Modern, responsive design
- Lead generation forms
- Practice areas showcase
- Contact information and consultation booking
- Full internationalization support

## Technical Stack

- React.js
- Tailwind CSS
- React Router for navigation
- i18n support with translation context

## Project Structure

```
src/
  ├── components/
  │   ├── Website.tsx
  │   ├── Header.tsx
  │   ├── Hero.tsx
  │   ├── Services.tsx
  │   ├── Contact.tsx
  │   ├── Footer.tsx
  │   └── index.ts
  ├── contexts/
  │   └── TranslationContext.tsx
  ├── locales/
  │   └── hu.json
  ├── types/
  │   └── translations.ts
  └── styles/
      └── main.css
```

## Internationalization

The website uses a translation context for managing different languages. Currently supported:

- Hungarian (hu)

To add a new language:

1. Create a new JSON file in `src/locales/`
2. Follow the structure of `hu.json`
3. Update `TranslationContext.tsx` to include the new language

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## Contributing

Please read CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details