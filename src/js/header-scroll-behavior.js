export function createHeaderHideOnScroll(headerElement, options = {}) {
  const offset = options.offset || headerElement.offsetHeight || 70;
  const threshold = options.threshold || 1;
  let lastScrollTop = 0;

  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop + threshold) {
      headerElement.style.top = `-${offset}px`;
    } else if (scrollTop < lastScrollTop - threshold) {
      headerElement.style.top = "0";
    }

    lastScrollTop = Math.max(0, scrollTop);
  }

  function init() {
    window.addEventListener("scroll", handleScroll);
  }

  function destroy() {
    window.removeEventListener("scroll", handleScroll);
  }

  return {
    init,
    destroy,
  };
}
