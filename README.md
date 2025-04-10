# 📋 Pxlhut Multistep Form Task

A sleek, modern multi-step signup form built with **Next.js App Router**, **Zod**, **Framer Motion**, **TanStack Query**, and **Tailwind CSS** (with dark mode support). Each step of the form includes animated transitions, responsive design, and proper validation using `Zod` schemas. The final step presents a form summary and displays a success confirmation upon submission.

---

## 🚀 Features

- ✅ Multi-step form with 4 steps (Personal Info, Address, Account Setup, Review)
- 🎯 Schema validation using `Zod`
- 🌙 Light and dark mode with custom theming
- 💅 Fully responsive using Tailwind CSS
- 🔄 Framer Motion slide animations between steps
- 🔧 Form submission via **Next.js API route** using **TanStack Query**
- ✅ Success confirmation screen with icon after final submission

---

## 🛠️ Tech Stack

| Tech                        | Purpose                               |
| --------------------------- | ------------------------------------- |
| **Next.js 14 (App Router)** | Routing, server components, API route |
| **TypeScript**              | Type safety                           |
| **Zod**                     | Form schema + validation              |
| **React Hook Form**         | Form state management                 |
| **Tailwind CSS**            | Utility-first styling                 |
| **TanStack Query**          | API mutation (form submission)        |
| **Framer Motion**           | Page/step transitions & animations    |

---

---

## 🧪 How to Run Locally

Follow these steps to run the project on your local machine:

### 1. Clone the repository

```bash
git clone https://github.com/ashrafweb/pxlhut-multistepform-task.git
cd pxlhut-multistepform-task
npm install
npm run dev
```

### What I learned

Using app router I could create separate components for each step which was compromising user experience and smoothness of the form , so I decided to use a single form component . but if in future there's any chance of increase of steps , it's better to use separate pages .
