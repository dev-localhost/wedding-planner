// 최소한의 서비스 워커 파일
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Apps Script iframe 요청은 기본 네트워크 통신 사용
  event.respondWith(fetch(event.request));
});