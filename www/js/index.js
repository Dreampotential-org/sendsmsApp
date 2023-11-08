document.addEventListener('deviceready', function () {
    function sendSMS(){
        var options = {
            replaceLineBreaks: false, // true to replace \n by a new line, false by default
            android: {
                intent: 'INTENT'  // send SMS with the native android SMS messaging
                //intent: '' // send SMS without opening any other app, require : android.permission.SEND_SMS and android.permission.READ_PHONE_STATE
            }
        };

        console.log('Sending SMS: ');
        var success = function () { alert('Message sent successfully'); };
        var error = function (e) { alert('Message Failed:' + e); };
        sms.send("8434259777", "Hello world", options, success, error);
    }

    sms.hasPermission(function (hasPermission) {
        if (!hasPermission) {
            sms.requestPermission(function () {
                console.log('[OK] Permission accepted')
                alert("OKAY HAVE PERM")
                sendSMS();
            }, function (error) {
                console.log(error);
                console.info('[WARN] Permission not accepted')
                // Handle permission not accepted
            })
        } else {
            sendSMS();
        }
    }, function (err) {
        console.log(err);
    });
}, false);