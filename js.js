

	// set the element to visible
	var movableTextElements = element.getElementsByClassName("movableText");
	for(var i = 0; i < movableTextElements.length; i++) {
		var textElement = movableTextElements[i];
		hypeDocument.setElementProperty(textElement, 'opacity', 1.0);
		textElement.style["display"] = "block";

		// make sure the text element movement won't interfere with on move positions
		textElement.style["pointer-events"] = "none";
		textElement.style["pointerEvents"] = "none";
	}

	// add a hook for on mouse move
	if(element.onmousemove == null) {
		element.onmousemove = (function (evt) {
			var movableTextElements = element.getElementsByClassName("movableText");
			for(var i = 0; i < movableTextElements.length; i++) {
				hypeDocument.setElementProperty(textElement, 'left', evt.offsetX);
				hypeDocument.setElementProperty(textElement, 'top', evt.offsetY);
			}
		});
	}

	// trigger position change for the initial mouse over
	element.onmousemove(event);

  var movableTextElements = element.getElementsByClassName("movableText");
for(var i = 0; i < movableTextElements.length; i++) {
    var textElement = movableTextElements[i];
    hypeDocument.setElementProperty(textElement, 'opacity', 0.0);
}
