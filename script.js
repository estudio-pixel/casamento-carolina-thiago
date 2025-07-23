// Navegação Mobile
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Toggle menu mobile
  navToggle.addEventListener('click', function () {
    navMenu.classList.toggle('active');
  });

  // Fechar menu ao clicar em um link
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navMenu.classList.remove('active');
    });
  });

  // Smooth scrolling para links internos
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Countdown Timer
  function updateCountdown() {
    const weddingDate = new Date('2025-10-04T09:00:00').getTime();
    const now = new Date().getTime();
    const difference = weddingDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      document.getElementById('days').textContent = days.toString().padStart(2, '0');
      document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
      document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    } else {
      // Casamento já aconteceu
      document.getElementById('days').textContent = '00';
      document.getElementById('hours').textContent = '00';
      document.getElementById('minutes').textContent = '00';
    }
  }

  // Atualizar countdown a cada minuto
  updateCountdown();
  setInterval(updateCountdown, 60000);

  // Scroll effect no header
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
      header.style.background = 'rgba(255, 255, 255, 0.98)';
      header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.background = 'rgba(255, 255, 255, 0.95)';
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
  });

  // Animações on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observar elementos para animação
  const animatedElements = document.querySelectorAll('.evento-card, .presente-card, .timeline-item, .galeria-item');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
  });

  // Formulário RSVP
  const rsvpForm = document.querySelector('.rsvp-form');
  if (rsvpForm) {
    rsvpForm.addEventListener('submit', function (e) {
      e.preventDefault();
      // Validação básica
      const nome = document.getElementById('nome').value.trim();
      const presenca = document.getElementById('presenca').value;
      if (!nome || !presenca) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }
      const submitBtn = document.querySelector('.btn-submit');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;
      submitBtn.classList.add('loading');

      // Envio AJAX para Formspree
      const formData = new FormData(rsvpForm);
      fetch(rsvpForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
        .then(response => {
          if (response.ok) {
            const successMessage = document.createElement('div');
            successMessage.className = 'form-success';
            successMessage.innerHTML = `
                        <h3>Confirmação enviada!</h3>
                        <p>Obrigado, ${nome}! Recebemos sua confirmação.</p>
                    `;
            rsvpForm.appendChild(successMessage);
            rsvpForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
          } else {
            return response.json().then(data => {
              throw new Error(data.error || 'Erro ao enviar. Tente novamente.');
            });
          }
        })
        .catch(error => {
          alert(error.message || 'Erro ao enviar. Tente novamente.');
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          submitBtn.classList.remove('loading');
        });
    });
  }

  // Galeria de fotos - Modal
  const galeriaItems = document.querySelectorAll('.galeria-item img');
  galeriaItems.forEach(img => {
    img.addEventListener('click', function () {
      openImageModal(this.src, this.alt);
    });
  });

  function openImageModal(src, alt) {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
            <div class="modal-overlay">
                <div class="modal-content">
                    <span class="modal-close">&times;</span>
                    <img src="${src}" alt="${alt}">
                </div>
            </div>
        `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // Fechar modal
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) {
        closeModal();
      }
    });

    function closeModal() {
      modal.remove();
      document.body.style.overflow = 'auto';
    }

    // Fechar com ESC
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeModal();
      }
    });
  }

  // Lazy loading para imagens
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
});

function closePixModal() {
  document.getElementById('pixModal').style.display = 'none';
}

// Função para copiar chave PIX
function copyPix() {
  const pixKey = '47991368880';

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(pixKey).then(() => {
      showCopySuccess();
    }).catch(() => {
      fallbackCopyTextToClipboard(pixKey);
    });
  } else {
    fallbackCopyTextToClipboard(pixKey);
  }

  trackEvent('click', 'presente', 'copy_pix');
}

function fallbackCopyTextToClipboard(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand('copy');
    showCopySuccess();
  } catch (err) {
    console.error('Erro ao copiar texto: ', err);
    alert('Erro ao copiar chave PIX. Tente novamente.');
  }

  document.body.removeChild(textArea);
}

function showCopySuccess() {
  // Criar notificação de sucesso
  const notification = document.createElement('div');
  notification.className = 'copy-notification';
  notification.innerHTML = '✓ Chave PIX copiada!';
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #32BCAD;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 1001;
        font-weight: 500;
        animation: slideInRight 0.3s ease-out;
    `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease-out';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Adicionar estilos para as animações
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Fechar modal ao clicar fora
window.addEventListener('click', function (e) {
  const modal = document.getElementById('pixModal');
  if (e.target === modal) {
    closePixModal();
  }
});

// Fechar modal com ESC
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closePixModal();
  }
});

// Validação de entrada para valores monetários
document.addEventListener('DOMContentLoaded', function () {
  const valorInputs = document.querySelectorAll('.valor-input');

  valorInputs.forEach(input => {
    input.addEventListener('input', function (e) {
      let value = e.target.value.replace(/[^\d]/g, '');
      if (value.length > 8) value = value.slice(0, 8); // Limite de R$ 999.999,99
      e.target.value = value;
    });

    input.addEventListener('blur', function (e) {
      if (e.target.value && parseFloat(e.target.value) < 1) {
        e.target.value = '';
        alert('O valor mínimo para contribuição é R$ 1,00');
      }
    });
  });
});

// Analytics - você pode adicionar Google Analytics aqui
function trackEvent(action, category, label) {
  if (typeof gtag !== 'undefined') {
    gtag('event', action, {
      event_category: category,
      event_label: label
    });
  }
}

// Rastrear cliques importantes
document.addEventListener('click', function (e) {
  if (e.target.matches('.presente-link')) {
    trackEvent('click', 'presente', 'lista_externa');
  }

  if (e.target.matches('.valor-link')) {
    trackEvent('click', 'presente', 'valor_monetario');
  }

  if (e.target.matches('.map-link')) {
    trackEvent('click', 'evento', 'mapa');
  }
});

// Performance monitoring
window.addEventListener('load', function () {
  // Medir tempo de carregamento
  const loadTime = performance.now();
  console.log(`Página carregada em ${loadTime.toFixed(2)}ms`);

  // Rastrear Core Web Vitals se disponível
  if ('web-vital' in window) {
    // Implementar métricas de performance
  }
});

// Service Worker para cache (opcional)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registrado com sucesso');
      })
      .catch(error => {
        console.log('Falha ao registrar SW');
      });
  });
}

// Adicionar estilos do modal dinamicamente
const modalStyles = `
    .image-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2000;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
    }
    
    .modal-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
    }
    
    .modal-content img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        border-radius: 10px;
    }
    
    .modal-close {
        position: absolute;
        top: -40px;
        right: -10px;
        color: white;
        font-size: 30px;
        cursor: pointer;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.3s ease;
    }
    
    .modal-close:hover {
        background: rgba(0, 0, 0, 0.8);
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = modalStyles;
document.head.appendChild(styleSheet);

// Função para formatar telefone
function formatPhone(phone) {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{2})(\d{4,5})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return phone;
}

// Adicionar máscara de telefone se houver campo
document.addEventListener('DOMContentLoaded', function () {
  const phoneInput = document.getElementById('telefone');
  if (phoneInput) {
    phoneInput.addEventListener('input', function (e) {
      e.target.value = formatPhone(e.target.value);
    });
  }
});
