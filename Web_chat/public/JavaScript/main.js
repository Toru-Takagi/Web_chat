var name;
jQuery(function(){
    // 初期設定
    jQuery('#glayLayer').fadeIn('slow');
    jQuery('#overLayer').slideDown('slow');
    // 名前送信処理
    jQuery('#name_form').submit(function(){
        var name_text = document.getElementById('name_text');
        name = name_text.value;
        name_text = "";
        jQuery('#overLayer, #glayLayer').fadeOut('slow');
        // ユーザーエリアにユーザーの表示
        jQuery('#user_area').append('<p>' + name + '</p>');
        return false;
    });
    // チャット送信処理
    jQuery('#chat_form').submit(function(){
        jQuery('#chat_area').prepend('<p>' + name + '>' + jQuery('input[name="text"]').val() + '</p');
        document.getElementById('chat_text').value = "";
        return false;
    });
    // user_areaの非表示
    jQuery('#user_area a').click(function(){
        jQuery('#user_area').animate({
            'width': '0px'
        }, 'slow', 'swing', function(){
            jQuery('#user_area').hide('fast');
            jQuery('#next_area').show('slow');
        });
    });
    // user_areaの表示
    jQuery('#next_area a').click(function(){
        jQuery('#next_area').hide();
        jQuery('#user_area').css('width', '150px');
        jQuery('#user_area').show('slow');
    });    
});