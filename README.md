# jquery-phonelink
Jquery-phonelink is a plugin that corrects "tel:" links on mobile devices and what disbales "tel:" links on non mobile devices

## What it does
Jquery-phonelink  is looking for tel links like: &#x3C;a href=&#x22;tel:111111&#x3E;111111&#x3C;/a&#x3E;. If no tel links are found on your page jquery-phonelink does nothing. On the other way jquery-phonelink checks if the user device is a mobile or a non mobile device. On non mobile devices a link like &#x3C;a href=&#x22;tel:111111&#x3E;111111&#x3C;/a&#x3E; will be rewritten to &#x3C;span&#x3E;111111&#x3C;/span&#x3E;. In this case the link text is used not the href url. On a mobile device jquery-phonelink takes the href url and checks if the telephone number has the correct Format. If not it goes to fix it:

1. Remove all non digits characters: 0391 22 23 / 1 ->  039122231
2. Add country code: 039122231 -> +4939122231 

## How to use
Just include the jquery-phonelink.min.js before closing &lt;/body&gt; to your website.

