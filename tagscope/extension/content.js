chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "BOOKMARK_ADDED") {
    showToast("✅ 북마크가 저장되었습니다!");
  } else if (message.type === "BOOKMARK_ALREADY") {
    showToast("ℹ️ 이미 북마크에 있습니다.");
  } else if (message.type === "BOOKMARK_FAILED") {
    showToast("❌ 북마크 저장 실패!");
  }
});

function showToast(msg) {
  // 🔹 토스트 컨테이너(오른쪽 상단 고정)
  let container = document.getElementById("tagscope-toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "tagscope-toast-container";
    Object.assign(container.style, {
      position: "fixed",
      top: "20px",
      right: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      zIndex: 9999,
    });
    document.body.appendChild(container);
  }

  // 🔹 개별 토스트
  const toast = document.createElement("div");
  toast.innerText = msg;

  Object.assign(toast.style, {
    padding: "10px 16px",
    background: "rgba(0,0,0,0.8)",
    color: "white",
    borderRadius: "6px",
    fontSize: "14px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
    opacity: "1",
    transition: "opacity 0.5s",
  });

  container.appendChild(toast);

  // 🔹 자동 사라짐
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 500);
  }, 2500);
}
