const barDiv = document.querySelector("._3-miAEojrCvx_4FQ8x3P-s");

const downloadMedia = () => {
  chrome.runtime.sendMessage({
    url: window.location.href
  });
};

if (barDiv) {
  let dlButton = document.createElement("button");
  dlButton.onclick = downloadMedia;
  dlButton.textContent = "download";
  barDiv.insertBefore(dlButton, barDiv.childNodes[barDiv.childNodes.length - 3]);
}