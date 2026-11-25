/**
 * Apex Consulting - Global Interactions & Modal Controller
 */

// Initialize Lucide Icons when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

/**
 * Open the Consultation Booking Modal
 */
function openBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (!modal) return;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

/**
 * Close the Consultation Booking Modal and reset forms
 */
function closeBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (!modal) return;

  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = ''; // Re-enable background scrolling

  // Reset modal state back to the booking form after close transition
  setTimeout(() => {
    const formContainer = document.getElementById('modalFormContainer');
    const successContainer = document.getElementById('modalSuccessContainer');
    const form = document.getElementById('consultationForm');

    if (formContainer) formContainer.classList.remove('hidden');
    if (successContainer) successContainer.classList.add('hidden');
    if (form) form.reset();
  }, 250);
}

/**
 * Handle Consultation Form Submission
 */
function handleBookingSubmit(event) {
  event.preventDefault();

  const formContainer = document.getElementById('modalFormContainer');
  const successContainer = document.getElementById('modalSuccessContainer');

  if (formContainer && successContainer) {
    formContainer.classList.add('hidden');
    successContainer.classList.remove('hidden');

    // Refresh icons inside dynamic state
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }
}

// Close modal when pressing the 'Escape' key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeBookingModal();
  }
});

// Close modal when clicking outside the dialog content box
document.addEventListener('click', (e) => {
  const modal = document.getElementById('bookingModal');
  if (modal && e.target === modal) {
    closeBookingModal();
  }
});