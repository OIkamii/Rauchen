self.addEventListener("install", (event) => {
  console.log("Service Worker installiert.");
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker aktiviert.");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return new Response("Offline, aber du kannst trotzdem mit Julijan rauchen gehen.", {
        headers: { "Content-Type": "text/plain" },
      });
    })
  );
});
