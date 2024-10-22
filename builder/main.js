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
    if (this.checked) {
      if (!snippet.scope.includes(this.value)) {
        snippet.scope.push(this.value);
      }
    } else {
      const index = snippet.scope.indexOf(this.value);
      if (index > -1) {
        snippet.scope.splice(index, 1);
      }
    }
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

const inputElement = document.getElementById("import-snippet");
if (inputElement) {
  inputElement.addEventListener("change", (event) => {
    const file = event.target.files[0];
  console.log("Selected file:", file);

  if (file) {
    const reader = new FileReader();

    reader.onload = function(e) {
      try {
        const fileContent = e.target.result;
        console.log("File content:", fileContent);

        const snippetObject = JSON.parse(fileContent);

      const firstSnippet = Object.values(snippetObject)[0];
      snippet.name = Object.keys(snippetObject)[0];
      snippet.prefix = firstSnippet.prefix;
      snippet.scope = firstSnippet.scope.split(', ');
      snippet.body = firstSnippet.body.join('\n');
      snippet.desc = firstSnippet.description;

      document.getElementById("name").value = snippet.name;
      document.getElementById("prefix").value = snippet.prefix;
      document.getElementById("desc").value = snippet.desc;
      document.getElementById("body").value = snippet.body;

      document.querySelectorAll('#language-selection input[type="checkbox"]').forEach((checkbox) => {
          checkbox.checked = snippet.scope.includes(checkbox.value);
      });

      renderSnippet();

      } catch (error) {
        console.error("Failed to parse the snippet JSON: ", error);
        document.getElementById("snippets").innerText = "Error parsing JSON. Please upload a valid snippet.";
      }
    };

    reader.readAsText(file);
  }
  });
} else {
  console.error("Element with ID 'import-snippet' not found.");
}

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

document.querySelectorAll("calcite-input:not([type='file'])").forEach((item) => {
  item.addEventListener("keyup", (evt) => {
    snippet[evt.target.closest("calcite-input:not([type='file'])").id] = evt.target.value.replace(
      /\"/g,
      '\\"'
    );
    renderSnippet();
  });
});

document.querySelectorAll("calcite-text-area").forEach((item) => {
  item.addEventListener("keyup", (evt) => {
    snippet[evt.target.closest("calcite-text-area").id] = evt.target.value.replace(
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
