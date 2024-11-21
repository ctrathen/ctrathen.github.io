// Initial test
// alert("Hello, world!");

// Function to increase font size
function makeBigger() {
    const textArea = document.getElementById("textInput");
    const currentSize = parseInt(window.getComputedStyle(textArea).fontSize);
    textArea.style.fontSize = (currentSize + 2) + "pt";
}

// Function to apply fancy styles
function applyFancyStyles() {
    const textArea = document.getElementById("textInput");
    const fancy = document.getElementById("fancyShmancy").checked;

    if (fancy) {
        alert("FancyShmancy selected!");
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        alert("BoringBetty selected!");
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

// Function to convert text to uppercase and add "-Moo"
function mooifyText() {
    const textArea = document.getElementById("textInput");
    let text = textArea.value.toUpperCase();
    let sentences = text.split(".");
    sentences = sentences.map(sentence => sentence.trim() + "-Moo");
    textArea.value = sentences.join(". ");
}

// Event listeners
document.getElementById("biggerButton").onclick = makeBigger;
document.getElementById("fancyShmancy").onchange = applyFancyStyles;
document.getElementById("boringBetty").onchange = applyFancyStyles;
document.getElementById("mooButton").onclick = mooifyText;