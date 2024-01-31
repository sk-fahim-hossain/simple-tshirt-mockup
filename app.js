const fileInput = document.getElementById("file");
const imageTag = document.getElementById("image-tag");

fileInput.addEventListener("change", async function (e) {
  const selectedFile = e.target.files[0];

  //   const rawImage = await selectedFile.toDataURL();
  //   console.log(rawImage);

  const reader = new FileReader();
  reader.onload = (e) => {
    imageTag.src = e.target.result;
  };
  reader.readAsDataURL(selectedFile);
});

async function handleTakePic(e) {
  const makerContainer = document.getElementById("maker");
  const pickerDiv = document.getElementById("child");
  const canvas = await html2canvas(pickerDiv);

  const dataConverted = await canvas.toDataURL();
  // const createdDiv = document.createElement("div");
  console.log(dataConverted);
  makerContainer.innerHTML = `<img style='width:100%' src="${dataConverted}"/>
  <h2>Download finished.. </h2>
  `;

  // download link
  const downloadLink = document.createElement("a");
  downloadLink.href = dataConverted;
  downloadLink.download = "combined_image.png";

  //   const downloadDIv = document.getElementById("downld");
  // Append the link to the document
  //   downloadDIv.appendChild(downloadLink);

  //   Trigger a click on the link to start the download
  downloadLink.click();

  //   Remove the link from the document
  document.body.removeChild(downloadLink);

  console.log(imageTag);
}
