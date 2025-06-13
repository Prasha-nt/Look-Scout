self.addEventListener("install", event => {
    console.log("Service Worker installed");
  });
  
  self.addEventListener("activate", event => {
    console.log("Service Worker activated");
  });
  
  self.addEventListener("fetch", event => {
    event.respondWith(fetch(event.request));
  });
  
  self.addEventListener("push", event => {
    const data = event.data?.json() || {};
    const title = data.title || "Look Scout Notification";
    const options = {
      body: data.body || "Hello from Look Scout!",
      icon: "/icons/icon-192x192.png"
    };
    event.waitUntil(self.registration.showNotification(title, options));
  });
  