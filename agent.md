# Agent Instructions — IQ Southeast OA Website

> **สำคัญ:** ไฟล์นี้คือ "คัมภีร์" สำหรับ AI Agent ทุกตัว ที่จะมาทำงานต่อในโปรเจกต์นี้
> อ่านให้จบทุกบรรทัดก่อนเขียนโค้ดแม้แต่บรรทัดเดียว

---

## 1. ข้อมูลโปรเจกต์ (Project Overview)

| รายการ | รายละเอียด |
|---|---|
| **ชื่อโปรเจกต์** | IQ Southeast OA Website |
| **ภาษา** | Thai (th) เป็นหลัก, English เฉพาะ UI Label |
| **ประเภท** | Corporate Website — Office Automation Solutions |
| **กลุ่มเป้าหมาย** | B2B, หน่วยงานราชการ, สถาบันการศึกษา, องค์กรขนาดใหญ่ |
| **พื้นที่ให้บริการ** | จังหวัดอุดรธานี และภาคตะวันออกเฉียงเหนือ |
| **Device Target** | Desktop-first (1280px), Responsive ลงถึง Mobile (360px) |

---

## 2. เทคโนโลยีที่ใช้ (Tech Stack) — ห้ามเปลี่ยน

| เทคโนโลยี | เหตุผล |
|---|---|
| **HTML5** | โครงสร้างหน้าเว็บ, Semantic Elements |
| **CSS3 (Vanilla)** | สไตล์ทั้งหมด, CSS Custom Properties, ไม่ใช้ TailwindCSS |
| **JavaScript (Vanilla ES6+)** | Logic, DOM Manipulation, IntersectionObserver |

### ❌ ห้ามใช้
- ❌ TailwindCSS, Bootstrap, หรือ CSS Framework ใดๆ
- ❌ React, Vue, Angular, Svelte, หรือ JS Framework ใดๆ
- ❌ jQuery
- ❌ npm, node_modules (ยกเว้น dev server)
- ❌ CSS Preprocessor (SCSS, LESS) — เขียน Vanilla CSS เท่านั้น

---

## 3. Design System — Design Token

### 3.1 Brand Identity

```
ชื่อ Design System: IQ Southeast OA Executive
บุคลิกแบรนด์: Authoritative, Precise, Technologically Advanced
สไตล์: Corporate / Modern / Minimalism
อารมณ์: "Unshakeable Reliability" — ความน่าเชื่อถือที่ไม่สั่นคลอน
```

### 3.2 Color Palette — CSS Custom Properties

ประกาศทั้งหมดใน `:root` ของ `css/variables.css`

```css
:root {
  /* ===== Primary ===== */
  --color-primary:                 #001e40;
  --color-primary-container:       #003366;
  --color-on-primary:              #ffffff;
  --color-on-primary-container:    #799dd6;
  --color-primary-fixed:           #d5e3ff;
  --color-primary-fixed-dim:       #a7c8ff;
  --color-on-primary-fixed:        #001b3c;
  --color-on-primary-fixed-variant:#1f477b;
  --color-inverse-primary:         #a7c8ff;

  /* ===== Secondary ===== */
  --color-secondary:               #5b5f63;
  --color-secondary-container:     #e0e2e8;
  --color-on-secondary:            #ffffff;
  --color-on-secondary-container:  #616569;
  --color-secondary-fixed:         #e0e2e8;
  --color-secondary-fixed-dim:     #c4c6cc;
  --color-on-secondary-fixed:      #181c20;
  --color-on-secondary-fixed-variant:#44474b;

  /* ===== Tertiary ===== */
  --color-tertiary:                #1c1f20;
  --color-tertiary-container:      #313435;
  --color-on-tertiary:             #ffffff;
  --color-on-tertiary-container:   #9a9c9d;
  --color-tertiary-fixed:          #e1e3e4;
  --color-tertiary-fixed-dim:      #c5c7c8;
  --color-on-tertiary-fixed:       #191c1d;
  --color-on-tertiary-fixed-variant:#454748;

  /* ===== Surface ===== */
  --color-surface:                 #f9f9fc;
  --color-surface-dim:             #dadadc;
  --color-surface-bright:          #f9f9fc;
  --color-surface-container-lowest:#ffffff;
  --color-surface-container-low:   #f3f3f6;
  --color-surface-container:       #eeeef0;
  --color-surface-container-high:  #e8e8ea;
  --color-surface-container-highest:#e2e2e5;
  --color-surface-variant:         #e2e2e5;
  --color-surface-tint:            #3a5f94;

  /* ===== On Surface ===== */
  --color-on-surface:              #1a1c1e;
  --color-on-surface-variant:      #43474f;
  --color-inverse-surface:         #2f3133;
  --color-inverse-on-surface:      #f0f0f3;

  /* ===== Background ===== */
  --color-background:              #f9f9fc;
  --color-on-background:           #1a1c1e;

  /* ===== Outline ===== */
  --color-outline:                 #737780;
  --color-outline-variant:         #c3c6d1;

  /* ===== Error ===== */
  --color-error:                   #ba1a1a;
  --color-on-error:                #ffffff;
  --color-error-container:         #ffdad6;
  --color-on-error-container:      #93000a;

  /* ===== Silver (Design Accent) ===== */
  --color-silver:                  #8e9196;
}
```

