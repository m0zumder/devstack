# 🧱 Dev Stack - Ideal Development Stack Builder

A modern, interactive web application that enables developers and technical teams to explore, compare, and assemble their ideal technology stack across frontend, backend, database, and devops tooling.

---

## 🌐 Live Preview & Repository
- **Live Demo Link:** https://devstack-mozlishstudio.vercel.app/
- **GitHub Repository:** https://github.com/m0zumder/devstack

---

## 📖 Project Overview
Dev Stack is an intuitive developer tool that simplifies tech stack selection. Modern developers are overwhelmed by thousands of frameworks, libraries, and databases. Dev Stack brings the top industry-standard technologies into a unified, responsive dashboard where users can curate a customized stack, monitor selection counts in real time, and eliminate duplicate choices.

---

## 🛠️ Technologies Used
- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (with custom brand gradient theme)
- **Notifications:** React-Toastify
- **Data Source:** Asynchronously fetched local JSON (`public/technologies.json`)
- **Icons & Badges:** Official SVG logos via DevIcons CDN and custom Tailwind badges

---

## ✨ 3 Core Features

1. **Dynamic Interactive Stack Builder (Live Sidebar):**
   Users can add technologies to their personal stack with a single click. The "Your Stack" sidebar instantly updates the selected technology counter, displays each chosen framework with its category and logo, and allows single-item removal (✕) as well as a "Remove All" bulk reset.

2. **Smart Duplicate Prevention & Instant Alerts:**
   The application enforces stack integrity by preventing any technology from being added more than once. Attempting to add an already selected item triggers an immediate warning notification via `react-toastify`, while added cards automatically transition into a disabled "✓ Added to Stack" state.

3. **Unified Brand Theme & Fully Responsive Layout:**
   Engineered with a centralized CSS gradient theme (`orange → pink → violet`) that seamlessly styles brand typography, headings, and interactive buttons from a single variable. The entire UI smoothly adapts across mobile (with custom hamburger navigation), tablet (2-column grid), and desktop (3-column grid + sticky sidebar).

---

## 📚 React Conceptual Questions & Answers

### 1. What is JSX, and why is it used in React?
**Answer:**  
JSX stands for **JavaScript XML**. It is a syntax extension for JavaScript that allows developers to write HTML-like markup directly inside JavaScript files.  
React uses JSX because it makes writing UI components intuitive, visual, and declarative. Instead of manually calling `React.createElement()` over and over, JSX unifies layout markup and logic into a single cohesive file, while automatically sanitizing strings to protect against Cross-Site Scripting (XSS).

---

### 2. What is the difference between props and state?
**Answer:**  
- **Props (Properties):** Immutable data passed from a parent component down to a child component. The receiving child component can only read props and cannot modify them.
- **State:** Mutable, local data managed internally within a component using hooks like `useState`. When state changes, React triggers a re-render to update the DOM.

| Feature | Props | State |
|---|---|---|
| Origin | Passed from parent | Created inside the component |
| Mutability | Read-only (Immutable) | Mutable via state setter function |
| Purpose | Component configuration & inputs | Dynamic data tracking & UI updates |

---

### 3. What does the `useState` hook do, and where did you use it in this project?
**Answer:**  
The `useState` hook allows functional components to declare and update reactive local state variables.  
In this project, `useState` is used in:
1. `technologies`: Stores the array of technology objects loaded from the JSON file.
2. `selectedStack`: Stores the list of technologies currently chosen by the user in "Your Stack".
3. `loading`: Tracks the boolean status while fetching JSON data to display the loading spinner.
4. `mobileMenuOpen` (in `Navbar.jsx`): Toggles the responsive hamburger mobile menu open and closed.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:**  
The `useEffect` hook lets you perform **side effects** in functional components, such as API calls, timer operations, or DOM event listeners.  
In this project, fetching data from `public/technologies.json` is an asynchronous operation (side effect). Wrapping the `fetch()` call inside `useEffect` with an empty dependency array `[]` guarantees that the data is requested exactly once when the component initially mounts, preventing infinite re-rendering loops.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:**  
React's Virtual DOM reconciliation process uses the `key` prop to identify which items in a list have been added, updated, reordered, or deleted.  
Without a unique and stable key (such as `tech.id`), React would be forced to re-render the entire list on every single change, causing poor performance and potential UI state bugs. Unique keys allow React to update only the specific DOM node that actually changed.

---

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).
**Answer:**  
Conditional rendering is the ability to render different JSX elements or components based on certain conditions or state values, using JavaScript operators like ternary (`? :`) or logical AND (`&&`).  
**Example used in `YourStack.jsx`:**
```jsx
{count === 0 ? (
  <div className="border border-dashed border-slate-200 rounded-2xl py-12 px-4 text-center">
    <p className="text-xs font-medium text-slate-400">
      Your stack is empty.
    </p>
  </div>
) : (
  <div className="space-y-3">
    {selectedStack.map((item) => (
      <StackItem key={item.id} item={item} />
    ))}
    <button onClick={onRemoveAll}>Remove All</button>
  </div>
)}
