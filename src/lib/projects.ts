export interface Project {
  title: string
  description: string
  tag: "Open source" | "Weekend" | string
  url: string
  github?: string
  img?: string
  technologies?: string[]
  date?: string
  status?: "active" | "inactive"
}

export const projects: Project[] = [
  {
    title: "SmartCript",
    description:
      "Use artificial intelligence to your advantage: accelerate your learninganalyze your PDF, DOCx, TXT and videos with a single click.",
    tag: "Weekend",
    url: "https://smartcript.vercel.app/",
    img: "/projects/smartcript.webp",
    technologies: [
      "next.js",
      "postgresql",
      "tailwind css",
      "typescript",
      "shadcn/ui",
      "stripe",
    ],
    date: "April 25, 2024",
    status: "active",
  },
  {
    title: "Short URL",
    description:
      "Shorten your URL with a simple click. Copy and share it effortlessly. Save time and space in your messages. Make your communications more efficient. 🌐🔗",
    tag: "March 16, 2024",
    url: "https://chort.vercel.app/",
    github: "https://github.com/andrepg-dev/short-url",
    img: "/projects/chort-url.webp",
    technologies: [
      "next.js",
      "mongodb",
      "tailwind css",
      "shadcn/ui",
      "typescript",
    ],
    date: "March 16, 2024",
  },
  {
    title: "NinjaJS: JavaScript Compiler",
    description:
      "NinjaJS is a JavaScript compiler based on RunJS, allowing developers to write and compile code efficiently.",
    tag: "Weekend",
    url: "https://ninjajs.vercel.app/",
    img: "/projects/ninjajs.webp",
    technologies: [
      "next.js",
      "tailwind css",
      "shadcn/ui",
      "typescript",
      "Code Mirror",
    ],
    date: "January 25, 2024",
    status: "active",
  },
  {
    title: "Youtube Downloader",
    description:
      "Download videos from youtube in mp4 format, with the option to download the audio in mp3 format. 🎥",
    tag: "January 17, 2024",
    url: "https://ytd-app.vercel.app/",
    github:
      "https://github.com/andrepg-dev/Youtube-Downloader-nextjs",
    img: "/projects/ytd.webp",
    technologies: ["next.js", "tailwind css", "shadcn/ui", "typescript"],
    date: "January 17, 2024",
  },
  {
    title: "Twitter clone",
    description:
      "Social network for mobile 📱🐦 Share ideas, news and thoughts in optimized mobile dimensions. Connect with the world in the palm of your hand.",
    tag: "November 20, 2023",
    url: "https://twios.vercel.app/",
    github:
      "https://github.com/andrepg-dev/NextJS-Projects/tree/main/projects/02-next-firebase-app",
    img: "/projects/twios.webp",
    technologies: [
      "next.js",
      "tailwind css",
      "shadcn/ui",
      "firebase",
      "typescript",
    ],
    date: "November 20, 2023",
  },
  {
    title: "E-commerce",
    description:
      "E-commerce platform with a wide selection of products. Intuitive interface, varied content.",
    tag: "Open source",
    url: "https://czmobile.vercel.app",
    github: "https://github.com/andrepg-dev/CZMobile-Ecommerce",
    img: "/projects/czmobile.webp",
    technologies: [
      "next.js",
      "redux toolkit",
      "shadcn/ui",
      "typescript",
      "tailwind css",
    ],
    date: "December 21, 2023",
  },
  {
    title: "Cuevana clone",
    description:
      "Streaming platform with a wide selection of movies and series. Intuitive interface, varied content.",
    tag: "Open source",
    url: "https://cuevana8-clon.vercel.app/",
    github: "https://github.com/andrepg-dev/Cuevana-8-clon",
    img: "/projects/cuevana.webp",
    technologies: [
      "react",
      "vite",
      "react router",
      "tailwind css",
      "javascript",
    ],
    date: "September 4, 2023",
  },
  {
    title: "Google Translator clone",
    description:
      "Global translation app 🌍🔤 Translate multiple languages, copy, paste and listen to text with ease. Communication without borders.",
    tag: "Open source",
    url: "https://go-translator.vercel.app/",
    github:
      "https://github.com/andrepg-dev/NextJS-Projects/tree/main/projects/03-translator-app",
    img: "/projects/translator.webp",
    technologies: ["next.js", "typescript", "tailwind css", "shadcn/ui"],
    date: "November 23, 2023",
  },
  {
    title: "Chat application",
    description:
      "Platform for digital communication 📱💬 Emojis, images and videos in messages. Easily connect with multimedia content.",
    tag: "Weekend",
    url: "https://chatwaveapp.netlify.app/",
    github: "https://github.com/andrepg-dev/Chat-Wave",
    img: "/projects/chatwave.webp",
    technologies: [
      "angular",
      "socket.io",
      "firebase",
      "mongodb",
      "tailwind css",
    ],
    date: "July 20, 2023",
    status: "inactive",
  },
  {
    title: "Angular Translator",
    description:
      "Project built with Angular, using the Google Translate API to translate text in different languages, including listening to text and speaking through a microphone.",
    tag: "Open source",
    url: "https://andrepg-dev.github.io/Angular-Translator/",
    github: "https://github.com/andrepg-dev/Angular-Translator",
    img: "/projects/angular-translator.webp",
    technologies: ["angular", "google fonts", "bootstrap", "typescript"],
    date: "April 21, 2023",
  },
  {
    title: "Form builder",
    description:
      "Platform to easily create and manage forms, with delete and create functions. Simplify your workflow",
    tag: "Open source",
    url: "https://cuestionario-ef58b.web.app/",
    github: "https://github.com/andrepg-dev/Form-Builder",
    img: "/projects/form-builder.webp",
    technologies: ["angular", "firebase", "bootstrap", "google fonts"],
    date: "April 1, 2023",
  },
  {
    title: "Gif World App",
    description:
      "Application to find the best gifs, using the Giphy API you can download and share the gifs that you like the most",
    tag: "Open source",
    url: "https://andrepg-dev.github.io/Gif-APP/",
    github: "https://github.com/andrepg-dev/Gif-APP",
    img: "/projects/gifworld.webp",
    technologies: ["angular", "google fonts", "bootstrap", "typescript"],
    date: "March 11, 2023",
  },
  {
    title: "QR Code Generator",
    description:
      "Application created to generate QR codes quickly and easily with the ability to download and share them ✅",
    tag: "Open source",
    url: "https://andrepg-dev.github.io/Angular-QRCode/",
    github: "https://github.com/andrepg-dev/Angular-QRCode",
    img: "/projects/angular-qrcode.webp",
    technologies: ["angular", "bootstrap", "google fonts", "typescript"],
    date: "April 14, 2023",
  },
  {
    title: "Code Editor",
    description:
      "Simple applications with a code editor. Supported languages HTML, CSS and JavaScript, using Angular Monaco Editor NPM package.",
    tag: "Open source",
    url: "https://c0d3.netlify.app/",
    github: "https://github.com/andrepg-dev/Code-Editor",
    img: "/projects/code-editor.webp",
    technologies: ["angular", "bootstrap", "typescript", "google fonts"],
    date: "Juny 10, 2023",
  },
  {
    title: "Voice Worx App",
    description:
      "Voice recorder running natively with the browser and uploaded to a database to save files. 🎤🗂️",
    tag: "Open source",
    url: "https://andrepg-dev.github.io/Voice-Worx/",
    github: "https://github.com/andrepg-dev/Voice-Worx",
    img: "/projects/voice-worx.webp",
    technologies: ["angular", "firebase", "bootstrap", "typescript"],
    date: "March 22, 2023",
  },
  {
    title: "Next Crud application",
    description:
      "Using React Context API and storing data in localstorage, with which you can create, read, update and delete data.",
    tag: "Open source",
    url: "https://app-crud-nextjs.vercel.app/",
    github:
      "https://github.com/andrepg-dev/NextJS-Projects/tree/main/projects/01-crud-nextjs",
    img: "/projects/crud-nextjs.webp",
    technologies: ["next.js", "tailwind css", "javascript"],
    date: "October 10, 2023",
  },
]