### 3.3 Typography

**ฟอนต์ที่ต้องโหลดจาก Google Fonts:**

```html
<link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet">
```

**ไอคอนใช้ Material Symbols Outlined:**

```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet">
```

**Typography Token (CSS Custom Properties):**

```css
:root {
  /* ===== Font Family ===== */
  --font-headline:  'Be Vietnam Pro', sans-serif;
  --font-body:      'Inter', sans-serif;
  --font-label:     'IBM Plex Sans', sans-serif;

  /* ===== headline-xl ===== */
  --text-headline-xl-size:           48px;
  --text-headline-xl-line-height:    56px;
  --text-headline-xl-weight:         700;
  --text-headline-xl-letter-spacing: -0.02em;

  /* ===== headline-xl-mobile ===== */
  --text-headline-xl-mobile-size:           32px;
  --text-headline-xl-mobile-line-height:    40px;
  --text-headline-xl-mobile-weight:         700;
  --text-headline-xl-mobile-letter-spacing: -0.01em;

  /* ===== headline-lg ===== */
  --text-headline-lg-size:        32px;
  --text-headline-lg-line-height: 40px;
  --text-headline-lg-weight:      600;

  /* ===== headline-md ===== */
  --text-headline-md-size:        24px;
  --text-headline-md-line-height: 32px;
  --text-headline-md-weight:      600;

  /* ===== body-lg ===== */
  --text-body-lg-size:        18px;
  --text-body-lg-line-height: 28px;
  --text-body-lg-weight:      400;

  /* ===== body-md ===== */
  --text-body-md-size:        16px;
  --text-body-md-line-height: 24px;
  --text-body-md-weight:      400;

  /* ===== label-md ===== */
  --text-label-md-size:           14px;
  --text-label-md-line-height:    20px;
  --text-label-md-weight:         500;
  --text-label-md-letter-spacing: 0.05em;

  /* ===== caption ===== */
  --text-caption-size:        12px;
  --text-caption-line-height: 16px;
  --text-caption-weight:      400;
}
```

### 3.4 Spacing System — 8px Linear Scale

```css
:root {
  --space-base:           8px;
  --space-stack-sm:       12px;
  --space-stack-md:       24px;
  --space-stack-lg:       48px;
  --space-gutter:         24px;
  --space-margin-mobile:  16px;
  --space-margin-desktop: 64px;
  --space-container-max:  1280px;
}
```

### 3.5 Border Radius (Shape Language)

```css
:root {
  --radius-sm:      2px;    /* 0.125rem */
  --radius-default: 4px;    /* 0.25rem — Standard Elements */
  --radius-md:      6px;    /* 0.375rem */
  --radius-lg:      8px;    /* 0.5rem — Large Containers, Cards */
  --radius-xl:      12px;   /* 0.75rem */
  --radius-full:    9999px; /* Status Pills */
}
```

### 3.6 Elevation & Depth (Flat-Plus Approach)

