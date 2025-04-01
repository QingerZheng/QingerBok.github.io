function changeChatbotStyle() {
    var chatWindow = document.querySelector(".flex.h-14.shrink-0.items-center.justify-between.rounded-t-2xl.px-3");
    if (chatWindow) {
        chatWindow.style.backgroundImage = "linear-gradient(to right, rgb(255, 99, 71), rgb(255, 165, 0))";
        console.log("✅ Chatbot 背景修改成功！");
    } else {
        console.log("❌ Chatbot 组件未找到！");
    }
}

// 等待 DOM 变化，确保 Chatbot 加载后再修改
var observer = new MutationObserver(function(mutations, obs) {
    var chatWindow = document.querySelector(".flex.h-14.shrink-0.items-center.justify-between.rounded-t-2xl.px-3");
    if (chatWindow) {
        changeChatbotStyle();
        obs.disconnect(); // 停止观察
    }
});

observer.observe(document.body, { childList: true, subtree: true });
