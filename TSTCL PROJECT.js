   
   $(document).ready(function()
   {
      $('#wb_service1').addClass('visibility-hidden');
      $('#wb_service2').addClass('visibility-hidden');
      $('#wb_service3').addClass('visibility-hidden');
      $('#wb_Heading1').addClass('visibility-hidden');
      $("a[href*='#intro']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#intro').offset().top }, 600, 'easeOutQuad');
      });
      $("a[href*='#facts']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_facts').offset().top-85 }, 600, 'easeInCubic');
      });
      $("a[href*='#services']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_services').offset().top-80 }, 600, 'linear');
      });
      $('#wb_services').parallax();
      $("a[href*='#about']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_about').offset().top-85 }, 600, 'easeInCubic');
      });
      $("a[href*='#map']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#map').offset().top-85 }, 600, 'easeInCubic');
      });
      function service1Scroll()
      {
         var $obj = $("#wb_service1");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_service1', 'transform-scale-in', 100, 2000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_service1', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_service1').inViewPort(true))
      {
         $('#wb_service1').addClass("in-viewport");
      }
      service1Scroll();
      $(window).scroll(function(event)
      {
         service1Scroll();
      });
      function service2Scroll()
      {
         var $obj = $("#wb_service2");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_service2', 'transform-scale-in', 100, 2000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_service2', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_service2').inViewPort(true))
      {
         $('#wb_service2').addClass("in-viewport");
      }
      service2Scroll();
      $(window).scroll(function(event)
      {
         service2Scroll();
      });
      function service3Scroll()
      {
         var $obj = $("#wb_service3");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_service3', 'transform-scale-in', 100, 2000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_service3', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_service3').inViewPort(true))
      {
         $('#wb_service3').addClass("in-viewport");
      }
      service3Scroll();
      $(window).scroll(function(event)
      {
         service3Scroll();
      });
      function Heading1Scroll()
      {
         var $obj = $("#wb_Heading1");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Heading1', 'swash-in', 300, 1000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_Heading1', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_Heading1').inViewPort(true))
      {
         $('#wb_Heading1').addClass("in-viewport");
      }
      Heading1Scroll();
      $(window).scroll(function(event)
      {
         Heading1Scroll();
      });
      var NewsFeedTicker1_Data = new Array();
      NewsFeedTicker1_Data[0] = ["http://", "Hello, Nice to meet you", "", ""];
      NewsFeedTicker1_Data[1] = ["http://", "Our project Focus on Creative Technology", "", ""];
      NewsFeedTicker1_Data[2] = ["http://", "We build, We develope, We Share!!!", "", ""];
      NewsFeedTicker1_Data[3] = ["http://", "Join Us", "", ""];
      $("#NewsFeedTicker1").newsviewer({ mode: 'rotate', pause: 2000, pause: 2000, animation: 4, animationDuration: 500, sortOrder: 0, dataSource: 'local', param: NewsFeedTicker1_Data, target: '_self', includeDate: false, maxItems: 10});
   });
      
   $('#map').prepend('<div id="map-inner" style="position:absolute;left:0;top:0;width:100%;height:100%"></div>');
   
   var map = new GMaps({
      el: '#map-inner',
      lat: 40.770401,
      lng: -73.967635
   });
   
   map.addMarker({
     lat: 40.7699459,
     lng: -73.9735114,
     title: 'Central Park',
     click: function(e) 
     {
       alert('You clicked in this marker');
     }
   });
         
   $(document).ready(function()
   {
      // move arrow outside the layer container
      $('#wb_down-arrow').appendTo('#intro');
   });
   