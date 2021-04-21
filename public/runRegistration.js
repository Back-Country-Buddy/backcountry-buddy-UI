if ('serviceWorker' in navigator) {
window.addEventListener('load', () => {
  navigator.serviceWorker.register('sw.js')
    .then(registration => console.log('Worker registration successful', registration.scope),
          err => console.log('Worker registration failed', err))
          .catch(err => console.log(err));
});
} else {
console.log('Service Worker is not supported by browser.');
}