```css
:root {
  /* Level 0 — Base Canvas */
  --shadow-none: none;

  /* Level 1 — Cards/Containers (ใช้ tonal layer + outline แทน shadow) */
  --shadow-card-border: 1px solid var(--color-outline-variant);

  /* Level 2 — Interactive Hover */
  --shadow-hover: 0px 4px 20px rgba(0, 51, 102, 0.08);

  /* Sticky Header */
  --shadow-header: 0 1px 3px rgba(0, 0, 0, 0.1);
}
```

### 3.7 Transition & Animation

```css
:root {
  --transition-fast:    200ms ease-in-out;
  --transition-default: 300ms ease-in-out;
  --transition-slow:    500ms ease-in-out;
  --transition-reveal:  600ms ease-out;
}
```

---

## 4. BEM Naming Convention — กฎเหล็ก

### 4.1 รูปแบบ

```
.block__element--modifier
```

| ส่วน | คำอธิบาย | ตัวอย่าง |
|---|---|---|
| **Block** | Component อิสระที่มีความหมายในตัว | `.header`, `.hero`, `.service-card` |
| **Element** | ส่วนย่อยภายใน Block (ใช้ `__`) | `.header__logo`, `.hero__title` |
| **Modifier** | สถานะหรือรูปแบบที่แตกต่าง (ใช้ `--`) | `.btn--primary`, `.nav__link--active` |

### 4.2 ตัวอย่าง BEM ที่ถูกต้อง

```html
<!-- ✅ ถูกต้อง -->
<header class="header">
  <div class="header__container">
    <a class="header__logo" href="/">IQ Southeast OA</a>
    <nav class="header__nav">
      <a class="header__nav-link header__nav-link--active" href="/">Home</a>
      <a class="header__nav-link" href="/portfolio">Portfolio</a>
    </nav>
    <button class="btn btn--primary header__cta">Request Quote</button>
  </div>
</header>
```

```html
<!-- ❌ ผิด — ห้ามทำ -->
<header class="bg-surface border-b px-6 sticky top-0">
  <!-- ↑ ห้ามใช้ utility class แบบ Tailwind -->
</header>
```

### 4.3 กฎ BEM ที่ต้องปฏิบัติตาม

1. **ห้าม Nest Block ซ้อน Block เกิน 1 ชั้น** — ถ้าต้อง nest ให้สร้าง Block ใหม่
2. **Element ต้องอยู่ภายใต้ Block เท่านั้น** — ห้ามมี `__element__element`
3. **Modifier ใช้กับทั้ง Block และ Element ได้** — เช่น `.card--featured` หรือ `.card__title--large`
4. **ชื่อใช้ kebab-case เสมอ** — เช่น `service-card` ไม่ใช่ `serviceCard`
5. **CSS selector ต้อง flat** — ห้าม `.header .header__nav .header__nav-link` ใช้ `.header__nav-link` โดยตรง

---

## 5. โครงสร้างไฟล์โปรเจกต์ (File Structure)

```
project-root/
├── index.html              ← หน้าแรก (Landing Page)
├── portfolio.html           ← หน้าผลงาน
├── services.html            ← หน้าบริการ
├── about.html               ← หน้าเกี่ยวกับเรา
├── contact.html             ← หน้าติดต่อเรา
│
├── css/
│   ├── variables.css        ← Design Token ทั้งหมด (colors, typography, spacing)
│   ├── reset.css            ← CSS Reset / Normalize
│   ├── base.css             ← Base styles (body, h1-h6, a, p, etc.)
│   ├── layout.css           ← Grid system, container, responsive utilities
│   ├── components/
│   │   ├── header.css       ← .header Block
│   │   ├── footer.css       ← .footer Block
│   │   ├── hero.css         ← .hero Block
│   │   ├── service-card.css ← .service-card Block
│   │   ├── portfolio-card.css ← .portfolio-card Block
│   │   ├── stats.css        ← .stats Block
│   │   ├── cta.css          ← .cta Block
│   │   ├── contact-form.css ← .contact-form Block
│   │   ├── btn.css          ← .btn Block
│   │   ├── table.css        ← .data-table Block
│   │   └── toast.css        ← .toast Block
│   └── pages/
│       ├── home.css         ← หน้า Home เฉพาะ
│       ├── portfolio.css    ← หน้า Portfolio เฉพาะ
│       ├── services.css     ← หน้า Services เฉพาะ
│       ├── about.css        ← หน้า About เฉพาะ
│       └── contact.css      ← หน้า Contact เฉพาะ
│
├── js/
│   ├── main.js              ← Entry point, shared logic
│   ├── header.js            ← Sticky header scroll effect
│   ├── reveal.js            ← IntersectionObserver scroll reveal
│   ├── contact-form.js      ← Form validation & submit
│   └── portfolio-filter.js  ← Portfolio card filter (ถ้ามี)
│
├── assets/
│   └── images/              ← รูปภาพทั้งหมด
│
├── agent.md                 ← ไฟล์นี้ — คำสั่งสำหรับ AI Agent
└── README.md                ← คำอธิบายโปรเจกต์สำหรับนักพัฒนา
```

