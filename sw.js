const VERSION = 'v1';

self.addEventListener('install', event => {
  event.waitUntil(precache())
})

self.addEventListener('fetch', event => {
  const request = event.request;
  // GET
  if(request.method !== 'GET') {
    return;
  }
  // buscar en cache
  event.respondWith(cachedResponse(request));
  // update cache
  event.waitUntil(updateCache(request));
})

async function precache() {
  // Instancia de cache v1
  const cache = await caches.open(VERSION);
  return cache.addAll([
    // '/',
    // '/index.html',
    // '/assets/index.js',
    // '/assets/MediaPlayer.js',
    // '/assets/plugins/AutoPause.ts',
    // '/assets/plugins/AutoPlay.js',
    // '/assets/index.css',
    // '/assets/BigBuckBunny.mp4'
  ])
}

async function cachedResponse(request) {
  const cache = await caches.open(VERSION);
  const response = await cache.match(request);
  // Puede ser que sea undefine por lo tanto es encesario realizar el fetch para que pueda obtener la información
  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open(VERSION);
  const response = await fetch(request);
  // Con la llave request vamos a guardar el valor de response
  return cache.put(request, response)
}