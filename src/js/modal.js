const Modal = (() => {
  let modal, modalBody, closeBtn;

  const init = (modalId) => {
    modal = document.getElementById(modalId);
    if (!modal) {
      console.error(`Элемент с id "${modalId}" не найден`);
      return;
    }
    modalBody = modal.querySelector(".modal__body");
    closeBtn = modal.querySelector(".modal__close");

    closeBtn.addEventListener("click", close);
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        close();
      }
    });
  };

  const open = (contentHTML) => {
    if (!modal || !modalBody) return;
    modalBody.innerHTML = contentHTML;
    modal.style.display = "flex";
    setTimeout(() => {
      modal.classList.add("modal_show");
      document.body.style.overflow = "hidden";
    }, 10);
  };

  const close = () => {
    if (!modal) return;
    modal.classList.remove("modal_show");
    setTimeout(() => {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }, 300);
  };

  return {
    init,
    open,
    close,
  };
})();

export default Modal;
