let snippet = {
  name: "",
  prefix: "",
  scope: [],
  desc: "",
  body: "",
  parse: (body) => {
    body = body.replace(/^\s+|\s+$/g, "");

    var indented = indent.js(body, { tabString: "\t" });

    snippet.body = indented;

    let lines = indented.split("\r\n");
    x = lines
      .map((e) => {
        e = e.replace(/\t/g, "\\t");

        return `\t"${e}",`;
      })
      .join("\n");

    return `[
${x}
]`;
  },
  toString: () => {
    return `"${snippet.name}": {
"prefix": "${snippet.prefix}",
"scope": "${Array.isArray(snippet.scope) ? snippet.scope.join(', ') : ''}",
"body": ${snippet.parse(snippet.body)},
"description": "${snippet.desc}"
}`;
  },
};

document.querySelectorAll('#language-selection input[type="checkbox"]').forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    if (!Array.isArray(snippet.scope)) {
      snippet.scope = [];
    }

    // If the checkbox is checked, add the value to the scope array
    if (this.checked) {
      if (!snippet.scope.includes(this.value)) {
        snippet.scope.push(this.value);
      }
    } else {
      // If unchecked, remove the value from the scope array
      const index = snippet.scope.indexOf(this.value);
      if (index > -1) {
        snippet.scope.splice(index, 1);
      }
    }

    // Render the snippet to reflect changes
    renderSnippet();
  });
});

function renderSnippet() {
  document.getElementById("snippets").innerText = snippet.toString();
  hljs.highlightAll();

  const repoUrl = "https://github.com/Esri/arcgis-js-vscode-snippets";
  const title = encodeURIComponent(`Snippet proposal: ${snippet.name}`);
  const body = encodeURIComponent(`
  Please specify which type of snippet it is: 
  * [ ] JavaScript snippet (*.js)
  * [ ] TypeScript snippet (*.ts)
  * [ ] HTML snippet (*.html)
  * [ ]  ...
  

---
**Prefix**: ${snippet.prefix}
**Description**: ${snippet.desc}
**Snippet**:
\`\`\`js
${snippet.body}
\`\`\`
Code:
\`\`\`js
${snippet.toString()}
\`\`\`
`);

  document.querySelector(
    "calcite-button"
  ).href = `${repoUrl}/issues/new?title=${title}&body=${body}`;
}

document.getElementById("import-snippet").addEventListener("change", (event) => {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function(e) {
      try {
        const fileContent = e.target.result;
        const snippetObject = JSON.parse(fileContent);

        const snippetDisplay = document.getElementById("snippets");
        snippetDisplay.innerText = JSON.stringify(snippetObject, null, 2);

        hljs.highlightElement(snippetDisplay);

      } catch (error) {
        console.error("Failed to parse the snippet JSON: ", error);
        document.getElementById("snippets").innerText = "Error parsing JSON. Please upload a valid snippet.";
      }
    };

    reader.readAsText(file);
  }
});


const copyButton = document.getElementById("copy-button");

copyButton.addEventListener("click", (event) => {
  event.preventDefault();
  const snippetText = snippet.toString();
  navigator.clipboard.writeText(snippetText)
    .then(() => {
      copyButton.textContent = "Copied";
    })
    setTimeout(() => {
      copyButton.textContent = "Copy";
    }, 1000);    
});

document.querySelectorAll("calcite-input").forEach((item) => {
  item.addEventListener("keyup", (evt) => {
    snippet[evt.target.closest("calcite-input").id] = evt.target.value.replace(
      /\"/g,
      '\\"'
    );
    renderSnippet();
  });
});

document.querySelectorAll(".popover").forEach((item) => {
  item.addEventListener("mouseenter", (evt) => {
    el = document.querySelector(`[reference-element="${evt.target.id}"]`);
    el.toggleAttribute("open");
  });

  item.addEventListener("mouseleave", (evt) => {
    el = document.querySelector(`[reference-element="${evt.target.id}"]`);
    el.toggleAttribute("open");
  });
});

renderSnippet();
