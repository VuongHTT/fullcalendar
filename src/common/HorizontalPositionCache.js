
function HorizontalPositionCache(getElement, getContentDiv) {

	var t = this,
		elements = {},
		lefts = {},
		rights = {};
    var getContentDiv = getContentDiv;

	function e(i) {
		return elements[i] = elements[i] || getElement(i);
	}

    function scrollOffset() {
        return getContentDiv ? getContentDiv().scrollLeft() : 0;
    }
	
	t.left = function(i) {
		return lefts[i] = lefts[i] === undefined ? e(i).position().left + scrollOffset() : lefts[i];
	};
	
	t.right = function(i) {
		return rights[i] = rights[i] === undefined ? t.left(i) + e(i).width() : rights[i];
	};
	
	t.clear = function() {
		elements = {};
		lefts = {};
		rights = {};
	};
	
}
