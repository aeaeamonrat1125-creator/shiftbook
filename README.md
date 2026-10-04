# 🩺 Shiftbook

สมุดบันทึกเวรของคุณหมอ — บันทึกเวร เงิน โน๊ต ในที่เดียว

---

## 📦 มีอะไรในโปรเจกต์นี้

```
shiftbook/
├── public/
│   └── favicon.svg          ← ไอคอนหน้าเว็บ (หมอน้อย)
├── src/
│   ├── Shiftbook.jsx        ← โค้ดหลักของแอป
│   ├── main.jsx             ← entry point
│   └── index.css            ← Tailwind CSS
├── index.html               ← หน้า HTML หลัก
├── package.json             ← รายชื่อ library ที่ใช้
├── vite.config.js           ← config Vite
├── tailwind.config.js       ← config Tailwind
├── postcss.config.js
├── vercel.json              ← config Vercel
└── README.md                ← ไฟล์นี้
```

---

## 🚀 วิธี Deploy ขึ้น Vercel (แนะนำ — ง่ายสุด)

### ขั้นที่ 1: ติดตั้งโปรแกรมที่ต้องใช้

ติดตั้งแค่ครั้งเดียวในเครื่อง:

1. **Node.js** — ดาวน์โหลดจาก https://nodejs.org (เลือก LTS)
2. **Git** — ดาวน์โหลดจาก https://git-scm.com

### ขั้นที่ 2: ทดสอบในเครื่องก่อน (ไม่บังคับ)

เปิด Terminal/Command Prompt ใน folder `shiftbook` แล้วพิมพ์:

```bash
npm install
npm run dev
```

จะได้ลิงก์ `http://localhost:5173` เปิดในเบราว์เซอร์ดูได้

### ขั้นที่ 3: สมัคร GitHub + Vercel

1. สมัคร GitHub ฟรี: https://github.com/signup
2. สมัคร Vercel ฟรี: https://vercel.com/signup → เลือก **"Continue with GitHub"**

### ขั้นที่ 4: อัพโหลดโค้ดขึ้น GitHub

**วิธีง่ายที่สุด — ไม่ต้องใช้ command line:**

1. ไปที่ https://github.com/new
2. ตั้งชื่อ repository เช่น `shiftbook` → กด **Create repository**
3. ในหน้า repo ใหม่ คลิก **"uploading an existing file"**
4. ลาก folder `shiftbook` ทั้งหมด (ยกเว้น `node_modules` ถ้ามี) ใส่ในเว็บ
5. กด **Commit changes**

### ขั้นที่ 5: Deploy บน Vercel

1. เข้า https://vercel.com/dashboard
2. กด **"Add New..."** → **"Project"**
3. เลือก repo `shiftbook` → กด **Import**
4. ทุกอย่าง auto-detect แล้ว — กด **Deploy**
5. รอประมาณ 1 นาที ✨

เสร็จแล้ว! จะได้ลิงก์ประมาณ `https://shiftbook-xxx.vercel.app`

### ขั้นที่ 6: แชร์ให้เพื่อน

แค่ส่งลิงก์ที่ได้จาก Vercel ให้เพื่อน — เปิดได้เลยทุกอุปกรณ์ 📱

---

## ✏️ การแก้ไขในอนาคต

แก้โค้ดในเครื่อง → push ขึ้น GitHub → Vercel จะ deploy ใหม่ให้อัตโนมัติ

หรือถ้าอยากแก้ผ่านเว็บ:
- เข้า GitHub repo → คลิกไฟล์ที่จะแก้ → กด pencil icon → แก้ → commit
- Vercel จะ deploy ใหม่ให้อัตโนมัติ

---

## 💡 หมายเหตุสำคัญเรื่องข้อมูล

แอปนี้เก็บข้อมูลไว้ใน **localStorage ของเบราว์เซอร์**

✅ **ข้อดี:** ฟรี ไม่ต้องล็อกอิน เปิดเว็บใช้ได้ทันที
⚠️ **ข้อจำกัด:**
- ข้อมูลเก็บแยกตามอุปกรณ์/เบราว์เซอร์
- เปลี่ยนเครื่องหรือล้างเบราว์เซอร์ = ข้อมูลหาย
- เปิดมือถือ vs คอม = ข้อมูลคนละชุด

ถ้าอยากให้ข้อมูล sync ข้ามอุปกรณ์ ต้องเพิ่ม database (เช่น Firebase, Supabase) ในอนาคต — แจ้งได้

---

## 🆘 ถ้ามีปัญหา

| ปัญหา | วิธีแก้ |
|---|---|
| `npm install` error | ตรวจสอบว่าติดตั้ง Node.js v18+ แล้วหรือยัง |
| Vercel deploy fail | ดู error log ใน Vercel — มักเป็นเรื่อง `package.json` |
| ฟอนต์ไทยไม่ขึ้น | เช็คว่าอินเตอร์เน็ตเข้าถึง Google Fonts ได้ |
| ข้อมูลหาย | เช็คว่าใช้เบราว์เซอร์เดิมและไม่ได้อยู่ใน incognito mode |

---

Made with 💗 for medical heroes
