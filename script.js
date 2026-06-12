let pages = document.querySelectorAll(".page");
let currentPage = 0;

function showPage(index) {
  pages.forEach((page, i) => {
    page.classList.remove("active");
    if (i === index) {
      page.classList.add("active");
    }
  });
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
}

showPage(currentPage);
