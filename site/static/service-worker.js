importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js')

workbox.core.setCacheNameDetails({
    prefix: '',
    suffix: '',
    precache: 'precache'
});

workbox.routing.registerRoute(
    ({ request }) => request.mode === 'navigate',
    new workbox.strategies.NetworkFirst({
        cacheName: 'pages',
        plugins: [
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [200],
            }),
        ],
    }),
);

workbox.routing.registerRoute(
    ({ request }) =>
        request.destination === 'style' ||
        request.destination === 'script' ||
        request.destination === 'worker',
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'assets',
        plugins: [
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [200],
            }),
        ],
    }),
);

workbox.routing.registerRoute(
    ({ request }) => request.destination === 'image',
    new workbox.strategies.CacheFirst({
        cacheName: 'images',
        plugins: [
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [200],
            }),
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30,
            }),
        ],
    }),
);

workbox.routing.registerRoute(
    ({ url }) => url.origin === 'https://fonts.googleapis.com',
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'font-stylesheets',
    })
);

workbox.routing.registerRoute(
    ({ url }) => url.origin === 'https://fonts.gstatic.com',
    new workbox.strategies.CacheFirst({
        cacheName: 'fonts',
        plugins: [
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.ExpirationPlugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 30,
            }),
        ],
    })
);

workbox.precaching.precacheAndRoute([
    { url: '/index.html', revision: null },
    { url: '/404.html', revision: null },
    { url: '/service-worker.js', revision: null },
    { url: '/manifest.json', revision: null },
    { url: '/tech/index.html', revision: null },
    { url: '/about/index.html', revision: null },
    { url: '/contact/index.html', revision: null },
    { url: '/links/index.html', revision: null },
    { url: '/projects/index.html', revision: null },
]);