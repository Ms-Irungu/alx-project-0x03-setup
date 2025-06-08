# Splash App – alx-project-0x03-setup

A Next.js application demonstrating shared layouts, custom 404 page, imperative routing, and Tailwind CSS, built as part of the ALX ProDev Frontend Program.

---

## Features

- **Shared Layout:** Header and Footer components reused across all pages using a Layout wrapper.
- **Custom 404 Page:** Friendly, styled error page for unknown routes.
- **Imperative Routing:** Navigation using Next.js `useRouter` for dynamic page transitions.
- **Reusable Button Component:** Customizable button for consistent UI.
- **Google Fonts:** Montserrat font imported globally.
- **Tailwind CSS:** Utility-first styling for rapid UI development.
- **React Icons:** Social and navigation icons via `react-icons/fa`.
- **Centralized Interfaces:** All TypeScript interfaces organized in the `/interface` directory.

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/<your-username>/alx-project-0x03-setup.git
   cd alx-project-0x03-setup/alx-project-0x03
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the development server:**
   ```sh
   npm run dev
   ```

4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
alx-project-0x03/
├── components/
│   ├── common/
│   │   └── Button.tsx
│   └── layouts/
│       ├── Footer.tsx
│       ├── Header.tsx
│       └── Layout.tsx
├── interface/
│   └── index.ts
├── pages/
│   ├── 404.tsx
│   └── index.tsx
├── styles/
│   └── globals.css
└── ...
```

---

## Key Files

- **components/layouts/Layout.tsx**  
  Wraps all pages with Header and Footer, ensures sticky footer and content padding for fixed header.

- **components/layouts/Header.tsx**  
  Fixed header with navigation and action buttons.

- **components/layouts/Footer.tsx**  
  Responsive footer with social links and useful navigation.

- **components/common/Button.tsx**  
  Reusable, color-customizable button component.

- **pages/index.tsx**  
  Landing page with imperative routing to mini-apps.

- **pages/404.tsx**  
  Custom 404 error page with a friendly message and navigation home.

- **interface/index.ts**  
  Centralized TypeScript interfaces for props and types.

- **styles/globals.css**  
  Imports Montserrat font and Tailwind CSS base styles.

---

## Customization

- **Add new pages:**  
  Create new files in `/pages` and they will automatically use the shared layout.

- **Update navigation:**  
  Edit `Header.tsx` or add new routes in `index.tsx` as needed.

- **Change theme:**  
  Modify Tailwind classes in the components or update `tailwind.config.js`.

---

## License

This project is for educational purposes as part of the ALX ProDev Frontend Program.

---
