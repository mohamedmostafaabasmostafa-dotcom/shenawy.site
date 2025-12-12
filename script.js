        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const fadeInOnScroll = function() {
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('visible');
                }
            });
        };
        
        window.addEventListener('scroll', fadeInOnScroll);
        fadeInOnScroll();
        
        document.getElementById('downloadBtn').addEventListener('click', function(e) {
            e.preventDefault();
            
const apkUrl = 'https://www.mediafire.com/file/yu932l4767rjo1c/مافيوسو+-+mafioso.apk/file';

// دالة التحقق والتحميل التلقائي
async function verifyAndDownloadApk() {
  console.log("جارٍ التحقق من الملف...");

  try {
    // نتحقق من الرابط أولاً بدون فتح صفحة التحميل
    const response = await fetch(apkUrl, { method: "HEAD" });
    if (!response.ok) throw new Error("الملف غير متاح حالياً");

    const type = response.headers.get("content-type") || "unknown";
    const size = response.headers.get("content-length") || "غير معروف";

    // تأكد أن الرابط فعلاً ملف وليس صفحة
    if (type.includes("html")) throw new Error("الرابط غير صالح أو لا يمكن الوصول إليه");

    console.log(`تم التحقق ✅ النوع: ${type}, الحجم: ${size} بايت`);

    // بدء التحميل التلقائي
    const a = document.createElement("a");
    a.href = apkUrl;
    a.download = "اللفة.apk"; // الاسم الذي سيظهر أثناء التحميل
    document.body.appendChild(a);
    a.click();
    a.remove();

    console.log("بدأ التحميل ✅");

  } catch (err) {
    console.error("حدث خطأ أثناء التحقق أو التحميل:", err.message);
  }
}

// شغّل التحقق والتحميل عند تحميل الصفحة مباشرة
window.addEventListener("load", verifyAndDownloadApk);
            
            const link = document.createElement('a');
            link.href = apkUrl;
            link.setAttribute('download', 'ellafa-app.apk');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
        });
        
        const mobileMenu = document.querySelector('.mobile-menu');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
        
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                }
            });
        });

        
