// check for document
if(app.documents.length > 0){  
	// get active document
	var psDoc = app.activeDocument; 
	
	var numCols = parseInt( prompt("Number of Columns", 12) );  
	var colWidth = parseInt( prompt("Columns Width", 60) );  
	var gutterWidth = parseInt( prompt("Gutter Width", 20) );
	var totalWidth = parseInt((numCols * colWidth) + (gutterWidth * numCols - gutterWidth));
	 
	var docWidth = parseInt(psDoc.width.value);

	var startValue = parseInt((docWidth - totalWidth) / 2);
	
	for(i = startValue; i <= (totalWidth+startValue); i=i+(colWidth+gutterWidth) ) {
		psDoc.guides.add(Direction.VERTICAL, i);  
	}  
	
	for(i = (startValue+colWidth); i <= (totalWidth+startValue+colWidth); i=i+(colWidth+gutterWidth) ) {
		psDoc.guides.add(Direction.VERTICAL, i);  
	}  

}  