const initAssistant = () => {
    const btn = document.getElementById("cronosAssistantBtn");
    const modal = document.getElementById("cronosAssistantModal");
    const closeBtn = document.getElementById("closeAssistantModalBtn");
    const okBtn = document.getElementById("closeAssistantModalOkBtn");

    if (btn && modal) {
        btn.addEventListener("click", () => {
            modal.classList.remove("hidden");
            // Automatically expand the first accordion item if present
            const firstAccordionItem = modal.querySelector(".accordion-item");
            if (firstAccordionItem) {
                modal.querySelectorAll(".accordion-item").forEach(item => item.classList.remove("active"));
                firstAccordionItem.classList.add("active");
            }
        });

        const closeModal = () => {
            modal.classList.add("hidden");
        };

        if (closeBtn) closeBtn.addEventListener("click", closeModal);
        if (okBtn) okBtn.addEventListener("click", closeModal);

        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Accordion functionality inside the Cronos Assistant modal
        modal.querySelectorAll(".accordion-header").forEach(header => {
            header.addEventListener("click", () => {
                const currentItem = header.closest(".accordion-item");
                if (currentItem) {
                    const isCurrentlyActive = currentItem.classList.contains("active");
                    modal.querySelectorAll(".accordion-item").forEach(item => item.classList.remove("active"));
                    if (!isCurrentlyActive) {
                        currentItem.classList.add("active");
                    }
                }
            });
        });
    }
};

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAssistant);
} else {
    initAssistant();
}

