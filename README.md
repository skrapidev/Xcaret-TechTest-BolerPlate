# Xcaret Boilerplate

React application with TypeScript and clean architecture.

## Installation

```bash
npm install
```

## Scripts

```bash
npm start    # Development server
npm build    # Production build
npm test     # Run tests
```

## Tech Stack

- React 19
- TypeScript
- React Router
- Axios
- Inversify (DI)

## Structure

```
src/
├── Pages/          # Application pages that contents component architecture of that page and clean architecture that need for dynamic rendering (domain, infrastructure, use case and application) using the S.O.L.I.D. principles
├── Router/         # Routing configuration
└── Shared/         # Shared components and services
    ├── Components/
    ├── Repository/
    ├── UseCase/
    └── Utils/
```
