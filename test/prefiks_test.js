"use strict";

var prefiks = require( "../lib/prefiks.js" );

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports[ "prefiks" ] = {
  setUp: function( done ) {
    done();
  },
  "errors": function( test ) {
    test.throws( function() { prefiks( "css-filters", "nothing", 2 ) }, Error, "Should throws for unknown browsers" );
    test.throws( function() { prefiks( "nothing", "ie", 2 ) }, Error, "Should throws for unknown features" );
    test.done();
  },
  "browsers aliases": function( test ) {
    // TODO : there's many more aliases to add & test !
    // IE aliases
    test.doesNotThrow( function() { prefiks( "css-filters", "IE" ) }, Error, "Should not throw." );
    test.doesNotThrow( function() { prefiks( "css-filters", "Internet Explorer" ) }, Error, "Should not throw." );
    test.doesNotThrow( function() { prefiks( "css-filters", "InternetExplorer" ) }, Error, "Should not throw." );
    test.doesNotThrow( function() { prefiks( "css-filters", "Internet-Explorer" ) }, Error, "Should not throw." );
    test.doesNotThrow( function() { prefiks( "css-filters", "INTERNET_EXPLORER" ) }, Error, "Should not throw." );
    // FF aliases
    test.doesNotThrow( function() { prefiks( "css-filters", "ff" ) }, Error, "Should not throw." );
    // IOS Safari Aliases
    test.doesNotThrow( function() { prefiks( "css-filters", "ios" ) }, Error, "Should not throw." );
    test.done();
  },
  "no version given": function( test ) {
    test.deepEqual( prefiks( "transforms2d", "ie" ), [ "ms" ], "Should be [ 'ms' ]." );
    test.deepEqual( prefiks( "transforms2d", "firefox" ), [ "moz" ], "Should be [ 'moz' ]." );
    test.deepEqual( prefiks( "transforms2d", "chrome" ), [ "webkit" ], "Should be [ 'webkit' ]." );
    test.deepEqual( prefiks( "transforms2d", "safari" ), [ "webkit" ], "Should be [ 'webkit' ]." );
    test.deepEqual( prefiks( "transforms2d", "opera" ), [ "o", "webkit" ], "Should be [ 'o', 'webkit' ]." );
    test.deepEqual( prefiks( "transforms2d", "ios_saf" ), [ "webkit" ], "Should be [ 'webkit' ]." );
    test.deepEqual( prefiks( "transforms2d", "op_mini" ), [], "Should be []." );
    test.deepEqual( prefiks( "transforms2d", "android" ), [ "webkit" ], "Should be [ 'webkit' ]." );
    test.deepEqual( prefiks( "transforms2d", "bb" ), [ "webkit" ], "Should be [ 'webkit' ]." );
    test.deepEqual( prefiks( "transforms2d", "op_mob" ), [ "webkit" ], "Should be [ 'webkit' ]." );
    test.deepEqual( prefiks( "transforms2d", "and_chr" ), [ "webkit" ], "Should be [ 'webkit' ]." );
    test.deepEqual( prefiks( "transforms2d", "and_ff" ), [], "Should be []." );
    test.deepEqual( prefiks( "transforms2d", "ie_mob" ), [], "Should be []." );
    test.done();
  },
};
