 /*    
Copyright (C) 2017  Christian Michael

The JavaScript code in this page is free software: you can
redistribute it and/or modify it under the terms of the GNU
General Public License (GNU GPL) as published by the Free Software
Foundation, either version 3 of the License, or (at your option)
any later version.  The code is distributed WITHOUT ANY WARRANTY;
without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.

As additional permission under GNU GPL version 3 section 7, you
may distribute non-source (e.g., minimized or compacted) forms of
that code without the copy of the GNU GPL normally required by
section 4, provided you include this license notice and a URL
through which recipients can access the Corresponding Source.   
*/

$(function(){
	var phonelinks = $('a[href^="tel:"]');
	
	// do nothing if no phonelinks on page
	if(phonelinks.length < 1) return;
	
	// is mobile
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		var setPhoneLink = function($link){
			var href = $link.getAttribute('href');
			var countrycodes = {default: '49'};
			
			href = href.replace(/tel\:/g, '')
			href = addCountrycode(href, countrycodes.default)
			if(href.length > 0){
				href = 'tel:' + href;
				$link.setAttribute('href', href);
			}
		}
		
		var addCountrycode = function(href, countrycode){
			if (href.charAt(0) === '+') return '+' + href.replace(/\D+/g, '');
			if (href.charAt(0) === '0' && href.charAt(1) === '0') return '+' + href.substr(1).substr(1).replace(/\D+/g, '');
			if (href.charAt(0) === '0') return  '+' + countrycode + href.substr(1).replace(/\D+/g, '');
			return false;
		}
	
		$.each(phonelinks, function(){
			$link = this;
			setPhoneLink($link);
		})
		
		return;
	}
	
	// is not mobile
	var removePhoneLink = function($link){
		console.log($link);
		var text = $link.text();
		$link.replaceWith("<span>" + text + "</span>");
	}
	
	$.each(phonelinks, function(){
		$link = $(this);
		removePhoneLink($link);
	})
})
