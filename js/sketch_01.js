document.body.addEventListener('touchstart', process_touchstart, false);
document.body.addEventListener('touchmove', process_touchmove, false);
document.body.addEventListener('touchcancel', process_touchcancel, false);
document.body.addEventListener('touchend', process_touchend, false);


var colors = ['#ff0000', '#00ff00', '#0000ff'];

function process_touchend(ev) {
	
	// set the background to a new color
	
	var index = Math.floor(Math.random(3));

	document.body.style.backgroundColor = colors[index];
}

// touchstart handler
function process_touchstart(ev) {
  // Use the event's data to call out to the appropriate gesture handlers
  switch (ev.touches.length) {
    case 1: handle_one_touch(ev); break;
    case 2: handle_two_touches(ev); break;
    case 3: handle_three_touches(ev); break;
    default: gesture_not_supported(ev); break;
  }
}

function handle_one_touch(ev) {

}

function handle_two_touches(ev) {
	
}

function handle_three_touches(ev) {
	
}

function gesture_not_supported(ev) {

}


// Create touchstart handler
// dom.addEventListener('touchstart', function(ev) {
//   // Iterate through the touch points that were activated
//   // for this element and process each event 'target'
//   for (var i=0; i < ev.targetTouches.length; i++) {
//     process_target(ev.targetTouches[i].target);
//   }
// }, false);

// touchmove handler
function process_touchmove(ev) {
  // Set call preventDefault()
  ev.preventDefault();
}