---

## 6. Component Blueprint — รายละเอียดทุก Component

### 6.1 Header (`.header`)

```
Block: .header
├── .header__container          ← max-width: 1280px, mx-auto
├── .header__logo               ← font-headline-md, color-primary, bold
├── .header__nav                ← hidden บน mobile, flex บน desktop
│   └── .header__nav-link       ← font-body-md, color-secondary
│       └── --active            ← color-primary, font-bold, border-bottom 2px
├── .header__cta                ← btn btn--primary
└── .header__menu-toggle        ← แสดงเฉพาะ mobile, Material Icon "menu"

Behavior:
- position: sticky, top: 0, z-index: 50
- ปกติ height: 80px (5rem)
- เมื่อ scroll > 50px → เพิ่ม shadow, height ลดเป็น 64px (4rem)
- transition: all var(--transition-default)
```

### 6.2 Hero Section (`.hero`)

```
Block: .hero
├── .hero__background           ← absolute, inset-0, รูป background + overlay
│   ├── .hero__background-image ← object-cover, w-full, h-full
│   └── .hero__background-overlay ← gradient-to-right from primary-container to transparent
├── .hero__content              ← relative z-20, max-w-3xl
│   ├── .hero__title            ← headline-xl (desktop) / headline-xl-mobile (mobile), สีขาว
│   ├── .hero__description      ← body-lg, สี primary-fixed
│   └── .hero__actions          ← flex, gap
│       ├── .btn--hero-primary  ← bg-white, text-primary-container
│       └── .btn--hero-secondary ← border-white, text-white

Variants:
- .hero--landing   ← min-height: 819px, มี background image ซ้อน overlay
- .hero--page      ← height: 614px, มี background image + brightness filter 40%
- .hero--simple    ← ไม่มี background image, แค่ text + badge
```

### 6.3 Service Card (`.service-card`)

```
Block: .service-card
├── .service-card__icon-wrapper  ← 64x64px, bg-primary-container/10, rounded-lg
│   └── .service-card__icon      ← Material Symbol, color-primary, 30px
├── .service-card__title         ← headline-md, color-on-surface
├── .service-card__description   ← body-md, color-on-surface-variant
└── .service-card__link          ← label-md, color-primary, flex + chevron_right icon

Variants:
- .service-card--standard        ← bg-surface, border, p-32px
- .service-card--large           ← flex-row, image + content side by side
- .service-card--dark            ← bg-primary, text-white
- .service-card--with-image      ← มี .service-card__image ด้านบน/ด้านข้าง

Hover:
- box-shadow: var(--shadow-hover)
- transition: var(--transition-default)
- image: grayscale(100%) → grayscale(0%), scale(1) → scale(1.05)
```

### 6.4 Portfolio Card (`.portfolio-card`)

```
Block: .portfolio-card
├── .portfolio-card__image-wrapper ← overflow-hidden
│   └── .portfolio-card__image     ← object-cover, grayscale(100%) default
├── .portfolio-card__overlay       ← gradient-to-top from black/80
├── .portfolio-card__content       ← absolute bottom, text-white
│   ├── .portfolio-card__category  ← label-md หรือ caption, + Material Icon
│   ├── .portfolio-card__title     ← headline-md
│   └── .portfolio-card__description ← body-md, opacity 0.9

Variants:
- .portfolio-card--large           ← col-span-8, row-span-2
- .portfolio-card--small           ← col-span-4
- .portfolio-card--horizontal      ← flex-row (image + content แบ่งครึ่ง)
- .portfolio-card--content-focus   ← ไม่มี overlay, เน้น text + stats

Hover:
- border-color เปลี่ยนเป็น primary
- image: scale(1.05), grayscale(0%)
- overlay: opacity เพิ่ม
```

