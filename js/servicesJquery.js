$(function(){

    $('#gold').on('click',function(){
        $('#gold p').show();
        $('#bronze p').hide();
        $('#silver p').hide();
        $('#gold img').show();
        $('#silver img').hide();
        $('#bronze img').hide();
    })

    $('#silver').on('click',function(){
        $('#silver p').show();
        $('#gold p').hide();
        $('#bronze p').hide();
        $('#silver img').show();
        $('#gold img').hide();
        $('#bronze img').hide();
    })

    $('#bronze').on('click',function(){
        $('#bronze p').show();
        $('#silver p').hide();
        $('#gold p').hide();
        $('#bronze img').show();
        $('#gold img').hide();
        $('#silver img').hide();
    })
});