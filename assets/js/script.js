/**
 * ==============================================================================
 * SHUKLAY WADHEKAR — CINEMATIC PORTFOLIO JAVASCRIPT ENGINE
 * Handles: Dynamic Rendering, Filtering, Lightbox Modal with Mobile Touch Swipe,
 * Horizontal Reels, Scroll Animations, Mobile Navigation, and Contact.
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Components
  initNavigation();
  initProjectsGallery();
  initDocumentaryReel();
  initFilmArchive();
  initBrandsShowcase();
  initProjectModal();
  initScrollAnimations();
  initContactForm();
  initBackToTop();
});

/* ------------------------------------------------------------------------------
   1. NAVIGATION & HEADER BEHAVIOR
   ------------------------------------------------------------------------------ */
function initNavigation() {
  const header = document.getElementById('site-header');
  const menuToggle = document.getElementById('menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  // Sticky header background blur on scroll
  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Mobile menu toggle
  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.classList.toggle('open');
      mobileDrawer.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('open');
        mobileDrawer.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Active section scroll spy
  const sections = document.querySelectorAll('section[id]');
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${currentId}`) {
            link.classList.add('active');
          } else if (href && href.startsWith('#')) {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/* ------------------------------------------------------------------------------
   2. SELECTED WORK GALLERY & CATEGORY FILTERING
   ------------------------------------------------------------------------------ */
let activeCategory = 'All';

function initProjectsGallery() {
  const gridContainer = document.getElementById('projects-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (!gridContainer || typeof projects === 'undefined') return;

  renderProjects(projects, gridContainer);

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-filter');

      // Scroll active filter tab into view on mobile
      try {
        btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      } catch (e) {}

      const filtered = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category.toLowerCase().trim() === activeCategory.toLowerCase().trim());

      gridContainer.style.opacity = '0';
      gridContainer.style.transform = 'translateY(10px)';
      
      setTimeout(() => {
        renderProjects(filtered, gridContainer);
        gridContainer.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
        gridContainer.style.opacity = '1';
        gridContainer.style.transform = 'translateY(0)';
      }, 150);
    });
  });
}

function renderProjects(items, container) {
  if (items.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <p style="font-family: var(--font-mono); font-size: 0.85rem; letter-spacing: 0.1em; text-transform: uppercase;">
          No projects found under this category.
        </p>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map((proj) => `
    <article class="project-card" data-id="${proj.id}" tabindex="0" role="button" aria-label="View ${proj.title}">
      <div class="project-media-wrap">
        <span class="project-category-badge">${escapeHtml(proj.category)}</span>
        <span class="project-year-badge">${escapeHtml(proj.year)}</span>
        <img 
          class="project-img" 
          src="${proj.cover}" 
          alt="${escapeHtml(proj.title)} - ${escapeHtml(proj.role)}"
          loading="lazy"
          decoding="async"
        >
      </div>
      <div class="project-info">
        <h3 class="project-title">${escapeHtml(proj.title)}</h3>
        <div class="project-meta-row">
          <span class="project-role">${escapeHtml(proj.role)}</span>
          <span class="project-view-cta">Explore &rarr;</span>
        </div>
      </div>
    </article>
  `).join('');

  // Attach click and keydown listeners for modal
  const cards = container.querySelectorAll('.project-card');
  cards.forEach(card => {
    const handleCardOpen = () => {
      const projId = card.getAttribute('data-id');
      openProjectModal(projId);
    };

    card.addEventListener('click', handleCardOpen);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleCardOpen();
      }
    });
  });
}

/* ------------------------------------------------------------------------------
   3. DOCUMENTARY SPOTLIGHT HORIZONTAL REEL
   ------------------------------------------------------------------------------ */
function initDocumentaryReel() {
  const reelContainer = document.getElementById('documentary-reel');
  const prevBtn = document.getElementById('doc-reel-prev');
  const nextBtn = document.getElementById('doc-reel-next');

  if (!reelContainer || typeof documentarySpotlights === 'undefined') return;

  reelContainer.innerHTML = documentarySpotlights.map(item => `
    <div class="documentary-reel-card">
      <div class="documentary-card-media">
        <span class="documentary-card-location">${escapeHtml(item.location)}</span>
        <img 
          class="documentary-card-img" 
          src="${item.image}" 
          alt="${escapeHtml(item.title)} - ${escapeHtml(item.subtitle)}"
          loading="lazy"
          decoding="async"
        >
        <div class="documentary-card-overlay"></div>
      </div>
      <div class="documentary-card-content">
        <h4 class="documentary-card-title">${escapeHtml(item.title)}</h4>
        <div class="documentary-card-subtitle">${escapeHtml(item.subtitle)} • ${escapeHtml(item.year)}</div>
        <p class="documentary-card-desc">${escapeHtml(item.description)}</p>
      </div>
    </div>
  `).join('');

  // Scroll controls
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      reelContainer.scrollBy({ left: -360, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
      reelContainer.scrollBy({ left: 360, behavior: 'smooth' });
    });
  }
}

/* ------------------------------------------------------------------------------
   4. FILMS & BTS ARCHIVE SECTION
   ------------------------------------------------------------------------------ */
function initFilmArchive() {
  const container = document.getElementById('film-archive-grid');
  if (!container || typeof filmArchives === 'undefined') return;

  container.innerHTML = filmArchives.map((film, index) => `
    <div class="film-archive-item">
      <div class="film-slate-bar">
        <span>SCENE 0${index + 1} / 24FPS</span>
        <span>${escapeHtml(film.year)}</span>
      </div>
      <div class="film-media-wrap">
        <img 
          class="film-media-img" 
          src="${film.image}" 
          alt="${escapeHtml(film.title)} Film Stills"
          loading="lazy"
          decoding="async"
        >
      </div>
      <div class="film-item-body">
        <h4 class="film-item-title">${escapeHtml(film.title)}</h4>
        <div class="film-item-role">${escapeHtml(film.role)} • ${escapeHtml(film.production)}</div>
        <p class="film-item-note">${escapeHtml(film.note)}</p>
      </div>
    </div>
  `).join('');
}

/* ------------------------------------------------------------------------------
   5. BRANDS & COMMERCIAL SECTION
   ------------------------------------------------------------------------------ */
function initBrandsShowcase() {
  const container = document.getElementById('brands-grid');
  if (!container || typeof brandClients === 'undefined') return;

  container.innerHTML = brandClients.map(brand => `
    <div class="brand-card">
      <h4 class="brand-name">${escapeHtml(brand.name)}</h4>
      <div class="brand-category">${escapeHtml(brand.category)}</div>
      <p class="brand-scope">${escapeHtml(brand.scope)}</p>
    </div>
  `).join('');
}

/* ------------------------------------------------------------------------------
   6. CINEMATIC PROJECT LIGHTBOX / MODAL WITH MOBILE TOUCH SWIPE
   ------------------------------------------------------------------------------ */
let currentModalProjectIndex = -1;
let currentModalImageIndex = 0;

function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close');
  const prevImgBtn = document.getElementById('modal-img-prev');
  const nextImgBtn = document.getElementById('modal-img-next');
  const galleryMain = document.querySelector('.modal-gallery-main');

  if (!modal) return;

  // Close handlers
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeProjectModal();
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeProjectModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;

    if (e.key === 'Escape') {
      closeProjectModal();
    } else if (e.key === 'ArrowLeft') {
      stepModalImage(-1);
    } else if (e.key === 'ArrowRight') {
      stepModalImage(1);
    }
  });

  if (prevImgBtn) prevImgBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    stepModalImage(-1);
  });
  if (nextImgBtn) nextImgBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    stepModalImage(1);
  });

  // Mobile Touch Swipe Navigation
  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;

  if (galleryMain) {
    galleryMain.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    galleryMain.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 35) {
        if (diffX < 0) {
          stepModalImage(1); // Swipe left -> next
        } else {
          stepModalImage(-1); // Swipe right -> prev
        }
      }
    }, { passive: true });
  }
}

function openProjectModal(projectId) {
  if (typeof projects === 'undefined') return;

  const projectIndex = projects.findIndex(p => p.id === projectId);
  if (projectIndex === -1) return;

  currentModalProjectIndex = projectIndex;
  currentModalImageIndex = 0;

  populateModalData();

  const modal = document.getElementById('project-modal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function populateModalData() {
  const proj = projects[currentModalProjectIndex];
  if (!proj) return;

  // Header Elements
  document.getElementById('modal-title').textContent = proj.title;
  document.getElementById('modal-category').textContent = proj.category;

  // Image & Navigation
  const images = proj.images && proj.images.length > 0 ? proj.images : [proj.cover];
  const mainImg = document.getElementById('modal-main-img');
  mainImg.src = images[currentModalImageIndex];
  mainImg.alt = `${proj.title} - Image ${currentModalImageIndex + 1}`;

  // Thumbnails Rail
  const thumbsRail = document.getElementById('modal-thumbs');
  if (images.length > 1) {
    thumbsRail.style.display = 'flex';
    thumbsRail.innerHTML = images.map((img, idx) => `
      <div class="modal-thumb ${idx === currentModalImageIndex ? 'active' : ''}" data-idx="${idx}">
        <img src="${img}" alt="Thumbnail ${idx + 1}">
      </div>
    `).join('');

    thumbsRail.querySelectorAll('.modal-thumb').forEach(thumb => {
      thumb.addEventListener('click', () => {
        const idx = parseInt(thumb.getAttribute('data-idx'), 10);
        currentModalImageIndex = idx;
        updateModalMainImage();
      });
    });
  } else {
    thumbsRail.style.display = 'none';
  }

  // Synopsis & Specs
  document.getElementById('modal-synopsis-text').textContent = proj.synopsis || 'Visual documentation and cinematic coverage.';
  document.getElementById('modal-spec-role').textContent = proj.role || 'Cinematographer';
  document.getElementById('modal-spec-year').textContent = proj.year || '2026';
  document.getElementById('modal-spec-client').textContent = proj.client || 'Production';
  document.getElementById('modal-spec-location').textContent = proj.location || 'Mumbai, India';
  document.getElementById('modal-spec-gear').textContent = proj.gear || 'Sony Cinema Line Systems';
}

function stepModalImage(delta) {
  const proj = projects[currentModalProjectIndex];
  if (!proj) return;

  const images = proj.images && proj.images.length > 0 ? proj.images : [proj.cover];
  currentModalImageIndex = (currentModalImageIndex + delta + images.length) % images.length;
  updateModalMainImage();
}

function updateModalMainImage() {
  const proj = projects[currentModalProjectIndex];
  if (!proj) return;

  const images = proj.images && proj.images.length > 0 ? proj.images : [proj.cover];
  const mainImg = document.getElementById('modal-main-img');
  
  mainImg.style.opacity = '0.3';
  mainImg.src = images[currentModalImageIndex];
  mainImg.onload = () => {
    mainImg.style.opacity = '1';
  };

  // Update active thumbnail
  const thumbs = document.querySelectorAll('.modal-thumb');
  thumbs.forEach((t, idx) => {
    const isActive = idx === currentModalImageIndex;
    t.classList.toggle('active', isActive);
    if (isActive) {
      try {
        t.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      } catch (e) {}
    }
  });
}

/* ------------------------------------------------------------------------------
   7. SCROLL REVEAL ANIMATIONS
   ------------------------------------------------------------------------------ */
function initScrollAnimations() {
  const animElements = document.querySelectorAll('.section-header, .about-portrait-wrap, .about-content, .expertise-col, .tool-card, .contact-card');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  animElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
    revealObserver.observe(el);
  });
}

/* ------------------------------------------------------------------------------
   8. CONTACT FORM & DIRECT INQUIRIES
   ------------------------------------------------------------------------------ */
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const company = document.getElementById('contact-company').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const projectType = document.getElementById('contact-type').value;
    const details = document.getElementById('contact-details').value.trim();

    if (!name || !email || !details) {
      alert('Please fill in your name, email, and project details.');
      return;
    }

    // Construct Mailto URI for static GitHub Pages hosting
    const subject = encodeURIComponent(`Project Inquiry: ${projectType} — ${name}${company ? ` (${company})` : ''}`);
    const body = encodeURIComponent(
      `Hi Shuklay,\n\nI would like to inquire about collaborating on a project.\n\n` +
      `• Name: ${name}\n` +
      `• Company / Production: ${company || 'N/A'}\n` +
      `• Email: ${email}\n` +
      `• Project Type: ${projectType}\n\n` +
      `Project Scope & Details:\n${details}\n\n` +
      `Looking forward to connecting!`
    );

    const mailtoUrl = `mailto:shuklaywadhekar@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Opening Email Client...';
      submitBtn.disabled = true;
      setTimeout(() => {
        submitBtn.textContent = 'Inquiry Sent!';
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          form.reset();
        }, 3000);
      }, 1500);
    }
  });
}

/* ------------------------------------------------------------------------------
   9. BACK TO TOP BUTTON
   ------------------------------------------------------------------------------ */
function initBackToTop() {
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ------------------------------------------------------------------------------
   10. UTILITY FUNCTIONS
   ------------------------------------------------------------------------------ */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
