'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "2aa3c57100564158890f8d71e4f523a9",
"index.html": "6e06be0d60383d9fdf36760314eea0e7",
"/": "6e06be0d60383d9fdf36760314eea0e7",
"main.dart.js": "d2cc422aaaee84b9ba4bd4d2ce0f46c2",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e8d91a9e7c1c778c53410f6c0c93f071",
".git/config": "4c824732298aedd787d9814a16d9f49e",
".git/objects/50/894649f69738f1c94e1b2117106a099dc4c083": "71c0a1db96c2b0b326fb4a45bbdf1a01",
".git/objects/3b/96955a9fc5b84f0ac04fddea7c4c93ae0b388a": "a3b25984d98cb06fee781c99e479b4d1",
".git/objects/6f/9d690768c51c8bc6dcb6ea9b82b1da2d224218": "c6763e4b6c31776babbc8a68747ce026",
".git/objects/6f/e7bb8f394dfb38cf56a9570ad21af6f5e160af": "aa716dc9fff939acda562926ec16064d",
".git/objects/03/1700a2a66958e0fb5ac174fe6b0ebe81382a06": "6ef006a146c8bedc29eabb236d41cb81",
".git/objects/9b/7fb7de30c2d38403bc230f8bb5db8a1c8b95bb": "d3db02883d972ed57046c269a44abced",
".git/objects/9b/17c015802259ef11863672c6d49f6eebcf32d8": "0990cf8f1b79576f2bfdfa3a3dcca15f",
".git/objects/35/40e7e7361ce6b7ee4f5eac5f64a4e8d4e18bd6": "04eb7c6d3990cd6c7bf05621ca51f7b1",
".git/objects/69/7a43c811fbeb6feb9e0c56404bb792af6492b6": "2c035f6838692d99f4b7923fe3520b78",
".git/objects/69/23f9c68747a3679fe0c47c6c3790a75eac1ab0": "54950e6b6954f81502bce4df7b20d428",
".git/objects/51/198ff365dca9b014ccd13909ab78956f6793d0": "96e77f54d69a109e8afd6dd727f4f236",
".git/objects/58/7ce56cffd68ab09e5ee895236625ccc98b5976": "1c91953225ab45a67762de2504dae594",
".git/objects/67/b51ecbfcc3a7cd1815f9fc26db1c46d31b9290": "318efc9d1b9641af0e309251b75515b2",
".git/objects/67/09c656c32246b20267d2f6481ef99fd7480952": "059285bad876ed906a459720c64ced64",
".git/objects/0e/adbd02b826424d644b4c6a24635283371e7d2b": "5ff21a85f47c838ae5e795e5950099fd",
".git/objects/5f/e8a3dc7ba509de1000c21a5ae1aa2787cdd103": "772e7f4101e56a8d98af6eb032767f40",
".git/objects/b5/4093298c44739c14031945a39a917ec2d40446": "b66669583f55ee4b0cce1ca3c517dc84",
".git/objects/ad/b13c9e2ca8085160cbf4078d416dc9462bf0bc": "8016992bd4feefa1865926bc52230302",
".git/objects/b3/cf84303ccb22a147db0f315b76e3e0e766efad": "3d5b0cd287614cd03ae031f5640952a3",
".git/objects/a5/49ae6925187206ed8b6b8f2d3a4bb2b1478ba1": "574b81d46d8253de2c2a56d16a596745",
".git/objects/d1/e96a54141b8cc9bd8a457ee54be11373f930cc": "596d7aeaf4dabea2ab58748281f078ce",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/65ecc5ab9657fa9362434c57d2c8db06bba4eb": "cc26f30e30dea25b3612cc9ae4426d36",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/7c46c3f94a1a825d54d8fcac30141d96cdf44e": "a0027f484801b3ddb71177973ad81cb0",
".git/objects/c0/c54375d9c5c5a0eb4ee8e8c95b948009672f61": "044e934526ac4d79c26c5fc88c89dd20",
".git/objects/cf/1d0e73d84ff37048877b96039f6fa4c8eeb2d1": "97a76a37c23eceb7a7e65e946de41264",
".git/objects/c8/ff54b5c11a868e6ad1bc14c27d9ef3dcd748a2": "9b25712c7e22e746c01da6191f31dc19",
".git/objects/c8/d353bdd1cdcaf35906557c44601893bc5d36af": "7a033256f8aa9cc942e7cf48cb5013a3",
".git/objects/7d/87fcdda5d3472b879339ed972ab0c890ab22b2": "a295bff43492f2c2d132f9bfb7649645",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/73/161ed2e7b4edfbd4616073a7239045c16ec5fe": "eed062788b0202235bba176016141ab7",
".git/objects/87/407cc8191d4732bb7a050bb1aa330e50bab892": "a06a986a007c0ee040f9a2b8b4e58128",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/28/6f3425a17fc50c1f7588e2a571ac8217415e00": "3d971492ecf83f5bc24b6b98e42b6fcc",
".git/objects/7b/a27039d3b68769f988ac7d52d7cb510f4d52dc": "8c26105da6c4eda02c289ac37e645fd3",
".git/objects/8a/3509a0b3c35463cf1f22bb01c10900d007e7a0": "59ecf17c4157243d4b56e3668de85d38",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/bf455c59aecb9a7e4e85bbfddd6150f48797a5": "6ba4e55719ae7d1419db1fe27e5b7410",
".git/objects/10/f2f10c65f0e610b7fdf512f4ee67d76ddc2166": "4d1a45acaca979ad90e3d9e041b98bde",
".git/objects/19/ef4e5d44b723eccf19e8d57aa14785cad14a9f": "0072a5a73b1df1c5f24fea50f1cba62b",
".git/objects/26/171dc7940598b6dce824d71c720af83d13b70d": "840043c009f02fc343bb42677265fc92",
".git/objects/21/674ab80f525775e3e16236050bba22b875a3fe": "f651dfccae6ac3a11b888569e07dd7d7",
".git/objects/2f/d2a0c7fbfd084a6b3014a112a432f8738906b0": "7075ac4f54bde95f1a56cd48efc07d2b",
".git/objects/2f/668d824141e8a492565189b558b8923ccb4f77": "a17d6c94e00c0e7a30e3040ce88b11d0",
".git/objects/43/5dea476967d16d95a9998f15903df22ca09277": "3784637c19b8522cbd002b244651cf8f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/484caa76f64470ab0e46dc8cbd69a833382833": "2901d0dfc72d04c65627cb5b6e01c024",
".git/objects/36/f1845263f946c143106eceb9ca0b331cd31001": "573f457d4b26a53680acb4e940861f3c",
".git/objects/31/49f1365d8440a5d33010a95986caa3739f0618": "9c09b259ffc6d36627678dd857b85845",
".git/objects/3a/23964448ec8b2847893bb320e24042b0bfbe91": "771126ac8c7bf9449f2a5149016260c0",
".git/objects/3a/d080af3e473fdaddcf00d14e36174b8c416f45": "cd7d6579b58e400424944247b39f86b4",
".git/objects/53/2c415cccac105ffa4930a0d3ebd76a1c9a4873": "0d14a8d0add3d35c9b7bc8c3729cf25b",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/30/3f984ea1dc736d33cbd99cd0de4fe46bed992d": "bc6c10e594cad52e4fa96d5a2f5d0f5a",
".git/objects/37/5aeaff3b3110338e08eb93ddc89ffeec2b3642": "85b7258d2125e05b38db5b54d64d593f",
".git/objects/01/46c34d09baf412b89eeaf63cec2527c40cece9": "85b772fe34d9a38914bf0556991b68eb",
".git/objects/6c/5c71e9547e36ebef6ebd45e3a6b2c2ef6681c3": "fc7741d065acbab91b0329ef34993374",
".git/objects/55/b0be30afd405f3e6e7c2184313b224511011a6": "e26ba921bcfe511081f405df13e62eeb",
".git/objects/97/48a678deca6196eef827b969ff9ebf0d532a09": "3b20d743509aaf2efeb704c9095302e7",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/63/1f816c0223984503a74de7f27abea9788b594e": "91f6f5fb7551b4246bac88152d653a5c",
".git/objects/0f/0bd1c66820e635c9ac9468a99b8a9a09cfe819": "e7be9a33114f91243158f4bb7ce35be4",
".git/objects/90/8498dc363f0dfef7f303099ff883f6d7a4cef0": "b1b6cdc426ff4f30f1a655cb254b424c",
".git/objects/bf/bdc96699e37b9df0e4a98458e5e20369ec4a20": "068dfe55578be170f657b2a8dff5bf97",
".git/objects/a0/3beb6fa8c118674a474fbdcdfb86c239eab841": "43a00d80390972ffc914306490df92b4",
".git/objects/b8/72695a45d63417d0ee58a8a4ee1ff051f8e09e": "121283440097d08ca2c4838be9232582",
".git/objects/dd/c449d81897288b09a417383105d6ee2b123766": "7646e921de4d153809a2dd3b26675724",
".git/objects/aa/9decdc2504e28b9e2fdb57b48e866af073235b": "822f62f205addd15c60ebf114e2279a0",
".git/objects/b7/06ad633ea253cc0bd4800ddc679ea33d217c8b": "4116407db964cea05bc5f61fef8d1ed1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/e60e59f32804216ac316933619a388ba8118a1": "2ede90111fcb8bcf7b63304c0cf0aab6",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/dd9e031c08db756a4c7958255420b487d45735": "6627c96e547192c78bdfa8e5a14492ff",
".git/objects/e6/3e71bda22e7ddf39ae2307efab07c66e77ce45": "c1f9a0a8a442008f9dfcda96cfa8e0c5",
".git/objects/e6/dec835770d118839151f1de0eca0d94ae5cad9": "da8f368e7c4b7d1441d631eb611f00a5",
".git/objects/f0/7d7224dda837faa6bd8b034ddb179a7ba8cca3": "d244e33f010819fe708c52283b25ad09",
".git/objects/ff/15f6fa1bf4fc12c0f8e3a7de44dfa0129e6349": "ac801c32b320c6aa92c5e1a6ff54a0cc",
".git/objects/f8/def0eed6cb89c73362587cfb3c710b232f9e1a": "ea68c45a1dae12dd3418e11ccfc0e84d",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/4a/a911112f5a35a94087b82ad8c0ecbdba219ef4": "875f4d7a17997d2d1d6dab6e7ab41156",
".git/objects/4a/be8565379cebea950084de1749f86898ec194d": "4439c18ea523832a87578d790ceebd6e",
".git/objects/4f/72b41f4dc5435a3eda58af0b42576121323dc3": "30adfe65eab85202df21023e03d5755a",
".git/objects/85/9d7f597f1f913e66b7e0c3913913585d47ba2c": "b7bcad3b63d5ca601a9397e2c8a64b3c",
".git/objects/1d/7eb11979e969b93e9dfb57f6a01d00cc5e11d4": "e12c61bf4d4e79359d75988df5800c3e",
".git/objects/71/74e75380769fbf4c44490e7bc76e95ee63612f": "36729f7a407725f4624cb06e60c5ed93",
".git/objects/71/ee811fe68a393e8f130144e8c22b4a90905ab4": "83d6f9d68cf6f8bfc8bff6c90bd4b658",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/78/646ab07007d28a44eebbd8eb3360d838411881": "c197c6030e6e02d5a56ddef393f35088",
".git/objects/8e/b9c41b3f4bf6a9200e1e214ac7a2859e847f07": "7b66428908dcc8b72f3358176e870237",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bb48f13ae119d898b9e36eaa7321134d",
".git/logs/refs/heads/master": "bb48f13ae119d898b9e36eaa7321134d",
".git/logs/refs/remotes/origin/master": "aa43cf0743323a97c251d11ee56c16fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "9e5df9487199ecb9a1fce53908aeab7a",
".git/refs/remotes/origin/master": "9e5df9487199ecb9a1fce53908aeab7a",
".git/index": "8061bccc64e17b36cc8c751f69af344e",
".git/COMMIT_EDITMSG": "4802fcebd761ca4f04c9a6320330fd10",
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
