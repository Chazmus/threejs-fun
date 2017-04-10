'use strict';
/*
 * index.js
 * Copyright (C) 2017 chaz <chaz@Nigel>
 *
 * Distributed under terms of the MIT license.
 */
var THREE = require('three');
var Player = require('./scene.js');

var loader = new THREE.FileLoader();
loader.load( './resources/models/penis.json', function ( text ) {

    var player = new Player();
    player.load( JSON.parse( text ) );
    player.setSize( window.innerWidth, window.innerHeight );
    player.play();

    document.body.appendChild( player.dom );

    window.addEventListener( 'resize', function () {
        player.setSize( window.innerWidth, window.innerHeight );
    } );

    if ( location.search === '?edit' ) {
        var button = document.createElement( 'a' );
        button.id = 'edit';
        button.href = 'https://threejs.org/editor/#file=' + location.href.split( '/' ).slice( 0, - 1 ).join( '/' ) + '/test-model.json';
        button.target = '_blank';
        button.textContent = 'EDIT';
        document.body.appendChild( button );
    }
} );
