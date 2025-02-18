
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
      <br><code>git clone https://github.com/your-username/nextjs-boilerplate.git</code>
    </li>
    <li>Install dependencies:
      <br><code>npm install</code>
    </li>
    <li>Run the development server:
      <br><code>npm run dev</code>
    </li>
  </ol>

  <h2>Comprehensive Template Features</h2>

  <h3 class="section-title">CORE FOUNDATION</h3>
  <table>
    <thead>
      <tr>
        <th>Category</th>
        <th>Feature</th>
        <th>Package/Approach</th>
        <th>Purpose</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Base Setup</td>
        <td>Next.js + TypeScript</td>
        <td><code>next</code>, <code>typescript</code></td>
        <td>Modern framework with static typing</td>
      </tr>
      <tr>
        <td>Code Quality</td>
        <td>ESLint + Prettier</td>
        <td><code>eslint</code>, <code>prettier</code></td>
        <td>Enforce code standards and consistent formatting</td>
      </tr>
      <tr>
        <td>Styling</td>
        <td>Tailwind CSS</td>
        <td><code>tailwindcss</code></td>
        <td>Utility-first CSS styling</td>
      </tr>
      <tr>
        <td>Testing</td>
        <td>Testing Framework</td>
        <td><code>jest</code>, <code>@testing-library/react</code></td>
        <td>Component and integration testing</td>
      </tr>
    </tbody>
  </table>

  <h3 class="section-title">PROJECT STRUCTURE</h3>
  <table>
    <thead>
      <tr>
        <th>Category</th>
        <th>Feature</th>
        <th>Package/Approach</th>
        <th>Purpose</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Organization</td>
        <td>File Structure</td>
        <td>Custom folder template</td>
        <td>Clear organization (e.g., /pages, /components, /hooks, etc.)</td>
      </tr>
      <tr>
        <td>Types</td>
        <td>Type Definition</td>
        <td>Dedicated /types folder</td>
        <td>Centralized type management</td>
      </tr>
      <tr>
        <td>Hooks</td>
        <td>Reusable Hooks</td>
        <td>Custom hook library</td>
        <td>Common functionality (e.g., useFetch, useLoading)</td>
      </tr>
    </tbody>
  </table>

  <h3 class="section-title">BACKEND & DATA</h3>
  <table>
    <thead>
      <tr>
        <th>Category</th>
        <th>Feature</th>
        <th>Package/Approach</th>
        <th>Purpose</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Backend</td>
        <td>Supabase Integration</td>
        <td><code>@supabase/supabase-js</code></td>
        <td>Database, authentication, and realtime updates</td>
      </tr>
      <tr>
        <td>Forms</td>
        <td>Form Management</td>
        <td><code>react-hook-form</code>, <code>zod</code></td>
        <td>Form handling and validation</td>
      </tr>
      <tr>
        <td>State</td>
        <td>Data Fetching</td>
        <td><code>@tanstack/react-query</code></td>
        <td>Server state management</td>
      </tr>
      <tr>
        <td>API</td>
        <td>Base API Service Pattern</td>
        <td>Custom service abstraction</td>
        <td>Centralized API handling</td>
      </tr>
    </tbody>
  </table>

  <h3 class="section-title">UI & COMPONENTS</h3>
  <table>
    <thead>
      <tr>
        <th>Category</th>
        <th>Feature</th>
        <th>Package/Approach</th>
        <th>Purpose</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Components</td>
        <td>UI Library</td>
        <td><code>shadcn/ui</code></td>
        <td>Base component library</td>
      </tr>
      <tr>
        <td>Loading</td>
        <td>Loading State Patterns</td>
        <td>Custom components</td>
        <td>Loading states (spinners, skeletons)</td>
      </tr>
      <tr>
        <td>Animation</td>
        <td>Basic Animations</td>
        <td>CSS/Tailwind</td>
        <td>Simple transitions</td>
      </tr>
    </tbody>
  </table>

  <h3 class="section-title">PERFORMANCE & ERROR HANDLING</h3>
  <table>
    <thead>
      <tr>
        <th>Category</th>
        <th>Feature</th>
        <th>Package/Approach</th>
        <th>Purpose</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Performance</td>
        <td>Image/Code Optimization</td>
        <td>Next.js built-ins</td>
        <td>Optimization and lazy loading</td>
      </tr>
      <tr>
        <td>Error Handling</td>
        <td>Error Tracking</td>
        <td><code>@sentry/nextjs</code></td>
        <td>Production error monitoring</td>
      </tr>
      <tr>
        <td>Error UI</td>
        <td>Error Boundaries</td>
        <td>Custom implementation</td>
        <td>Graceful error handling</td>
      </tr>
    </tbody>
  </table>

  <h3 class="section-title">DEPLOYMENT & SECURITY</h3>
  <table>
    <thead>
      <tr>
        <th>Category</th>
        <th>Feature</th>
        <th>Package/Approach</th>
        <th>Purpose</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Infrastructure</td>
        <td>CI/CD</td>
        <td>GitHub Actions</td>
        <td>Automated deployment</td>
      </tr>
      <tr>
        <td>Environment</td>
        <td>Docker</td>
        <td>Multi-stage Dockerfile</td>
        <td>Containerization (if used)</td>
      </tr>
      <tr>
        <td>Security</td>
        <td>Security Headers & Rate Limiting</td>
        <td>Next.js defaults</td>
        <td>Basic security</td>
      </tr>
      <tr>
        <td>SEO</td>
        <td>Basic SEO</td>
        <td><code>next-seo</code></td>
        <td>Search engine optimization</td>
      </tr>
    </tbody>
  </table>

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
