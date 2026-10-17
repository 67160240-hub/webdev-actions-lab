# Web Development Lab — GitHub Actions + GitHub Pages

## ข้อมูลผู้จัดทำ

- ชื่อ: APICHA WONGKLANG
- รหัสนิสิต: 67160240
- GitHub Username: 67160240-hub
- รายวิชา: Web Development

---

## รายละเอียดโปรเจกต์

โปรเจกต์นี้เป็นส่วนหนึ่งของการเรียนวิชา Web Development
เพื่อศึกษาและฝึกปฏิบัติการพัฒนาเว็บไซต์ด้วย HTML, CSS และ JavaScript
รวมถึงการใช้ Git, GitHub, GitHub Actions และ GitHub Pages

เว็บไซต์สามารถเผยแพร่ผ่าน GitHub Pages โดยอัตโนมัติ
เมื่อมีการ Push โค้ดขึ้น Branch main ผ่าน GitHub Actions Workflow

---

## Project Links

### GitHub Repository
https://github.com/67160240-hub/webdev-actions-lab

### GitHub Pages
https://67160240-hub.github.io/webdev-actions-lab/

---

## Features

เว็บไซต์ประกอบด้วยส่วนสำคัญดังนี้

### 1. About Me
แสดงข้อมูลผู้จัดทำ ได้แก่ ชื่อ รหัสนิสิต และข้อมูลแนะนำตัว

### 2. Skills
แสดงทักษะด้านการพัฒนาเว็บไซต์ ได้แก่
- HTML
- CSS
- JavaScript
- Git
- GitHub

### 3. Contact
แสดงข้อมูลสำหรับติดต่อและลิงก์ GitHub ของผู้จัดทำ

### 4. Say Hello Button
ใช้ JavaScript เพื่อเปลี่ยนข้อความบนหน้าเว็บไซต์เมื่อคลิกปุ่ม

### 5. Toggle Theme
ใช้ JavaScript เพื่อสลับธีมสีของเว็บไซต์

### 6. Responsive Design
ออกแบบหน้าเว็บไซต์ให้สามารถแสดงผลได้บนคอมพิวเตอร์
แท็บเล็ต และโทรศัพท์มือถือ

---

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- GitHub Actions
- GitHub Pages
- Visual Studio Code

---

## Project Structure

```text
webdev-actions-lab/
│
├── index.html
├── style.css
├── script.js
├── README.md
├── LAB_ANSWERS.md
│
└── .github/
    └── workflows/
        └── deploy.yml
```

---

## GitHub Actions Workflow

โปรเจกต์นี้ใช้ GitHub Actions เพื่อเผยแพร่เว็บไซต์อัตโนมัติ

Workflow อยู่ที่:

.github/workflows/deploy.yml

### ขั้นตอนการทำงาน

1. ผู้พัฒนาแก้ไขไฟล์เว็บไซต์
2. ใช้ Git Commit เพื่อบันทึกการเปลี่ยนแปลง
3. Push โค้ดขึ้น GitHub Branch main
4. GitHub Actions เริ่มทำงานอัตโนมัติ
5. Workflow ดึง Source Code จาก Repository
6. อัปโหลดไฟล์เว็บไซต์เป็น Artifact
7. Deploy เว็บไซต์ขึ้น GitHub Pages
8. ผู้ใช้สามารถเปิดเว็บไซต์ผ่าน URL สาธารณะ

---

## Git Commands

คำสั่งที่ใช้ในการจัดการโปรเจกต์

### Initialize Repository

```bash
git init
git branch -M main
```

### Add Files

```bash
git add .
```

### Commit

```bash
git commit -m "Create starter website"
```

### Connect GitHub Repository

```bash
git remote add origin https://github.com/67160240-hub/webdev-actions-lab.git
```

### Push to GitHub

```bash
git push -u origin main
```

หมายเหตุ: คำสั่งเริ่มต้นและเพิ่ม Remote ใช้เมื่อสร้าง Repository ใหม่
ไม่จำเป็นต้องรันซ้ำหากตั้งค่าเรียบร้อยแล้ว

---

## Continuous Deployment

ทดสอบระบบ Continuous Deployment โดยแก้ไขเว็บไซต์
และ Push โค้ดขึ้น GitHub อีกครั้ง

### ขั้นตอนการทดสอบ

1. แก้ไขข้อความหัวข้อ h1 ในไฟล์ index.html
2. เปลี่ยนสีปุ่มในไฟล์ style.css
3. บันทึกไฟล์ที่แก้ไข
4. Commit และ Push ขึ้น GitHub

คำสั่งที่ใช้:

```bash
git add index.html style.css
git commit -m "Update home page design"
git push origin main
```

5. ตรวจสอบ GitHub Actions ว่า Workflow ทำงานอัตโนมัติ
6. รอจน Deployment สำเร็จ
7. Refresh เว็บไซต์เพื่อตรวจสอบการเปลี่ยนแปลง

---

## Website Testing

รายการทดสอบเว็บไซต์

| Test Case | Expected Result |
|-----------|-----------------|
| Open Website | เว็บไซต์เปิดได้ |
| About Me | แสดงข้อมูลผู้จัดทำ |
| Skills | แสดงรายการทักษะ |
| Contact | แสดงข้อมูลติดต่อ |
| Say Hello | เปลี่ยนข้อความเมื่อคลิก |
| Toggle Theme | เปลี่ยนธีมเว็บไซต์ |
| Responsive Design | แสดงผลเหมาะสมกับขนาดหน้าจอ |
| GitHub Actions | Deploy อัตโนมัติเมื่อ Push |
| GitHub Pages | เว็บไซต์ออนไลน์หลัง Deploy สำเร็จ |

---

## Lab Exercises

### Exercise 1: Basic
ปรับชื่อ รหัสนิสิต และข้อความต้อนรับให้เป็นข้อมูลจริงของผู้จัดทำ

### Exercise 2: UI
ออกแบบเว็บไซต์ให้มีอย่างน้อย 3 ส่วน ได้แก่
About Me, Skills และ Contact

### Exercise 3: JavaScript
เพิ่มปุ่ม Say Hello และ Toggle Theme
เพื่อให้ผู้ใช้งานสามารถโต้ตอบกับเว็บไซต์ได้

### Exercise 4: Automation
ศึกษา GitHub Actions Workflow
และอธิบายการทำงานของ Job Deploy

### Challenge
เพิ่มขั้นตอนตรวจสอบไฟล์ index.html ก่อน Deploy

```bash
test -f index.html
```

---

## Submission

หลักฐานที่ต้องส่งอาจารย์

1. GitHub Repository URL
2. GitHub Pages URL
3. Screenshot GitHub Actions ที่ Deploy สำเร็จ
4. Screenshot เว็บไซต์หลังแก้ไข
5. คำตอบคำถามท้ายแลปใน LAB_ANSWERS.md

---

## References

- GitHub Actions Documentation
- GitHub Pages Documentation
- Git Documentation

---

## Author

APICHA WONGKLANG

Student ID: 67160240

GitHub: https://github.com/67160240-hub

Project: Web Development Lab

Burapha University