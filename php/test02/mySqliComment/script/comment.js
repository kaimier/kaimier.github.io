(function($){
    var flag=false;
    $('#addCommentForm').submit(function(e) {
        e.preventDefault();
        if(flag) return false;
        flag=true;
        $('#submit').val('发布...');
        $('span.error').remove();
        $.post('doAction.php',$(this).serialize(), function(msg) {
            flag=false;
            $('#submit').val('发布评论');
            if(msg.status){
                $(msg.html).hide().insertBefore('#addCommentContainer').slideDown();
                $('#content').val('');
            }else{
                $.each(msg.errors, function(k,v) {
                    $('label[for='+k+']').append('<span class="error">'+v+'</span>');
                });
            }
        },'json');
    });
})(jQuery);