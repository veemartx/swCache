// declare cache
var CACHE_NAME = 'check-offline-message-v1';

var cacheUrl = [
    'offline.html'
]

// listen for the install event
self.addEventListener('install', (e) => {

    // perform the cache stuff

    // call th wait untill method 
    e.waitUntil(

        // open the cache

        caches.open(CACHE_NAME)

            .then((cache) => {

                // cache has been opened 
                console.log('Opened cache', cache);

                // cache the offline url 
                cache.addAll(cacheUrl);

            })
    );


})



// Call Fetch Event  
self.addEventListener('fetch', e => {
    console.log('Service Worker: Fetching');
    e.respondWith(
        // If there is no internet 
        fetch(e.request).catch((error) =>
            caches.match(cacheUrl)
        )
    );
});