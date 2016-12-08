var tl,
    imagesLoaded = false,
    backup = false;

$(document).ready(function(){
  preloadAssets();
});

function preloadAssets() {

    var i = [
      "logo_aa.svg",
      "logo-qantas-colour.svg",
      "logo-qantas-mono.svg",
      "shape-mask.svg",
      "shape-red.svg",
      "shape-blue.svg",
      "shape-red-end-frame.svg",
      "shape-red-end-frame2.svg"
    ];

    preloadimages(i).done(function (images) {

        imagesLoaded = true;
        beginAmimation();
    })
}

function beginAmimation(){
  console.log("start animation");

  //start coding here....

  var $loader       = $('.loader'),
      $container    = $('.container'),
      $ctaText      = $('#cta-text'),
      $button       = $('#background_exit_dc'),
      $greyBorder   = $('.grey-border'),
      $overlay      = $('.overlay'),
      $f1           = $('#f1-copy'),
      $f2           = $('#f2-copy'),
      $qntContainer = $('#qantas-logo-container'),
      $qntLogo      = $('#qantas-logo-mono'),
      $qntLogo1     = $('#qantas-logo-color'),
      $logoDivider  = $('#logo-divider'),
      $aaLogo       = $('#aa-logo'),
      $f4           = $('#f4-copy'),
      $termsWrap    = $('.terms-wrapper'),
      $shapes       = $('.shapes'),
      $blueShape    = $('#blue-shape'),
      $redShape     = $('#red-shape'),
      $maskShape    = $('#mask-shape'),
      $whiteShape   = $('#white-shape'),
      $redShapeEF   = $('#red-shape-end-frame'),
      $redShapeEF2  = $('#red-shape-end-frame2')
      $video        = $('#video'),
      $bgImage      = $('.bg-image');

  // defining the master timeline
  var master = new TimelineMax();

  // setting the initial position and rotation
  master.set($maskShape, {xPercent: -1, rotation: 180, scale: 0.4});
  master.set($blueShape, {rotation: 200});
  master.set($redShape, {rotation: 150});
  master.set($whiteShape, {rotation: -90});
  master.set($qntLogo, {y: -30});
  master.set($aaLogo, {y: 30});
  master.set($logoDivider, {scale: 0.1});
  master.set($f4, {y: -100});
  master.set($ctaText, {scale: 0.3});

  // #pre animation: remove the loader
  $loader.hide();

  // #1 animation: rotate, scale and adjust elements position and show the text 1
  master.to($shapes, 1.5, {xPercent: 3, yPercent: 2.5, scale: 1.5, rotation: -180, ease:Power4.easeInOut});
  master.to($maskShape, 1.5, {xPercent: -2.5, yPercent: 0, scale: 1, ease:Power1.easeOut}, '-=1.5');
  master.to($maskShape, 0.5, {scale: 2, xPercent: -5, ease:Power4.easeInOut}, '-=0.2');
  master.to($blueShape, 1.5, {x: 60, y: -80, rotation: -10, autoAlpha: 0.5, scale: 1.5, ease:Power0.easeOut}, '-=1.5');
  master.to($redShape, 1, {x: -90, y: 30, scale: 5.5, ease:Power0.easeOut}, '-=1.5');
  master.to($f1, 0.5, {autoAlpha: 1, delay: 0.3}, '-=1.5');

  //#2 animation:
  master.to($whiteShape, 1.5, {y: -90, autoAlpha: 1}, '-=0.5');
  master.to($redShape, 1, {y: 50}, '-=1.5');
  master.to($blueShape, 1.5, {x: 100, y: -150}, '-=1.5');

  // #3 animation: swipe texts
  master.to($f1, 0.8, {autoAlpha: 0, delay: 2});
  master.to($f2, 0.8, {autoAlpha: 1, delay: 2}, '-=1.8');

  // #4 animation: rotate, scale and adjust elements position and show the logos
  master.to($shapes, 1.5, {rotation: -300, ease:Power4.easeInOut}, '+=1');
  master.to($whiteShape, 1.5, {x: -90, y: -90, rotation: -60, scale: 2.5}, '-=1.5');
  master.to($redShape, 1.5, {x: -30, y: 0, scale: 20}, '-=1.5');
  master.set($redShape, {scale: 35});
  master.to($qntLogo, 1, {y: 0, autoAlpha: 1}, '-=1');
  master.to($aaLogo, 1, {y: 0, autoAlpha: 1}, '-=1');

  // #5.1 animation: rotate, scale and adjust elements positions
  master.to($whiteShape, 1.5, {y: 110, x: 0, scale: 3.5, rotation: -210}, '+=1');

  // #5.2 animation: swipe and adjuste logos positions
  master.to([$qntContainer, $aaLogo], 1.5, {xPercent: -20, y: 78}, '-=1.5');
  master.to($qntLogo, 1.5, {autoAlpha: 0}, '-=1.5');
  master.to($qntLogo1, 1.5, {autoAlpha: 1}, '-=1.5');
  master.to($logoDivider, 1, {scale: 1, autoAlpha: 1}, '-=1');

  // #6.1 animation: show tems and text
  master.to($termsWrap, 0.5, {autoAlpha: 1}, '-=0.5');
  master.to($f4, 0.5, {y: -50, autoAlpha: 1, ease:Power0.easeOut}, '-=0.5');

  // #6.2 animation: show and scale cta button
  master.to($ctaText, 1, {scale: 1, autoAlpha: 1, ease:Power0.easeOut}, '-=0.5');

}

// CLOSE BANNER
closeBanner = function () {
  // remove banner
  console.log('remove banner');
}
// CLICK BANNER
clickBanner = function () {
  // open qantas landing page
  console.log('open qantas landing page');
}

function exit() {
  $('#background_exit_dc').on('click', closeBanner);
  $('.button').on('click', clickBanner);
}

// PRE-LOAD IMAGES FUNCTIONALITY ------------------------------------------------------------
function preloadimages(arr) {

    var newimages = [],
        loadedimages = 0
    var postaction = function () {}
    var arr = (typeof arr != "object") ? [arr] : arr

    function imageloadpost() {
        loadedimages++
        if (loadedimages == arr.length) {
            postaction(newimages) //call postaction and pass in newimages array as parameter
        }
    }
    for (var i = 0; i < arr.length; i++) {
        newimages[i] = new Image()
        newimages[i].src = arr[i]
        newimages[i].onload = function () {
            imageloadpost()
        }
        newimages[i].onerror = function () {
            imageloadpost()
        }
    }
    return { //return blank object with done() method
        done: function (f) {
            postaction = f || postaction //remember user defined callback functions to be called when images load
        }
    }
}
