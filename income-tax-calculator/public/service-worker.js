const CACHE_NAME = 'V1';

// Install Event
self.addEventListener('install', () => {
    console.info("Install Event called");
})

// Activate Event
self.addEventListener('activate',event => {
    event.waitUntil(
        caches.keys().then(cacheNames => Promise.all(cacheNames.filter(cacheName => cacheName !== CACHE_NAME).map(cacheName => caches.delete(cacheName))))
    )
})

// Fetch Event
self.addEventListener('fetch',event => {
    const { origin } = this.location;
    if(event.request.url.startsWith(origin)){
        event.respondWith(
            caches.open(CACHE_NAME)
                .then(cache => {
                    return fetch(event.request)
                        .then(res => {
                            cache.put(event.request, res.clone());
                            return res;
                        })
                        .catch(err => {
                            console.error(err);
                            return cache.match(event.request);
                        })
                })
        )
    }
})