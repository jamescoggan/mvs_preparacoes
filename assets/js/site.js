(function () {
    var root = document.documentElement;
    root.classList.add("is-enhanced", "has-js");

    /* Failed images fall back to the container's composed dark background. */
    document.addEventListener("error", function (event) {
        var target = event.target;
        if (target && target.tagName === "IMG") target.classList.add("is-broken");
    }, true);
    Array.prototype.forEach.call(document.images, function (image) {
        if (image.complete && image.naturalWidth === 0 && image.currentSrc) image.classList.add("is-broken");
    });

    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var hasIO = "IntersectionObserver" in window;

    /* ---------- Header: condensed state via a sentinel at the hero top ---------- */
    var header = document.querySelector("[data-site-header]");
    var sentinel = document.querySelector("[data-header-sentinel]");

    if (header) {
        if (sentinel && hasIO) {
            new IntersectionObserver(function (entries) {
                header.classList.toggle("is-condensed", !entries[0].isIntersecting);
            }).observe(sentinel);
        } else {
            header.classList.add("is-condensed");
        }
    }

    /* ---------- Mobile menu: full-screen sheet with focus trap ---------- */
    var navToggle = document.querySelector(".nav-toggle");
    var navLinks = document.querySelector("[data-nav-links]");
    var menuLabel = document.querySelector("[data-menu-label]");
    var desktopQuery = window.matchMedia("(min-width: 1024px)");
    var inertTargets = Array.prototype.slice.call(document.querySelectorAll("main, footer, .skip-link"));

    function isOpen() {
        return navToggle && navToggle.getAttribute("aria-expanded") === "true";
    }

    function focusables() {
        return Array.prototype.slice.call(header.querySelectorAll("a[href], button:not([hidden])")).filter(function (el) {
            return el.offsetParent !== null || el === navToggle;
        });
    }

    function setMenu(open, restoreFocus) {
        if (!navToggle || !navLinks) return;
        navToggle.setAttribute("aria-expanded", String(open));
        header.classList.toggle("is-menu-open", open);
        root.classList.toggle("is-menu-locked", open);
        if (menuLabel) menuLabel.textContent = open ? "Fechar menu" : "Abrir menu";
        inertTargets.forEach(function (el) {
            if (open) {
                el.setAttribute("inert", "");
            } else {
                el.removeAttribute("inert");
            }
        });
        if (open) {
            var first = navLinks.querySelector("a");
            if (first) window.setTimeout(function () { first.focus(); }, 30);
        } else if (restoreFocus) {
            navToggle.focus();
        }
    }

    if (navToggle && navLinks && header) {
        navToggle.hidden = false;

        navToggle.addEventListener("click", function () {
            setMenu(!isOpen(), true);
        });

        navLinks.addEventListener("click", function (event) {
            var link = event.target && event.target.closest ? event.target.closest("a") : null;
            if (link && isOpen()) setMenu(false, false);
        });

        document.addEventListener("keydown", function (event) {
            if (!isOpen()) return;
            if (event.key === "Escape") {
                setMenu(false, true);
                return;
            }
            if (event.key === "Tab") {
                var items = focusables();
                if (!items.length) return;
                var first = items[0];
                var last = items[items.length - 1];
                if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last.focus();
                } else if (!event.shiftKey && document.activeElement === last) {
                    event.preventDefault();
                    first.focus();
                }
            }
        });

        var onBreakpoint = function (event) {
            if (event.matches && isOpen()) setMenu(false, false);
        };
        if (desktopQuery.addEventListener) {
            desktopQuery.addEventListener("change", onBreakpoint);
        } else if (desktopQuery.addListener) {
            desktopQuery.addListener(onBreakpoint);
        }
    }

    /* ---------- Scroll progress (fallback where scroll timelines are unsupported) ---------- */
    var supportsScrollTimeline = window.CSS && CSS.supports && CSS.supports("animation-timeline: scroll()");
    if (!supportsScrollTimeline) {
        var ticking = false;
        var updateProgress = function () {
            ticking = false;
            var scrollable = root.scrollHeight - window.innerHeight;
            var progress = scrollable > 0 ? window.scrollY / scrollable : 0;
            root.style.setProperty("--scroll-progress", Math.max(0, Math.min(1, progress)).toFixed(4));
        };
        var requestProgress = function () {
            if (!ticking) {
                ticking = true;
                window.requestAnimationFrame(updateProgress);
            }
        };
        updateProgress();
        window.addEventListener("scroll", requestProgress, { passive: true });
        window.addEventListener("resize", requestProgress);
    }

    /* ---------- Entrance reveals with an 80ms sibling stagger ---------- */
    var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal, [data-reveal]"));

    reveals.forEach(function (item) {
        if (item.style.getPropertyValue("--i")) return;
        var parent = item.parentElement;
        if (!parent) return;
        var siblings = Array.prototype.filter.call(parent.children, function (child) {
            return child.classList.contains("reveal");
        });
        var index = siblings.indexOf(item);
        if (index > 0) item.style.setProperty("--i", String(Math.min(index, 4)));
    });

    if (hasIO && !reduceMotion) {
        var revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

        reveals.forEach(function (item) {
            revealObserver.observe(item);
        });
    } else {
        reveals.forEach(function (item) {
            item.classList.add("is-visible");
        });
    }

    /* ---------- Process gauge: the step being read drives the needle ---------- */
    var process = document.querySelector("[data-process]");
    if (process && hasIO) {
        var readouts = process.querySelectorAll("[data-step-readout]");
        var setStep = function (step) {
            if (process.getAttribute("data-step") === step) return;
            process.setAttribute("data-step", step);
            Array.prototype.forEach.call(readouts, function (el) {
                el.textContent = "0" + step;
            });
        };
        var stepObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) setStep(entry.target.getAttribute("data-step-item"));
            });
        }, { rootMargin: "-40% 0px -50% 0px", threshold: 0 });

        Array.prototype.forEach.call(process.querySelectorAll("[data-step-item]"), function (item) {
            stepObserver.observe(item);
        });
    }

    /* ---------- Years since opening: computed at runtime, "Desde 2008." without JS ---------- */
    Array.prototype.forEach.call(document.querySelectorAll("[data-years-since]"), function (el) {
        var since = parseInt(el.getAttribute("data-years-since"), 10);
        var years = new Date().getFullYear() - since;
        if (since && years > 1) {
            el.textContent = years + " anos desde a abertura oficial.";
        }
    });

    Array.prototype.forEach.call(document.querySelectorAll("[data-current-year]"), function (el) {
        el.textContent = String(new Date().getFullYear());
    });

    /* ---------- Brief form: builds a local mailto / WhatsApp message, never submits data ---------- */
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
