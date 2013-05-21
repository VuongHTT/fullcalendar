
function CoordinateGrid(buildFunc) {

	var t = this;
	var rows;
	var cols;
	
	
	t.build = function() {
		rows = [];
		cols = [];
		buildFunc(rows, cols);
	};
	
	
	t.cell = function(x, y) {
		var rowCnt = rows.length;
		var colCnt = cols.length;
		var i, r=-1, c=-1;

        var scrollTopOffset = 0;
        var scrollLeftOffset = 0;
        if ($(".fc-grid")[0]) {
            scrollTopOffset = $(".fc-grid").scrollTop();
            scrollLeftOffset = $(".fc-grid").scrollLeft();
            console.log("scrollTopOffset=" + scrollTopOffset);
            console.log("scrollLeftOffset=" + scrollLeftOffset);
        }

		for (i=0; i<rowCnt; i++) {
            if (y + scrollTopOffset >= rows[i][0] && y + scrollTopOffset < rows[i][1]) {
				r = i;
				break;
			}
		}
		for (i=0; i<colCnt; i++) {
            if (x + scrollLeftOffset >= cols[i][0] && x + scrollLeftOffset < cols[i][1]) {
				c = i;
				break;
			}
		}
		return (r>=0 && c>=0) ? { row:r, col:c } : null;
	};
	
	
	t.rect = function(row0, col0, row1, col1, originElement) { // row1,col1 is inclusive
		var origin = originElement.offset();
		return {
			top: rows[row0][0] - origin.top,
			left: cols[col0][0] - origin.left,
			width: cols[col1][1] - cols[col0][0],
			height: rows[row1][1] - rows[row0][0]
		};
	};

}
