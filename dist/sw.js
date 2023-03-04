/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-148cb7e5'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "assets/app-6a012d05.js",
    "revision": null
  }, {
    "url": "assets/index-8e8c665a.css",
    "revision": null
  }, {
    "url": "index.html",
    "revision": "92c18eeea24caf8f2cce004fff0e2e36"
  }, {
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "favicon.svg",
    "revision": "fd480326ce2f9db2043fceedae54cb67"
  }, {
    "url": "robots.txt",
    "revision": "5e0bd1c281a62a380d7a948085bfe2d1"
  }, {
    "url": "safari-pinned-tab.svg",
    "revision": "5eaf74d1c43d30e0af743b68a3f48504"
  }, {
    "url": "windows11/SmallTile.scale-100.png",
    "revision": "0f8e907683d9e8384600f7c01bd7960b"
  }, {
    "url": "windows11/SmallTile.scale-125.png",
    "revision": "0eab9a1663ec7bf4f2533ad81276e465"
  }, {
    "url": "windows11/SmallTile.scale-150.png",
    "revision": "2ac2427c2b43bce126cd778c224bee88"
  }, {
    "url": "windows11/SmallTile.scale-200.png",
    "revision": "754f5313b0278387913dd7ebde698b29"
  }, {
    "url": "windows11/SmallTile.scale-400.png",
    "revision": "8fa9c19bbfe8799949cb5870316c0c7f"
  }, {
    "url": "windows11/Square150x150Logo.scale-100.png",
    "revision": "f987b9753b10eb84361a645eb345f232"
  }, {
    "url": "windows11/Square150x150Logo.scale-125.png",
    "revision": "dced87e3041180bc49d6407ed286ebb8"
  }, {
    "url": "windows11/Square150x150Logo.scale-150.png",
    "revision": "59004c4f7842fed5c6ac22b8fa60a683"
  }, {
    "url": "windows11/Square150x150Logo.scale-200.png",
    "revision": "b2f8d840a449f3964b546d8affba6cf0"
  }, {
    "url": "windows11/Square150x150Logo.scale-400.png",
    "revision": "5e357667d414cb75ee7e546edcc63561"
  }, {
    "url": "windows11/Wide310x150Logo.scale-100.png",
    "revision": "94d6f13432fc558cc88816bde199e02a"
  }, {
    "url": "windows11/Wide310x150Logo.scale-125.png",
    "revision": "26c01dd4c977d1bf81b0b56e197a686f"
  }, {
    "url": "windows11/Wide310x150Logo.scale-150.png",
    "revision": "2f55460fca993c3e7ff6894e1e34b33a"
  }, {
    "url": "windows11/Wide310x150Logo.scale-200.png",
    "revision": "29b1b7d6cf9e18580f608871b118c58c"
  }, {
    "url": "windows11/Wide310x150Logo.scale-400.png",
    "revision": "a318820fd4a156e47073ad5146a6359a"
  }, {
    "url": "windows11/LargeTile.scale-100.png",
    "revision": "a29710bf7e3bacdc35f1d1d6165525d4"
  }, {
    "url": "windows11/LargeTile.scale-125.png",
    "revision": "05daa907da3859bf7aa6f57af2109af6"
  }, {
    "url": "windows11/LargeTile.scale-150.png",
    "revision": "2a4e9b2ccfb1f7ef435eb1976024927a"
  }, {
    "url": "windows11/LargeTile.scale-200.png",
    "revision": "65fbc8c1f734e32981952facdc1f0711"
  }, {
    "url": "windows11/LargeTile.scale-400.png",
    "revision": "6fb61d39bbeab17dad033a1874d15e1d"
  }, {
    "url": "windows11/Square44x44Logo.scale-100.png",
    "revision": "31f0128c83337970fe1247e2663e7057"
  }, {
    "url": "windows11/Square44x44Logo.scale-125.png",
    "revision": "0f86c50596f29c165c5d2ddaf4b672fb"
  }, {
    "url": "windows11/Square44x44Logo.scale-150.png",
    "revision": "78e7cb79f928850498cf3aefde6c97db"
  }, {
    "url": "windows11/Square44x44Logo.scale-200.png",
    "revision": "b662d26f8a6df84794cac522432a2835"
  }, {
    "url": "windows11/Square44x44Logo.scale-400.png",
    "revision": "d3aa091184110537a17bc9d9a040c545"
  }, {
    "url": "windows11/StoreLogo.scale-100.png",
    "revision": "fb6c22c5a93b15834bad79584613e3ca"
  }, {
    "url": "windows11/StoreLogo.scale-125.png",
    "revision": "1af75dd2253f24ce837b1eee52e06c00"
  }, {
    "url": "windows11/StoreLogo.scale-150.png",
    "revision": "b2bdc2098054348422cfd7cdf34c1d45"
  }, {
    "url": "windows11/StoreLogo.scale-200.png",
    "revision": "4568b80ac783fa3f8653c6f6baea8abe"
  }, {
    "url": "windows11/StoreLogo.scale-400.png",
    "revision": "03c3d4e599fe1e209013d3b7064649ba"
  }, {
    "url": "windows11/SplashScreen.scale-100.png",
    "revision": "29b1b7d6cf9e18580f608871b118c58c"
  }, {
    "url": "windows11/SplashScreen.scale-125.png",
    "revision": "1c845012a336ef8e0bfff86c4b29e59f"
  }, {
    "url": "windows11/SplashScreen.scale-150.png",
    "revision": "f83c43cad4820fd11c596bce92b8d94d"
  }, {
    "url": "windows11/SplashScreen.scale-200.png",
    "revision": "a318820fd4a156e47073ad5146a6359a"
  }, {
    "url": "windows11/SplashScreen.scale-400.png",
    "revision": "38b64282d81b03ed9a8b8cee2fd2dd36"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-16.png",
    "revision": "f0c266283cf7f81bad89c5b773357909"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-20.png",
    "revision": "d664bfabe62e5c68c2b20aa4dbd5f47c"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-24.png",
    "revision": "77fde9fd1d179af48e6b207367b59cc9"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-30.png",
    "revision": "9968dff6243de2e15eb0219d5a223ce6"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-32.png",
    "revision": "e2e170bddc3bafe783e1236c179118da"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-36.png",
    "revision": "ca9b95ecf1834abf5663194dfc66fe7a"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-40.png",
    "revision": "fafba584c740d1b2a0cd7672ad0c31cc"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-44.png",
    "revision": "31f0128c83337970fe1247e2663e7057"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-48.png",
    "revision": "efd10773af24189c1cc88f90f24da4d0"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-60.png",
    "revision": "785afcbe871486efa2dc77bcd0a539d9"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-64.png",
    "revision": "ba4fba148be86072c06663ba19239a3f"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-72.png",
    "revision": "bd3134e98d74472f7c62385b325d7f5b"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-80.png",
    "revision": "2eec48f46791188a72aa4e8952d00486"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-96.png",
    "revision": "2a16878be40ace7ef7e1a0d583b39bf4"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-256.png",
    "revision": "81180532b491cbc2a5c9b31883f57d03"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-16.png",
    "revision": "f0c266283cf7f81bad89c5b773357909"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-20.png",
    "revision": "d664bfabe62e5c68c2b20aa4dbd5f47c"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-24.png",
    "revision": "77fde9fd1d179af48e6b207367b59cc9"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-30.png",
    "revision": "9968dff6243de2e15eb0219d5a223ce6"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-32.png",
    "revision": "e2e170bddc3bafe783e1236c179118da"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-36.png",
    "revision": "ca9b95ecf1834abf5663194dfc66fe7a"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-40.png",
    "revision": "fafba584c740d1b2a0cd7672ad0c31cc"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-44.png",
    "revision": "31f0128c83337970fe1247e2663e7057"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-48.png",
    "revision": "efd10773af24189c1cc88f90f24da4d0"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-60.png",
    "revision": "785afcbe871486efa2dc77bcd0a539d9"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-64.png",
    "revision": "ba4fba148be86072c06663ba19239a3f"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-72.png",
    "revision": "bd3134e98d74472f7c62385b325d7f5b"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-80.png",
    "revision": "2eec48f46791188a72aa4e8952d00486"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-96.png",
    "revision": "2a16878be40ace7ef7e1a0d583b39bf4"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-256.png",
    "revision": "81180532b491cbc2a5c9b31883f57d03"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",
    "revision": "f0c266283cf7f81bad89c5b773357909"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",
    "revision": "d664bfabe62e5c68c2b20aa4dbd5f47c"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",
    "revision": "77fde9fd1d179af48e6b207367b59cc9"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",
    "revision": "9968dff6243de2e15eb0219d5a223ce6"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",
    "revision": "e2e170bddc3bafe783e1236c179118da"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",
    "revision": "ca9b95ecf1834abf5663194dfc66fe7a"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",
    "revision": "fafba584c740d1b2a0cd7672ad0c31cc"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",
    "revision": "31f0128c83337970fe1247e2663e7057"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",
    "revision": "efd10773af24189c1cc88f90f24da4d0"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",
    "revision": "785afcbe871486efa2dc77bcd0a539d9"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",
    "revision": "ba4fba148be86072c06663ba19239a3f"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",
    "revision": "bd3134e98d74472f7c62385b325d7f5b"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",
    "revision": "2eec48f46791188a72aa4e8952d00486"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",
    "revision": "2a16878be40ace7ef7e1a0d583b39bf4"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",
    "revision": "81180532b491cbc2a5c9b31883f57d03"
  }, {
    "url": "android/android-launchericon-512-512.png",
    "revision": "ed1bf7cefd51e2e3b811c9f2a8c3757c"
  }, {
    "url": "android/android-launchericon-192-192.png",
    "revision": "ac2510471febb94247534eccf6c4ca92"
  }, {
    "url": "android/android-launchericon-144-144.png",
    "revision": "a03785b19efe0558e7ea53adce67e545"
  }, {
    "url": "android/android-launchericon-96-96.png",
    "revision": "d2de6d2df5bd9f8f91c82e7a6635be80"
  }, {
    "url": "android/android-launchericon-72-72.png",
    "revision": "cf068b39a5fee319ec64c93dc4295188"
  }, {
    "url": "android/android-launchericon-48-48.png",
    "revision": "974a00aceb5748b34537b51d18515990"
  }, {
    "url": "ios/16.png",
    "revision": "58e7c24faf978a4a7a99e5172f4fd029"
  }, {
    "url": "ios/20.png",
    "revision": "0744eba419210f8b30400f537fa7b2c3"
  }, {
    "url": "ios/29.png",
    "revision": "6c55d541617e64c2a41e978ea68737c0"
  }, {
    "url": "ios/32.png",
    "revision": "c73ae563d8dad14300921e73ef120de0"
  }, {
    "url": "ios/40.png",
    "revision": "38e463235293e5f51cf46845ed9d3afb"
  }, {
    "url": "ios/50.png",
    "revision": "fb6c22c5a93b15834bad79584613e3ca"
  }, {
    "url": "ios/57.png",
    "revision": "3ac16010420f137687a89021b8c0f34b"
  }, {
    "url": "ios/58.png",
    "revision": "0c46cf9b78f5ea99f45a5b35aa401587"
  }, {
    "url": "ios/60.png",
    "revision": "a760f5b6466d5bfdf12443b673049806"
  }, {
    "url": "ios/64.png",
    "revision": "c2487947cb63e583447d5e371b084b2a"
  }, {
    "url": "ios/72.png",
    "revision": "cf068b39a5fee319ec64c93dc4295188"
  }, {
    "url": "ios/76.png",
    "revision": "6e959171c2e19e98ccf6f95135debabb"
  }, {
    "url": "ios/80.png",
    "revision": "b51519e63865fa281860d54af37eda5c"
  }, {
    "url": "ios/87.png",
    "revision": "b317710a836abd0cd0e902237d5657c7"
  }, {
    "url": "ios/100.png",
    "revision": "4568b80ac783fa3f8653c6f6baea8abe"
  }, {
    "url": "ios/114.png",
    "revision": "6f64529aa2b18bc0f22a688ad844842a"
  }, {
    "url": "ios/120.png",
    "revision": "ea5ea8a401af7d11b8dbf578446cd521"
  }, {
    "url": "ios/128.png",
    "revision": "8512be8cff7295971f8145e44dd748de"
  }, {
    "url": "ios/144.png",
    "revision": "a03785b19efe0558e7ea53adce67e545"
  }, {
    "url": "ios/152.png",
    "revision": "3c1649c102d0f1ced9c9ee709ae1735e"
  }, {
    "url": "ios/167.png",
    "revision": "13b7dafb9160f086d71d7531354b7e23"
  }, {
    "url": "ios/180.png",
    "revision": "5c1b56a0a02de431024db5f501fe1e2a"
  }, {
    "url": "ios/192.png",
    "revision": "ac2510471febb94247534eccf6c4ca92"
  }, {
    "url": "ios/256.png",
    "revision": "e111cd2cd4eeda545325ea00665d2b2a"
  }, {
    "url": "ios/512.png",
    "revision": "ed1bf7cefd51e2e3b811c9f2a8c3757c"
  }, {
    "url": "ios/1024.png",
    "revision": "0a8ab4bb1586970ee2bbcaac9af917dd"
  }, {
    "url": "manifest.webmanifest",
    "revision": "e5d895015e7391c32e3ac21fc5ef568d"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
