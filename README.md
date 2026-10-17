# Web Development Lab — GitHub Actions + GitHub Pages

## ตั้งค่าก่อนส่ง
1. แทนที่ `YOUR NAME`, `YOUR ID` และ `YOUR_USERNAME` ใน `index.html` ด้วยข้อมูลจริง
2. สร้าง Public repository ชื่อ `webdev-actions-lab` บน GitHub โดย **ไม่ต้องเพิ่ม README** ตอนสร้าง
3. เปิด Terminal ในโฟลเดอร์นี้แล้วรัน:

```bash
git init
git branch -M main
git add .
git commit -m "Create starter website and deployment workflow"
git remote add origin https://github.com/YOUR_USERNAME/webdev-actions-lab.git
git push -u origin main
```

4. ใน GitHub repository ไปที่ **Settings → Pages → Build and deployment → Source → GitHub Actions**
5. ไปที่ **Actions** รอ workflow `Deploy Static Website` แสดงเครื่องหมายถูกสีเขียว
6. เปิด `https://YOUR_USERNAME.github.io/webdev-actions-lab/` ทดสอบปุ่ม **Say Hello** และ **Toggle Theme**
7. เพื่อพิสูจน์ Continuous Deployment ให้แก้ข้อความหัวข้อ `<h1>` และสีปุ่มใน `style.css` แล้วรัน:

```bash
git add index.html style.css
git commit -m "Update home page design"
git push origin main
```

8. รอ Actions ผ่านอีกครั้ง รีเฟรชเว็บไซต์และเก็บภาพหน้าจอทั้ง Actions และเว็บไซต์ล่าสุด

> หาก repository ถูกสร้างพร้อม README แล้ว ให้ clone repository ก่อน แล้วคัดลอกไฟล์จากโฟลเดอร์นี้ไปไว้ใน repository ที่ clone แทนการใช้ git init

## สิ่งที่ต้องส่ง
- GitHub Repository URL
- GitHub Pages URL
- Screenshot ของ Actions ที่ deploy สำเร็จ
- Screenshot ของเว็บไซต์ที่แก้ไขแล้ว
- คำตอบคำถามท้ายแลปใน `LAB_ANSWERS.md`

หมายเหตุ: ต้องดำเนินการ push และเปิด Pages ด้วยบัญชี GitHub ของผู้เรียนเองจึงจะมี URL และภาพหลักฐานจริง
