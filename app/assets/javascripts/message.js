$(function(){
  function buildHTML(message){
    if( message.image) {
      var html =
      `<div class = "message">
        <div class = "cat-main__content__box__top">
          <div class = "chat-main__content__box__top__name">
          ${message.user_name}
          </div>
          <div class = "chat-main__content__box__top__date">
          ${message.created_at}
          </div>   
        </div>
        <div class = "chat-main__content__box__message">
          ${message.content}
        </div>
        <img src = ${message.image} >
      </div>` 
      return html;
    } else{
      var html =
      `<div class = "message">
        <div class = "cat-main__content__box__top">
          <div class = "chat-main__content__box__top__name">
          ${message.user_name}
          </div>
          <div class = "chat-main__content__box__top__date">
          ${message.created_at}
          </div>   
        </div>
        <div class = "chat-main__content__box__message">
          ${message.content}
        </div>
      </div>`
      return html;
    };
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-main__content__box').append(html);
      $('.chat-main__content').animate({ scrollTop: $('.chat-main__content')[0].scrollHeight});
      $('form')[0].reset();
      $('.submit-btn').prop('disabled' , false);
    })
    .fail(function(){
        alert("メッセージ送信に失敗しました");

    })
  });

});