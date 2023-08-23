// Avoid `console` errors in browsers that lack a console.

(function() {
		var method;

		var noop=function () {}

		;
		var methods=[ 'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
		];
		var length=methods.length;

		var console=(window.console=window.console || {});

		while (length--) {
			method=methods[length];

			// Only stub undefined methods.
			if ( !console[method]) {
				console[method]=noop;
			}
		}
	}

	());

// Place any jQuery/helper plugins in here.


$(document).ready(function() {
		$(".contentsPanel").each(function() {
				$(this).prepend('<div class="hidePanel">[hide]</div><div class="showPanel">[show]</div>');
			});


		$(".hidePanel").click(function() {
				$(this).siblings('ul').hide(150, function() {
						$(this).parent().addClass('minimizedPanel');
					});
			});

		$(".showPanel").click(function() {
				$(this).siblings('ul').show(150, function() {
						$(this).parent().removeClass('minimizedPanel');
					});
			});


	});

// accordion script


var acc=document.getElementsByClassName("accordion");
var i;

for (i=0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
			/* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
			this.classList.toggle("active");

			/* Toggle between hiding and showing the active panel */
			var panel=this.nextElementSibling;

			if (panel.style.display==="block") {
				panel.style.display="none";
			}

			else {
				panel.style.display="block";
			}
		});