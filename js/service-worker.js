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

var precacheConfig = [["/404.html","ab0a260782b832daa3eabc9d5ca1f7a1"],["/about/index.html","6944b464b0b17c5308d9b2cfb8c00f5d"],["/admin-ui-gatsby-static-site-generator/index.html","5b791537324a31835bf11238f6fff2bf"],["/agile-documentation-api-driven-project/index.html","d4e4ba2f4e63021cc7100712c2999008"],["/cloud9-editor/index.html","305f81182267a9d6f3e9f0d63219209d"],["/coding-battle-microsoft-innovation-center/index.html","7907c2ede79f6739e3ff03245f12f61a"],["/coding-battle-molengeek/index.html","5bd93e104d9126ad8b3746ff967d90f1"],["/coding-battle-take-eat-easy/index.html","b52965251cf4c880c59ea380b50041a8"],["/css/nav.css","6fc4b7dcce4f3b6281b12259bb5f0c1e"],["/css/print.css","eb033edd246f6f254d2d9f85cf8288c5"],["/css/screen.css","310f657dc140a3ca938399a53fc80874"],["/debugging-nodejs-in-cloud9-ide/index.html","22198f5fce8090f5af60a298a9134a87"],["/drupal8-cloud9-ide/index.html","8ab8a97673ebbccd6b6db596ac9f4058"],["/drupalaton-2016/index.html","f8808613b1f2f19c0d1dcf40eccff926"],["/eu-data-portal-nodejs-client/index.html","0a347f52fcf4d2b81ce4909217bcdb99"],["/favicons/android-chrome-192x192.png","cf23e900619cc1a67ba4ff8d30dac65b"],["/favicons/android-chrome-512x512.png","d37abdf7a91ba254b4c1c94851917069"],["/favicons/apple-touch-icon.png","802352d328afcfbbd5d300767f2055d3"],["/favicons/favicon-16x16.png","46d82b1d6de52b29aad4c578fcd3d1c4"],["/favicons/favicon-32x32.png","47e5d347418045afd6fed39e94fbedb1"],["/favicons/mstile-150x150.png","da293adf6771d0f75babb2a50306dd2e"],["/favicons/safari-pinned-tab.svg","53a9ad64722dc4dd9eb9b7fdf740b29c"],["/february-digest-2017/index.html","352ccf6201f8e0f8f322dee5cf8a8125"],["/first-coding-battle-belgium/index.html","8e770f62ff1850b25a29c98947eef3bc"],["/fixing-mobile-phone/index.html","ff7de9367cb6038d518e5d8612e0aca8"],["/focus-community-good-services/index.html","12ecd0d70ad64152e73350ff2796e8f0"],["/fonts/Genericons/Genericons.eot","e286921c96e71c281fedc8376ba46a7f"],["/fonts/Genericons/Genericons.svg","2fbf3d1bc2b37a65582ab97cd3eaa462"],["/fonts/Genericons/Genericons.ttf","bd260e7477d834b7d0890b9470638124"],["/fonts/Genericons/Genericons.woff","732ff0fd6e5d9d64b2c8c81f7ac83f01"],["/fonts/Genericons/example.html","cce56706f272a763575aef6ee73d26cf"],["/fonts/Genericons/genericons.css","ac25fb529183c5fef5887d02594d1828"],["/fonts/Inconsolata/Inconsolata-Regular.ttf","29b00ebcf93fda46ac9957fa4816eafd"],["/fonts/Merriweather/Merriweather-Bold.ttf","01d1677e091850886b4a79d2e45563bc"],["/fonts/Merriweather/Merriweather-BoldItalic.ttf","dc5c14827332d6ebf93966f0c4b725fc"],["/fonts/Merriweather/Merriweather-Light.ttf","e44ee71ebf60188f5a00c92ff0661313"],["/fonts/Merriweather/Merriweather-LightItalic.ttf","f5283ea521c055451aa3a7f08dc7ea4a"],["/fonts/Open_Sans/OpenSans-Bold.ttf","50145685042b4df07a1fd19957275b81"],["/fonts/Open_Sans/OpenSans-Regular.ttf","629a55a7e793da068dc580d184cc0e31"],["/graphql-guide-wish-found-before/index.html","f7394e4038d15f7cf6299d6d59a71b99"],["/holiday-digest-2016/index.html","a04ffef31d219002f37a776397370a6c"],["/images/aws_lambda.png","a75eb37d2b260dd085061da4620f4642"],["/images/bot-assistant.jpg","e71ac2d39e6acd837e55a9a071fb4215"],["/images/cloud-bot-architecture.jpg","ba6cc6333bf0dfcaf03a203fb3709a72"],["/images/developers-myth.jpg","9b7171d04dbaab017b4b73cd6c0ef7a9"],["/images/gatsby-netlify-cover.png","3cb438a221d72a2249066409532cb650"],["/images/gatsby.jpg","3f1f51da9e6a9a939dfe331c435dd067"],["/images/gatsby_cover.png","cb319268ee4945f09ce196110529fe05"],["/images/graphql_logo.png","33d1191cda1f33d495194dc47586c635"],["/images/js-crazy.jpg","be312cd1c703115ff3dc13959d145dab"],["/images/lego-life.jpg","9cac781de7a04853f4ec2eca95adf1f8"],["/images/logo.png","35c3c9d48093d4b03a258ff78cd074b5"],["/images/prototyping-apis.png","96cf1fbca7817b729b9f121f4c4f8c14"],["/images/reactjs.png","bf6e7aa4366ba93442e42038897d683d"],["/images/serverless_cover.png","39ece153d9474cd0a4e8ee850942f97d"],["/images/sky-cover.jpg","2ab1d51bc3eab441b1720613292792d4"],["/images/starting_gatsbyjs.png","b35db07a64873df9913257eb225fede1"],["/images/swagger-jsdoc-improves-documentation-workflow.png","20a552a219a44729a4b066fd0e3660fe"],["/images/vitosha.jpg","c43fe9b7033aeef72d31cd5bbf7ce96b"],["/index.html","fb7b3b6405cca5985ae074795ee77433"],["/january-digest-2017/index.html","bbb5803a7a4019e3c2bd9b09b2978049"],["/js/index.js","43df4cd55cb9fdedb997a8ead9adefac"],["/js/jquery.fitvids.js","3d3a8c0cfb6264d7790fa45022d273a8"],["/js/jquery.js","32015dd42e9582a80a84736f5d9a44d7"],["/learn-gatsbyjs/index.html","41b2b3ebffb5adb5c1d35920e781a108"],["/march-digest-2017/index.html","7ef4d2c2c7d881708387101c865ce529"],["/page/1/index.html","bd53c91e0dcb427976e59ae4c5a0460c"],["/page/2/index.html","1e2626938380ddaa70f596dfce4ef9b8"],["/page/3/index.html","77e1af65e7040b4a6e27456e019f86c4"],["/page/4/index.html","54855ae5e3ba369e6fd18181b4652758"],["/page/5/index.html","23286d956c54836bc283c705ec4bed42"],["/page/6/index.html","44c88b5302746114d6f74db07138e3a7"],["/personal-computers-personal-assistants/index.html","41d1ad7159df4fa6c0d3a2daa4483111"],["/post/index.html","5ec26889edfda99d4981ea3ad9e5c02e"],["/post/page/1/index.html","706d2b45c5a906d6bcbdfde7766664c5"],["/post/page/2/index.html","dc43a6b84acf63c6652251ca0024437b"],["/post/page/3/index.html","b161913d02ee21ab82b3ed9fd1972c8d"],["/post/page/4/index.html","6660fe625dea55a7f82da0a3ed57d675"],["/post/page/5/index.html","9e6800433421bb971b05bfa691ca85b8"],["/post/page/6/index.html","b7e4b8c78209333fe0880bc8b707a8b4"],["/problem-first-problem-solving/index.html","94e3f0ad2aafe2420145be0b3eabfb14"],["/prototyping-apis-open-api-specification/index.html","6e50fca804cc6030f3990fb6d6de5f1f"],["/reflecting-nodejs-design-patterns/index.html","743e7931b594926c51a57b028da7d374"],["/releasing-new-blog/index.html","b479c70c02f651517fbb1e8e6eecccca"],["/serverless-github-bot-aws-lambda-api-gateway-nodejs/index.html","4010eeea12bef97d2f56a84f8d8cd450"],["/stream-adventure-triage/index.html","9497b66e9305ec20aec996ef04725f5f"],["/tags/api/index.html","b17d741b9bea1ffa50ab92538f30482d"],["/tags/api/page/1/index.html","1e998b5278253cef1034956e2f724786"],["/tags/apis/index.html","8d17ed6ef230a4042c611ead7ad25efb"],["/tags/apis/page/1/index.html","7a06692b6d0ab1bdf538029d2c6cf2f3"],["/tags/apps/index.html","c454e9afca7f09f610590596066be30e"],["/tags/apps/page/1/index.html","6a5477149d2035d409e150c229c31b61"],["/tags/assistants/index.html","3712a45301819f2086c525a417e2db96"],["/tags/assistants/page/1/index.html","59ff5ed8f9d084d2ec1d73bd0f613110"],["/tags/aws/index.html","4ab9266cc8a719af8be1a5de7df6e707"],["/tags/aws/page/1/index.html","0a77a6d9b73e6857587011ece0a9f6b7"],["/tags/blogging/index.html","6d32d9ea2542483367a02cc1c30ad548"],["/tags/blogging/page/1/index.html","b9883c7657e4c182ef4c1a7558363725"],["/tags/bots/index.html","2a89f684ed1cc9838683087e87e046e2"],["/tags/bots/page/1/index.html","b1488d3181ee0c620d95e890eba47ddf"],["/tags/cloud/index.html","91cf46bd53b318ba931480e819456761"],["/tags/cloud/page/1/index.html","856d781dcb44cbdeed86de26f8c97a62"],["/tags/cloud9/index.html","5975fa94196cd33b08d2578b31a1bc72"],["/tags/cloud9/page/1/index.html","bf6dceaedd6cc1b3c46f1d536a645713"],["/tags/coding-competitions/index.html","283de55d90ef192ecfe88d375400c706"],["/tags/coding-competitions/page/1/index.html","9c9f7e4a9eae0af93dfcf57382946b19"],["/tags/coding/index.html","670f479bf103b4d741b2529984b04562"],["/tags/coding/page/1/index.html","7c7642f1206c3a7784772a7aa0bfbf18"],["/tags/community/index.html","ae91276a13f19be9a395e720bcad8a81"],["/tags/community/page/1/index.html","f1b6319f07b6963b9a953b19c6d5d941"],["/tags/debugging/index.html","097e8bfed7665e04306eb2860dba76a5"],["/tags/debugging/page/1/index.html","582cf3a4555f9d4c07c06cc7f97a88ed"],["/tags/design-patterns/index.html","94f8d777c503e0dfb447cb3c32e57c40"],["/tags/design-patterns/page/1/index.html","f5d86713315814b4c2376c7366da68b9"],["/tags/drupal/index.html","518853e1ab760209449cfd6de66ead19"],["/tags/drupal/page/1/index.html","f5d5db3dd48ff0f52921caffb422d80e"],["/tags/gatsbyjs/index.html","f5fae148f9ccae1fa28b8b6d780138ac"],["/tags/gatsbyjs/page/1/index.html","b5319c4ffe0d3511f297fe98e83f836b"],["/tags/graphql/index.html","37390d7275321663cc42f8544ccdc90b"],["/tags/graphql/page/1/index.html","5aefae25ea9424da3bc66c9ec4c2716f"],["/tags/hack-events/index.html","2e74854882ef4856038b70af0a765f74"],["/tags/hack-events/page/1/index.html","0b20b0841667d17e18515853e11aae8f"],["/tags/jam-stack/index.html","5111d3a583533a3815b239667a623555"],["/tags/jam-stack/page/1/index.html","b3903b842f89e3aa681706c182bb1d9f"],["/tags/javascript/index.html","af464cc768738685157174fa8e5140cb"],["/tags/javascript/page/1/index.html","b2765ebf141214416a56555917f2510c"],["/tags/javascript/page/2/index.html","01081e6f72cdb8d631e4e3a76db88bac"],["/tags/javascript/page/3/index.html","aef07261409d4b332c2e025983a4b1b4"],["/tags/javascript/page/4/index.html","c38e600d501b7bdf7afac873665c1d29"],["/tags/medium/index.html","47377809e66945cb5d003e8d3c12745c"],["/tags/medium/page/1/index.html","815666caf1c9d239ac12cc5159afb493"],["/tags/meta-articles/index.html","e3903d66cb5e31c83b970c7b139c7805"],["/tags/meta-articles/page/1/index.html","4a520ff55446e7cd910a3bfd12fc8214"],["/tags/misc/index.html","a69c9f14b6f3b7d7755491f25c58f75a"],["/tags/misc/page/1/index.html","8cb0a14d15e845c3d08c2fddef7d5c80"],["/tags/mobile/index.html","118fd3cda67ed5225b54c2aabee41433"],["/tags/mobile/page/1/index.html","12e980bfa2e1e2b75fd7937c38bf05ee"],["/tags/nodejs/index.html","17f79478fee539e17c3b93e6ba73c4bd"],["/tags/nodejs/page/1/index.html","d813e08b61ce9e6aee2aa858854e7f83"],["/tags/nodejs/page/2/index.html","0ba8cd16558e0093e2c8122b2f3bce68"],["/tags/open-apis/index.html","9b642f8efb6f50bd9bde809f5daa78a4"],["/tags/open-apis/page/1/index.html","c4e344a46ee714f6068d5a2ceb7e0be8"],["/tags/open-data/index.html","8886116972909040016307d621159921"],["/tags/open-data/page/1/index.html","67e7d8f026c791775333dd00df0190c7"],["/tags/open-source/index.html","735942e9c596de824d8566d98fa35198"],["/tags/open-source/page/1/index.html","127ab8f3807ecf7a4959c3e701b3e195"],["/tags/php/index.html","edebcaeb63b86e3bf582ff6f3468ecb5"],["/tags/php/page/1/index.html","c3171291d2d8a664cfbb9eb56aed6fe5"],["/tags/problem-solving/index.html","9e1ca6d760fcfb6ee6eedb6ca1617291"],["/tags/problem-solving/page/1/index.html","af8850e228643f05133a3d4fd7c0747b"],["/tags/productivity/index.html","177a8ac7486b24841037c5ba000e8dd5"],["/tags/productivity/page/1/index.html","621e0545765ab6c5079320f350e790bf"],["/tags/programming/index.html","5eb4022cb499ddeae14f21b7fc595a68"],["/tags/programming/page/1/index.html","d20d9b8e7ac25d519afd63be4d15e7f5"],["/tags/progressive-web-apps/index.html","996f9e58936cc8fbe1ef2afed8d1e26c"],["/tags/progressive-web-apps/page/1/index.html","5f888ae251da9d8a3ff6c0c9f1ab78e5"],["/tags/prototyping/index.html","d25b7ed6b17bc0b2070b16b26229f629"],["/tags/prototyping/page/1/index.html","be32a1019fa6ec6d26a19aa4e30d0f3e"],["/tags/serverless/index.html","a4a2ee7cf1734256cecb452289492b62"],["/tags/serverless/page/1/index.html","52dc09966db323c91cd5da865ee7af7a"],["/tags/swagger/index.html","0cb1a0f9a746a7ae3834e6bf6176d42e"],["/tags/swagger/page/1/index.html","219aabe52d7cde5d8de97d0a025da5dc"],["/tags/tdd/index.html","cb4d587abfa813c2cea3dae9b89f1698"],["/tags/tdd/page/1/index.html","31c4296fdcfc869e158ef66015d45257"],["/tags/tools/index.html","70f0d6a01b7839d52c13e34ab95439a5"],["/tags/tools/page/1/index.html","177e034312213200ed4655838fe21aeb"],["/tags/vim/index.html","a15065eb284980a36c5774a194dcd7fc"],["/tags/vim/page/1/index.html","5920337ab00add34291f5cd77648bf76"],["/tags/web-development/index.html","77dddc9ee89f40f779ed67686fd53f07"],["/tags/web-development/page/1/index.html","0201f4d619c53680b994080cab8fe8e1"],["/tags/web-development/page/2/index.html","c515249326af412e32b7137f9c28a98f"],["/tdd-serverless-jest/index.html","464a5f68579bbc4bc00b9c831e2e77cd"],["/think-about-apps-not-websites/index.html","51524c540cbb647da59e64756aee8e31"],["/uploads/2017/07/11/brief-history-of-cloud-acloud-guru.png","19c48c441f15eff3c97b789efc24c610"],["/uploads/2017/07/12/adding_webhook_github.png","ebff158e97bc550b254453756e85b571"],["/uploads/2017/07/12/create_aws_user_lambda.gif","934e5302bf85045d67ae84ab24726609"],["/uploads/2017/07/12/enter_credentials_serverless.png","27ff112770a89fe3384a30ce0adcf169"],["/uploads/2017/07/12/generate_webhook_secret-1.png","33b7d1adb3dc7c766b1b4dbff2243e93"],["/uploads/2017/07/12/generate_webhook_secret.png","5e06761a1dd5fa3fef2279230471f520"],["/uploads/2017/07/12/github_bot_correcting_greenkeeper-1.png","4b37ce8f3027fdb5d0a952872e597b66"],["/uploads/2017/07/12/github_bot_correcting_greenkeeper.png","ae36d1d0864392343e2874be670cc947"],["/uploads/2017/07/12/handler.js","a4a48dc0a1d1de56865d5b895bfae588"],["/uploads/2017/07/12/handler.png","e43fff2bd4a84460a8f18a80e7b34fbe"],["/uploads/2017/07/12/new_user_token_github.png","40dd106a60a23e9da287667c09b27df9"],["/uploads/2017/07/12/save-user-token.png","b8b57eb07603068c6feb9f2953c569bb"],["/uploads/2017/07/12/save_config.png","fc96927951ac08f88f2c6e3ca67d540d"],["/uploads/2017/07/12/serverless_deploy_success.gif","a34c23dca6bc1247da4c9ebb80f273b3"],["/uploads/2017/08/16/Aug 17 2017 12-41 AM.gif","108fb6dc35c6c086d6908d56e3adc48a"]];
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







