
self.addEventListener('install', e=>{
  e.waitUntil(caches.open('v2').then(cache=>cache.addAll(['./','./index.html','./data/estoque.csv','./manifest.json'])));
});
self.addEventListener('fetch', e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
