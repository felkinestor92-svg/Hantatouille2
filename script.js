const copyButton = document.getElementById("copyTicker");
const copyFeedback = document.getElementById("copyFeedback");

if (copyButton && copyFeedback) {
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("HANTATOUILLE");
      copyFeedback.textContent = "Copied: HANTATOUILLE";
    } catch (error) {
      copyFeedback.textContent = "Clipboard unavailable. Text: HANTATOUILLE";
    }
  });
}