### 6.5 Stats Section (`.stats`)

```
Block: .stats
├── .stats__grid                 ← grid 2 cols (mobile), 4 cols (desktop)
│   └── .stats__item             ← text-center
│       ├── .stats__number       ← headline-xl, color-primary-container
│       └── .stats__label        ← label-md, color-secondary, uppercase, tracking-widest

ข้อมูลตัวอย่าง:
- 15+ / 20+ ปีแห่งประสบการณ์
- 500+ ลูกค้าองค์กร
- 1k+ Units Installed
- 24/7 Service Monitoring
- 99% อัตราความพึงพอใจ
```

### 6.6 CTA Section (`.cta`)

```
Block: .cta
├── .cta__container              ← max-width, text-center หรือ flex
├── .cta__title                  ← headline-xl (desktop), headline-xl-mobile (mobile), สีขาว
├── .cta__description            ← body-lg, color-primary-fixed, opacity 0.9
└── .cta__actions                ← flex, gap
    ├── .btn--cta-primary        ← bg-white, text-primary
    └── .cta__phone              ← flex items-center, icon + text

Variants:
- .cta--full-width               ← bg-primary, full-width section
- .cta--contained                ← bg-primary-container, rounded-2xl, ภายใน container
```

### 6.7 Contact Form (`.contact-form`)

```
Block: .contact-form
├── .contact-form__title         ← headline-md, color-primary
├── .contact-form__group         ← space-y-base
│   ├── .contact-form__label     ← label-md, color-on-surface-variant, block
│   └── .contact-form__input     ← bg-white, border outline-variant, rounded
│       └── --focus              ← border 2px primary-container
├── .contact-form__select        ← เหมือน input + appearance-none
├── .contact-form__textarea      ← เหมือน input, rows 5
└── .contact-form__submit        ← btn btn--primary, flex + send icon

Behavior:
- submit → btn เปลี่ยนเป็น loading state (spinner + "กำลังส่ง...")
- 1.5 วินาที → แสดง toast สำเร็จ
- 5 วินาที → toast หายไป
```

### 6.8 Data Table (`.data-table`)

```
Block: .data-table
├── .data-table__wrapper         ← overflow-x-auto, rounded-xl, border
├── .data-table__head            ← bg-surface-container หรือ bg-primary-container (สำหรับ dark header)
│   └── .data-table__th          ← label-md, color-primary, p-24px
├── .data-table__body
│   └── .data-table__row         ← border-bottom outline-variant
│       └── --zebra              ← nth-child(even) bg-surface-container-low
│           └── .data-table__td  ← body-md, p-24px
```

### 6.9 Button (`.btn`)

```
Block: .btn
├── --primary                    ← bg-primary-container, text-on-primary, rounded-lg (4px)
├── --secondary                  ← border 1px outline, text-primary, bg-transparent
├── --tertiary                   ← text-only, color-primary, + trailing chevron icon
├── --hero-primary               ← bg-white, text-primary-container
├── --hero-secondary             ← border-white, text-white
├── --cta-primary                ← bg-white, text-primary, shadow-xl
├── --large                      ← px-40px, py-20px, font-bold
├── --icon                       ← flex, gap-8px, items-center

Hover: opacity หรือ bg เปลี่ยนเล็กน้อย, transition: var(--transition-default)
```

### 6.10 Footer (`.footer`)

```
Block: .footer
├── .footer__grid                ← grid 1 col (mobile), 4 cols (desktop)
│   ├── .footer__brand           ← col-span-1 หรือ 2
│   │   ├── .footer__logo        ← headline-md, color-primary, bold
│   │   └── .footer__tagline     ← caption หรือ body-md, color-on-surface-variant
│   ├── .footer__links           ← Quick Links / Services
│   │   ├── .footer__links-title ← label-md, uppercase, bold
│   │   └── .footer__links-list
│   │       └── .footer__link    ← caption, color-on-surface-variant, hover:underline
│   ├── .footer__contact         ← ที่อยู่, เบอร์โทร
│   └── .footer__social          ← flex, gap, icon buttons
├── .footer__bottom              ← border-top, py-24px
│   ├── .footer__copyright       ← caption, color-on-surface-variant
│   └── .footer__status          ← status indicator (green dot + "System Online")
```

