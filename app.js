const minifyButton = document.getElementById("minify");
const box2 = document.getElementById("outputBox");
const inputBox = document.getElementById("input1");

minifyButton.addEventListener("click", function () {
  const inputText = inputBox.value;

  // Simulate minification by removing line breaks and excess spaces
  let minifiedCode = inputText.replace(/\s+/g, " ").trim();

  // Basic minification steps:
  // 1. Remove multi-line comments /* ... */
  minifiedCode = inputText.replace(/\/\*[\s\S]*?\*\//g, "");

  // 2. Remove single-line comments // ...
  minifiedCode = minifiedCode.replace(/\/\/.*/g, "");

  // 4. Remove spaces around curly braces, brackets, and semicolons
  minifiedCode = minifiedCode.replace(/\s*([{};,:])\s*/g, "$1");

  minifyButton.addEventListener("mousedown", function () {
    minifyButton.style.boxShadow = "none"; // Removes the shadow
  });

  // When mouse button is released, restore the box-shadow
  minifyButton.addEventListener("mouseup", function () {
    minifyButton.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.5)"; // Restores the shadow
  });

  // Display the minified text in the second box
  box2.textContent = minifiedCode;
});
