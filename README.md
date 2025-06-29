# 📝 React Todo App

A simple React Todo application built with Next.js and TypeScript.

## ✨ Features

### Core Functionality
- ✅ **Add Todos** - Create new tasks with input validation
- ✅ **Toggle Completion** - Mark tasks as complete/incomplete
- ✅ **Delete Todos** - Remove unwanted tasks
- ✅ **Progress Tracking** - Visual progress bar and completion percentage

### React Concepts Demonstrated
- 🔄 **State Management** - Using `useState` for todos array and form state
- 🎯 **Event Handling** - Add, toggle, and delete functionality
- 🎨 **Conditional Rendering** - Strike-through completed tasks and dynamic styling
- 📝 **Form Handling** - Input validation and submission with error handling

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/todo-app.git
   cd todo-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the app.

## 🏗️ Project Structure

```
todo-app/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   └── ui/                  # shadcn/ui components
├── todo-app.tsx             # Main Todo App component
├── package.json             # Dependencies and scripts
├── tailwind.config.ts       # Tailwind CSS configuration
└── README.md               # Project documentation
```

## 🧩 Component Architecture

### Main Components

- **`TodoApp`** - Main application component containing all logic
- **Form Section** - Input field with validation and submit button
- **Todo List** - Renders individual todo items
- **Progress Section** - Shows completion statistics and progress bar

### State Management

```typescript
interface Todo {
  id: number
  text: string
  completed: boolean
}

// Main state
const [todos, setTodos] = useState<Todo[]>([])
const [inputValue, setInputValue] = useState("")
const [error, setError] = useState("")
```

## 🎯 Key Features Explained

### 1. State Management
- Uses React's `useState` hook to manage the todos array
- Separate state for form input and validation errors
- Immutable state updates following React best practices

### 2. Event Handling
- **Add Todo**: Form submission with validation
- **Toggle Complete**: Checkbox interaction to update completion status
- **Delete Todo**: Remove items from the list
- **Input Changes**: Real-time validation and error clearing

### 3. Form Validation
- Prevents empty todo submission
- Minimum character length requirement (3 characters)
- Real-time error feedback
- Form reset after successful submission

### 4. Conditional Rendering
- Strike-through styling for completed tasks
- Dynamic background colors based on completion status
- Error messages that appear/disappear based on validation
- Empty state when no todos exist

## 🎨 Styling

This project uses:
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible React components
- **Lucide React** - Beautiful, customizable icons
- **Custom gradients** - Modern background styling

## 📱 Responsive Design

The app is fully responsive and works on:
- 📱 Mobile devices (320px and up)
- 📟 Tablets (768px and up)
- 💻 Desktop computers (1024px and up)

## ♿ Accessibility Features

- Semantic HTML elements
- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- High contrast colors
- Focus indicators

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click!

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `out` folder to [Netlify](https://netlify.com)

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "scripts": {
     "deploy": "gh-pages -d out"
   }
   ```
3. Run: `npm run build && npm run deploy`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 Future Enhancements

- [ ] **Local Storage** - Persist todos between sessions
- [ ] **Categories/Tags** - Organize todos with labels
- [ ] **Due Dates** - Add deadline functionality
- [ ] **Drag & Drop** - Reorder todos by dragging
- [ ] **Search & Filter** - Find and filter todos
- [ ] **Dark Mode** - Toggle between light and dark themes
- [ ] **Export/Import** - Backup and restore todos
- [ ] **Animations** - Smooth transitions and micro-interactions

## 🐛 Known Issues

- None currently! 🎉

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Lucide](https://lucide.dev/) - Icon library
- [Vercel](https://vercel.com/) - Deployment platform

---

⭐ **Star this repository if you found it helpful!**

```bash
# Quick start command
git clone https://github.com/yourusername/todo-app.git && cd todo-app && npm install && npm run dev
```