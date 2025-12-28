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
    
    const apkUrl = 'https://github.com/mohamedmostafaabasmostafa-dotcom/test_flutter_clean/releases/download/%D9%85%D8%A7%D9%81%D9%8A%D9%88%D8%B3%D9%88/-.mafioso.1.0.1.apk';
    
    async function verifyAndDownloadApk() {
        try {
            const response = await fetch(apkUrl, { method: "HEAD" });
            if (!response.ok) throw new Error("الملف غير متاح حالياً");
            
            const type = response.headers.get("content-type") || "unknown";
            if (type.includes("html")) throw new Error("الرابط غير صالح أو لا يمكن الوصول إليه");
            
            const a = document.createElement("a");
            a.href = apkUrl;
            a.download = "اللفة.apk";
            document.body.appendChild(a);
            a.click();
            a.remove();
            
        } catch (err) {
            console.error("حدث خطأ أثناء التحقق أو التحميل:", err.message);
        }
    }
    
    verifyAndDownloadApk();
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
