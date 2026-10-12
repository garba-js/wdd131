document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#inquiry-form");
  const feedbackContainer = document.querySelector("#form-feedback");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Capture form values
    const fullName = document.querySelector("#full-name").value.trim();
    const inquiryTypeSelect = document.querySelector("#inquiry-type");
    const inquiryTypeLabel = inquiryTypeSelect.options[inquiryTypeSelect.selectedIndex].text;

    // Track submission count using localStorage
    let submissionCount = Number(localStorage.getItem("pod_form_submissions") || 0);
    submissionCount += 1;
    localStorage.setItem("pod_form_submissions", submissionCount);

    // Build dynamic output using Template Literals exclusively
    feedbackContainer.innerHTML = `
      <h3>Request Submitted Successfully!</h3>
      <p>Thank you, <strong>${fullName}</strong>. We have received your request regarding <strong>${inquiryTypeLabel}</strong>.</p>
      <p>Total submissions recorded from this browser session: <strong>${submissionCount}</strong>.</p>
      <p class="success-note">Our team will review your details and reach out via email shortly.</p>
    `;

    feedbackContainer.classList.remove("hidden");

    // Reset form fields
    form.reset();
  });
});