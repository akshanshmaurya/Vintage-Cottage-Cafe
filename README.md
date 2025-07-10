# Vintage Cottage Cafe Website

Welcome to the Vintage Cottage Cafe Website project! This is a modern, responsive web application built to showcase the charm of a vintage cottage cafe, allowing customers to explore menus, book tables, view galleries, and learn more about the cafe.

## 🚀 Technologies Used

This project leverages a powerful and modern tech stack to deliver a fast, interactive, and maintainable user experience:

*   **React**: A JavaScript library for building user interfaces.
*   **TypeScript**: A superset of JavaScript that adds static typing, enhancing code quality and maintainability.
*   **Vite**: A next-generation frontend tooling that provides an extremely fast development experience and optimized build performance.
*   **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
*   **PostCSS**: A tool for transforming CSS with JavaScript plugins, used here for Tailwind CSS and Autoprefixer.
*   **Supabase**: An open-source Firebase alternative providing database, authentication, and storage services.
*   **GSAP (GreenSock Animation Platform)**: A robust JavaScript animation library used for smooth and performant animations, integrated via a custom `useGsapReveal` hook.
*   **`vite-plugin-compression2`**: A Vite plugin used to enable Gzip and Brotli compression for optimized asset delivery in production builds.

## 📂 Project Structure

The project is organized into logical directories to ensure maintainability and scalability:

```
.env
.gitignore
README.md
index.html
package-lock.json
package.json
postcss.config.cjs
postcss.config.js
src/
│   ├── App.tsx
│   ├── components/                 # Reusable UI components
│   │   ├── AnimatedText.tsx
│   │   └── ui/                     # UI components (e.g., Shadcn UI)
│   ├── hooks/                      # Custom React hooks
│   │   └── useGsapReveal.tsx
│   ├── index.tsx
│   ├── lib/                        # Utility functions and configurations
│   │   ├── supabase.ts             # Supabase client setup
│   │   └── utils.ts
│   ├── screens/                    # Main application pages/views
│   │   ├── AboutPage/              # About Us page
│   │   ├── BookingPage/            # Table Booking page
│   │   ├── GalleryPage/            # Photo Gallery page
│   │   ├── MenuPage/               # Cafe Menu page
│   │   └── StitchDesign/           # Specific design/feature related screen
│   └── styles/                     # Global styles and Tailwind CSS entry
│       └── tailwind.css
tailwind.config.js
tailwind.css
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
```

## ⚙️ Getting Started

To get this project up and running on your local machine, follow these steps:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/en/) installed on your system. It is recommended to use the latest LTS version.

### Installation

1.  **Clone the repository (if applicable):**

    ```bash
    git clone <repository-url>
    cd vintage-cottage-cafe-website
    ```

2.  **Install dependencies:**

    Navigate to the project root directory and install the necessary packages using npm:

    ```bash
    npm install
    ```

### Running the Development Server

To start the development server and view the application in your browser:

```bash
npm run dev
```

Once the server starts, the application will typically be accessible at [http://localhost:5173/](http://localhost:5173/). Vite provides hot module replacement for a smooth development experience.

### Building for Production

To create an optimized production build of the application:

```bash
npm run build
```

This command will compile and optimize your code, including applying Gzip and Brotli compression to static assets, and place the output in the `dist` directory, ready for deployment.

## ✨ Features

*   **Responsive Design**: Adapts seamlessly to various screen sizes.
*   **Interactive UI**: Built with React for a dynamic user experience.
*   **Optimized Performance**: Leverages Vite and compression plugins for fast loading times.
*   **Modular Structure**: Easy to extend and maintain with clear separation of concerns.
*   **Supabase Integration**: Ready for backend services like database and authentication.
*   **GSAP Animations**: Enhances user engagement with smooth visual transitions.

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please feel free to open an issue or submit a pull request.
