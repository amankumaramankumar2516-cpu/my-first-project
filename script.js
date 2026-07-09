document.addEventListener("DOMContentLoaded", function () {

  const generateBtn = document.getElementById("generateBtn");

  generateBtn.addEventListener("click", function () {

    const topic = document.getElementById("topic").value;
    const output = document.getElementById("output");

    if (topic.trim() === "") {
      output.innerHTML = "<p>Please enter a topic.</p>";
      return;
    }

    output.innerHTML = `
      <h2>${topic}</h2>
      <ul>
        <li>Introduction</li>
        <li>Definition</li>
        <li>Advantages</li>
        <li>Applications</li>
        <li>Conclusion</li>
      </ul>
    `;
  });

});
