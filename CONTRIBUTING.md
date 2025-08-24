# Contributing to UI Clip

Thank you for your interest in contributing to UI Clip! This document provides guidelines for contributing to the project.

## 🚀 Quick Start

### Prerequisites

- **Node.js**: Version 18.17 or higher
- **npm/yarn/pnpm**: Latest stable version
- **Git**: Latest stable version

### Development Setup

1. **Fork the repository**
   ```bash
   git clone https://github.com/ahmadrafidev/ui-clip
   cd ui-clip
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📝 How to Contribute

### 🐛 Reporting Bugs

1. **Check existing issues** to see if the bug has already been reported
2. **Create a new issue** with the following information:
   - Clear title describing the bug
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Browser and OS information
   - Screenshots if applicable

### ✨ Feature Requests

1. **Check existing issues** to see if the feature has already been requested
2. **Create a new issue** with:
   - Clear title describing the feature
   - Detailed description of the feature
   - Use cases and examples
   - Any relevant design mockups

### 💻 Submitting Code

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

2. **Make your changes** following the project's coding standards

3. **Test your changes**
   ```bash
   # Run tests
   pnpm test

   # Run linting
   pnpm lint

   # Build the project
   pnpm build
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Fill out the PR template
   - Reference any related issues
   - Add screenshots if applicable

## 🎨 Adding New Animations

### Animation Structure

Each animation should be a React component with the following structure:

```typescript
import { motion } from 'motion/react';

export function YourAnimationName() {
  return (
    <motion.div
      className="your-classes"
      // animation properties
    >
      {/* Your animation content */}
    </motion.div>
  );
}
```

### Adding to the Library

1. **Create the animation component** in the appropriate directory:
   - `components/animations/buttons/` for button animations
   - `components/animations/loaders/` for loading animations
   - `components/animations/progress/` for progress indicators
   - `components/animations/skeleton/` for skeleton loaders

2. **Add the animation code** to `components/animations/data/animation-codes.ts`:
   ```typescript
   yourAnimationName: `import { motion } from 'motion/react';

   <motion.div>
     {/* Your animation JSX */}
   </motion.div>`,
   ```

3. **Register the animation** in `components/animations/data/sample-animations.ts`:
   ```typescript
   createAnimation(
     'your-animation-id',
     'Your Animation Title',
     'Brief description of the animation',
     ANIMATION_CATEGORIES.YOUR_CATEGORY,
     YourAnimationComponent,
     animationCodes.yourAnimationName
   ),
   ```

### Animation Guidelines

- **Keep it simple**: Focus on one animation effect per component
- **Use semantic HTML**: Ensure the animation works with screen readers
- **Test performance**: Avoid heavy animations that could cause lag
- **Mobile-friendly**: Ensure animations work well on touch devices
- **Consistent styling**: Follow the existing design patterns

## 🏗️ Project Structure

```
ui-clip/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── animations/        # Animation components
│   │   ├── buttons/       # Button animations
│   │   ├── loaders/       # Loading animations
│   │   ├── progress/      # Progress indicators
│   │   └── skeleton/      # Skeleton loaders
│   └── ui/               # Reusable UI components
├── public/               # Static assets
└── utils/               # Utility functions
```

## 🎯 Coding Standards

### TypeScript

- Use **strict TypeScript** configuration
- Define types for all component props
- Use interfaces over types for object definitions
- Export types that might be used by other components

### React

- Use **functional components** with hooks
- Prefer **custom hooks** for complex logic
- Use **React.memo** for performance optimization when appropriate
- Follow the **single responsibility principle**

### CSS/Styling

- Use **Tailwind CSS** for styling
- Follow the existing **color scheme** and design tokens
- Ensure **responsive design** with mobile-first approach
- Use **semantic class names** when possible

### Performance

- **Minimize 'use client'** usage - prefer Server Components
- Use **dynamic imports** for code splitting
- **Optimize images** and assets
- Implement **proper loading states**

## 🧪 Testing

### Unit Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

### Manual Testing

- Test in multiple browsers (Chrome, Firefox, Safari, Edge)
- Test on mobile devices
- Test with screen readers (NVDA, JAWS, VoiceOver)
- Test keyboard navigation

## 📝 Commit Guidelines

Follow [Conventional Commits](https://conventionalcommits.org/) format:

```bash
feat: add new button animation
fix: resolve animation performance issue
docs: update contribution guidelines
style: format code with prettier
refactor: restructure animation components
test: add tests for button animations
chore: update dependencies
```

## 🔧 Development Tools

### Recommended Extensions

- **ESLint**: Code linting
- **Prettier**: Code formatting
- **TypeScript Hero**: TypeScript utilities
- **Tailwind CSS IntelliSense**: CSS class suggestions

### VS Code Settings

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "typescript.preferences.includePackageJsonAutoImports": "auto",
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["cx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"],
    ["cn\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"],
  ]
}
```

## 📚 Resources

- [Motion Documentation](https://motion.dev/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Accessibility Guidelines](https://react.dev/reference/react/useId)

## ❓ Getting Help

- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For questions and discussions

## 📄 License

By contributing to UI Clip, you agree that your contributions will be licensed under the MIT License.

---

**Happy coding! 🎉**
