# 🌟 LookScout – Landing Page with PWA & Push Notifications

**LookScout** is a modern, animated, and responsive landing page built using **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. It includes **PWA support**, **push notifications**, and a fully mobile-friendly UI.

![LookScout Preview](./public/logo.png)

🚀 **Live Demo**: [https://land-scouts.vercel.app](https://land-scouts.vercel.app)

---

## ✨ Features

- ✅ **Next.js 14** (App Router)
- 🎨 **Tailwind CSS** for utility-first styling
- 💥 **Framer Motion** animations for smooth UX
- 🌐 **PWA support** (offline + installable)
- 🔔 **Web Push Notifications**
- 📱 **Responsive** design across desktop, tablet, and mobile
- ⚡ **Image optimization** using `next/image`
- 🧩 **Modular components**
- 🧠 **Clean, maintainable codebase**

---

## 🧰 Tech Stack

- [Next.js 14](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/)
- [Web Push API](https://developer.mozilla.org/en-US/docs/Web/API/Push_API)
- [Workbox](https://developer.chrome.com/docs/workbox)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Prasha-nt/Look-Scout.git
cd Look-Scout
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run Locally

```bash
npm run dev
# or
yarn dev
```

App runs at: [http://localhost:3000](http://localhost:3000)

---

## ⚙️ Build & Deploy

To build the app for production:

```bash
npm run build
```

To start production server:

```bash
npm start
```

Deploy easily via [Vercel](https://vercel.com/) or any platform that supports Next.js.

---

## 📦 PWA Setup

- Includes `manifest.json` and `service-worker.js`
- App is installable and works offline
- Uses Workbox for caching and offline support

---

## 🔔 Push Notifications

- Requests permission on first load
- Sends browser notification when "Send Notification" button is clicked
- Fully implemented in `/components/PushNotification.tsx`

---

## 🎨 Animations

All animations are handled using Framer Motion:

- Page transitions
- Button hover and tap effects
- Content fade-ins
- Mobile menu slide toggle

---

## 🌍 Responsive Design

- Desktop: Horizontal nav bar
- Tablet/Mobile: Hamburger menu with transition
- Responsive utility classes for layout consistency

---
