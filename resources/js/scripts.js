$(Document).ready(
    function(){
        $('.about-section').waypoint(
            function(direction){
                  if(direction == "down"){
                      $('nav').addClass('sticky');
                  }else{
                      $('nav').removeClass('sticky');
                  }
            },{
                offset:'700px'
            }
        )
        alert('CHÀO MỪNG CÁC BẠN ĐÃ ĐẾN VỚI WEBSITE CỦA CHÚNG TÔI')
        $('.chu').click(
            function(){
                $(this).css('color','blue')
            }
        )
        // ----------lệnh này làm co traang web cuộn xuống các phần được mượt mà hơn--------------------------------
        $('a').click(function(event){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 500);
            event.preventDefault();
        });
    }
)