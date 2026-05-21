/* ========================================
   Service Worker — المساعد الشخصي الذكي
   يتيح العمل الكامل بدون إنترنت (Offline-First)
   ======================================== */

const CACHE_NAME = 'smart-assistant-v1';

/* قائمة الملفات التي سيتم تخزينها مؤقتاً (تم تنظيف المسارات لجيت هاب) */
const FILES_TO_CACHE = [
  'index.html',
  'style.css',
  'app.js',
  'manifest.json',
  'robot.png', // تم إضافة الأيقونة هنا لتكشيشها أوفلاين
  'sw.js'
];

/* ============================
   حدث التثبيت - تخزين الملفات
   ============================ */
self.addEventListener('install', (event) => {
  console.log('[SW] تثبيت وتخزين الملفات...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] فتح الكاش وتخزين الملفات بنجاح');
      return cache.addAll(FILES_TO_CACHE);
    }).then(() => {
      /* تفعيل SW الجديد فوراً دون انتظار */
      return self.skipWaiting();
    })
  );
});

/* ============================
   حدث التفعيل - حذف الكاش القديم
   ============================ */
self.addEventListener('activate', (event) => {
  console.log('[SW] تفعيل وتنظيف الكاش القديم...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => {
            console.log('[SW] حذف كاش قديم:', name);
            return caches.delete(name);
          })
      );
    }).then(() => {
      /* السيطرة الفورية على جميع الصفحات المفتوحة */
      return self.clients.claim();
    })
  );
});

/* ============================
   حدث الطلبات - Cache First Strategy
   يخدم من الكاش أولاً، ثم الشبكة كبديل
   ============================ */
self.addEventListener('fetch', (event) => {
  /* تجاهل الطلبات غير GET وطلبات التوصيل HMR */
  if (event.request.method !== 'GET') return;
  
  // تجاهل أي ملفات تابعة لريبلت أو الـ Dev Mode لضمان عدم حدوث تجميد أثناء التكويد
  if (
    event.request.url.includes('/@vite') || 
    event.request.url.includes('/node_modules') || 
    event.request.url.includes('replit')
  ) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      /* إذا وُجد في الكاش، أرجعه مباشرةً */
      if (cachedResponse) {
        return cachedResponse;
      }

      /* إذا لم يوجد، حاول جلبه من الشبكة وخزّنه */
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type === 'opaque') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      }).catch(() => {
        /* إذا فشلت الشبكة والنت مقطوع تماماً، افتح الصفحة الرئيسية */
        if (event.request.mode === 'navigate') {
          return caches.match('index.html');
        }
      });
    })
  );
});
