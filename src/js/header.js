let model = {
    $nav: document.querySelector('.vw-header'),
    $navContent: document.querySelector("#menu-active"),
    scrollTimeOut: true,
    lastYPos: 0,
    yPos: 0,
    yPosDelta: 5,
};

function init(props) {
    model = Object.assign({}, model, props);
    if (!model.$nav || !model.$navContent)
        return;

    onScroll();
}

function onScroll() {
    // Hide Header on scroll down and show on scroll up
    var scrollTimeOut = model.scrollTimeOut,
        lastYPos = model.lastYPos,
        yPos = model.yPos,
        yPosDelta = model.yPosDelta,
        nav = model.$nav,
        navContent = model.$navContent,
        navHeight = nav.offsetHeight,
        setNavClass = function () {
            scrollTimeOut = false;
            yPos = document.documentElement.scrollTop;

            if (Math.abs(lastYPos - yPos) >= yPosDelta) {
                if (
                    yPos > lastYPos &&
                    yPos > navHeight &&
                    !navContent.checked
                ) {
                    nav.classList.add("nav-up");
                    nav.classList.remove("scroll-up");
                } else {
                    nav.classList.remove("nav-up");
                    nav.classList.add("scroll-up");
                }
                lastYPos = yPos;
            }
            if (yPos === 0) {
                nav.classList.remove("scroll-up");
            }
        };
    window.addEventListener("scroll", () => {
        scrollTimeOut = true;
    });
    setInterval(() => {
        if (scrollTimeOut) {
            setNavClass();
        }
    }, 25);
}

export default init;