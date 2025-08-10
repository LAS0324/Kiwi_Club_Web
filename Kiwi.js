document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth"
    });
  });
});
(function checkNav() {
    const nav = document.querySelector("nav");
    const section1Height = document.querySelector("#section1").offsetHeight;
    if (window.scrollY < section1Height - 100) {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
})();

window.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");
    const section1Height = document.querySelector("#section1").offsetHeight;
    if (window.scrollY < section1Height - 100) {
        nav.style.display = "none";  // 在首頁區域隱藏
    } else {
        nav.style.display = "block"; // 超過首頁後顯示
    }
});

