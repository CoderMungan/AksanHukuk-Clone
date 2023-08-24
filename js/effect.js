$(".effect").click(function (e) { 
    e.preventDefault();
    $(".header").css("opacity", "0.8");
    setTimeout(() => {
        $(".header").css("opacity", "1");
    },100);
});