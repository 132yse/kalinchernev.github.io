/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["404.html","ab3a507192c09635873b3e52724021e7"],["about/index.html","9111efe38ea5a46faade27f4702271db"],["agile-documentation-api-driven-project/index.html","deb0251bebf2ad8adc222cc3afc5aab4"],["cloud9-editor/index.html","dbd548a3589b5f9d27c14ad7825e18ba"],["coding-battle-microsoft-innovation-center/index.html","59c20bc0724e65d4e6c6d997d70caf45"],["coding-battle-molengeek/index.html","3a4530faa02cc866a7d0215b832bcaf8"],["coding-battle-take-eat-easy/index.html","96aad3cd39203cd80be7f9041d0da42d"],["css/nav.css","6fc4b7dcce4f3b6281b12259bb5f0c1e"],["css/print.css","eb033edd246f6f254d2d9f85cf8288c5"],["css/screen.css","310f657dc140a3ca938399a53fc80874"],["debugging-nodejs-in-cloud9-ide/index.html","2b27e00a5feab902ba28cc8f2af55e02"],["drupal8-cloud9-ide/index.html","548239e4d07a72aeb76dfd7fa5bc9ab1"],["drupalaton-2016/index.html","aedbf7a32221abe3ea4bc4ed90c0e3fb"],["eu-data-portal-nodejs-client/index.html","3e421a0b0d53fd514a08985c1622003f"],["favicons/android-chrome-192x192.png","cf23e900619cc1a67ba4ff8d30dac65b"],["favicons/android-chrome-512x512.png","d37abdf7a91ba254b4c1c94851917069"],["favicons/apple-touch-icon.png","802352d328afcfbbd5d300767f2055d3"],["favicons/browserconfig.xml","db04e3572400826167e84c04992b15ff"],["favicons/favicon-16x16.png","46d82b1d6de52b29aad4c578fcd3d1c4"],["favicons/favicon-32x32.png","47e5d347418045afd6fed39e94fbedb1"],["favicons/favicon.ico","3efb4baaee46283de22016eff75544d8"],["favicons/manifest.json","c8e3b78f511f57bf0242db20616f37f5"],["favicons/mstile-150x150.png","da293adf6771d0f75babb2a50306dd2e"],["favicons/safari-pinned-tab.svg","53a9ad64722dc4dd9eb9b7fdf740b29c"],["february-digest-2017/index.html","4650068c368a744a4916f60d8bacd627"],["first-coding-battle-belgium/index.html","5f9283d9dc3f8323825d2bbdf85a587c"],["focus-community-good-services/index.html","7f2d262ca441525b8d5f6ef88730a1ce"],["fonts/Genericons/Genericons.eot","e286921c96e71c281fedc8376ba46a7f"],["fonts/Genericons/Genericons.svg","2fbf3d1bc2b37a65582ab97cd3eaa462"],["fonts/Genericons/Genericons.ttf","bd260e7477d834b7d0890b9470638124"],["fonts/Genericons/Genericons.woff","732ff0fd6e5d9d64b2c8c81f7ac83f01"],["fonts/Genericons/example.html","cce56706f272a763575aef6ee73d26cf"],["fonts/Genericons/genericons.css","ac25fb529183c5fef5887d02594d1828"],["fonts/Inconsolata/Inconsolata-Regular.ttf","29b00ebcf93fda46ac9957fa4816eafd"],["fonts/Inconsolata/OFL.txt","f9c120a1c6a58f945eddea85ea95c88b"],["fonts/Merriweather/Merriweather-Bold.ttf","01d1677e091850886b4a79d2e45563bc"],["fonts/Merriweather/Merriweather-BoldItalic.ttf","dc5c14827332d6ebf93966f0c4b725fc"],["fonts/Merriweather/Merriweather-Light.ttf","e44ee71ebf60188f5a00c92ff0661313"],["fonts/Merriweather/Merriweather-LightItalic.ttf","f5283ea521c055451aa3a7f08dc7ea4a"],["fonts/Merriweather/OFL.txt","3ed5e5331797c1b297d61b36ce541034"],["fonts/Open_Sans/LICENSE.txt","3b83ef96387f14655fc854ddc3c6bd57"],["fonts/Open_Sans/OpenSans-Bold.ttf","50145685042b4df07a1fd19957275b81"],["fonts/Open_Sans/OpenSans-Regular.ttf","629a55a7e793da068dc580d184cc0e31"],["graphql-guide-wish-found-before/index.html","f009b1512f03141bd672a62cdb1aa0dc"],["holiday-digest-2016/index.html","e60979314c53a59256c0aba113e8cbf5"],["images/best-team.jpeg","cdfab5f8b2e34b9549ef18b7eb6774e7"],["images/coding-battle-code.jpeg","4792541347010ec464ab318f28387436"],["images/coding-battle-community.jpeg","9762dd21a2fc3434f77128645e273c72"],["images/coding-battle-table.jpeg","e0a5f99094292bc04ae1af0351b736e2"],["images/lego-life.jpg","9cac781de7a04853f4ec2eca95adf1f8"],["images/logo.png","35c3c9d48093d4b03a258ff78cd074b5"],["images/nodejs-design-patterns.jpeg","22a84f82805424a5444163cbd89609db"],["images/prototyping-apis.png","96cf1fbca7817b729b9f121f4c4f8c14"],["images/swagger-jsdoc-improves-documentation-workflow.png","20a552a219a44729a4b066fd0e3660fe"],["index.html","a4d0f073199084303b631686683b46b4"],["index.xml","7d2c583c3ce5a868bff0f233d070bb32"],["january-digest-2017/index.html","672b213e5acdbdba10a58c5bc3463c33"],["js/index.js","43df4cd55cb9fdedb997a8ead9adefac"],["js/jquery.fitvids.js","3d3a8c0cfb6264d7790fa45022d273a8"],["js/jquery.js","32015dd42e9582a80a84736f5d9a44d7"],["manifest.json","b0c813b0aeb6f3acdd1ac8bfc4a265ad"],["march-digest-2017/index.html","58e3bdff3ff06c0312e8de4f18991639"],["page/1/index.html","bd53c91e0dcb427976e59ae4c5a0460c"],["page/2/index.html","adee6a0fb93a48d5989f591039d22ed9"],["page/3/index.html","19976ffaf8eee874a857cb4da1efc9ab"],["page/4/index.html","5023c8c510c8b7202066577731c4c457"],["page/5/index.html","6a1ba3da1bda63b573b69ee3d6ef9444"],["post/index.html","20eadbe9d80b29d2e635574b45b8edea"],["post/index.xml","ded4fce4e7ad320f1815afad985f5f59"],["post/page/1/index.html","706d2b45c5a906d6bcbdfde7766664c5"],["post/page/2/index.html","46ca94804156243269a709e731cd7bbf"],["post/page/3/index.html","3457eb227e66dd5dee776090df95f728"],["post/page/4/index.html","17aa9eab0d6ee92f2fdb4f96e61a0e5d"],["post/page/5/index.html","407fc62f4dc3928e14e387864dc3c2f2"],["problem-first-problem-solving/index.html","d920bf31a5590111153144d3a56b9162"],["prototyping-apis-open-api-specification/index.html","ace73333defc15f1198f7ff3a891bc56"],["reflecting-nodejs-design-patterns/index.html","102b11d8a91fd13d1195736f9fe27b04"],["sitemap.xml","ffbd8d10c1c99ec5a27b1b488f571651"],["stream-adventure-triage/index.html","223f8252a77028819a8e116feb1bb91a"],["tags/api/index.html","a75ae9583f334e995fdb1ed9597a97dc"],["tags/api/index.xml","50844692ebc2f25d6a19bed082d90185"],["tags/api/page/1/index.html","1e998b5278253cef1034956e2f724786"],["tags/apis/index.html","7d604c7f2a7143d57e3fccdc4c5afd41"],["tags/apis/index.xml","fa04dd2513cf33e1f59918aebed0d36a"],["tags/apis/page/1/index.html","7a06692b6d0ab1bdf538029d2c6cf2f3"],["tags/bots/index.html","bc811f2e837f6d2c51bf37933a73fe8e"],["tags/bots/index.xml","36eab544d2f7aa41fddddaec3012cb6b"],["tags/bots/page/1/index.html","b1488d3181ee0c620d95e890eba47ddf"],["tags/cloud/index.html","5e2d28e9f10ddbe0abf8b6788127e605"],["tags/cloud/index.xml","c43546419c5c991f8445468d5dc0001f"],["tags/cloud/page/1/index.html","856d781dcb44cbdeed86de26f8c97a62"],["tags/cloud9/index.html","c7be8bf54858483ebaaa650f8117741d"],["tags/cloud9/index.xml","bec1f602589da0bc8fa8b64251df19b5"],["tags/cloud9/page/1/index.html","bf6dceaedd6cc1b3c46f1d536a645713"],["tags/coding-competitions/index.html","9a6398f525d470fd34b943e17b379f6b"],["tags/coding-competitions/index.xml","82d9755e64a94a776b5d673861a9e710"],["tags/coding-competitions/page/1/index.html","9c9f7e4a9eae0af93dfcf57382946b19"],["tags/coding/index.html","8d723a90bcef2256e94af3e088f6ddd0"],["tags/coding/index.xml","d60f6149d69a5a2565151ebacd566ed6"],["tags/coding/page/1/index.html","7c7642f1206c3a7784772a7aa0bfbf18"],["tags/community/index.html","d6f628f6b90911c94de2d5bd55e2ed26"],["tags/community/index.xml","449bc85ce8b97c8e1cdce8beb7a45edc"],["tags/community/page/1/index.html","f1b6319f07b6963b9a953b19c6d5d941"],["tags/debugging/index.html","04952ffeb705c6e8423a7db3cf66e190"],["tags/debugging/index.xml","b642472489774d66fb7a2959836e062c"],["tags/debugging/page/1/index.html","582cf3a4555f9d4c07c06cc7f97a88ed"],["tags/design-patterns/index.html","36f6f75298a66aef9896ab37c66d5a47"],["tags/design-patterns/index.xml","1fc79e320eca25f985a13a005135deb5"],["tags/design-patterns/page/1/index.html","f5d86713315814b4c2376c7366da68b9"],["tags/drupal/index.html","75820dcc071186e45de7980785d1173a"],["tags/drupal/index.xml","3f98ac981154266ce117bebcbed684b1"],["tags/drupal/page/1/index.html","f5d5db3dd48ff0f52921caffb422d80e"],["tags/graphql/index.html","af373127b3076e1629768df649064d03"],["tags/graphql/index.xml","70b29fad95319ae2d2ece8a2d213e39c"],["tags/graphql/page/1/index.html","5aefae25ea9424da3bc66c9ec4c2716f"],["tags/hack-events/index.html","4c299fd8bf56535966df44dc3008ae3d"],["tags/hack-events/index.xml","ebd264cb494164d46b3a89b071d0c542"],["tags/hack-events/page/1/index.html","0b20b0841667d17e18515853e11aae8f"],["tags/jam-stack/index.html","37da2679ac96ecee380bab0c3bfb22fa"],["tags/jam-stack/index.xml","122c80a983be01456532930d408fd6ed"],["tags/jam-stack/page/1/index.html","b3903b842f89e3aa681706c182bb1d9f"],["tags/javascript/index.html","a581577e6ca01d20a1d47d9004e76cba"],["tags/javascript/index.xml","64c0adb437f28ca31f66cbfcfbe4aace"],["tags/javascript/page/1/index.html","b2765ebf141214416a56555917f2510c"],["tags/javascript/page/2/index.html","83e4fbef0ed30c21a6d547b30ead9b59"],["tags/javascript/page/3/index.html","d325f1060d07fd89aa262492d4c1c9c8"],["tags/javascript/page/4/index.html","2d31a27bcbb7df28fc730942e2e735b3"],["tags/medium/index.html","f9395329bf14dbbf97cf244c2f93bc53"],["tags/medium/index.xml","56de950f4765e2f3e953dda296d0e0a1"],["tags/medium/page/1/index.html","815666caf1c9d239ac12cc5159afb493"],["tags/meta-articles/index.html","1229a2ef6b3d8b9997ceaccd479c22fd"],["tags/meta-articles/index.xml","9947d16bef69af4911a9d655384894dc"],["tags/meta-articles/page/1/index.html","4a520ff55446e7cd910a3bfd12fc8214"],["tags/mobile/index.html","52267a7c3297cd7d825e6f02e9e8eb30"],["tags/mobile/index.xml","5d6331eb5875cd8e2fc242be8566d8a7"],["tags/mobile/page/1/index.html","12e980bfa2e1e2b75fd7937c38bf05ee"],["tags/nodejs/index.html","79b1a6bdbe7b54023a12920dcad25607"],["tags/nodejs/index.xml","d686c1f45df76d1bef55b95e1d61e659"],["tags/nodejs/page/1/index.html","d813e08b61ce9e6aee2aa858854e7f83"],["tags/nodejs/page/2/index.html","1ca253c09225b2ecd98fe54eb9d00013"],["tags/open-apis/index.html","b2cb8d56e31f1fbaf19ed1805024c04a"],["tags/open-apis/index.xml","138ac4992fb0d493ebb26f96aa120acb"],["tags/open-apis/page/1/index.html","c4e344a46ee714f6068d5a2ceb7e0be8"],["tags/open-data/index.html","2ba424b5b9bde56551d53d0bc7ec83a4"],["tags/open-data/index.xml","411f693b6ce2f3bf66bfd92d0b6d6f5a"],["tags/open-data/page/1/index.html","67e7d8f026c791775333dd00df0190c7"],["tags/open-source/index.html","600ab7d1a17195afdc30073d84248327"],["tags/open-source/index.xml","7115901c0058e2ba5086f3d260fa4290"],["tags/open-source/page/1/index.html","127ab8f3807ecf7a4959c3e701b3e195"],["tags/php/index.html","118f9c3fb3dbc3d29b8fc366f3c818a8"],["tags/php/index.xml","be96204094ad59e0ea9bdc0400476f12"],["tags/php/page/1/index.html","c3171291d2d8a664cfbb9eb56aed6fe5"],["tags/problem-solving/index.html","ba67972c6a1faa16f77793ef5a323208"],["tags/problem-solving/index.xml","e04868188bcd70dd4a70954cc8fd06e8"],["tags/problem-solving/page/1/index.html","af8850e228643f05133a3d4fd7c0747b"],["tags/productivity/index.html","9f3294bb3e29569c81bef761bcc5fde1"],["tags/productivity/index.xml","1449b3f40b9b487e846dfc59d3f3ea2d"],["tags/productivity/page/1/index.html","621e0545765ab6c5079320f350e790bf"],["tags/programming/index.html","f51e1360f7a07a1dfe889521f7b06389"],["tags/programming/index.xml","e68121191fb065325db2ab50617bbbe3"],["tags/programming/page/1/index.html","d20d9b8e7ac25d519afd63be4d15e7f5"],["tags/progressive-web-apps/index.html","810f3c2e4c49fb515a6f8dcf79faab57"],["tags/progressive-web-apps/index.xml","d09c5379a87c3be1332ff617883178c9"],["tags/progressive-web-apps/page/1/index.html","5f888ae251da9d8a3ff6c0c9f1ab78e5"],["tags/prototyping/index.html","15acbc1fa7e7a443110a9fe91df238b9"],["tags/prototyping/index.xml","6dd61dc8f371cc1880deb0ca5175f843"],["tags/prototyping/page/1/index.html","be32a1019fa6ec6d26a19aa4e30d0f3e"],["tags/swagger/index.html","03458dad9f940f211603a6de1c439ee9"],["tags/swagger/index.xml","e9f9ad5090cb5d7ffd3911dc4f6820f5"],["tags/swagger/page/1/index.html","219aabe52d7cde5d8de97d0a025da5dc"],["tags/tools/index.html","abd1227c82e8a17a24482f6a0737e9d9"],["tags/tools/index.xml","8dd53a292ed38a9157be4a7f46bda499"],["tags/tools/page/1/index.html","177e034312213200ed4655838fe21aeb"],["tags/vim/index.html","6a9ad87d7e3716eb20f9d6a149c11edf"],["tags/vim/index.xml","d793a68f8f8966e9f3112bfeab4e9af2"],["tags/vim/page/1/index.html","5920337ab00add34291f5cd77648bf76"],["tags/web-development/index.html","2b8352b8715bf8c3c3bdabaa9173479d"],["tags/web-development/index.xml","5e9f1ab659b16b255be3dfe16c5f564c"],["tags/web-development/page/1/index.html","0201f4d619c53680b994080cab8fe8e1"],["tags/web-development/page/2/index.html","49c41607ae602ee0c6dc5c28355727d0"],["think-about-apps-not-websites/index.html","e372e25627a840c95c8469c894dc83f7"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







