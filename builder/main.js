let snippet = {
  name: "",
  prefix: "",
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
"body": ${snippet.parse(snippet.body)},
"description": "${snippet.desc}"
}`;
  },
};

function renderSnippet() {
  document.getElementById("snippets").innerText = snippet.toString();
  hljs.highlightAll();

  const repoUrl = "https://github.com/Esri/arcgis-js-vscode-snippets";
  const title = encodeURIComponent(`Snippet proposal: ${snippet.name}`);
  const body = encodeURIComponent(`
Please specify which type of snippet it is: JavaScript snippet (*.js), TypeScript snippet (*.ts), HTML snippet (*.html), ...
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
