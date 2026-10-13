self.addEventListener('install', (e) => {
  console.log('[Service Worker] Kuruldu');
});
self.addEventListener('fetch', (e) => {
  // Online çalışacağı için burası boş kalacak
});