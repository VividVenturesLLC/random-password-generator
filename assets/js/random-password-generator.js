// file: random-password-generator.js

/**
 * Random Password Generator
 * © Vivid Ventures LLC 2021
 *
 * Usage:
 *        rpg.generatepass(passwordLength,numberOfSpecialCharacters)
 *        rpg.generatepass(10,3)
 *        OR
 *        RandomPasswordGenerator.generatepass(10,3)
 *
 *        returns:
 *        a ten character password with three special characters, ie
 *        "%3zDd!%ZMd" excluding the quotes ""
 *
 * Get the code
 *        CDN: jsDelivr
 *        Latest from the development branch
 *        https://cdn.jsdelivr.net/gh/VividVenturesLLC/random-password-generator/assets/js/random-password-generator.js
 *
 *        This tagged version
 *        https://cdn.jsdelivr.net/gh/VividVenturesLLC/random-password-generator@0.0.2/assets/js/random-password-generator.js
 *
 */

 var rpg = RandomPasswordGenerator = (function () {
    var my = {};

    my.version = "0.0.2";//this should match the git tag

    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    my.generatepass = function (plength,sc_length){
        /** Inputs:
              plength: expected number of characters in the password
              sc_length: expected number of special characters
            Output:
              password string
        */
        plength = plength-sc_length // account for added special characters
        var special_character_list = "$%#!="
        var keylist="ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz123456789"
                    // keylist excludes lower case l, o, and the number 0
                    //                  upper case O
        result = ''
        for (i=0;i<sc_length;i++)
          result += special_character_list.charAt(
              Math.floor(Math.random()*special_character_list.length)
            )

        for (i=0;i<plength;i++)
          result += keylist.charAt( Math.floor(Math.random()*keylist.length) )
          //Random password generator- by javascriptkit.com
          //Visit JavaScript Kit (http://javascriptkit.com) for script
          //Credit must stay intact for use

        return shuffle( result )
    }


    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    function shuffle(in_string, shuffles) {
        /**
         * Input:
         *   in_string: string to be shuffled
         *   shuffles: integer number of shuffles
         *             defaults to three if 0 or undefined
         * Output:
         *   returns a shuffled string
        */
        if ( shuffles === 0 || shuffles === undefined ) {
          shuffles = 3 //default to three for good luck
        }

        var merged_array = []
        var my_array = in_string.split('');

        left_array = my_array.slice( 0 ,my_array.length/2 )
        right_array = my_array.slice( (my_array.length/2) , my_array.length + 1 )

        while(left_array.length > 0) {
          merged_array.push( left_array.pop() )
          merged_array.push( right_array.pop() )
        }
        while( right_array.length > 0 ) {
          merged_array.push( right_array.pop() )
        }

        merged_array.sort( function(a, b){ return 0.5 - Math.random() } );
        shuffles -= 1
        if(shuffles > 0 ) { // keep shuffling :)
          return shuffle (merged_array.join(''), shuffles )
        } else { // thats enough shuffling, please stop!
          return merged_array.join(''); //string
        }
    }


    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    //expose the public module methods and properties in the 'my' object
    return my;
}());//End of rpg module
