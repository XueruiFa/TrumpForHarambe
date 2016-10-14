var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
	var element = elements[i];
	for (var j = 0; j < element.childNodes.length; j++) {
		var node = element.childNodes[j];
		if (node.nodeType === 3) {
			var text = node.nodeValue;
			var rt1 = text;

			if (text.includes('Trump')) {
				text = text.replace('Trump', 'Harambe');
				if (text.includes('Donald J.')) {
					text = text.replace('Donald J.', '');
				}
				if (text.includes('Donald John')) {
					text = text.replace('Donald John', '');
				}
				if (text.includes('Donald')) {
					text = text.replace('Donald', '');
				}
        		element.replaceChild(document.createTextNode(text), node);
			}
		}
	}
}

// if (containsTrump) {
// 	alert('Reaches here');
// 	var images = document.getElementsByTagName('img');
// 	for (var i = 0; i < images.length; i++) {
// 		images[i].src = "../harambe.png";
// 	}

// }
