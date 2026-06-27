// 通知を表示するだけのシンプルな処理
self.addEventListener('push', function(event) {
    const data = event.data ? event.data.json() : { title: 'マイ・ポータル', body: '通知があります！' };
    event.waitUntil(
        self.registration.showNotification(data.title, {
          body: data.body,
          icon: 'https://cdn-icons-png.flaticon.com/512/1048/1048953.png'
        })
    );
});