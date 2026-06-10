# IQ Southeast OA Website

> เว็บไซต์บริษัท ไอคิว เซาท์อีสท์ โอเอ อุดรธานี จำกัด — ผู้นำด้าน Office Automation ในภาคตะวันออกเฉียงเหนือ

---

## 📋 สารบัญ

- [ภาพรวมโปรเจกต์](#ภาพรวมโปรเจกต์)
- [เทคโนโลยีที่ใช้](#เทคโนโลยีที่ใช้)
- [โครงสร้างโปรเจกต์](#โครงสร้างโปรเจกต์)
- [วิธีเริ่มต้นใช้งาน](#วิธีเริ่มต้นใช้งาน)
- [Design System](#design-system)
- [หน้าเว็บทั้งหมด](#หน้าเว็บทั้งหมด)
- [Naming Convention (BEM)](#naming-convention-bem)
- [Responsive Design](#responsive-design)
- [สำหรับนักพัฒนา](#สำหรับนักพัฒนา)
- [สำหรับ AI Agent](#สำหรับ-ai-agent)

---

## ภาพรวมโปรเจกต์

**IQ Southeast OA** คือเว็บไซต์ Corporate สำหรับบริษัทที่ให้บริการระบบสำนักงานอัตโนมัติ (Office Automation) ในจังหวัดอุดรธานีและภาคตะวันออกเฉียงเหนือ

### กลุ่มเป้าหมาย
- องค์กรภาครัฐและเอกชน (B2B)
- สถาบันการศึกษา
- หน่วยงานราชการ
- บริษัทขนาดกลาง-ใหญ่

### บริการหลัก
1. **จำหน่ายและให้เช่าเครื่องถ่ายเอกสาร** — มัลติฟังก์ชัน จากแบรนด์ Canon, Ricoh
2. **Managed Print Services (MPS)** — บริหารจัดการการพิมพ์ครบวงจร
3. **บริการซ่อมและบำรุงรักษา** — On-site Service ภายใน 2-4 ชั่วโมง
4. **IT Solutions & Security** — วางระบบเครือข่าย, Cybersecurity, Cloud

---

## เทคโนโลยีที่ใช้

| เทคโนโลยี | เวอร์ชัน | หมายเหตุ |
|---|---|---|
| HTML5 | — | Semantic Elements |
| CSS3 (Vanilla) | — | CSS Custom Properties, BEM, ไม่ใช้ Framework |
| JavaScript (ES6+) | — | Vanilla JS, ไม่ใช้ Framework |
| Google Fonts | — | Be Vietnam Pro, Inter, IBM Plex Sans |
| Material Symbols | Outlined | ไอคอน UI ทั้งหมด |

### ❌ ไม่ใช้
- TailwindCSS, Bootstrap, หรือ CSS Framework ใดๆ
- React, Vue, Angular, Svelte, หรือ JS Framework ใดๆ
- jQuery, Lodash
- npm, webpack, bundler (static files เท่านั้น)

### เหตุผล
เพื่อความเร็วในการโหลดเว็บไซต์ ลดขนาดไฟล์ ลดการพึ่งพา dependency ภายนอก และให้สามารถเปิดใช้งานได้ทันทีโดยไม่ต้อง build

---

## โครงสร้างโปรเจกต์

```
project-root/
│
├── 📄 index.html              → หน้าแรก (Landing Page)
├── 📄 portfolio.html           → หน้าผลงาน (Portfolio)
├── 📄 services.html            → หน้าบริการ (Services)
├── 📄 about.html               → หน้าเกี่ยวกับเรา (About Us)
├── 📄 contact.html             → หน้าติดต่อเรา (Contact Us)
│
├── 📁 css/
│   ├── variables.css           → Design Token (สี, ฟอนต์, spacing, radius)
│   ├── reset.css               → CSS Reset / Normalize
│   ├── base.css                → Base styles (typography, body, links)
│   ├── layout.css              → Container, Grid system, responsive
│   │
│   ├── 📁 components/          → Component-level CSS (BEM)
│   │   ├── header.css          → .header
│   │   ├── footer.css          → .footer
│   │   ├── hero.css            → .hero
│   │   ├── btn.css             → .btn
│   │   ├── service-card.css    → .service-card
│   │   ├── portfolio-card.css  → .portfolio-card
│   │   ├── stats.css           → .stats
│   │   ├── cta.css             → .cta
│   │   ├── contact-form.css    → .contact-form
│   │   ├── table.css           → .data-table
│   │   └── toast.css           → .toast
│   │
│   └── 📁 pages/               → Page-specific CSS
│       ├── home.css
│       ├── portfolio.css
│       ├── services.css
│       ├── about.css
│       └── contact.css
│
├── 📁 js/
│   ├── main.js                 → Entry point, shared utilities
│   ├── header.js               → Sticky header + mobile menu
│   ├── reveal.js               → Scroll reveal animation
│   ├── contact-form.js         → Form validation + submit
│   └── portfolio-filter.js     → Portfolio filter (optional)
│
├── 📁 assets/
│   └── 📁 images/              → รูปภาพทั้งหมด
│
├── 📄 agent.md                 → คำสั่งสำหรับ AI Agent (อ่านก่อนเขียนโค้ด!)
└── 📄 README.md                → ไฟล์นี้
```

---

## วิธีเริ่มต้นใช้งาน

### วิธีที่ 1: เปิดไฟล์ HTML โดยตรง

```bash
# เปิด index.html ด้วย browser
open index.html            # macOS
start index.html           # Windows
xdg-open index.html        # Linux
```

ไม่ต้องติดตั้งอะไรเลย — เปิด HTML ได้ทันที

### วิธีที่ 2: ใช้ Live Server (แนะนำสำหรับการพัฒนา)

```bash
# ติดตั้ง live-server (ครั้งเดียว)
npm install -g live-server

# รันในโฟลเดอร์โปรเจกต์
live-server --port=3000
```

หรือใช้ VS Code Extension: **Live Server** by Ritwick Dey

### วิธีที่ 3: ใช้ Python HTTP Server

```bash
# Python 3
python -m http.server 3000

# จากนั้นเปิด http://localhost:3000
```

---

## Design System

### สี (Color Palette)

| Token | Hex | การใช้งาน |
|---|---|---|
| `--color-primary` | `#001e40` | สีหลัก, Text หัวข้อสำคัญ |
| `--color-primary-container` | `#003366` | Background ปุ่มหลัก, Hero overlay |
| `--color-secondary` | `#5b5f63` | Text รอง |
| `--color-surface` | `#f9f9fc` | Background หลัก |
| `--color-surface-container-low` | `#f3f3f6` | Background สลับ section |
| `--color-surface-container-highest` | `#e2e2e5` | Background footer |
| `--color-on-surface` | `#1a1c1e` | Text หลัก |
| `--color-on-surface-variant` | `#43474f` | Text รอง |
| `--color-outline-variant` | `#c3c6d1` | Border, Divider |
| `--color-error` | `#ba1a1a` | สถานะ error |

> สีทั้งหมดดูได้ใน [`css/variables.css`](css/variables.css) หรือ [`agent.md`](agent.md) หัวข้อ 3.2

### ฟอนต์ (Typography)

| ระดับ | ฟอนต์ | ขนาด | น้ำหนัก | การใช้งาน |
|---|---|---|---|---|
| Headline XL | Be Vietnam Pro | 48px | 700 | Hero title (Desktop) |
| Headline XL Mobile | Be Vietnam Pro | 32px | 700 | Hero title (Mobile) |
| Headline LG | Be Vietnam Pro | 32px | 600 | Section headers |
| Headline MD | Be Vietnam Pro | 24px | 600 | Card titles, Subheaders |
| Body LG | Inter | 18px | 400 | Lead paragraphs |
| Body MD | Inter | 16px | 400 | Body text ทั่วไป |
| Label MD | IBM Plex Sans | 14px | 500 | Labels, Categories, Buttons |
| Caption | Inter | 12px | 400 | Footnotes, Copyright |

### Spacing (8px Linear Scale)

| Token | ค่า | การใช้งาน |
|---|---|---|
| `--space-base` | 8px | หน่วยย่อยสุด |
| `--space-stack-sm` | 12px | ระยะห่างภายใน component |
| `--space-stack-md` | 24px | ระยะห่างระหว่าง element |
| `--space-stack-lg` | 48px | ระยะห่างระหว่าง section |
| `--space-gutter` | 24px | Grid gutter |
| `--space-margin-mobile` | 16px | ขอบซ้ายขวา Mobile |
| `--space-margin-desktop` | 64px | ขอบซ้ายขวา Desktop |
| `--space-container-max` | 1280px | Content max-width |

### Elevation (Flat-Plus Design)

โปรเจกต์นี้ **ไม่ใช้ shadow หนัก** ใช้ระบบ Tonal Layer:

| ระดับ | วิธี | ใช้กับ |
|---|---|---|
| Level 0 | สี surface (#f9f9fc) | พื้นหลังหลัก |
| Level 1 | สี surface-container + border 1px | Cards, Containers |
| Level 2 | Shadow เบา rgba(0,51,102,0.08) | Hover state เท่านั้น |

---

## หน้าเว็บทั้งหมด

### 1. หน้าแรก — Landing Page (`index.html`)

| Section | รายละเอียด |
|---|---|
| **Hero** | ภาพพื้นหลังออฟฟิศ + Gradient overlay, Title TH+EN, 2 CTA buttons |
| **Introduction** | 2 คอลัมน์: ข้อความแนะนำบริษัท + รูป + สถิติ (20+ ปี, 500+ ลูกค้า) |
| **Services** | 3 การ์ดบริการ: จำหน่ายเครื่อง, บำรุงรักษา, ระบบเอกสาร |
| **Portfolio Preview** | Bento Grid 4 คอลัมน์, 3 รายการ + ลิงก์ดูทั้งหมด |
| **CTA** | พื้นหลังสี primary, หัวข้อ + ปุ่ม + เบอร์โทร |

### 2. หน้าเกี่ยวกับเรา — About Us (`about.html`)

| Section | รายละเอียด |
|---|---|
| **Hero** | ภาพพื้นหลัง lobby + brightness filter 40%, Title ตรงกลาง |
| **Company History** | 2 คอลัมน์: ประวัติบริษัท + Grid สถิติ 4 ช่อง |
| **Mission & Vision** | Bento Grid: Mission (8 cols) + Vision (4 cols, bg-primary-container) |
| **Core Values** | 3 การ์ด: ความซื่อสัตย์, นวัตกรรม, จิตวิญญาณการบริการ |
| **Why Choose Us** | 2 คอลัมน์ bg-primary: 3 จุดเด่น + รูปภาพ |
| **Technical Table** | ตาราง Zebra-stripe: Document Solutions, MPS, IT Infrastructure |

### 3. หน้าบริการ — Services (`services.html`)

| Section | รายละเอียด |
|---|---|
| **Hero** | แบบ text-only, ไม่มี background image |
| **Services Grid** | Bento Grid 12 cols: MPS (8), Sales (4), Repair (4), IT (8, dark) |
| **Comparison Table** | ตารางเปรียบเทียบแผนเช่า: Essential, Business Growth, Enterprise Elite |
| **CTA** | Contained style, bg-primary-container, rounded-2xl |

### 4. หน้าผลงาน — Portfolio (`portfolio.html`)

| Section | รายละเอียด |
|---|---|
| **Hero** | Badge "ผลงานและความสำเร็จ" + Title + Description |
| **Portfolio Grid** | Bento Grid 12 cols: 6 รายการ (แต่ละรายการมี layout ต่างกัน) |
| **Statistics** | 4 คอลัมน์: 15+ ปี, 500+ ลูกค้า, 1k+ เครื่อง, 24/7 |
| **CTA** | Contained style, bg-surface-container-highest |

### 5. หน้าติดต่อเรา — Contact Us (`contact.html`)

| Section | รายละเอียด |
|---|---|
| **Header** | Title "ติดต่อเรา" + คำบรรยาย |
| **Contact Form** | 7 cols: ชื่อ, อีเมล, หัวข้อ (dropdown), ข้อความ, ปุ่มส่ง |
| **Sidebar** | 5 cols: ที่อยู่, เบอร์โทร, อีเมล, เวลาทำการ, แผนที่ |
| **Toast** | ข้อความสำเร็จ fixed ด้านล่างขวา |

---

## Naming Convention (BEM)

### รูปแบบ

```
.block__element--modifier
```

### ตัวอย่าง

```css
/* Block */
.service-card { }

/* Element */
.service-card__title { }
.service-card__description { }
.service-card__icon-wrapper { }

/* Modifier */
.service-card--large { }
.service-card--dark { }
.service-card--with-image { }
```

### กฎสำคัญ

| กฎ | ตัวอย่าง |
|---|---|
| ✅ ใช้ kebab-case | `.service-card`, ไม่ใช่ `.serviceCard` |
| ✅ Flat CSS selectors | `.header__nav-link { }` |
| ✅ Modifier ใช้ `--` | `.btn--primary` |
| ❌ ห้าม nest block | ไม่ใช่ `.header__nav__link` |
| ❌ ห้าม nested CSS | ไม่ใช่ `.header .nav .link { }` |
| ❌ ห้ามใช้ inline style | ไม่ใช่ `style="color: blue"` |
| ❌ ห้าม hardcode ค่า | ใช้ CSS Custom Properties เสมอ |

---

## Responsive Design

### Breakpoints

| ชื่อ | Min-width | Grid Columns | Gutters | Margins |
|---|---|---|---|---|
| Mobile | < 768px | 4 | 16px | 16px |
| Tablet | ≥ 768px | 8 | 24px | 32px |
| Desktop | ≥ 1024px | 12 | 24px | 64px |
| Wide | ≥ 1280px | 12 | 24px | Auto (centered) |

### Mobile-First CSS

```css
/* Base: Mobile */
.services__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-gutter);
}

/* Tablet+ */
@media (min-width: 768px) {
  .services__grid {
    grid-template-columns: repeat(12, 1fr);
  }
}
```

---

## สำหรับนักพัฒนา

### เริ่มพัฒนา

1. Clone หรือ download โปรเจกต์
2. เปิด `index.html` ด้วย browser หรือ live server
3. อ่าน `agent.md` ก่อนเขียนโค้ด (สำคัญมาก)
4. แก้ไข CSS ใน `css/` folder ตาม BEM structure
5. แก้ไข JS ใน `js/` folder

### ลำดับการ link CSS ใน HTML

```html
<head>
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet">

  <!-- Design System -->
  <link rel="stylesheet" href="css/variables.css">
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/layout.css">

  <!-- Components -->
  <link rel="stylesheet" href="css/components/header.css">
  <link rel="stylesheet" href="css/components/footer.css">
  <link rel="stylesheet" href="css/components/hero.css">
  <link rel="stylesheet" href="css/components/btn.css">
  <!-- ... อื่นๆ ตามที่หน้านั้นใช้ -->

  <!-- Page-specific -->
  <link rel="stylesheet" href="css/pages/home.css">
</head>
```

### ลำดับการ link JS ใน HTML

```html
  <!-- ก่อนปิด </body> -->
  <script src="js/main.js"></script>
  <script src="js/header.js"></script>
  <script src="js/reveal.js"></script>
  <!-- หน้า Contact เพิ่ม: -->
  <script src="js/contact-form.js"></script>
</body>
```

---

## สำหรับ AI Agent

> **⚠️ สำคัญมาก: อ่านไฟล์ [`agent.md`](agent.md) ก่อนเขียนโค้ดแม้แต่บรรทัดเดียว**

ไฟล์ `agent.md` ประกอบด้วย:

1. **Design Token ทั้งหมด** — CSS Custom Properties ที่ต้อง copy ไปใช้
2. **Component Blueprint** — รายละเอียด BEM structure ของทุก component
3. **Layout Blueprint** — โครงสร้าง section ของทุกหน้า
4. **JavaScript Specification** — behavior ที่ต้องสร้าง
5. **Quality Checklist** — เช็คลิสต์ก่อนส่งมอบ
6. **คำแนะนำลำดับการทำงาน** — Build Order ที่แนะนำ

### สิ่งที่ Agent ต้องทำ:

1. อ่าน `agent.md` ทั้งไฟล์
2. สร้าง CSS ตาม Design Token (ไม่ hardcode ค่าเอง)
3. เขียน HTML ตาม BEM convention
4. ทุก component ต้องตรงกับ Blueprint ใน agent.md
5. ทดสอบ responsive ที่ 360px, 768px, 1024px, 1280px
6. ทุกหน้าต้องเปิดได้โดยไม่ต้อง build

---

## 📄 License

© 2024 IQ Southeast OA Udon Thani Co., Ltd. All rights reserved.
