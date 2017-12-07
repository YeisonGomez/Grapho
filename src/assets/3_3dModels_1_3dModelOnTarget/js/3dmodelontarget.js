var resources;
var World = {
	loaded: false,
	rotating: false,

	init: function initFn() {
		var http = new XMLHttpRequest();

	    http.open('GET', 'http://c5ba2782.ngrok.io/resource/get-all', true);
	    http.setRequestHeader("Content-type", "application/json");
	    http.send();

	    http.onreadystatechange = function(e) {
	        if (http.readyState == 4) {
	            if (http.status == 200) {
	                resources = JSON.parse(this.response).result;
	                
	            }
	        }
	    };
		this.createOverlays();
	},

	createOverlays: function createOverlaysFn() {
		
		this.tracker = new AR.ClientTracker("assets/Hkchl7zkG.wtc", {
			onLoaded: this.loadingStep
		});

		this.modelCar = new AR.Model("assets/test.wt3", {
			onLoaded: this.loadingStep,
			scale: {
				x: 0.095,
				y: 0.095,
				z: 0.095
			},
			translate: {
				x: 0.0,
				y: 0.0,
				z: 0.0
			},
			rotate: {
				x: -90
			},
			onClick: function(e, part) {
        		var resourceSelect;
        		for (var i = 0; i < resources.length; i++) {
        			if(resources[i].id == part.split("_")[1]){
        				resourceSelect = resources[i];
        			}
        		}
        		
        		console.log(resourceSelect);

        		var modal = new tingle.modal({
				    footer: false,
				    stickyFooter: false,
				    closeMethods: ['overlay', 'button', 'escape'],
				    closeLabel: "Cerrar",
				    cssClass: ['custom-class-1', 'custom-class-2'],
				    onOpen: function() {
				        console.log('modal open');
				    },
				    onClose: function() {
				        console.log('modal closed');
				    }
				});

        		function selectedResource(resource, type){
					console.log("jla");
					console.log(resource);
					document.getElementById((type == 0)? "origin": "destiny").value = JSON.parse(resource).name;
					modal.close();
				}
				
				modal.setContent(
					'<h1>' + resourceSelect.name + '</h1>\n' + 
					'<h4>' + resourceSelect.description + '</h4>\n' + 
					"<button onclick=\"selectedResource('" + resourceSelect.name + "', 0)\">Estoy aquí</button>\n" +
					"<button onclick=\"selectedResource('" + resourceSelect.name + "', 1)\">Quiero ir</button>"
					);

				modal.open();
		    }
		});

		var trackable = new AR.Trackable2DObject(this.tracker, "*", {
			drawables: {
				cam: [this.modelCar]
			}
		});
	},

	loadingStep: function loadingStepFn() {
		if (!World.loaded && World.tracker.isLoaded() && World.modelCar.isLoaded()) {
			World.loaded = true;
			document.getElementById('loadingMessage').innerHTML =
				'<div style="background-color: #387ef5;width: 100%;padding: 20px; ">    \n' +
			  '<div style="display: inline-block; width: 70%; vertical-align: middle;">\n' +
			    '<img style="fill:#fff" src="assets/ic_my_location_black_24px.svg">\n' +
			    '<input id="origin" style="background-color: rgb(240, 248, 254);border: 1px solid #e5f5ff; margin: 10px 0; height: 25px" type="text">\n' +
				'<img style="fill:#fff" src="assets/ic_add_location_black_24px.svg">\n' +
			    '<input id="destiny" style="background-color: rgb(240, 248, 254);border: 1px solid #e5f5ff; margin: 10px 0; height: 25px" type="text">\n' +
			  '</div>\n' +
			  '<span style="font-size: 19px; font-weight: 600; color: #fff">30m</span>\n' +
			  '</div>';

			// Remove Scan target message after 10 sec.
			/*setTimeout(function() {
				var e = document.getElementById('loadingMessage');
			 	e.parentElement.removeChild(e);
			}, 10000);*/
		}
	}
};

World.init();
