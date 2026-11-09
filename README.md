# 🖼️ Custom Image Slider

A smooth **image gallery slider** built with **vanilla HTML, CSS, and JavaScript**. Twelve images are laid out side by side and the track slides horizontally with a cubic-bezier easing — navigate with **Previous / Next** buttons or the **left / right arrow keys**, with wrap-around and a live slide counter.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📌 Project Type

| | |
|---|---|
| **Category** | Frontend UI component / Image carousel |
| **Type** | Static single-page slider (no routing, no build step) |
| **Purpose** | Browse a gallery of images with smooth transitions |
| **Slides** | 12 (loaded from picsum.photos) |
| **Dependencies** | None |
| **Build Tools** | None — runs directly in the browser |

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (absolute positioning, `transform`, transitions, gradients, keyframe animations) |
| Logic | Vanilla JavaScript (ES6+, DOM manipulation, keyboard events) |
| Images | [picsum.photos](https://picsum.photos/) placeholder images |
| Fonts | System UI stack (Segoe UI, Tahoma, Verdana) |
| Hosting | Any static host (GitHub Pages, Netlify, Vercel) |

---

## ✨ Features

- 🎞️ **12-image gallery slider** rendered dynamically from an array
- ◀️ ▶️ **Previous / Next buttons** with styled arrow chips
- 🔁 **Infinite wrap-around** — Next from last goes to first, Previous from first goes to last
- ⌨️ **Keyboard navigation** — `←` and `→` arrow keys
- 🔢 **Live counter** — shows `current / total`
- 🎨 **Smooth cubic-bezier slide animation** (0.8s)
- 🌈 **Gradient background**, rounded card, soft shadow, and fade-in entrance animations
- 🖼️ **`object-fit: cover`** — images fill the frame without distortion

---

## ⚙️ How It Works

```js
const images = [ /* 12 image URLs */ ];
let counter = 0;

// Lay every slide side by side
images.forEach((img, index) => {
  main.innerHTML += `<img src="${img}" class="slide" style="left:${index * 100}%">`;
});

// Move the whole track left by (counter * 100%)
const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
  updateCounter();
};

const goNext = () => {
  counter = (counter + 1) % slides.length; // wrap to 0
  slideImage();
};
```

1. Each image becomes an absolutely positioned slide at `left: index * 100%`.
2. Changing `counter` applies `translateX(-counter * 100%)` to all slides, so the row shifts.
3. CSS `transition` animates the shift smoothly.
4. Counter and wrap-around logic keep navigation infinite.

---

## 📁 Project Structure

```
customSlider/
├── index.html        # Slider frame, nav buttons, counter
├── css/
│   └── custom.css    # Slide positioning, transitions, animations, responsive rules
└── js/
    └── app.js        # Image array, slide rendering, prev/next, keyboard control
```

---

## 🚀 Getting Started

No installation required.

```bash
git clone https://github.com/faisalrlakhany/customSlider.git
cd customSlider
```

Open `index.html` in your browser, or use VS Code **Live Server**.

> Images are loaded from `picsum.photos`, so an internet connection is needed. Replace the `images` array with your own URLs to use your gallery.

---

## 🧠 Concepts Practiced

- Dynamically rendering elements with `innerHTML` and inline styles
- CSS `transform: translateX()` for hardware-accelerated animation
- Modulo arithmetic for infinite looping
- Keyboard event handling (`keydown`, `ArrowLeft`, `ArrowRight`)
- Absolute positioning and `object-fit` for a clean carousel

> **Improvement ideas:** autoplay with pause on hover, dot indicators, touch/swipe support, and lazy-loading images.

---

## 👨‍💻 Author

**Muhammad Faisal Lakhany**
GitHub: [@faisalrlakhany](https://github.com/faisalrlakhany)
