favicon-bubble
==============

![<favicon-bubble>](https://github.com/muymoo/favicon-bubble/blob/master/preview.png)

A Polymer element for tinycon: https://github.com/tommoor/tinycon

## Usage
Install via Bower
```
bower install --save favicon-bubble
```
Import the `favicon-bubble` element:
```html
<link rel="import" href="bower_components/favicon-bubble/favicon-bubble.html">
```
Add it to your page:
```html
<favicon-bubble label="3"></favicon-bubble>
```
The available attributes (with their defaults) are:
```
width: 7
height: 9
font: 10 * (window.devicePixelRatio || 1) + 'px arial'
colour: '#ffffff'
background: '#F03D25'
fallback: true
label: '3'
```
For more information, checkout [tinycon](https://github.com/tommoor/tinycon)
