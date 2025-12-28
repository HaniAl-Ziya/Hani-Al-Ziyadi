// رسالة ترحيب بسيطة
function showMessage() {
    alert("مرحبًا بك في موقع الأمن الرقمي 👋\nنهدف إلى مساعدتك على حماية بياناتك.");
}

// تأكيد إرسال نموذج التواصل
function submitContactForm() {
    alert("تم إرسال رسالتك بنجاح ✅\nسنتواصل معك قريبًا.");
    return false; // يمنع إعادة تحميل الصفحة
}

// زر الرجوع للأعلى
window.onscroll = function () {
    let btn = document.getElementById("topBtn");
    if (!btn) return;

    if (document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
const fadeElements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

fadeElements.forEach(el => observer.observe(el));
window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";
});
