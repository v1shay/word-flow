// let lastSelection = "";

// function updateSelection() {
//   try {
//     const sel = window.getSelection();
//     lastSelection = sel ? sel.toString().trim() : "";
//   } catch {
//     lastSelection = "";
//   }
// }

// // Capture selection when it happens
// document.addEventListener("mouseup", updateSelection);
// document.addEventListener("keyup", updateSelection);

// chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
//   if (!message || message.type !== "WORDLY_GET_SELECTION") return;

//   sendResponse({
//     text: lastSelection
//   });
// });

let lastSelection = "";

document.addEventListener("mouseup", () => {
  lastSelection = window.getSelection()?.toString() || "";
  console.log("Captured selection:", lastSelection);
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message?.type === "WORDLY_GET_SELECTION") {
    console.log("Popup asked for selection:", lastSelection);
    sendResponse({ text: lastSelection });
  }
});
