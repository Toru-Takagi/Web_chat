var initSocket = function(){
    // connect socket.io
    s.on('connect', function(){
        console.log('接続完了');
        s.emit('userName', name);
    });
    // disconnect socket.io
    s.on('disconnect', function(){
        console.log('接続解除');
    });
    // get users
    s.on('users', function(users){
        // ユーザーエリアの子要素をすべて削除
        jQuery('#users').empty();
        // ユーザーエリアにユーザーの表示
        users.forEach(function(user){
            jQuery('#users').append('<p>' + user.name + '</p>');
        });
    });
    // get chat text
    s.on('S_To_C_chatText', function(obj){
        if(parseInt(obj.minute) < 10){
            obj.minute = '0' + obj.minute;
        }
        jQuery('#chat_area').prepend('<dd>' + obj.text + '</dd>');
        jQuery('#chat_area').prepend('<dt>' + obj.name + '     ' + obj.hour + ':' + obj.minute + '</dt>');
    });
}
