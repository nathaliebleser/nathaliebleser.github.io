const expandableSections = document.getElementsByClassName("expandable");

function toggleExpand(e) {
  const parent = e.target.parentNode;
  const children = parent.children;
  for (let child of children) {
    if (child.nodeName === "SPAN") {
      child.className = child.className === "expandable" ? "expanded" : "expandable";
    }
    if (child.className === "hidden") {
      child.style.display = child.style.display === "block"? "none" : "block";
    }
  }
}

for (let expandableSection of expandableSections) {
  expandableSection.addEventListener("click",toggleExpand);
  for (let child of expandableSection.parentNode.children) {
    if (child.nodeName === "H3") {
      child.addEventListener("click",toggleExpand)
      child.style.cursor = "pointer";
    }
  }
}
