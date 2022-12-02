'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "2aa3c57100564158890f8d71e4f523a9",
"index.html": "4c2b6f0ca6f045f9ac8a8917702692bb",
"/": "4c2b6f0ca6f045f9ac8a8917702692bb",
"main.dart.js": "4e1be2679b21cfbd1da513dc6f4d2b76",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e8d91a9e7c1c778c53410f6c0c93f071",
"assets/AssetManifest.json": "78562cad29c6977fa6fb2644e9bf4b99",
"assets/NOTICES": "3b9846baf6ddf42d08d231ee30abf537",
"assets/FontManifest.json": "f78e92921cf3c32bff2cb6218f2b7e96",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "7565443aafd7fe3c173363404340e30f",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/image5_thumbnail.jpeg": "d5c0d08aa19a65d53b2c35e8ab55c5bd",
"assets/assets/images/icon.png": "6b22d735d27c33a2136c60dbc93e4de8",
"assets/assets/images/image2_thumbnail.jpeg": "9248882e1c3404452e2240c5e37994d6",
"assets/assets/images/image3_thumbnail.jpeg": "d29496c5d4296b1eabca4a11ecb4ef4f",
"assets/assets/images/image4_thumbnail.jpeg": "a81cf769ad6e2fc2b1e37d7531680dea",
"assets/assets/images/image1.jpeg": "b82d6c91d602c63c9ecab2821d869170",
"assets/assets/images/mole_top.PNG": "bd6f48766b98ee975c234daf6d7de79f",
"assets/assets/images/image6_thumbnail.jpeg": "8a6c1527a3f113b6ebf3feb93f5b662a",
"assets/assets/images/map.png": "73e66bff85acbe8f5df3f17b4ad1c62e",
"assets/assets/images/bottom.PNG": "fe5c248296d7d33a50e64ff14161d3e4",
"assets/assets/images/image1_thumbnail.jpeg": "012e9e6c7507cb3dedf5a439a631b683",
"assets/assets/images/image6.jpeg": "ab95563846c90c75eb784bddccaf410d",
"assets/assets/images/image8_thumbnail.jpeg": "5fb092391805c0631dbd0a6b484e12b9",
"assets/assets/images/image7.jpeg": "aa5d3efbabb23d608a86d40db5171484",
"assets/assets/images/distance.PNG": "68195469cfc8a1de865a4b56b3818e1b",
"assets/assets/images/image7_thumbnail.jpeg": "1b9ab456b87629c2969814574fd32dc4",
"assets/assets/images/image8.jpeg": "547009e0051de3a16b414e2179e37db9",
"assets/assets/images/image4.jpeg": "80013348a3c9c5127087dcbd141a1051",
"assets/assets/images/graffie_top.PNG": "fa8eeb7deffee1fc4000503aa9c30af5",
"assets/assets/images/image5.jpeg": "b00d1ac1dbd0d09ac4d5da99a63d70b4",
"assets/assets/images/image2.jpeg": "ba577e3c4b1272386a4d9ce6cd7a41f2",
"assets/assets/images/camera.PNG": "c28bb7e553d807d0fb1c12829c9c8671",
"assets/assets/images/image3.jpeg": "1d611c4ba4d6699e05f608ed4a473ee1",
"assets/assets/sounds/wedding.mp3": "4a99894151f1d066982beaa534b19076",
"assets/assets/fonts/MaruBuri-Bold.ttf": "170bd21a62e8e9a0eadccfd9d578ed57",
"assets/assets/fonts/maruburi-bold.otf": "063afb6960213bb1ac46ed07e434ee82",
"assets/assets/fonts/maruburi.otf": "28b49705006b20ca955f9f09c55a0b55",
"assets/assets/fonts/MaruBuri-Regular.ttf": "5a792d9e00f442f4b9222649b704fcf4",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
