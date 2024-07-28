//  light box start............
    lightbox.option({
      'resizeDuration': 1000,
      'wrapAround': true
    })
// light bo0x end...............


// veno box start.........
new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});

// for video
new VenoBox({
    selector: '.my-video-links',
});
// for video


// veno box end

// mixit up start
var containerEl = document.querySelector('.container');

var mixer = mixitup(containerEl);

// mixit up end