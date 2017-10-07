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

var precacheConfig = [["/404.html","d72f383962f3b73f7291faf6a094aeb6"],["/about/index.html","d7959fcf66d9ec46c12023b7929f600d"],["/admin-ui-gatsby-static-site-generator/index.html","64b98d3ca88412f8b0685fbf0912d425"],["/agile-documentation-api-driven-project/index.html","b779204f5e934b3a6651759ca56fd6ff"],["/cloud9-editor/index.html","f78cbc8e4a7ca5b78245dc14fc2a27f4"],["/coding-battle-microsoft-innovation-center/index.html","ab76a843094b2ac467e4c9eefcf444d6"],["/coding-battle-molengeek/index.html","774ff814d2991416f1fdc1f6c2e77b2b"],["/coding-battle-take-eat-easy/index.html","57bbf3851f40fd6f7140191a6446dca1"],["/css/nav.css","6fc4b7dcce4f3b6281b12259bb5f0c1e"],["/css/print.css","eb033edd246f6f254d2d9f85cf8288c5"],["/css/screen.css","310f657dc140a3ca938399a53fc80874"],["/debugging-nodejs-in-cloud9-ide/index.html","804da93a5b49f2c4ade7a772b31d2628"],["/drupal8-cloud9-ide/index.html","e91cee2c1fc1d9d911d7de645be26e76"],["/drupalaton-2016/index.html","9d04012bfd30f82f54f8347f4cf836c7"],["/eu-data-portal-nodejs-client/index.html","fdd87c202b52eaeff27268a04a1be1e3"],["/favicons/android-chrome-192x192.png","cf23e900619cc1a67ba4ff8d30dac65b"],["/favicons/android-chrome-512x512.png","d37abdf7a91ba254b4c1c94851917069"],["/favicons/apple-touch-icon.png","802352d328afcfbbd5d300767f2055d3"],["/favicons/favicon-16x16.png","46d82b1d6de52b29aad4c578fcd3d1c4"],["/favicons/favicon-32x32.png","47e5d347418045afd6fed39e94fbedb1"],["/favicons/mstile-150x150.png","da293adf6771d0f75babb2a50306dd2e"],["/favicons/safari-pinned-tab.svg","53a9ad64722dc4dd9eb9b7fdf740b29c"],["/february-digest-2017/index.html","99c7bbccc30bbbdfccf3d9057baf3bf9"],["/first-coding-battle-belgium/index.html","c40c1fe46827cce1076d8f674ad35705"],["/fixing-mobile-phone/index.html","f769b12117eb85de449cb9ce0004e7a3"],["/focus-community-good-services/index.html","271da960cabfb5b6a223cd2374d2be94"],["/fonts/Genericons/Genericons.eot","e286921c96e71c281fedc8376ba46a7f"],["/fonts/Genericons/Genericons.svg","2fbf3d1bc2b37a65582ab97cd3eaa462"],["/fonts/Genericons/Genericons.ttf","bd260e7477d834b7d0890b9470638124"],["/fonts/Genericons/Genericons.woff","732ff0fd6e5d9d64b2c8c81f7ac83f01"],["/fonts/Genericons/example.html","cce56706f272a763575aef6ee73d26cf"],["/fonts/Genericons/genericons.css","ac25fb529183c5fef5887d02594d1828"],["/fonts/Inconsolata/Inconsolata-Regular.ttf","29b00ebcf93fda46ac9957fa4816eafd"],["/fonts/Merriweather/Merriweather-Bold.ttf","01d1677e091850886b4a79d2e45563bc"],["/fonts/Merriweather/Merriweather-BoldItalic.ttf","dc5c14827332d6ebf93966f0c4b725fc"],["/fonts/Merriweather/Merriweather-Light.ttf","e44ee71ebf60188f5a00c92ff0661313"],["/fonts/Merriweather/Merriweather-LightItalic.ttf","f5283ea521c055451aa3a7f08dc7ea4a"],["/fonts/Open_Sans/OpenSans-Bold.ttf","50145685042b4df07a1fd19957275b81"],["/fonts/Open_Sans/OpenSans-Regular.ttf","629a55a7e793da068dc580d184cc0e31"],["/graphql-guide-wish-found-before/index.html","c12313961378be10bf8badc10fac159d"],["/holiday-digest-2016/index.html","27d7ba50db2fba6d8924337f745d0a9d"],["/images/aws_lambda.png","a75eb37d2b260dd085061da4620f4642"],["/images/bot-assistant.jpg","e71ac2d39e6acd837e55a9a071fb4215"],["/images/cloud-bot-architecture.jpg","ba6cc6333bf0dfcaf03a203fb3709a72"],["/images/developers-myth.jpg","9b7171d04dbaab017b4b73cd6c0ef7a9"],["/images/gatsby-netlify-cover.png","3cb438a221d72a2249066409532cb650"],["/images/gatsby.jpg","3f1f51da9e6a9a939dfe331c435dd067"],["/images/gatsby_cover.png","cb319268ee4945f09ce196110529fe05"],["/images/graphql_logo.png","33d1191cda1f33d495194dc47586c635"],["/images/js-crazy.jpg","be312cd1c703115ff3dc13959d145dab"],["/images/lego-life.jpg","9cac781de7a04853f4ec2eca95adf1f8"],["/images/logo.png","35c3c9d48093d4b03a258ff78cd074b5"],["/images/prototyping-apis.png","96cf1fbca7817b729b9f121f4c4f8c14"],["/images/reactjs.png","bf6e7aa4366ba93442e42038897d683d"],["/images/starting_gatsbyjs.png","b35db07a64873df9913257eb225fede1"],["/images/swagger-jsdoc-improves-documentation-workflow.png","20a552a219a44729a4b066fd0e3660fe"],["/images/vitosha.jpg","c43fe9b7033aeef72d31cd5bbf7ce96b"],["/index.html","6f8045366351b3a8f8528534e09484e9"],["/january-digest-2017/index.html","a28a5294998224c5c7c849698d7a91c9"],["/js/index.js","43df4cd55cb9fdedb997a8ead9adefac"],["/js/jquery.fitvids.js","3d3a8c0cfb6264d7790fa45022d273a8"],["/js/jquery.js","32015dd42e9582a80a84736f5d9a44d7"],["/learn-gatsbyjs/index.html","13c227057c6006b675c1bc34f5e77a70"],["/march-digest-2017/index.html","4433df69bfa138c60089cf55f19632ab"],["/page/1/index.html","bd53c91e0dcb427976e59ae4c5a0460c"],["/page/2/index.html","877b407073641949d4f20fbd1ad32dc3"],["/page/3/index.html","35fec755773115e7ee5a4864b5a51021"],["/page/4/index.html","0f3b6e9669b5ecbd9cae2b921d2c92b6"],["/page/5/index.html","8c609477468fbe946f863ff24c10f7c1"],["/page/6/index.html","fb7a3f7713c10c8f379088ead2037f5c"],["/personal-computers-personal-assistants/index.html","e5402ae995620f9f42fb2dd0a6d4340e"],["/post/index.html","a3a88fdfe0e3298500fbf0dd2a1b823a"],["/post/page/1/index.html","706d2b45c5a906d6bcbdfde7766664c5"],["/post/page/2/index.html","7973648f42e0725694127e4ee89141d6"],["/post/page/3/index.html","f47c9ab86b8c4f14193e64c0c5423847"],["/post/page/4/index.html","8b5bf255be9b913728a153e49867c7f8"],["/post/page/5/index.html","056d1f717488d8bbbd231ebfd39acc4d"],["/post/page/6/index.html","67a7355b38ff0972b9e234dc6eef324c"],["/problem-first-problem-solving/index.html","5f0350a0cd746ebaaec531123b172962"],["/prototyping-apis-open-api-specification/index.html","0c23528d5acbac1da8a7174cf49ffd7b"],["/reflecting-nodejs-design-patterns/index.html","c661ed9133aa479035aa841135b4a342"],["/releasing-new-blog/index.html","6dbce08eace2f84e1e424c855da5bff1"],["/serverless-github-bot-aws-lambda-api-gateway-nodejs/index.html","5b03a5a1264d1813d9059f6dcca8f958"],["/stream-adventure-triage/index.html","e438a07da3dd6275ecadfb6c5cff96e7"],["/tags/api/index.html","aef2b4660505876ed849229929cd7116"],["/tags/api/page/1/index.html","1e998b5278253cef1034956e2f724786"],["/tags/apis/index.html","0a0acdcfcb7f1db0f75607f8a57b94f4"],["/tags/apis/page/1/index.html","7a06692b6d0ab1bdf538029d2c6cf2f3"],["/tags/apps/index.html","0e5170b822294669c9e75e2d7b071f12"],["/tags/apps/page/1/index.html","6a5477149d2035d409e150c229c31b61"],["/tags/assistants/index.html","51f280af155a47d93a625ac846d2f4c5"],["/tags/assistants/page/1/index.html","59ff5ed8f9d084d2ec1d73bd0f613110"],["/tags/aws/index.html","bf7a69a98175e0ffef43c9e9d854e6eb"],["/tags/aws/page/1/index.html","0a77a6d9b73e6857587011ece0a9f6b7"],["/tags/blogging/index.html","f32d9952a9be9dfd835bcb20454b060c"],["/tags/blogging/page/1/index.html","b9883c7657e4c182ef4c1a7558363725"],["/tags/bots/index.html","cd93ba8ebd11af2ced0cbc9cfcca0113"],["/tags/bots/page/1/index.html","b1488d3181ee0c620d95e890eba47ddf"],["/tags/cloud/index.html","641356ec71174b1b241eed96ebdb2dae"],["/tags/cloud/page/1/index.html","856d781dcb44cbdeed86de26f8c97a62"],["/tags/cloud9/index.html","9a86df870697708220b460208725c378"],["/tags/cloud9/page/1/index.html","bf6dceaedd6cc1b3c46f1d536a645713"],["/tags/coding-competitions/index.html","665b2d5b7f95c23bf0d393b6f1fe267c"],["/tags/coding-competitions/page/1/index.html","9c9f7e4a9eae0af93dfcf57382946b19"],["/tags/coding/index.html","368e9579fd0063eeaab88d76eedb9bc5"],["/tags/coding/page/1/index.html","7c7642f1206c3a7784772a7aa0bfbf18"],["/tags/community/index.html","cbe89a0dc7e0e20a527b95726a40e5a9"],["/tags/community/page/1/index.html","f1b6319f07b6963b9a953b19c6d5d941"],["/tags/debugging/index.html","78b4428e129ed34e7c44357b297d564d"],["/tags/debugging/page/1/index.html","582cf3a4555f9d4c07c06cc7f97a88ed"],["/tags/design-patterns/index.html","dac39d0e6a81a9b27657c159ec86476b"],["/tags/design-patterns/page/1/index.html","f5d86713315814b4c2376c7366da68b9"],["/tags/drupal/index.html","6c6429b189fc28ade09efb45dbbdba39"],["/tags/drupal/page/1/index.html","f5d5db3dd48ff0f52921caffb422d80e"],["/tags/gatsbyjs/index.html","56710deaf45f00867e8788f4c120d039"],["/tags/gatsbyjs/page/1/index.html","b5319c4ffe0d3511f297fe98e83f836b"],["/tags/graphql/index.html","bd4e5fd70c6376d8e6fddd0f57bda2d5"],["/tags/graphql/page/1/index.html","5aefae25ea9424da3bc66c9ec4c2716f"],["/tags/hack-events/index.html","75ee6b0f6550e5859ef69d38fab314cf"],["/tags/hack-events/page/1/index.html","0b20b0841667d17e18515853e11aae8f"],["/tags/jam-stack/index.html","69fdea9968b0c12bb21168bed5453fbb"],["/tags/jam-stack/page/1/index.html","b3903b842f89e3aa681706c182bb1d9f"],["/tags/javascript/index.html","31ad5a4ab3e5b3aff2deeba8ab95d61d"],["/tags/javascript/page/1/index.html","b2765ebf141214416a56555917f2510c"],["/tags/javascript/page/2/index.html","1f90bf3395da778b76f5cbcdf012cdaa"],["/tags/javascript/page/3/index.html","3bf570df53c6acf47414d70249702e48"],["/tags/javascript/page/4/index.html","e26613f0fec12b129a25c1f85ffdc2d0"],["/tags/medium/index.html","f33b4471441672264c6fc5e468cb556a"],["/tags/medium/page/1/index.html","815666caf1c9d239ac12cc5159afb493"],["/tags/meta-articles/index.html","9cc7cdf3b6c5c4c6b1d2694d5338fc4d"],["/tags/meta-articles/page/1/index.html","4a520ff55446e7cd910a3bfd12fc8214"],["/tags/misc/index.html","fd3b50ad7778468d69cbbc2edfe34915"],["/tags/misc/page/1/index.html","8cb0a14d15e845c3d08c2fddef7d5c80"],["/tags/mobile/index.html","8883400c1165570b79503eb6047ebe80"],["/tags/mobile/page/1/index.html","12e980bfa2e1e2b75fd7937c38bf05ee"],["/tags/nodejs/index.html","a57ba5860e6db30a975305b028c48eed"],["/tags/nodejs/page/1/index.html","d813e08b61ce9e6aee2aa858854e7f83"],["/tags/nodejs/page/2/index.html","72b6356396dcf9cf4c0d94557d4f7dc7"],["/tags/open-apis/index.html","a8285285395c31efb5facff18e838c50"],["/tags/open-apis/page/1/index.html","c4e344a46ee714f6068d5a2ceb7e0be8"],["/tags/open-data/index.html","97113d934b0f5f16203d0914c6372ba3"],["/tags/open-data/page/1/index.html","67e7d8f026c791775333dd00df0190c7"],["/tags/open-source/index.html","33482bd207c1e189dfe71eb67d7ca78b"],["/tags/open-source/page/1/index.html","127ab8f3807ecf7a4959c3e701b3e195"],["/tags/php/index.html","f8764b98ae7e82c34f60fcb9a1b263cc"],["/tags/php/page/1/index.html","c3171291d2d8a664cfbb9eb56aed6fe5"],["/tags/problem-solving/index.html","e212192a4a9b19585e5b85837bb0e959"],["/tags/problem-solving/page/1/index.html","af8850e228643f05133a3d4fd7c0747b"],["/tags/productivity/index.html","c07d01ff9a011767974ba94ad091fe5c"],["/tags/productivity/page/1/index.html","621e0545765ab6c5079320f350e790bf"],["/tags/programming/index.html","e4bdd138f815383714ec95ff85fe5cfc"],["/tags/programming/page/1/index.html","d20d9b8e7ac25d519afd63be4d15e7f5"],["/tags/progressive-web-apps/index.html","561db214bb6d11c1a9f9e5222dd88a8d"],["/tags/progressive-web-apps/page/1/index.html","5f888ae251da9d8a3ff6c0c9f1ab78e5"],["/tags/prototyping/index.html","716b256a4aa2f8f3adba07dac1e31cec"],["/tags/prototyping/page/1/index.html","be32a1019fa6ec6d26a19aa4e30d0f3e"],["/tags/serverless/index.html","ea601626128f425d0b379fc22a4291e6"],["/tags/serverless/page/1/index.html","52dc09966db323c91cd5da865ee7af7a"],["/tags/swagger/index.html","c05740ff3ffe9f58a381c6a7dd82c94a"],["/tags/swagger/page/1/index.html","219aabe52d7cde5d8de97d0a025da5dc"],["/tags/tools/index.html","ddaeb1e82dec0a3a81232c730a9ba744"],["/tags/tools/page/1/index.html","177e034312213200ed4655838fe21aeb"],["/tags/vim/index.html","5e1e3b1af8653ed5bd7be963e6b1d3fa"],["/tags/vim/page/1/index.html","5920337ab00add34291f5cd77648bf76"],["/tags/web-development/index.html","9ec6c26c79da27d2e9ade335347c7c99"],["/tags/web-development/page/1/index.html","0201f4d619c53680b994080cab8fe8e1"],["/tags/web-development/page/2/index.html","d85bcd00c28adbddaa90f607e409b513"],["/think-about-apps-not-websites/index.html","fb6678fa18f61ae8d9f2c861bdfe8112"],["/uploads/2017/07/11/brief-history-of-cloud-acloud-guru.png","19c48c441f15eff3c97b789efc24c610"],["/uploads/2017/07/12/adding_webhook_github.png","ebff158e97bc550b254453756e85b571"],["/uploads/2017/07/12/create_aws_user_lambda.gif","934e5302bf85045d67ae84ab24726609"],["/uploads/2017/07/12/enter_credentials_serverless.png","27ff112770a89fe3384a30ce0adcf169"],["/uploads/2017/07/12/generate_webhook_secret-1.png","33b7d1adb3dc7c766b1b4dbff2243e93"],["/uploads/2017/07/12/generate_webhook_secret.png","5e06761a1dd5fa3fef2279230471f520"],["/uploads/2017/07/12/github_bot_correcting_greenkeeper-1.png","4b37ce8f3027fdb5d0a952872e597b66"],["/uploads/2017/07/12/github_bot_correcting_greenkeeper.png","ae36d1d0864392343e2874be670cc947"],["/uploads/2017/07/12/handler.js","a4a48dc0a1d1de56865d5b895bfae588"],["/uploads/2017/07/12/handler.png","e43fff2bd4a84460a8f18a80e7b34fbe"],["/uploads/2017/07/12/new_user_token_github.png","40dd106a60a23e9da287667c09b27df9"],["/uploads/2017/07/12/save-user-token.png","b8b57eb07603068c6feb9f2953c569bb"],["/uploads/2017/07/12/save_config.png","fc96927951ac08f88f2c6e3ca67d540d"],["/uploads/2017/07/12/serverless_deploy_success.gif","a34c23dca6bc1247da4c9ebb80f273b3"],["/uploads/2017/08/16/Aug 17 2017 12-41 AM.gif","108fb6dc35c6c086d6908d56e3adc48a"]];
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
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

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

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
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







