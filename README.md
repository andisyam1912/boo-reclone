# Boo Reclone (Next.js Take-Home Assignment)

This project is a recreation of the Boo relationship poll page, built using **Next.js (Pages Router)** and **Tailwind CSS**.

## 🚀 How to Run the Project

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Run the development server:**
    ```bash
    npm run dev
    ```
3.  Open [http://localhost:3000](http://localhost:3000) with your browser.

## ⏱️ Time Spent
* **Start Time:** 22:25
* **End Time:** 23:25
* **Total Duration:** +/- 4 hours.

## 📝 Project Overview

### ✅ Completed
* **Structure:** Built using Next.js **Pages Router** (strictly avoiding App Router).
* **Styling:** Fully styled with **Tailwind CSS** (responsive mobile-first design).
* **Mock Data:** Created a simulated API endpoint/mock data structure to replicate the backend.
* **Interactivity:** Implemented voting logic (percentage calculation, progress bar animation, state handling).
* **Assets:** Used SVG icons instead of emojis for a professional look.

### ⏭️ Skipped / Assumptions
* **Backend Database:** As per instructions, no real backend is connected; data is mocked on the client side.
* **Persisting Vote:** Refreshing the page will reset the vote (since there's no database).

### 💡 Improvements (with more time)
* **Unit Testing:** Add Jest/React Testing Library for component testing.
* **Optimized Images:** Use `next/image` for better avatar rendering performance.
* **Animations:** Add smoother generic animations using Framer Motion.