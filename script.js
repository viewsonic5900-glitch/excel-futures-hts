
// 홈페이지 메뉴 이동 기능
document.querySelectorAll('nav a, .top-button, .main-button, .sub-button').forEach(function(link) {
    link.addEventListener('click', function(event) {
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 페이지 실행 확인
console.log("EXCEL FUTURES HTS 홈페이지 실행 완료");
