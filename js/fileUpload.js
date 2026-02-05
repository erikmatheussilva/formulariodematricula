document.addEventListener("DOMContentLoaded", () => {
  // The addEventListener() method of the EventTarget interface sets 
  // up a function that will be called whenever the specified event is 
  // delivered to the target
//   In this case the event is "DOMContentLoaded", 
// which basically means something been uploaded inside the target document
  const input = document.getElementById("fileInput");
//   Defines const input as the <input> with the id="fileInput"
  const info = document.getElementById("fileInfo");
//   Defines const info as the <p> with the id="fileInfo"

  input.addEventListener("change", () => {
    // defines the const input as the target of 
    // addEventListener who is listening to the "change" event of const input
    if (!input.files.length) {
      info.textContent = "Nenhum arquivo selecionado";
      return;
    }
    // if there are no files uploaded to input, the textContent will show up

    const file = input.files[0];
    // Defines const file as the content uploaded at the input
    info.textContent = file.name;
    // Defines info.textContent from "Nenhum arquivo selecionado" to file.name
  });
});