### 6.11 Toast (`.toast`)

```
Block: .toast
├── .toast__icon                 ← Material Symbol "check_circle"
└── .toast__message              ← label-md

State:
- default: translateY(20px), opacity(0), pointer-events-none
- .toast--visible: translateY(0), opacity(1)
- ตำแหน่ง: fixed, bottom-right
```

---

## 7. โครงสร้าง Layout แต่ละหน้า

### 7.1 หน้าแรก (index.html) — Landing Page

```
[Header — sticky]
[Hero — .hero--landing (min-h: 819px)]
[Introduction — 2 cols: text + image, stats]
[Services — 3 cards grid, bg-surface-container-low]
[Portfolio Preview — Bento Grid 4 cols]
[CTA — .cta--full-width, bg-primary]
[Footer]
```

### 7.2 หน้าเกี่ยวกับเรา (about.html)

```
[Header — sticky]
[Hero — .hero--page (h: 614px), brightness filter]
[Company History — 2 cols: text + stats grid]
[Mission & Vision — Bento Grid: 8+4 cols]
[Core Values — 3 cards, border-left-4 primary]
[Why Choose Us — 2 cols, bg-primary, white text]
[Technical Excellence — Zebra-striped table]
[Footer]
```

### 7.3 หน้าบริการ (services.html)

```
[Header — sticky]
[Hero — .hero--simple (text only)]
[Services Bento Grid — 12 col grid]
  ├── MPS (8 cols, flex-row: image + content)
  ├── Sales & Rental (4 cols, vertical)
  ├── Repair & Maintenance (4 cols, vertical)
  └── IT Solutions (8 cols, flex-row-reverse, bg-primary)
[Comparison Table — 4 cols pricing table]
[CTA — .cta--contained, bg-primary-container, rounded-2xl]
[Footer]
```

### 7.4 หน้าผลงาน (portfolio.html)

```
[Header — sticky]
[Hero — Badge + Title + Description]
[Portfolio Bento Grid — 12 col grid]
  ├── Large Feature (8 cols, overlay)
  ├── Vertical Small (4 cols, image + text)
  ├── Small Grid (4 cols, square image + hover overlay)
  ├── Wide Feature (8 cols, flex-row: image + dark content)
  ├── Content Focus (6 cols, stats + eco badge)
  └── Hardware Expertise (6 cols, flex-row: image 1/3 + text 2/3)
[Trust Statistics — 4 cols grid]
[CTA — .cta--contained, bg-surface-container-highest]
[Footer]
```

### 7.5 หน้าติดต่อเรา (contact.html)

```
[Header — sticky (ใช้ nav tag)]
[Header Section — Title + Description]
[Main Grid — 12 cols]
  ├── Contact Form (7 cols)
  │   ├── Name + Email (2 cols grid)
  │   ├── Subject (dropdown)
  │   ├── Message (textarea)
  │   └── Submit button
  └── Sidebar (5 cols)
      ├── Contact Details (location, phone, email, hours)
      └── Google Map Placeholder
[Toast — fixed, bottom-right]
[Footer]
```

---

## 8. JavaScript Behavior Specification

### 8.1 Sticky Header Scroll Effect

```javascript
/**
 * ไฟล์: js/header.js
 * เมื่อ scroll > 50px:
 *   - เพิ่ม class .header--scrolled
 *   - header height: 80px → 64px
 *   - เพิ่ม box-shadow
 * เมื่อ scroll ≤ 50px:
 *   - ลบ class .header--scrolled
 *   - header height กลับ 80px
 *   - ลบ box-shadow
 */
```

### 8.2 Scroll Reveal Animation

