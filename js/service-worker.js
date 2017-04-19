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

var precacheConfig = [["/404.html","fa2b9057adbcca4eb5a46076ef5e67f2"],["/about/index.html","5440f8d00a57623b8c68b67f7a1a2b5c"],["/agile-documentation-api-driven-project/index.html","c575148bc06a8c38ccc7987a4f0dd050"],["/cloud9-editor/index.html","35acc330f05ffb4ecaac27a46c9ca400"],["/coding-battle-microsoft-innovation-center/index.html","0c5d7b0712f91008630d10115ab6b550"],["/coding-battle-molengeek/index.html","a845dee5fe7b0cda90a613148b78037e"],["/coding-battle-take-eat-easy/index.html","05f14f006583c3b8aa6810350aac804c"],["/css/nav.css","6fc4b7dcce4f3b6281b12259bb5f0c1e"],["/css/print.css","eb033edd246f6f254d2d9f85cf8288c5"],["/css/screen.css","310f657dc140a3ca938399a53fc80874"],["/debugging-nodejs-in-cloud9-ide/index.html","f18478f962a12f1e15830703468770a2"],["/drupal8-cloud9-ide/index.html","44b1f1ed8d4c21150d2074d7bc6e66d9"],["/drupalaton-2016/index.html","fbc2a8771f1f0bc9276af86b69f669ae"],["/eu-data-portal-nodejs-client/index.html","23a4507b3cb957f28608d7804874b962"],["/favicons/android-chrome-192x192.png","cf23e900619cc1a67ba4ff8d30dac65b"],["/favicons/android-chrome-512x512.png","d37abdf7a91ba254b4c1c94851917069"],["/favicons/apple-touch-icon.png","802352d328afcfbbd5d300767f2055d3"],["/favicons/favicon-16x16.png","46d82b1d6de52b29aad4c578fcd3d1c4"],["/favicons/favicon-32x32.png","47e5d347418045afd6fed39e94fbedb1"],["/favicons/mstile-150x150.png","da293adf6771d0f75babb2a50306dd2e"],["/favicons/safari-pinned-tab.svg","53a9ad64722dc4dd9eb9b7fdf740b29c"],["/february-digest-2017/index.html","31a4fda6e73f7925b7cb34d8c56741df"],["/first-coding-battle-belgium/index.html","62192030bbab07e9d7a033c27d8df4e9"],["/focus-community-good-services/index.html","c3732db673dbc5aa396b72e5bb184659"],["/fonts/Genericons/Genericons.eot","e286921c96e71c281fedc8376ba46a7f"],["/fonts/Genericons/Genericons.svg","2fbf3d1bc2b37a65582ab97cd3eaa462"],["/fonts/Genericons/Genericons.ttf","bd260e7477d834b7d0890b9470638124"],["/fonts/Genericons/Genericons.woff","732ff0fd6e5d9d64b2c8c81f7ac83f01"],["/fonts/Genericons/example.html","cce56706f272a763575aef6ee73d26cf"],["/fonts/Genericons/genericons.css","ac25fb529183c5fef5887d02594d1828"],["/fonts/Inconsolata/Inconsolata-Regular.ttf","29b00ebcf93fda46ac9957fa4816eafd"],["/fonts/Merriweather/Merriweather-Bold.ttf","01d1677e091850886b4a79d2e45563bc"],["/fonts/Merriweather/Merriweather-BoldItalic.ttf","dc5c14827332d6ebf93966f0c4b725fc"],["/fonts/Merriweather/Merriweather-Light.ttf","e44ee71ebf60188f5a00c92ff0661313"],["/fonts/Merriweather/Merriweather-LightItalic.ttf","f5283ea521c055451aa3a7f08dc7ea4a"],["/fonts/Open_Sans/OpenSans-Bold.ttf","50145685042b4df07a1fd19957275b81"],["/fonts/Open_Sans/OpenSans-Regular.ttf","629a55a7e793da068dc580d184cc0e31"],["/graphql-guide-wish-found-before/index.html","2b260b27c7b070add83321e80883cce4"],["/holiday-digest-2016/index.html","a7eb966325358f0db077544364561c14"],["/images/lego-life.jpg","9cac781de7a04853f4ec2eca95adf1f8"],["/images/logo.png","35c3c9d48093d4b03a258ff78cd074b5"],["/images/prototyping-apis.png","96cf1fbca7817b729b9f121f4c4f8c14"],["/images/swagger-jsdoc-improves-documentation-workflow.png","20a552a219a44729a4b066fd0e3660fe"],["/images/vitosha.jpg","c43fe9b7033aeef72d31cd5bbf7ce96b"],["/index.html","1bff01d9579184c05becabd2ba78cc6b"],["/january-digest-2017/index.html","95f26956066ebf3b29695bc66ea9c59c"],["/js/index.js","43df4cd55cb9fdedb997a8ead9adefac"],["/js/jquery.fitvids.js","3d3a8c0cfb6264d7790fa45022d273a8"],["/js/jquery.js","32015dd42e9582a80a84736f5d9a44d7"],["/march-digest-2017/index.html","f281eeba8927f9ceca8f45cf42caee8e"],["/page/1/index.html","bd53c91e0dcb427976e59ae4c5a0460c"],["/page/2/index.html","212595d85748a6517564deadf76ea258"],["/page/3/index.html","15fbad0dae743caa5afb952305a435b9"],["/page/4/index.html","bc0551ed44f20af339c1c32953387de7"],["/page/5/index.html","019d15b159f84e4572ae2b5b5cc8b0e2"],["/post/index.html","34f2904df40cf5454e7634894bb7b268"],["/post/page/1/index.html","706d2b45c5a906d6bcbdfde7766664c5"],["/post/page/2/index.html","7b0bbb37b119cdf138de7648bc0a80ac"],["/post/page/3/index.html","c807032489a51e957ef856d50745426b"],["/post/page/4/index.html","6596bd29f98109faf281dcf9315158c3"],["/post/page/5/index.html","4d69e7128b4b473c502c6950398c854d"],["/problem-first-problem-solving/index.html","0bba56adcd4aa787b9d6a64e73cf4fec"],["/prototyping-apis-open-api-specification/index.html","a3a8da06a4b1cf1ab55a97cb94b8be10"],["/reflecting-nodejs-design-patterns/index.html","77ef9ac9921873fbd120a80042b62f05"],["/releasing-new-blog/index.html","0badde451d5f8fded486aeef44b282d5"],["/stream-adventure-triage/index.html","0902cdac40ad6ea3da6a793b93f8e327"],["/tags/api/index.html","0bf401201e3dc8004a7ca8a214ef8096"],["/tags/api/page/1/index.html","1e998b5278253cef1034956e2f724786"],["/tags/apis/index.html","3b3dda491a49b1769cc7921d5325d0a0"],["/tags/apis/page/1/index.html","7a06692b6d0ab1bdf538029d2c6cf2f3"],["/tags/blogging/index.html","31d29f6b6ea8aadcecbd703f469a72a2"],["/tags/blogging/page/1/index.html","b9883c7657e4c182ef4c1a7558363725"],["/tags/bots/index.html","2fcb60256d025656e0a40f19c190f3bd"],["/tags/bots/page/1/index.html","b1488d3181ee0c620d95e890eba47ddf"],["/tags/cloud/index.html","0a865f71dd665560abc809e3ae09766b"],["/tags/cloud/page/1/index.html","856d781dcb44cbdeed86de26f8c97a62"],["/tags/cloud9/index.html","4736e8ffa770c591af6499aeafec1b29"],["/tags/cloud9/page/1/index.html","bf6dceaedd6cc1b3c46f1d536a645713"],["/tags/coding-competitions/index.html","102573bfa479c2f26021826f4c01a013"],["/tags/coding-competitions/page/1/index.html","9c9f7e4a9eae0af93dfcf57382946b19"],["/tags/coding/index.html","019a53bbe8efc9cfaa55c14afd9c770a"],["/tags/coding/page/1/index.html","7c7642f1206c3a7784772a7aa0bfbf18"],["/tags/community/index.html","fb16c58ab739327093574402bf56f4aa"],["/tags/community/page/1/index.html","f1b6319f07b6963b9a953b19c6d5d941"],["/tags/debugging/index.html","54db526785638dc7dfbf9319237c5656"],["/tags/debugging/page/1/index.html","582cf3a4555f9d4c07c06cc7f97a88ed"],["/tags/design-patterns/index.html","7b1c3e485a03be1ca18931472d863bbe"],["/tags/design-patterns/page/1/index.html","f5d86713315814b4c2376c7366da68b9"],["/tags/drupal/index.html","2e15d03218c5bfe535a7e7cfa01322c2"],["/tags/drupal/page/1/index.html","f5d5db3dd48ff0f52921caffb422d80e"],["/tags/graphql/index.html","3f67b024840f237597ddbc283217e347"],["/tags/graphql/page/1/index.html","5aefae25ea9424da3bc66c9ec4c2716f"],["/tags/hack-events/index.html","19a5ad1a4af8e2da15608b27d52b5ef2"],["/tags/hack-events/page/1/index.html","0b20b0841667d17e18515853e11aae8f"],["/tags/jam-stack/index.html","0a93e79edc40ad1f76ae837212e5e183"],["/tags/jam-stack/page/1/index.html","b3903b842f89e3aa681706c182bb1d9f"],["/tags/javascript/index.html","1ba6a413bec9bb508db1875fddd8f9e6"],["/tags/javascript/page/1/index.html","b2765ebf141214416a56555917f2510c"],["/tags/javascript/page/2/index.html","e7be00c8422294dacfe4d1db628d8dfb"],["/tags/javascript/page/3/index.html","89c2968748fe261ad0a533a2c7359f02"],["/tags/javascript/page/4/index.html","d9dbe000902bacfc5babe38f78994543"],["/tags/medium/index.html","040b40814a5998039465956b1550ef32"],["/tags/medium/page/1/index.html","815666caf1c9d239ac12cc5159afb493"],["/tags/meta-articles/index.html","92c0ba0618142c08c1d07d8a44c8ebf8"],["/tags/meta-articles/page/1/index.html","4a520ff55446e7cd910a3bfd12fc8214"],["/tags/mobile/index.html","ffc8fb4cea2738c42698caf60dafce0a"],["/tags/mobile/page/1/index.html","12e980bfa2e1e2b75fd7937c38bf05ee"],["/tags/nodejs/index.html","c93f27f4880d29f40b27d1f31aebc712"],["/tags/nodejs/page/1/index.html","d813e08b61ce9e6aee2aa858854e7f83"],["/tags/nodejs/page/2/index.html","95a3d4e7047699b032a84fef7d8cf490"],["/tags/open-apis/index.html","19123c6dce536f395845371a745fc5d2"],["/tags/open-apis/page/1/index.html","c4e344a46ee714f6068d5a2ceb7e0be8"],["/tags/open-data/index.html","de867ae3cda74d77a3c2ee37167d566a"],["/tags/open-data/page/1/index.html","67e7d8f026c791775333dd00df0190c7"],["/tags/open-source/index.html","6c709c7cc8b610b7db2ebdfe4dc44808"],["/tags/open-source/page/1/index.html","127ab8f3807ecf7a4959c3e701b3e195"],["/tags/php/index.html","80c9adcbab56a0c536b3afe8a06a6e8b"],["/tags/php/page/1/index.html","c3171291d2d8a664cfbb9eb56aed6fe5"],["/tags/problem-solving/index.html","4690b21bc6a2347921fa329c255f771c"],["/tags/problem-solving/page/1/index.html","af8850e228643f05133a3d4fd7c0747b"],["/tags/productivity/index.html","01e4f6d325e5dbf352179d4fa6ab5ec1"],["/tags/productivity/page/1/index.html","621e0545765ab6c5079320f350e790bf"],["/tags/programming/index.html","770effc27826bc21f8e7b34e872f21b0"],["/tags/programming/page/1/index.html","d20d9b8e7ac25d519afd63be4d15e7f5"],["/tags/progressive-web-apps/index.html","64baed18a085e3d6b8608673494d84e2"],["/tags/progressive-web-apps/page/1/index.html","5f888ae251da9d8a3ff6c0c9f1ab78e5"],["/tags/prototyping/index.html","7a38e879e2b33e17430eb6f15f07d727"],["/tags/prototyping/page/1/index.html","be32a1019fa6ec6d26a19aa4e30d0f3e"],["/tags/swagger/index.html","8911bc8074da9e983879e7b68b6073da"],["/tags/swagger/page/1/index.html","219aabe52d7cde5d8de97d0a025da5dc"],["/tags/tools/index.html","90adc299d85724fca646b8b6a94a224e"],["/tags/tools/page/1/index.html","177e034312213200ed4655838fe21aeb"],["/tags/vim/index.html","38f6a37db16018e41b7af0e853e5c722"],["/tags/vim/page/1/index.html","5920337ab00add34291f5cd77648bf76"],["/tags/web-development/index.html","87f16c6b1982a2c3ac08d96dfd28b5ec"],["/tags/web-development/page/1/index.html","0201f4d619c53680b994080cab8fe8e1"],["/tags/web-development/page/2/index.html","db2e922f9a608b4c15f4b628606a12b2"],["/think-about-apps-not-websites/index.html","c2468a19d1c43af109ec385c5a2b8049"]];
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







