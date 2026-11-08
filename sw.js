// Akış service worker: uygulama kabuğunu önbelleğe alır, çevrimdışı açılır.
// Strateji: önce önbellek, arka planda ağdan tazele (bir sonraki açılışta yeni sürüm).
const CACHE = "akis-v1";
const SHELL = ["./", "./index.html", "./manifest.webmanifest",
  "./icons/apple-touch-icon.png", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/icon-maskable-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if(req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  e.respondWith(caches.open(CACHE).then(async c => {
    const key = req.mode === "navigate" ? "./index.html" : req;
    const hit = await c.match(key, {ignoreSearch: true});
    const net = fetch(req).then(r => {
      if(r.ok) c.put(key, r.clone());
      return r;
    }).catch(() => hit);
    if(hit){ e.waitUntil(net); return hit; }
    return net;
  }));
});
