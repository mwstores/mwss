document.getElementById('loveCalculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var loveResult = document.getElementById('loveResult');
    var yourName = document.getElementById('yourName').value.trim();
    var partnerName = document.getElementById('partnerName').value.trim();
    var percentage = Math.floor(Math.random() * 101); // عشوائي من 0 إلى 100

    loveResult.innerHTML = "نسبة الحب بين " + yourName + " و " + partnerName + " هي: %" + percentage + "";
    loveResult.classList.add('love-result'); // إضافة الكلاس للحصول على تأثير الانتقال

    // إعادة تشغيل الانتقال والتأثير بعد فترة قصيرة
    setTimeout(function() {
        loveResult.classList.remove('love-result');
        loveResult.innerHTML = ""; // مسح النتيجة بعد فترة زمنية معينة
    }, 5000); // 3 ثواني
});
