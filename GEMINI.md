# GEMINI.md

## Project Overview

This is a personal portfolio website designed to showcase professional experience, projects, and skills. It is a single-page application built with a modern frontend stack.

**Key Technologies:**
*   **Framework:** React
*   **Language:** TypeScript
*   **Build Tool:** Vite
*   **Styling:** CSS (individual `.css` files per component)

**Architecture:**
The application is structured around a main `App.tsx` component that assembles various sections. Each section (e.g., `About`, `Projects`, `Skills`) is a separate component with its own dedicated CSS file, promoting modularity and maintainability. The project also includes a `components/layout` directory for structural elements like the `Header` and `Footer`.

## Building and Running

The following scripts are available in `package.json` to manage the development lifecycle.

*   **Run the development server:**
    ```bash
    npm run dev
    ```

*   **Build the application for production:**
    ```bash
    npm run build
    ```

*   **Lint the codebase:**
    ```bash
    npm run lint
    ```

*   **Preview the production build locally:**
    ```bash
    npm run preview
    ```

## Development Conventions

*   **Component-Based Structure:** The UI is built with React components, located in `src/components`.
*   **Styling:** Each component has a corresponding CSS file for its styles (e.g., `Header.tsx` and `Header.css`). This approach scopes styles to their respective components.
*   **TypeScript:** The project uses TypeScript for static typing, with configuration defined in `tsconfig.json` and `tsconfig.app.json`.
*   **Linting:** ESLint is configured to maintain code quality. The configuration can be found in `eslint.config.js`.
*   **State Management:** Component-level state is managed using React hooks (`useState`, `useEffect`, `useRef`) as seen in `App.tsx`.
