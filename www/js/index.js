
function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    window.alert("HERE")

  if (navigator.notification) {
      window.alert = function (message) {
          navigator.notification.alert(
              message,    // message
              null,       // callback
              "My Awesome App", // title
              'OK'        // buttonName
          );
      };
    }
    window.alert("HERE")

    var success = function (hasPermission) {
        if (!hasPermission) {
            sms.requestPermission(function() {
                console.log('[OK] Permission accepted')
                alert("OKAY HAVE PERM")


            var options = {
                replaceLineBreaks: false, // true to replace \n by a new line, false by default
                android: {
                    intent: 'INTENT'  // send SMS with the native android SMS messaging
                    //intent: '' // send SMS without opening any other app, require : android.permission.SEND_SMS and android.permission.READ_PHONE_STATE
                }
            };

            var success = function () { alert('Message sent successfully'); };
            var error = function (e) { alert('Message Failed:' + e); };
            sms.send("8434259777", "Hello world", options, success, error);





            }, function(error) {
                console.info('[WARN] Permission not accepted')
                // Handle permission not accepted
            })
        }
    };
    var error = function (e) { alert('Something went wrong:' + e); };
    sms.hasPermission(success, error);



}

document.addEventListener('deviceready', onDeviceReady, false);
