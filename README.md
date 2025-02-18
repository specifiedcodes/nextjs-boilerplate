
<body>
  <h1>Next.js Boilerplate</h1>
  <p>This repository is a production-ready Next.js boilerplate built with TypeScript, Tailwind CSS, Supabase, and additional modern tools. It includes configurations for ESLint, Prettier, and Jest, along with best practices for API services, UI components, error handling, and more.</p>

  <h2>Features</h2>
  <ul>
    <li>Next.js with TypeScript</li>
    <li>ESLint + Prettier for code quality</li>
    <li>Tailwind CSS for styling</li>
    <li>Jest for testing</li>
    <li>Supabase integration for backend services</li>
    <li>React Hook Form & Zod for form management</li>
    <li>@tanstack/react-query for data fetching</li>
    <li>Custom API service pattern using axios</li>
    <li>Sentry for error tracking</li>
    <li>GitHub Actions for CI/CD</li>
    <li>Security headers and basic SEO setup</li>
    <li>Cursor AI rules for consistent coding practices</li>
  </ul>

  <h2>Project Structure</h2>
  <pre>
my-nextjs-boilerplate/
├── .cursor/
│   └── rules/              # Cursor AI rule files
├── components/
│   └── ui/                # UI components (Button, Card, Input, LoadingSpinner, etc.)
├── hooks/                 # Custom reusable hooks (e.g., useLoading, useSubmit)
├── lib/                   # Shared utilities and providers
│   ├── providers.tsx      # React Query provider
│   └── utils.ts           # Utility functions (e.g., cn for Tailwind classes)
├── app/ or pages/         # Next.js app directory (or pages directory, depending on your structure)
├── services/
│   └── api.ts             # Base API service using axios
├── styles/
│   └── globals.css        # Global CSS and Tailwind configuration
├── next.config.ts         # Next.js configuration (with security headers)
├── next-seo.config.ts     # SEO configuration using next-seo
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
  </pre>

  <h2>Getting Started</h2>
  <ol>
    <li>Clone the repository:
      <br><code>git clone https://github.com/specifiedcodes/nextjs-boilerplate.git</code>
    </li>
    <li>Install dependencies:
      <br><code>npm install</code>
    </li>
    <li>Run the development server:
      <br><code>npm run dev</code>
    </li>
  </ol>

  <h2>Contributing</h2>
  <p>Contributions are welcome! Please open an issue or submit a pull request with any improvements or bug fixes.</p>
</body>
</html>
