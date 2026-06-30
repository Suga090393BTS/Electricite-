/* Kill-switch : désactive l'ancien mode hors-ligne et se désinstalle.
   (Le mode hors-ligne entrait en conflit avec la protection Cloudflare Access.) */
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    try {
      const keys = await caches.keys();
      await Promise.all(keys.map(k => caches.delete(k)));
      await self.clients.claim();
      await self.registration.unregister();
    } catch (err) {}
  })());
});
self.addEventListener('fetch', () => { /* passthrough : aucune mise en cache */ });
