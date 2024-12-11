class NotificationFactory {
    createNotification(type) {
        switch(type) {
            case 'email':
                return new EmailNotification();
            case 'sms':
                return new SMSNotification();
            case 'push':
                return new PushNotification();
            default:
                throw new Error('Unknown notification type');
        }
    }
}

class EmailNotification {
    send(message) {
        console.log(`Sending email: ${message}`);
    }
}

class SMSNotification {
    send(message) {
        console.log(`Sending SMS: ${message}`);
    }
}

class PushNotification {
    send(message) {
        console.log(`Sending Push Notification: ${message}`);
    }
}