```javascript
/**
 * ไฟล์: js/reveal.js
 * ใช้ IntersectionObserver (threshold: 0.1)
 * Element ที่มี class .reveal:
 *   - default: opacity(0), translateY(20px)
 *   - เมื่อ intersect: เพิ่ม class .reveal--visible → opacity(1), translateY(0)
 *   - transition: var(--transition-reveal)
 * สนับสนุน transition-delay ผ่าน data-delay="100" (ms)
 */
```

### 8.3 Contact Form

```javascript
/**
 * ไฟล์: js/contact-form.js
 * 1. preventDefault submit
 * 2. เปลี่ยน button เป็น loading state (spinner icon + "กำลังส่ง...")
 * 3. setTimeout 1500ms → แสดง toast success
 * 4. reset form, คืน button state
 * 5. setTimeout 5000ms → ซ่อน toast
 */
```

### 8.4 Mobile Menu Toggle

```javascript
/**
 * ไฟล์: js/header.js (รวมอยู่ใน header logic)
 * คลิก .header__menu-toggle:
 *   - toggle class .header__nav--open
 *   - เปลี่ยน icon menu → close
 */
```

---

## 9. Responsive Breakpoints

```css
/* Mobile-first approach */
/* Default: < 768px (Mobile) */

/* Tablet: ≥ 768px */
@media (min-width: 768px) { /* md */ }

/* Desktop: ≥ 1024px */
@media (min-width: 1024px) { /* lg */ }

/* Wide Desktop: ≥ 1280px */
@media (min-width: 1280px) { /* xl */ }
```

### Grid Rules:
- **Desktop:** 12-column grid, 24px gutters, 64px outer margins
- **Tablet:** 8-column grid, 24px gutters, 32px outer margins
- **Mobile:** 4-column grid, 16px gutters, 16px outer margins
- **Container Max-width:** 1280px, centered

---

## 10. SEO & Accessibility Checklist

- [ ] ทุกหน้ามี `<title>` ที่ไม่ซ้ำกัน
- [ ] ทุกหน้ามี `<meta name="description">` ที่ไม่ซ้ำกัน
- [ ] ใช้ `<h1>` เพียง 1 ตัวต่อหน้า
- [ ] Heading hierarchy ถูกต้อง (h1 → h2 → h3)
- [ ] `<html lang="th">`
- [ ] รูปภาพมี `alt` ที่บรรยายภาพ (เป็นภาษาไทย)
- [ ] Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<aside>`
- [ ] ทุก interactive element มี unique `id`
- [ ] Form inputs มี `<label>` ที่ linked ด้วย `for`
- [ ] Focus state ชัดเจนสำหรับ keyboard navigation
- [ ] Color contrast ratio ≥ 4.5:1 (WCAG AA)

---

## 11. Image Guidelines

| ประเภท | คำอธิบาย |
|---|---|
| **Hero Images** | ภาพสำนักงาน, เครื่องพิมพ์ระดับ enterprise, สไตล์ corporate |
| **Service Images** | ภาพเครื่องถ่ายเอกสาร, ช่างซ่อม, server room |
| **Portfolio Images** | ภาพผลงานจริง, ออฟฟิศลูกค้า, ระบบที่ติดตั้ง |
| **รูปแบบ** | WebP preferred, fallback PNG/JPEG |
| **ขนาด** | Desktop max-width: 1280px, retina @2x ถ้าจำเป็น |
| **Style** | เริ่มต้น grayscale → hover เป็นสีเต็ม (สำหรับ Portfolio/Service) |

> **หมายเหตุ:** รูปภาพ placeholder ปัจจุบันเป็น URL จาก `lh3.googleusercontent.com/aida-public/` (Stitch generated)
> ต้องเปลี่ยนเป็นรูปจริงหรือรูปที่ optimize แล้วก่อน deploy production

---

## 12. Content Data Reference

### Company Info

```yaml
company_name: "IQ Southeast OA Udon Thani Co., Ltd."
company_name_th: "บริษัท ไอคิว เซาท์อีสท์ โอเอ อุดรธานี จำกัด"
brand_short: "IQ Southeast OA"
address: "ตำบลหมากแข้ง อำเภอเมืองอุดรธานี จังหวัดอุดรธานี 41000"
phone_office: "042-XXX-XXXX"
phone_mobile: "081-XXX-XXXX"
email: "contact@iqsoutheast-udon.com"
email_support: "support@iq-udon.co.th"
hours: "จันทร์ - เสาร์: 08:30 - 17:30 น."
closed: "หยุดวันอาทิตย์และวันหยุดนักขัตฤกษ์"
copyright: "© 2024 IQ Southeast OA Udon Thani Co., Ltd. All rights reserved."
```

### Navigation Links

```yaml
nav:
  - label: "Home"
    href: "index.html"
  - label: "Portfolio"
    href: "portfolio.html"
  - label: "Services"
    href: "services.html"
  - label: "About Us"
    href: "about.html"
  - label: "Contact Us"
    href: "contact.html"
