// Service Worker para cache offline (opcional)
const CACHE_NAME = 'casamento-carolina-thiago-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/images/hero-bg.jpg',
    '/images/qr-code-pix.png',
    'https://fonts.googleapis.com/css2?family=Candara:wght@300;400;700&display=swap'
];

// Instalar Service Worker
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

// Interceptar requisições
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // Retorna cache se disponível, senão busca na rede
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});

// Atualizar cache
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
