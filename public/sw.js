self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.open(event.request.url).then(function(cache) {
        return cache.match(event.request).then(function (response) {
          if(navigator.onLine){
            return fetch(event.request).then(function(response) {
              if(event.request.method == 'GET'){
                cache.put(event.request, response.clone());
              }
              return response;
            });
          }else{
            if(response){
              return response
            }else{
              return null
            }
          }
        });
      })
    );
});
