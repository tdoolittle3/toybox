

  // https://hacks.mozilla.org/2013/04/detecting-touch-its-the-why-not-the-how/
  var isTouchDevice=(('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));


$('noscript').each(function(){
      var $tgt=$(this);
      var $img=$('<img src="" />');
          $img.attr('alt',$tgt.attr('data-alt'))
          $tgt.before($img).remove();
  
      var src=$tgt.attr('data-src');
      var arr=src.split('/');
      var w=arr[arr.length-2];
      var h=arr[arr.length-1];  
          r=h/w;
      if($tgt.attr('data-lazy')=='true') {
        $img.attr('data-ratio',r);
        $img.height(r*$img.width());// Set height on lazy load images to provide dimensions
        $img.attr('data-src',$tgt.attr('data-src'));
      } else {
        $img.attr('src',$tgt.attr('data-src'));
      }

      // Waypoint lazy loader
      $img.waypoint(function(){
          $(new Image())
            .on('load',{img:this},function(e){
                $(e.data.img)
                  .css({opacity:0},0)
                  .attr('src',$(this).attr('src'))
                  .animate({opacity:1},500)
                  .removeAttr('data-ratio')
                  .removeAttr('data-src')
                  .removeAttr('style')
                        
            })
            .attr('src',$(this).attr('data-src'))
      },{
        triggerOnce:true,
        offset:(isTouchDevice?'300%':'120%')
      })

  
});
$(window).on('resize',function(){
  $('[data-ratio]').each(function(){
    var $img=$(this);
    $img.height( $img.width() * $img.attr('data-ratio') )
  });
});