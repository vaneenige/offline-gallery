# Offline Gallery

A **16kb** Preact & Redux based Progressive Web App that offers an offline gallery experience of external images.

This application uses the [Service Worker API](https://www.w3.org/TR/service-workers/) which allows the user to have control the cache.

This application shows how [postMessage()](https://developer.mozilla.org/en-US/docs/Web/API/Client/postMessage) can be used to let the client communicate with the Service Worker to load assets, place them in the cache and display them instantly afterwards.

After loading an external asset it's available offline and can also be removed from the cache.

[Click here for a demo!](https://use-the-platform.com/offline-gallery)

## Structure
To keep performance high and application size small this application is powered by [Preact](https://github.com/developit/preact/). A 3kb React alternative that works with the same ES6 API. Together with Redux for keeping state it's really fast.

* Based on [Preact Redux Example](https://github.com/developit/preact-redux-example) by [developit](https://github.com/developit).

* Preact based components manage controls of the user to add and remove images.

* Redux is used to store the state of the application (images, UI state and network based elements).

* UI is adjusted based on state (opening modal and showing buttons).

* There's a fallback message if javascript isn't available. The application also works if Service Worker is not supported but it won't work offline.

* The application works offline, can be saved to the home screen (on android) and stores all the saved images in local storage and the cache.

## License

MIT
