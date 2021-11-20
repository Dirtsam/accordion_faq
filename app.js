/*=============== ACCORDION ===============*/
const faqItems = document.querySelectorAll(".accordion-items");
// const faqContent = document.querySelectorAll(".accordion__content");

faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    const faqContent = item.querySelector(".accordion__content");
    const toggleIcon = item.querySelector(".accordion__toggle");
    const faqTitle = item.querySelector(".faq__h3");
    if (faqContent.style.maxHeight) {
      faqContent.style.maxHeight = "";
      faqTitle.classList.remove("active");
      toggleIcon.classList.remove("active");
    } else {
      faqContent.style.maxHeight = faqContent.scrollHeight + "px";

      faqTitle.classList.add("active");
      toggleIcon.classList.add("active");
    }
  });
});
