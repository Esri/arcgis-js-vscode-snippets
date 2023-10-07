import "./style.css";
import * as HtmlJson from "../snippets/html.json";
import * as JavascriptJson from "../snippets/javascript.json";
import * as JsonJson from "../snippets/json.json";
import * as ScssJson from "../snippets/scss.json";
import * as TypescriptJson from "../snippets/typescript.json";
import * as TypescriptReactJson from "../snippets/typescriptreact.json";

const languageSelect = document.getElementById("language-select");
const allLanguages = [
  { value: "HtmlJson", label: "Html" },
  { value: "JavascriptJson", label: "Javascript" },
  { value: "JsonJson", label: "Json" },
  { value: "ScssJson", label: "Scss" },
  { value: "TypescriptJson", label: "Typescript" },
  { value: "TypescriptReactJson", label: "Typescript React" },
];
for (let i = 0; i < allLanguages.length; i++) {
  const option = document.createElement("option");
  option.setAttribute("value", allLanguages[i].value);
  option.innerHTML = allLanguages[i].label;

  languageSelect.appendChild(option);
}

const generalSelector = document.getElementById("general-snippets-selector");
const getFileBylanguageSelect = (languageSelected) => {
  const files = {
    HtmlJson: HtmlJson,
    JavascriptJson: JavascriptJson,
    JsonJson: JsonJson,
    ScssJson: ScssJson,
    TypescriptJson: TypescriptJson,
    TypescriptReactJson: TypescriptReactJson,
  };
  return files[languageSelected];
};

const createOptionsSelectSnippet = (keyFiles) => {
  for (let i = 0; i < keyFiles.length; i++){
    const option = document.createElement("option")
    option.setAttribute("value", keyFiles[i])
    option.innerHTML = keyFiles[i]
    generalSelector.appendChild(option)
  }
}
const onChangelanguageSelect = (e) => {
   while (generalSelector.firstChild) {
     generalSelector.removeChild(generalSelector.firstChild);
   }
  const languageSelected = e.target.value
  const file = getFileBylanguageSelect(languageSelected);
  const keyfiles = Object.keys(file.default);
  createOptionsSelectSnippet(keyfiles)
  }


languageSelect.addEventListener("change", onChangelanguageSelect);



