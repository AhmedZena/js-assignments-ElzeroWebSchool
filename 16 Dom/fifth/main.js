// that is sol of the assignment five in the assignment one Dom in Elzero web school
for (let i = 0; i < document.body.querySelectorAll("img").length; i++) {
  let imgg = document.getElementsByTagName("img")[i];
  if (imgg.hasAttribute("alt")) {
    imgg.alt = "Old";
  } else {
    imgg.alt = "Elzero New";
  }
}
