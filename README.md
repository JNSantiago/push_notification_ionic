# push_notification_ionic

##### Função usando Kreait firebase Laravel

```php
<?php

namespace App\Http\Controllers;
use Carbon\Carbon;

use App\Http\Controllers\Controller;
use Kreait\Firebase\Messaging\CloudMessage;

// Firebase Modules
use Kreait\Firebase\Factory;
use Kreait\Firebase\ServiceAccount;
use Kreait\Firebase\Messaging\Notification;

use Illuminate\Routing\Controller as BaseController;

class NotificationFcmController extends BaseController
{
    public function index() {
        $deviceToken = '...';
        $notification = ['titulo' => 'Teste'];
        $content = ['content' => 'Teste de Notificação'];

        $message = CloudMessage::withTarget('token', $deviceToken)
            ->withNotification(Notification::create('Title', 'Body'))
        ;

        $serviceAccount = ServiceAccount::fromJsonFile(__DIR__.'/pushionic.json');
        $firebase = (new Factory)
            ->withServiceAccount($serviceAccount)
            ->withDatabaseUri('https://pushionic-502b7.firebaseio.com')
            ->create();
        $messaging = $firebase->getMessaging();
        $messaging->send($message);

        return [];
    }
}
```
