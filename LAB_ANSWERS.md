# คำตอบแบบฝึกหัดและคำถามท้ายแลป

ชื่อ: YOUR NAME  
รหัสนิสิต: YOUR ID

## Exercise 4: Automation
Workflow จะเริ่มทำงานโดยอัตโนมัติเมื่อมีการ push commit ไปยัง branch `main` และสามารถกดรันเองจากหน้า Actions ด้วย `workflow_dispatch` ได้ Job `deploy` จะดึงโค้ดจาก repository ตรวจสอบว่ามีไฟล์เว็บไซต์ที่จำเป็น ตั้งค่า GitHub Pages อัปโหลดไฟล์เว็บไซต์เป็น artifact และเผยแพร่ขึ้น GitHub Pages

## คำถามท้ายแลป
**1. GitHub Actions แตกต่างจาก GitHub Pages อย่างไร?**  
GitHub Actions เป็นระบบรันงานอัตโนมัติ เช่น ตรวจสอบไฟล์และ deploy เมื่อมีการ push โค้ด ส่วน GitHub Pages เป็นบริการโฮสต์เว็บไซต์แบบ Static เพื่อให้คนอื่นเปิดผ่าน URL ได้

**2. เหตุใดจึงเลือก trigger ด้วย push ที่ branch main?**  
เพราะ `main` เป็น branch หลักที่ใช้เผยแพร่โค้ด เมื่อมีการ push การปรับปรุงขึ้น branch นี้ ระบบจะ deploy เวอร์ชันล่าสุดโดยอัตโนมัติ และลดโอกาสนำงานใน branch ทดลองขึ้นเว็บ

**3. ถ้าแก้ไฟล์ในเครื่องแต่ไม่ได้ push เว็บไซต์จะเปลี่ยนหรือไม่ เพราะเหตุใด?**  
ไม่เปลี่ยน เพราะ GitHub Actions ทำงานจากโค้ดที่อยู่บน GitHub การแก้ไฟล์เฉพาะในเครื่องยังไม่ทำให้ repository บน GitHub เปลี่ยน จึงไม่มีการ deploy เวอร์ชันใหม่

**4. เหตุใดโปรเจกต์ PHP + MySQL จึงไม่สามารถนำไปรันบน GitHub Pages ได้โดยตรง?**  
เพราะ GitHub Pages ให้บริการไฟล์เว็บไซต์แบบ Static เช่น HTML, CSS และ JavaScript แต่ไม่รันโค้ด PHP ฝั่งเซิร์ฟเวอร์หรือฐานข้อมูล MySQL จึงต้องใช้บริการโฮสต์ที่รองรับ backend แทน

**5. อธิบายขั้นตอนการค้นหาสาเหตุเมื่อ Workflow มีสถานะ Failed**  
เปิด repository → Actions → เลือก workflow run ที่ล้มเหลว → เปิด job และ step ที่ขึ้นเครื่องหมายผิดพลาด → อ่านข้อความใน log แล้วตรวจสอบสาเหตุ เช่น ไฟล์ `index.html` ไม่มี, YAML เยื้องผิด, ตั้งค่า Pages Source ไม่ใช่ GitHub Actions หรือสิทธิ์ `pages: write` และ `id-token: write` ไม่ครบ จากนั้นแก้ไฟล์ commit และ push อีกครั้ง แล้วตรวจสอบว่า workflow ผ่าน

## หลักฐานสำหรับส่ง (กรอกหลัง Deploy จริง)
- Repository URL: [วาง URL จริง]
- GitHub Pages URL: [วาง URL จริง]
- Screenshot Actions สำเร็จ: [แนบภาพจริง]
- Screenshot หน้าเว็บที่แก้ไขแล้ว: [แนบภาพจริง]
- ผลการทดสอบ Say Hello: [บันทึกหลังทดสอบ]
- ผลการทดสอบ Toggle Theme: [บันทึกหลังทดสอบ]
- ผลการทดสอบ Continuous Deployment: [บันทึกหลัง push ครั้งที่สอง]