cta_button: "Request Quote"
```

### Key Statistics

```yaml
stats:
  - value: "15+" หรือ "20+"
    label: "ปีแห่งประสบการณ์"
  - value: "500+"
    label: "ลูกค้าองค์กร"
  - value: "1k+"
    label: "Units Installed"
  - value: "24/7"
    label: "การสนับสนุนทางเทคนิค"
  - value: "99%"
    label: "อัตราความพึงพอใจ"
```

---

## 13. คำแนะนำสำหรับ AI Agent ที่จะมาทำงานต่อ

### ลำดับการทำงาน (Build Order):

1. **สร้าง `css/variables.css`** — Copy Design Token จากหัวข้อ 3 ทั้งหมด
2. **สร้าง `css/reset.css`** — CSS Reset / Normalize พื้นฐาน
3. **สร้าง `css/base.css`** — Typography classes, base element styles
4. **สร้าง `css/layout.css`** — Container, Grid system, responsive utilities
5. **สร้าง Component CSS** — ตามหัวข้อ 6 ทีละ component
6. **สร้าง HTML** — เริ่มจาก index.html (อ้างอิง Blueprint หัวข้อ 7)
7. **สร้าง JavaScript** — ตามหัวข้อ 8
8. **ทำซ้ำ 6-7** สำหรับทุกหน้า

### เมื่อเขียน CSS:

```css
/* ✅ ถูกต้อง — Flat BEM selector */
.header__nav-link {
  font-family: var(--font-body);
  font-size: var(--text-body-md-size);
  color: var(--color-secondary);
  transition: color var(--transition-fast);
}

.header__nav-link--active {
  color: var(--color-primary);
  font-weight: 700;
  border-bottom: 2px solid var(--color-primary);
}

/* ❌ ผิด — Nested selectors */
.header .header__nav .header__nav-link.active {
  /* ห้ามทำแบบนี้ */
}
```

### เมื่อเขียน HTML:

```html
<!-- ✅ ถูกต้อง — Semantic + BEM -->
<section class="services">
  <div class="services__container container">
    <h2 class="services__title text-headline-lg">บริการของเรา</h2>
    <div class="services__grid">
      <article class="service-card service-card--standard">
        <div class="service-card__icon-wrapper">
          <span class="material-symbols-outlined service-card__icon">print</span>
        </div>
        <h3 class="service-card__title">จำหน่ายเครื่องถ่ายเอกสาร</h3>
        <p class="service-card__description">เครื่องมัลติฟังก์ชันประสิทธิภาพสูง...</p>
      </article>
    </div>
  </div>
</section>
```

---

## 14. Quality Checklist — ตรวจก่อนส่งมอบ

- [ ] ทุกไฟล์ CSS ใช้ CSS Custom Properties จาก variables.css เท่านั้น — ห้าม hardcode สี/ขนาดตรงๆ
- [ ] ทุก class ใช้ BEM naming convention ถูกต้อง
- [ ] ไม่มี `!important` ใน CSS (ยกเว้นจำเป็นจริงๆ พร้อมคอมเมนต์)
- [ ] ไม่มี inline style ใน HTML
- [ ] ทุก section มี scroll reveal animation
- [ ] Responsive ทดสอบที่ 360px, 768px, 1024px, 1280px
- [ ] Header sticky ทำงานถูกต้อง
- [ ] Contact form submit → loading → toast → reset
- [ ] Image hover (grayscale → color) ทำงานถูกต้อง
- [ ] ทุกหน้าเปิดด้วย browser โดยไม่ต้องมี build step
