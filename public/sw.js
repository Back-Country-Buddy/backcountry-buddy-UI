importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');

//The new installed service worker replaces the old service worker immediately
self.skipWaiting();

//Test workbox
if (workbox) {
  console.log('Workbox is loaded');
} else {
  console.log('Workbox did not loaded');
}



//Precaching
workbox.precaching.precacheAndRoute([
    { url: 'index.html', revision: '0000' },
    { url: 'manifest.json', revision: '0000' },
    { url: '/static/media/brightpurple.5355596b.png', revision: '0000' },
    { url: '/static/js/bundle.js', revision: '0000' },
    { url: '/static/js/vendors~main.chunk.js', revision: '0000' },
    { url: '/static/js/main.chunk.js', revision: '0000' },
    { url: '/sw.js', revision: '0000' },
    { url: '/favicon.ico', revision: '0000' },
    { url: '/logo192.png', revision: '0000' },
    { url: '/logo512.png', revision: '0000' },
    { url: '/logo192.png', revision: '0000' },
    { url: 'static/media/travel.ddda17f9.svg', revision: '0000' },
    { url: 'static/media/light-bulb%20(1).779f0e21.svg', revision: '0000' },
    { url: 'static/media/ride-diagram.fe998cd1.png', revision: '0000' },
    { url: 'static/media/question-sign.7ccd8372.svg', revision: '0000' },
    { url: 'static/media/lightpurple.3f084de8.png', revision: '0000' },
    { url: 'http://localhost:3000/current-tour/11/favicon.ico', revision: '0000' },
    { url: 'https://img.icons8.com/ios-glyphs/48/900AA1/plus.png', revision: '0000' },
    { url: new RegExp('http://localhost'), revision: '0000' },
    { url: new RegExp('https://backcountry-restapi.herokuapp.com/api/private/v1/'), revision: '0000' },
]);

//BackgroundSync
const bgSyncPlugin = new workbox.backgroundSync.BackgroundSyncPlugin('offlineRequests', {
    maxRetentionTime: 24 * 60 // Retry for max of 24 Hours
});

workbox.routing.registerRoute(
    new RegExp('https://backcountry-restapi.herokuapp.com/api/private/v1/'),
    new workbox.strategies.NetworkOnly({
        plugins: [bgSyncPlugin]
    }),
    'POST'
);

workbox.routing.registerRoute(
    new RegExp('https://backcountry-restapi.herokuapp.com/api/private/v1/'),
    new workbox.strategies.NetworkOnly({
        plugins: [bgSyncPlugin]
    }),
    'PUT'
);
