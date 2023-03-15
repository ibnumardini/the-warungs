import CacheHelper from './utils/cache-helper';

const assetsToCache = [
  './',
  './icons/logo72.png',
  './icons/logo96.png',
  './icons/logo128.png',
  './icons/logo144.png',
  './icons/logo152.png',
  './icons/logo192.png',
  './icons/logo384.png',
  './icons/logo512.png',
  './index.html',
  './favicon.ico',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
