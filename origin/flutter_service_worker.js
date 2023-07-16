'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "a245d1c9ac8f217bfff7a3896f52653d",
"assets/AssetManifest.smcbin": "0080c31b2a55e9b7ea4d04502a1292c6",
"assets/assets/fonts/AppleSDGothicNeoUL.ttf": "fa20f8e0f9a1cce5284e24efbc1e6d14",
"assets/assets/fonts/GwangyangTouching.ttf": "afbdb0ac2235973504d063224aebae7e",
"assets/assets/images/%25EC%2595%25BD%25EB%258F%2584.webp": "e3fe6e84de826607c8f8de3ee2c6ba60",
"assets/assets/images/calender.png": "8e814f0c2544199a95c147caa6964726",
"assets/assets/images/main.jpg": "4e62b4d12131a68ec99cd3be4f67f2ba",
"assets/assets/images/main.webp": "4c5f2ade40e841123974c67d5a986159",
"assets/assets/images/main_1.webp": "6a232db42ced7847a55bdde6a6064f30",
"assets/assets/images/main_1_1.webp": "53f22e13909727b5047636b346962eda",
"assets/assets/images/main_1_2.webp": "c66d570760b7dd626f7311261f901bf8",
"assets/assets/images/main_1_3.webp": "041a71ceda10e562b51d304ede8b40dc",
"assets/assets/images/main_1_4.webp": "16078a97e394295d02fd4117c5371c3c",
"assets/assets/images/main_2.webp": "b350858f8f3f44c250d30913286cd927",
"assets/assets/images/main_2_1.webp": "f49f4fc8079accdc918889571ec7ecae",
"assets/assets/images/main_2_2.webp": "d59978420b92fb1baf90c47731251783",
"assets/assets/images/main_2_3.webp": "c81e34dfccffba09363e59fe8d1c44d1",
"assets/assets/images/main_2_4.webp": "5ab8baedc5aefe2dc10646e8e7c582b7",
"assets/assets/images/main_3.webp": "58e7a9229920b8056b5c7e35edb0d067",
"assets/assets/images/main_3_1.webp": "e4c2aaa69f2686087155e13fc2c6a92a",
"assets/assets/images/main_3_2.webp": "20818817fba4e4a6df3ef9a00d25f923",
"assets/assets/images/main_3_3.webp": "eccc48c2f1d730df665e1fd4fc1908ec",
"assets/assets/images/main_3_4.webp": "92a6b5d446fd686862dd1d8ec029c6de",
"assets/assets/images/main_4.webp": "9b37e81994f591d87e7463ee4d146f95",
"assets/assets/images/main_4_1.webp": "76a7d8da066b39e63fe125097493774c",
"assets/assets/images/main_4_2.webp": "d6c93460082908c5e669b81b8e098b55",
"assets/assets/images/main_4_3.webp": "2f850a2181f943709473d5aa768bfc95",
"assets/assets/images/main_4_4.webp": "53c1769aaccb67a803e463ba6b85c6c1",
"assets/assets/images/main_5.webp": "a15b06e05494a071ec4b26e18eee7808",
"assets/assets/images/main_5_1.webp": "a447213ba741b7a747c7528a2bfe6765",
"assets/assets/images/main_5_2.webp": "f4a4edbc5684baed92ea0b21edbf796a",
"assets/assets/images/main_5_3.webp": "44323aef21df32204d8a141145af72bc",
"assets/assets/images/main_5_4.webp": "53d04b58e6c3c473f14c29f278975d8e",
"assets/assets/images/main_6.webp": "b7df2aaf26fd5c3ec4800c2732719449",
"assets/assets/images/main_6_1.webp": "f3e7153766a8b0ae1a27c02350df2a47",
"assets/assets/images/main_6_2.webp": "1a261ed3c70657c13e39bc030b8657b4",
"assets/assets/images/main_6_3.webp": "730bb130a235187d8598dee1f59ccab2",
"assets/assets/images/main_6_4.webp": "073f0cb40b14a2f9b2e6d9de693dfef4",
"assets/assets/images/main_7.webp": "b8c4e09e0540ec73f60ebc047ea91233",
"assets/assets/images/main_7_1.webp": "38fe3cf174b458e1ff5df26bf6f0ede8",
"assets/assets/images/main_7_2.webp": "05e4a00605caebadd3c61ae24f18c6a0",
"assets/assets/images/main_7_3.webp": "7b35bd2d3d3a0c20b47948234ac26c72",
"assets/assets/images/main_7_4.jpg": "4c9616ae2fe0a9a1f50132bdbd82580a",
"assets/assets/kakaomap.html": "02ec05dc06522cb2094583a87b0bc27d",
"assets/FontManifest.json": "c2462e96c905899574d6171c337d3bce",
"assets/fonts/MaterialIcons-Regular.otf": "d35dd7e367a9f8e6ae235f37430fda68",
"assets/NOTICES": "1eeb7cab58da9ce870214f913b6d375d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/url_image.jpg": "b9e0343b2bb2f7aeffcb57e2c3cd0f0c",
"canvaskit/canvaskit.js": "59ed8478b398a8966eee147930f3d966",
"canvaskit/canvaskit.wasm": "641ba6d615314c42874bf914ef2d093e",
"canvaskit/chromium/canvaskit.js": "853c6cebea386c05aa9d954f11b2c1ca",
"canvaskit/chromium/canvaskit.wasm": "ffc522e9ff0a7bbe6bfd2a6f54f974e4",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "0d7c2e198fc5420d3940de2d44c19023",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "34edda577a9856062e5232a7aefe709c",
"/": "34edda577a9856062e5232a7aefe709c",
"main.dart.js": "7e530e11e6a4d9861801def5e176220d",
"manifest.json": "8acdf6330236cbdb29401dbb869eda1e",
"version.json": "7cd6a41407e3ce7ca7e1a9f156efa75f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
