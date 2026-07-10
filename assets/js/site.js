(function () {
    var root = document.documentElement;
    root.classList.add("is-enhanced");

    var navToggle = document.querySelector(".nav-toggle");
    var navLinks = document.querySelector("[data-nav-links]");
    var menuLabel = document.querySelector("[data-menu-label]");

    function closeNav() {
        if (!navToggle || !navLinks) return;
        navToggle.setAttribute("aria-expanded", "false");
        navLinks.classList.remove("is-open");
        if (menuLabel) menuLabel.textContent = "Abrir menu";
    }

    if (navToggle && navLinks) {
        navToggle.addEventListener("click", function () {
            var isOpen = navToggle.getAttribute("aria-expanded") === "true";
            navToggle.setAttribute("aria-expanded", String(!isOpen));
            navLinks.classList.toggle("is-open", !isOpen);
            if (menuLabel) menuLabel.textContent = isOpen ? "Abrir menu" : "Fechar menu";
        });

        navLinks.addEventListener("click", function (event) {
            if (event.target && event.target.tagName === "A") closeNav();
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") closeNav();
        });
    }

    function updateProgress() {
        var scrollable = document.documentElement.scrollHeight - window.innerHeight;
        var progress = scrollable > 0 ? window.scrollY / scrollable : 0;
        root.style.setProperty("--scroll-progress", Math.max(0, Math.min(1, progress)).toFixed(4));
    }

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
    if ("IntersectionObserver" in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

        reveals.forEach(function (item) {
            observer.observe(item);
        });
    } else {
        reveals.forEach(function (item) {
            item.classList.add("is-visible");
        });
    }

    var form = document.querySelector("[data-brief-form]");
    var whatsappLink = document.querySelector("[data-whatsapp-link]");
    var status = document.querySelector("[data-form-status]");

    function formValue(selector) {
        var field = form ? form.querySelector(selector) : null;
        return field && field.value ? field.value.trim() : "";
    }

    function buildMessage() {
        var lines = [
            "Olá, MVS. Quero falar sobre um projeto de preparação automotiva.",
            "",
            "Nome: " + formValue("#name"),
            "Contato: " + formValue("#contact-method"),
            "Veículo/configuração: " + (formValue("#vehicle") || "A definir"),
            "Uso principal: " + formValue("#project-use"),
            "",
            "Objetivo:",
            formValue("#message")
        ];

        return lines.join("\n");
    }

    function updateContactLinks() {
        if (!form) return;
        var message = buildMessage();
        var subject = encodeURIComponent("Orçamento de projeto automotivo");
        var body = encodeURIComponent(message);
        var mailtoHref = "mailto:contato@mvspreparacoes.com.br?subject=" + subject + "&body=" + body;
        form.dataset.mailtoHref = mailtoHref;

        if (whatsappLink) {
            whatsappLink.setAttribute("href", "https://wa.me/5511995426610?text=" + body);
        }
    }

    if (form) {
        form.addEventListener("input", updateContactLinks);
        form.addEventListener("change", updateContactLinks);
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            updateContactLinks();
            if (status) {
                status.textContent = "Abrindo seu aplicativo de email com o briefing preenchido.";
            }
            window.location.href = form.dataset.mailtoHref;
        });
        updateContactLinks();
    }
})();
