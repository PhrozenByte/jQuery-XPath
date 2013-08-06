/**
 * xpath plugin for jQuery
 * Version 1.1 (build 2013-08-07)
 * 
 * Returns the xpath of an given element.
 * 
 * INSPIRED BY:
 * 	Firebug v1.11.1 <https://getfirebug.com/>
 * 	"The most popular and powerful web development tool"
 * 	
 * 	The functionality is pretty much an abstract of extension/content/firebug/lib/xpath.js
 * 	<https://github.com/firebug/firebug/blob/firebug-1.11.1/extension/content/firebug/lib/xpath.js>
 * 	
 * COPYRIGHT AND LICENSING:
 * 	Copyright (c) 2009, Mozilla Foundation
 * 	All rights reserved.
 * 	
 * 	Redistribution and use of this software in source and binary forms, with or without modification,
 * 	are permitted provided that the following conditions are met:
 * 	
 * 	* Redistributions of source code must retain the above
 * 	  copyright notice, this list of conditions and the
 * 	  following disclaimer.
 * 	
 * 	* Redistributions in binary form must reproduce the above
 * 	  copyright notice, this list of conditions and the
 * 	  following disclaimer in the documentation and/or other
 * 	  materials provided with the distribution.
 * 	
 * 	* Neither the name of Mozilla Foundation nor the names of its
 * 	  contributors may be used to endorse or promote products
 * 	  derived from this software without specific prior
 * 	  written permission of Mozilla Foundation.
 * 	
 * 	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
 * 	IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 * 	FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
 * 	CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * 	DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * 	DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
 * 	IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT
 * 	OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * 
 * @author	Daniel Rudolf
 * 		<http://www.daniel-rudolf.de/>
 * @copyright	2009 Mozilla Foundation
 * 		<http://www.mozilla.org/foundation/>
 * @license	3-clause BSD
 * 		<https://github.com/firebug/firebug/blob/firebug-1.11.1/extension/license.txt>
 */
(function($) {
	/**
	 * Returns the xpath of the first element in the set of matched elements.
	 * 
	 * @param	bool	forceTree
	 * @return	string
	 */
	$.fn.xpath = function(forceTree) {
		if(this.length == 0) {
			return null;
		}
		
		var element = this.get(0);
		var $element = $(element);
		if($element.attr('id') && ((forceTree == undefined) || !forceTree)) {
			return '//*[@id="' + $element.attr('id') + '"]';
		} else {
			var paths = [];
			for(; element && element.nodeType == Node.ELEMENT_NODE; element = element.parentNode) {
				var index = 0;
				for(var sibling = element.previousSibling; sibling; sibling = sibling.previousSibling) {
					if(sibling.nodeType == Node.DOCUMENT_TYPE_NODE)
						continue;
					if(sibling.nodeName == element.nodeName)
						++index;
				}

				var tagName = element.nodeName.toLowerCase();
				var pathIndex = (index ? '[' + (index + 1) + ']' : '');
				paths.splice(0, 0, tagName + pathIndex);
			}

			return paths.length ? '/' + paths.join('/') : null;
		}
	}
})(jQuery);
