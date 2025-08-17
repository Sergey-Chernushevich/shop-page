export function initCounter(basketId, addButton) {
  const countSpan = document.getElementById(basketId);
  const addBtn = document.getElementById(addButton);

  let count = localStorage.getItem("cartCount")
    ? parseInt(localStorage.getItem("cartCount"))
    : 0;
  countSpan.textContent = count;

  addBtn.addEventListener("click", () => {
    count += 1;
    countSpan.textContent = count;
    localStorage.setItem("cartCount", count);
  });
}
