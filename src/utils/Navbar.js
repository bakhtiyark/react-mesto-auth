function toggleList() {
    const list = document.getElementById("header__bar");
    list.style.display === "flex" ? list.style.display = "none": list.style.display = "flex";
  }
export default toggleList;