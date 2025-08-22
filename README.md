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

## Architecture

Component-based architecture for single page application using Clean Architecture principles (Presentation -> Application -> Infrastructure -> Domain) with S.O.L.I.D. principles and dependency inversion.

### Structure

```
src/
├── Pages/          # Application pages with clean architecture layers
│   ├── Domain/     # Anemic models and DTOs
│   ├── Infrastructure/ # Repositories
│   ├── UseCase/    # Application rules
│   └── Service/    # Presentation layer
├── Router/         # Routing configuration
├── Shared/         # Reusable resources
└── Context/        # Application state management
```

## Documentation

- [Architecture Details](documentation.md)
