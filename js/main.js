(function ($) {
    $('#header_icon').click(function (e) {
        e.preventDefault();
        $('body').toggleClass('with--sidebar');
    })
    $('#site-cache').click(function (e) {
        $('body').removeClass('with--sidebar');
    })
    $('.field-input').focus(function(){
        $(this).parent().addClass('is-focused has-label');
    });
    $('.field-input').blur(function(){
        $parent = $(this).parent();
        if($(this).val() == ''){
            $parent.removeClass('has-label');
        }
        $parent.removeClass('is-focused');
    });
})(jQuery);
tinymce.init({
    selector: 'textarea',
    height: 500,
    menubar: false,
    plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table contextmenu paste code'
    ],
    toolbar: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
    content_css: '//www.tinymce.com/css/codepen.min.css'
});