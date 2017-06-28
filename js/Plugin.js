 $(function(e){
   // $(document).ready(function(e){
            $('.search-icon').on('click',function(e){
                 $('.head').css({'display':'none'});
                 $('.input-search input').css({'display':'inline-block'});
                 $('.search-icon').html('<i class="fa fa-times" aria-hidden="true"></i>');
                 $('.search-icon').css({'color':'#ccc'})
                
                 $('.menu-icon').html('<i  class="fa fa-arrow-left" aria-hidden="true"></i>');
                   $('.menu-icon').css({'transform':'rotate(720deg)','transition':'0.8s'});
    });
            $('.menu-icon').on('click',function(e){
                $('.head').css({'display':'inline-block'});
                 $('.input-search input').css({'display':'none'});
                 $('.search-icon').html('<i class="fa fa-search" aria-hidden="true"></i>');
                 $('.search-icon').css({'color':'white'});
                 $('.menu-icon').html('<i  class="fa fa-bars" aria-hidden="true"></i>');
                 $('.menu-icon').css({'transform':'rotate(180deg)','transition':'0.8s'});
                  $('.fa-bars').on('click',function(e){
                        $('#dark').css({'transition':'0.8s','display':'block'});
                        $('#mySidenav').css({'width':'240px'});
                 });
                
    });

       
  });


function closeNav() {
 
    $('#mySidenav').css({'width':'0'});
    $('#dark').css({'transition':'0.8s','display':'none'});

}

