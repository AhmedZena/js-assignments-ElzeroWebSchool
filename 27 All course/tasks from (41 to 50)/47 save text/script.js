const textarea = document.querySelector("textarea");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const text = textarea.value;
  const blob = new Blob([text], {
    type: "text/plain",
  });
  const anchor = document.createElement("a");
  anchor.download = "text.txt";
  anchor.href = window.URL.createObjectURL(blob);
  anchor.target = "_blank";
  anchor.style.display = "none";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
});
