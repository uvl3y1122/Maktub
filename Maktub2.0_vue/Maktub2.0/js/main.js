$(function(){
    // var byId = function (id) { return document.getElementById(id); },

	// 	loadScripts = function (desc, callback) {
	// 		var deps = [], key, idx = 0;

	// 		for (key in desc) {
	// 			deps.push(key);
	// 		}

	// 		(function _next() {
	// 			var pid,
	// 				name = deps[idx],
	// 				script = document.createElement('script');

	// 			script.type = 'text/javascript';
	// 			script.src = desc[deps[idx]];

	// 			pid = setInterval(function () {
	// 				if (window[name]) {
	// 					clearTimeout(pid);

	// 					deps[idx++] = window[name];

	// 					if (deps[idx]) {
	// 						_next();
	// 					} else {
	// 						callback.apply(null, deps);
	// 					}
	// 				}
	// 			}, 30);

	// 			document.getElementsByTagName('head')[0].appendChild(script);
	// 		})()
	// 	},

	// 	console = window.console;


	// if (!console.log) {
	// 	console.log = function () {
	// 		alert([].join.apply(arguments, ' '));
	// 	};
    // }
    // // Editable list
    // var editableList = Sortable.create(byId('foo6'), {
    //     group: "words",
    //     animation: 150,
    //     filter: '.cancel',
    //     onFilter: function (evt) {
    //         evt.item.parentNode.removeChild(evt.item);
    //     }
    // });

    // byId('addmember').onclick = function () {
	// 	Ply.dialog('prompt', {
	// 		title: 'Add Member',
	// 		form: { name: 'name', job: 'job',}
	// 	}).done(function (ui) {
	// 		var el = document.createElement('li');
	// 		el.innerHTML = ui.data.name + '<select class="custom-select"><option>'+ui.data.job+'</option></select><div class="cancel"><img src="img/SVG/cancel.svg" alt=""></div>';
	// 		editableList.el.appendChild(el);
	// 	});
    // };
})