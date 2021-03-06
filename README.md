# Random Password Generator

> Showcasing the [Carbon Design System](https://www.carbondesignsystem.com/)

This app generates a password once the user clicks the `generate` button.
There are options to increase the quantity of special characters and the
total length of the password.

## Screenshot

[![screenshot.png](assets/images/screenshot.PNG)](https://vividventures.biz/random-password-generator/)

Enjoy the live [demo](https://vividventures.biz/random-password-generator/)!

----

## Usage

Click here [![jsdelivr badge](https://data.jsdelivr.com/v1/package/gh/VividVenturesLLC/random-password-generator/badge)](https://www.jsdelivr.com/package/gh/VividVenturesLLC/random-password-generator) to see versions served by jsdelivr code deployment network (CDN).

```html
<html>
    <head>
        ...
        <!-- get the latest from the develop branch -->
        <script src="https://cdn.jsdelivr.net/gh/VividVenturesLLC/random-password-generator@develop/assets/js/random-password-generator.js"></script>
        ...
    </head>
    ...
```

in your code

```javascript
// javascript
rpg.generatepass( passwordLength,numberOfSpecialCharacters )
rpg.generatepass( 10,3 )
// OR
RandomPasswordGenerator.generatepass( 10,3 )
// returns:
//     a ten character password with three special characters, ie
//    "%3zDd!%ZMd" excluding the quotes ""

```

Also in the example app you can check the console log in your
developer tools for usage messages.

----

## Contribute

See [CONTRIBUTING.md](./docs/CONTRIBUTING.md)


