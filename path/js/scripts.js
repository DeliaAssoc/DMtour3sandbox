///////////////////////////////////////////////////////////
//////////////////// DEFINE ANIMATIONS ////////////////////
///////////////////////////////////////////////////////////
        

var anim_p1_s1_2,
    anim_p1_s1_3,
    anim_p1_s2,
    anim_p1_s4_1,
    anim_p1_s4_2,
    anim_p1_s6,
    anim_p2_s1_1,
    anim_p2_s1_2,
    anim_p2_s1_3,
    anim_p2_s4,
    anim_p3_s1,
    anim_p3_s3,
    anim_p3_s5,
    anim_p3_s7


////////////////////////////////////////////////////////
//////////// DESTROY ANIMATIONS SELECTION //////////////
////////////////////////////////////////////////////////

function init_anim(selector, data) {
  bodymovin.destroy( anim_p1_s1_2 );
  bodymovin.destroy( anim_p1_s1_3 );
  bodymovin.destroy( anim_p1_s2 );
  bodymovin.destroy( anim_p1_s4_1 );
  bodymovin.destroy( anim_p1_s4_2 );
  bodymovin.destroy( anim_p1_s6 );
  bodymovin.destroy( anim_p2_s1_1 );
  bodymovin.destroy( anim_p2_s1_2 );
  bodymovin.destroy( anim_p2_s1_3 );
  bodymovin.destroy( anim_p3_s1 );
  bodymovin.destroy( anim_p3_s3 );
  bodymovin.destroy( anim_p3_s5 );
  bodymovin.destroy( anim_p3_s7 );

  
  var animData = {
    wrapper: document.getElementById(selector),
    animType: 'html',
    loop: true,
    prerender: true,
    autoplay: false,
    path: data
  };
  return bodymovin.loadAnimation(animData);
};






////////////////////////////////////////////////////////
//////////////////// PATH SELECTION ////////////////////
////////////////////////////////////////////////////////

$(document).ready(function() {

  //Check which path
  $(document).on('click', '.do-path-start', function() {
    var path = $('input[name=pathSelect]:checked').val();
    //If Care Team Path is selected
    
    if (path == 'care-team') {
      //PATH 01
      //SECTION 01

      //Deactivate Start screen
      $('#start').toggleClass('active inactive');

      //Activate Path 01
      $('#path_01').toggleClass('inactive active');

      // Call animation
      anim_p01s01_1();

      // Actvate, deactivate backlinks
      $('#backlink .start-over').toggleClass('inactive active');
      $('#backlink .back-to-site').toggleClass('active inactive');

      // Actvate, deactivate End CTAs
     // $('.explore.care-team').toggleClass('inactive active');

    } else if (path == 'care-plan') { 
    //If Care Plan Path is selected
      //PATH 02
      //SECTION 01

      //Deactivate Start screen
      $('#start').toggleClass('active inactive');

      //Activate Path 02
      $('#path_02').toggleClass('inactive active');

      // Call animation
      anim_p02s1_1();

      // Actvate, deactivate backlinks
      $('#backlink .start-over').toggleClass('inactive active');
      $('#backlink .back-to-site').toggleClass('active inactive');

      // Actvate, deactivate End CTAs
      // $('.explore.care-team').toggleClass('inactive active');

    } else if (path == 'patient') {
    // If Patient Path is selected

      //PATH 03
      //SECTION 01

      //Deactivate Start screen
      $('#start').toggleClass('active inactive');

      //Activate Path 03
      $('#path_03').toggleClass('inactive active');

      // Call animation and tooltip
      anim_p03_1();

      // Actvate, deactivate backlinks
      $('#backlink .start-over').toggleClass('inactive active');
      $('#backlink .back-to-site').toggleClass('active inactive');

      // Actvate, deactivate End CTAs
      // $('.explore.care-team').toggleClass('inactive active');

    } else {
      //If nothing is selected
      // Do this thing...
    }
  });





////////////////////////////////////////////////////////
//////////////// ANIMATION FUNCTIONS ///////////////////
////////////////////////////////////////////////////////


//////////  PATH 01  //////////
// Slide 1

function anim_p01s01_1()
{
  //Activate animation and tooltip
  $( '#anim_p01s01-1' ).toggleClass( 'inactive active' );
  setTimeout( function() {
    $( '#tip_p01s01-1' ).toggleClass( 'inactive active' );
  }, 750 );
};

function anim_p01s01_2()
{
  // Activate animation and tooltip
  $( '#anim_p01s01-2' ).toggleClass( 'inactive active' );
  $( '#tip_p01s01-2' ).toggleClass( 'inactive active' );

  // Initialize animation
  anim_p1_s1_2 = init_anim( 'anim_p01s01-2', '../bodymovin/p01s01/02/data.json' );

  // Trigger animation
  // Start animation and pause on frame 1
  anim_p1_s1_2.addEventListener( 'data_ready', function() {
    anim_p1_s1_2.goToAndStop( 1, true );
  }, false);

  // Start animation after 1250ms
  setTimeout( function(){
    anim_p1_s1_2.play();
    anim_p1_s1_2.addEventListener( 'loopComplete', function(){
      anim_p1_s1_2.goToAndStop( 100, true );
    });
  }, 1250);
};


function anim_p01s01_3()
{
  // Activate animation and tooltip
  $( '#anim_p01s01-3' ).toggleClass( 'inactive active' );
  $( '#tip_p01s01-3' ).toggleClass( 'inactive active' );

  // Trigger animation
  // Initialize animation
  anim_p1_s1_3 = init_anim( 'anim_p01s01-3', '../bodymovin/p01s01/03/data.json' );

  // Start animation after 1250ms
  setTimeout( function(){ 
    anim_p1_s1_3.play();
    anim_p1_s1_3.addEventListener( 'loopComplete', function(){
      anim_p1_s1_3.goToAndStop( 50, true );
    });
  }, 1250 );
};



// Slide 2

function anim_p01s02_1( prev )
{
  // Activate animation and tooltip
  // Check to see if click is from previous link
  if ( prev != null ) {
    console.log( prev )
  } else {
    $( '#anim_p01s02' ).toggleClass( 'inactive active' );
  }
  setTimeout( function() { $( '#tip_p01s02-1' ).toggleClass( 'inactive active' ); }, 750 );

  // Trigger animation
  // Initialize animation
  anim_p1_s2 = init_anim( 'anim_p01s02', '../bodymovin/p01s02/data.json' );

  // Start animation and pause on frame 1
  anim_p1_s2.addEventListener( 'data_ready', function() {
    anim_p1_s2.goToAndStop(1, true);
  }, false);
}


function anim_p01s02_2()
{
  // Activate animation and tooltip
  $( '#tip_p01s02-2' ).toggleClass( 'inactive active' );

  // Trigger animation
  // No animation for this tooltip
};


function anim_p01s02_3()
{
  // Activate animation and tooltip
  $( '#tip_p01s02-3' ).toggleClass( 'inactive active' );

  // Trigger animation
  // Stop animation if still running
  anim_p1_s2.stop();
};


function anim_p01s02_4()
{
  // Activate animation and tooltip
  $( '#tip_p01s02-4' ).toggleClass( 'inactive active' );

  // Trigger animation
  // Start animation after 1250ms
  setTimeout( function(){ 
    anim_p1_s2.play();
    anim_p1_s2.addEventListener( 'loopComplete', function(){
      anim_p1_s2.goToAndStop( 280, true );
    });
  }, 1250 );
};


function anim_p01s02_5()
{
  // Activate animation and tooltip
  // Check to see if div is active when coming from previous buttons click
  if ( $( '#anim_p01s02').hasClass( 'inactive' ) ){
    $( '#anim_p01s02' ).toggleClass( 'inactive active' );
  }  
  $( '#tip_p01s02-5' ).toggleClass( 'inactive active' );

  // Trigger animation
  // Initialize animation
  anim_p1_s2 = init_anim( 'anim_p01s02', '../bodymovin/p01s02/data.json' );
  // Stop animation if still running
  anim_p1_s2.stop();
};



// Slide 3

function anim_p01s03()
{
  // Activate screen/animation and tooltip
  $( '#anim_p01s03' ).toggleClass( 'inactive active' );
  setTimeout( function() { $( '#tip_p01s03' ).toggleClass( 'inactive active' ); }, 750 );

  // Trigger animation
  // No animation for this tooltip
};



// Slide 4

function anim_p01s04_1( prev )
{
  // Activate screen/animation and tooltip
  // Check to see if click is from previous link
  if ( prev != null ) {
    console.log( prev )
  } else {
    $( '#anim_p01s04' ).toggleClass( 'inactive active' );
  }
  setTimeout( function() { $( '#tip_p01s04-1' ).toggleClass( 'inactive active' ); }, 750 );

  // Trigger animation
  // Initialize animation
  anim_p1_s4 = init_anim( 'anim_p01s04', '../bodymovin/p01s04/data.json' );

  // Start animation and pause on frame 1
  anim_p1_s4.addEventListener( 'data_ready', function() {
    anim_p1_s4.play();
    anim_p1_s4.goToAndStop( 1, true );
  }, false);
};


function anim_p01s04_2()
{
  // Activate screen/animation and tooltip
  // Check to see if div is active when coming from previous buttons click
  if ( $( '#anim_p01s04').hasClass( 'inactive' ) ){
    $( '#anim_p01s04').toggleClass( 'inactive active' );
  }
  $( '#tip_p01s04-2' ).toggleClass( 'inactive active' );

  // Initialize animation
  anim_p1_s4 = init_anim( 'anim_p01s04', '../bodymovin/p01s04/data.json' );

  // Trigger animation
  // Start
  anim_p1_s4.playSegments([ 0, 170 ], true);
  anim_p1_s4.addEventListener( 'loopComplete', function(){
    anim_p1_s4.goToAndStop( 165, true );
  });
};



// Slide 5

function anim_p01s05_1( prev )
{
  // Activate screen/animation and tooltip
  // Check to see if click is from previous link
  if ( prev != null ) {
    console.log( prev )
  } else {
    $( '#anim_p01s05' ).toggleClass( 'inactive active' );
  }
  setTimeout( function() { $( '#tip_p01s05-1' ).toggleClass( 'inactive active' ); }, 750 );

  // Trigger animation
  // No animation for this tooltip
};


function anim_p01s05_2()
{
  // Activate screen/animation and tooltip
  // Check to see if div is active when coming from previous buttons click
  if ( $( '#anim_p01s05').hasClass( 'inactive' ) ){
    $( '#anim_p01s05').toggleClass( 'inactive active' );
  }
  $( '#tip_p01s05-2' ).toggleClass( 'inactive active' );

  // Trigger animation
  // No animation for this tooltip
};



// Slide 6

function anim_p01s06_1( prev )
{
  // Activate screen/animation and tooltip
  // Check to see if click is from previous link
  if ( prev != null ) {
    console.log( prev )
  } else {
    $( '#anim_p01s06' ).toggleClass( 'inactive active' );
  }
  setTimeout( function() { $( '#tip_p01s06-1' ).toggleClass( 'inactive active' ); }, 750 );
  
  // Trigger animation
  // Initialize animation
  anim_p1_s6 = init_anim( 'anim_p01s06', '../bodymovin/p01s06/data.json' );
  
  // Start animation and pause on frame 1
  anim_p1_s6.addEventListener( 'data_ready', function() {
    anim_p1_s6.play();
    anim_p1_s6.goToAndStop(1, true);
  }, false);
};


function anim_p01s06_2()
{
  // Activate screen/animation and tooltip
  $( '#tip_p01s06-2' ).toggleClass( 'inactive active' );

  // Trigger animation
  // No animation for this tooltip
};


function anim_p01s06_3()
{
  // Activate screen/animation and tooltip
  $( '#tip_p01s06-3' ).toggleClass( 'inactive active' );

  // Trigger animation
  anim_p1_s6.stop(); // Reset animation for Previous button click
};


function anim_p01s06_4()
{
  // Activate screen/animation and tooltip
  $( '#tip_p01s06-4' ).toggleClass( 'inactive active' );

  // Trigger animation
  anim_p1_s6.goToAndPlay( 50, true );
  anim_p1_s6.addEventListener( 'loopComplete', function() {
    anim_p1_s6.goToAndStop(100, true);
  }, false);
};







//////////  PATH 02  //////////
// Slide 1

function anim_p02s1_1( prev )
{
  // Check to see if click is from previous link
  if ( prev != null ) {
    $( '#anim_p02s01-1' ).toggleClass( 'inactive active' );
  } else {
    // do nothing
  }
  
  // Trigger animation
  anim_p2_s1_1 = init_anim( 'anim_p02s01-1' , '../bodymovin/p02s01/data.json' );

  //Activate animation and tooltip
  // Start animation and pause on frame 1
  anim_p2_s1_1.addEventListener('data_ready', function() {
    anim_p2_s1_1.play();
    anim_p2_s1_1.goToAndStop(1, true);
  }, false);

  setTimeout( function() { $( '#tip_p02s01-1' ).toggleClass( 'inactive active' ); }, 750);
  $( '#anim_p02s01-1' ).toggleClass( 'inactive active' );
};


function anim_p02s1_2( prev )
{
  // Check to see if click is from previous link
  if ( prev != null ) {
    $( '#anim_p02s01-1' ).toggleClass( 'inactive active' );
  } else {
    // do nothing
  }

  // Trigger animation
  anim_p2_s1_1 = init_anim( 'anim_p02s01-1' , '../bodymovin/p02s01/data.json' );

  //Activate animation and tooltip
  setTimeout( function() { anim_p2_s1_1.play() }, 1000 );
  anim_p2_s1_1.addEventListener( 'loopComplete', function() {
    anim_p2_s1_1.goToAndStop( 70, true );
  });
  setTimeout( function() { $( '#tip_p02s01-2' ).toggleClass( 'inactive active' ); }, 750);
};


function anim_p02s1_3()
{
  // Activate screen/animation and tooltip
  $( '#anim_p02s01-2' ).toggleClass( 'inactive active' );
   setTimeout( function() { $( '#tip_p02s01-3' ).toggleClass( 'inactive active' ); }, 750 );

  // Trigger animation
  anim_p2_s1_2 = init_anim( 'anim_p02s01-2', '../bodymovin/p02s02/data.json' );

  setTimeout( function() { anim_p2_s1_2.play(); }, 1250);
  anim_p2_s1_2.addEventListener( 'loopComplete', function() {
    anim_p2_s1_2.goToAndStop( 50, true );
  }, false);
}


function anim_p02s1_4()
{
  // Activate screen/animation and tooltip
  $( '#anim_p02s01-3' ).toggleClass( 'inactive active' );
   setTimeout( function() { $( '#tip_p02s01-4' ).toggleClass( 'inactive active' ); }, 750 );

  // Trigger animation
  anim_p2_s1_3 = init_anim( 'anim_p02s01-3', '../bodymovin/p02s03/data.json' );

  setTimeout( function() { anim_p2_s1_3.play(); }, 1500);
  anim_p2_s1_3.addEventListener( 'loopComplete', function() {
    anim_p2_s1_3.goToAndStop( 50, true );
  }, false);
}







//////////  PATH 03  //////////
// Slide 1

function anim_p03_1()
{
  // Activate screen/animation and tooltip
  $( '#anim_p03s01' ).toggleClass( 'inactive active' );
  setTimeout( function() { $( '#tip_p03s01' ).toggleClass( 'inactive active' ); }, 750 );

  // Trigger animation
  anim_p3_s1 = init_anim( 'anim_p03s01', '../bodymovin/p03s01/data.json' );

  // Play animation and pause on frame 1
  anim_p3_s1.addEventListener( 'data_ready', function() {
    anim_p3_s1.goToAndStop( 1, true );
  });

  // Play animation after 1500ms
  setTimeout( function(){
    anim_p3_s1.play();
    anim_p3_s1.addEventListener( 'loopComplete', function(){
      anim_p3_s1.goToAndStop( 250, true );
    });
  }, 1500);
}


// Slide 2
function anim_p03_2()
{
  // Activate screen/animation and tooltip
  $( '#anim_p03s02' ).toggleClass( 'inactive active' );
  setTimeout( function() { $( '#tip_p03s02' ).toggleClass( 'inactive active' ); }, 750);
}


// Slide 3

function anim_p03_3_1()
{
  // Activate screen/animation and tooltip
  $( '#anim_p03s03' ).toggleClass( 'inactive active' );
  setTimeout( function() { $( '#tip_p03s03-1' ).toggleClass( 'inactive active' ); }, 750);

  // Trigger animation
  anim_p3_s3 = init_anim( 'anim_p03s03', '../bodymovin/p03s03/data.json' );

  // Play animation and pause on frame 1
  anim_p3_s3.addEventListener( 'data_ready', function(){
    anim_p3_s3.goToAndStop( 1, true );
  });
}

function anim_p03_3_2()
{
  // Activate screen/animation and tooltip
  setTimeout( function() { $( '#tip_p03s03-2' ).toggleClass( 'inactive active' ); }, 750);

  // Play animation after 1250ms
  setTimeout( function(){
    anim_p3_s3.play();
    anim_p3_s3.addEventListener( 'loopComplete', function(){
      anim_p3_s3.goToAndStop( 180, true );
    });
  }, 1250);
}


// Slide 4
function anim_p03_4()
{
  // Activate screen/animation and tooltip
  $( '#anim_p03s04' ).toggleClass( 'inactive active' );
  setTimeout( function() { $( '#tip_p03s04' ).toggleClass( 'inactive active' ); }, 750);
}


// Slide 5
function anim_p03_5()
{
  // Activate screen/animation and tooltip
  $( '#anim_p03s05' ).toggleClass( 'inactive active' );
  setTimeout( function() { $( '#tip_p03s05' ).toggleClass( 'inactive active' ); }, 750);

  // Trigger animation
  anim_p3_s5 = init_anim( 'anim_p03s05', '../bodymovin/p03s05/data.json' );

  // Play animation and pause on frame 1
  anim_p3_s5.addEventListener( 'data_ready', function(){
    anim_p3_s5.goToAndStop( 1, true );
  });

  // Play animation after 500ms
  setTimeout( function(){
    anim_p3_s5.play();
    anim_p3_s5.addEventListener( 'loopComplete', function(){
      anim_p3_s5.goToAndStop( 135, true );
    });
  }, 500);
}


// Slide 6
function anim_p03_6()
{
  //Activate animation and tooltip
  setTimeout( function() { $( '#tip_p03s06' ).toggleClass( 'inactive active' ); }, 1100);
  $( '#anim_p03s06' ).toggleClass( 'inactive active' );
}


// Slide 7
function anim_p03_7()
{
  //Activate animation and tooltip
  setTimeout( function() { $( '#tip_p03s07' ).toggleClass( 'inactive active' ); }, 1100);
  $( '#anim_p03s07' ).toggleClass( 'inactive active' );

  // Trigger animation
  anim_p3_s7 = init_anim( 'anim_p03s07', '../bodymovin/p03s07/data.json' );

  // Play animation and pause on frame 1
  anim_p3_s7.addEventListener( 'data_ready', function(){
    anim_p3_s7.goToAndStop( 1, true );
  });

  // Play animation after 500ms
  setTimeout( function(){
    anim_p3_s7.play();
    anim_p3_s7.addEventListener( 'loopComplete', function(){
      anim_p3_s7.goToAndStop( 135, true );
    });
  }, 500);  
}


// Slide 7
function anim_p03_8()
{
  //Activate animation and tooltip
  setTimeout( function() { $( '#tip_p03s08' ).toggleClass( 'inactive active' ); }, 1100);
  $( '#anim_p03s08' ).toggleClass( 'inactive active' );  
}








  //////////////////////////////////////////////////////
  //////////////////// NEXT BUTTONS ////////////////////
  //////////////////////////////////////////////////////

  //////////////////////
  // PATH 01 || 2 - 7 //
  //////////////////////

  
  // SLIDE 01

    // Check for "next" click
    $( '#tip_p01s01-1 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#anim_p01s01-1' ).toggleClass( 'active inactive' );
      $( '#tip_p01s01-1' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s01_2();
    });

    // Check for "next" click
    $( '#tip_p01s01-2 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#anim_p01s01-2' ).toggleClass( 'active inactive' );
      $( '#tip_p01s01-2' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s01_3();
    });

    // Check for "next" click
    $( '#tip_p01s01-3 .link' ).on('click', function(){

      // Deactivate animation and tooltip
      $( '#anim_p01s01-3' ).toggleClass( 'active inactive' );
      $( '#tip_p01s01-3' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s02_1();

      //Change progression
      $( '#path_01_progress .one' ).toggleClass( 'active inactive' );
      $( '#path_01_progress .two' ).toggleClass( 'inactive active' );
    });

  
  // SLIDE 02

    // Check for "next" click
    $( '#tip_p01s02-1 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#tip_p01s02-1' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s02_2();
    });

    // Check for "next" click
    $( '#tip_p01s02-2 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#tip_p01s02-2' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s02_3();
    });


    // Check for "next" click
    $( '#tip_p01s02-3 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#tip_p01s02-3' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s02_4();
    });


    // Check for "next" click
    $( '#tip_p01s02-4 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#tip_p01s02-4' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s02_5();
    });
 

    // Check for "next" click
    $( '#tip_p01s02-5 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#anim_p01s02' ).toggleClass( 'active inactive' );
      $( '#tip_p01s02-5' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s03();

      //Change progression
      $( '#path_01_progress .two' ).toggleClass( 'active inactive' );
      $( '#path_01_progress .three' ).toggleClass( 'inactive active' );
    });

  
  // SLIDE 03

    // Check for "next" click
    $( '#tip_p01s03 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#anim_p01s03' ).toggleClass( 'active inactive' );
      $( '#tip_p01s03' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s04_1();

      //Change progression
      $( '#path_01_progress .three' ).toggleClass( 'active inactive' );
      $( '#path_01_progress .four' ).toggleClass( 'inactive active' );
    });

  
  // SLIDE 04

    // Check for "next" click
    $( '#tip_p01s04-1 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#tip_p01s04-1' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s04_2();
    });


    // Check for "next" click
    $( '#tip_p01s04-2 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#anim_p01s04' ).toggleClass( 'active inactive' );
      $( '#tip_p01s04-2' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s05_1();

      //Change progression
      $( '#path_01_progress .four' ).toggleClass( 'active inactive' );
      $( '#path_01_progress .five' ).toggleClass( 'inactive active' );
    });

  
  // SLIDE 05


    // Check for "next" click
    $( '#tip_p01s05-1 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#tip_p01s05-1' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s05_2();
    });


    // Check for "next" click
    $( '#tip_p01s05-2 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#anim_p01s05' ).toggleClass( 'active inactive' );
      $( '#tip_p01s05-2' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s06_1();

      //Change progression
      $( '#path_01_progress .five' ).toggleClass( 'active inactive' );
      $( '#path_01_progress .six' ).toggleClass( 'inactive active' );
    });

  
  // SLIDE 06


    // Check for "next" click
    $( '#tip_p01s06-1 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#tip_p01s06-1' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s06_2();
    });


    // Check for "next" click
    $( '#tip_p01s06-2 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#tip_p01s06-2' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s06_3();
    });


    // Check for "next" click
    $( '#tip_p01s06-3 .link' ).on( 'click', function(){

      // Deactivate animation and tooltip
      $( '#tip_p01s06-3' ).toggleClass( 'active inactive' );

      // Call next screen/animation
      anim_p01s06_4();
    });


  //END
  //Check for "next" click
  $( '#tip_p01s06-4 .link' ).on( 'click', function(){
    //Deactivate animation and tooltip
    $( '#tip_p01s06-4' ).toggleClass( 'active inactive' );
    $( '#anim_p01s06' ).toggleClass( 'active inactive' );
    //Deactivate Path 01
    $( '#path_01' ).toggleClass( 'active inactive' );
    //Activate End Screen
    $( '#end' ).toggleClass( 'inactive active' );
  });











  //////////////////////
  ////// PATH 02 ///////
  //////////////////////

  //SECTION 01

  //Check for "next" click
  $( '#tip_p02s01-1 .link' ).on( 'click', function(){
  
    //Deactivate animation and tooltip
    $( '#tip_p02s01-1' ).toggleClass( 'active inactive' );

    // Call animation
    anim_p02s1_2();
  });
  
  
  //Check for "next" click
  $( '#tip_p02s01-2 .link' ).on( 'click', function(){

    //Deactivate tip an animation
    $( '#tip_p02s01-2' ).toggleClass( 'active inactive' );
    $( '#anim_p02s01-1' ).toggleClass( 'active inactive' );

    // Call animation
    anim_p02s1_3();
  });

  
  
  //Check for "next" click
  $( '#tip_p02s01-3 .link' ).on( 'click', function(){

    //Deactivate tip an animation
    $( '#tip_p02s01-3' ).toggleClass( 'active inactive' );
    $( '#anim_p02s01-2' ).toggleClass( 'active inactive' );

    // Call animation
    anim_p02s1_4();
  });


  //END
  //Check for "next" click
  $( '#tip_p02s01-4 .link' ).on( 'click', function(){
    //Deactivate animation and tooltip
    $( '#tip_p02s01-4' ).toggleClass( 'active inactive' );
    $( '#anim_p02s01-3' ).toggleClass( 'active inactive' );
    //Deactivate Path 01
    $( '#path_02' ).toggleClass( 'active inactive' );
    //Activate End Screen
    $( '#end' ).toggleClass( 'inactive active' );
  });











  //////////////////////
  // PATH 03 || 2 - 8 //
  //////////////////////

  //SECTION 02
  // Check for "next" click
  $( '#tip_p03s01 .link' ).on( 'click', function(){

    // Deactivate animation and tooltip
    $( '#tip_p03s01' ).toggleClass( 'active inactive' );
    $( '#anim_p03s01' ).toggleClass( 'active inactive' );

    // Call animation
    anim_p03_2();

    // Change progression
    $( '#path_03_progress .one' ).toggleClass( 'active inactive' );
    $( '#path_03_progress .two' ).toggleClass( 'inactive active' );
  });


  //SECTION 03
  //Check for "next" click
  $( '#tip_p03s02 .link' ).on( 'click', function(){

    //Deactivate animation and tooltip
    $( '#tip_p03s02' ).toggleClass( 'active inactive');
    $( '#anim_p03s02' ).toggleClass( 'active inactive' );

    //Call animation
    anim_p03_3_1();

    //Change progression
    $( '#path_03_progress .two' ).toggleClass( 'active inactive' );
    $( '#path_03_progress .three' ).toggleClass( 'inactive active' );
  });


  $ ( '#tip_p03s03-1 .link' ).on( 'click', function(){

    //Deactivate animation and tooltip
    $( '#tip_p03s03-1' ).toggleClass( 'active inactive' );

    //Call animation
    anim_p03_3_2();
  });


  //SECTION 04
  //Check for "next" click
  $( '#tip_p03s03-2 .link' ).on( 'click', function(){

    //Deactivate animation and tooltip
    $( '#tip_p03s03-2' ).toggleClass( 'active inactive' );
    $( '#anim_p03s03' ).toggleClass( 'active inactive' );

    // Call animation
    anim_p03_4();

    //Change progression
    $( '#path_03_progress .three' ).toggleClass( 'active inactive' );
    $( '#path_03_progress .four' ).toggleClass( 'inactive active' );
  });




  //SECTION 05
  //Check for "next" click
  $( '#tip_p03s04 .link' ).on( 'click', function(){

    //Deactivate animation and tooltip
    $( '#tip_p03s04' ).toggleClass( 'active inactive' );
    $( '#anim_p03s04' ).toggleClass( 'active inactive' );

    // Call animation
    anim_p03_5();

    //Change progression
    $( '#path_03_progress .four' ).toggleClass( 'active inactive' );
    $( '#path_03_progress .five' ).toggleClass( 'inactive active' );
  });




  //SECTION 06
  //Check for "next" click
  $( '#tip_p03s05 .link' ).on( 'click', function(){

    //Deactivate animation and tooltip
    $( '#tip_p03s05' ).toggleClass( 'active inactive' );
    $( '#anim_p03s05' ).toggleClass( 'active inactive' );

    // Call animation
    anim_p03_6();

    //Change progression
    $( '#path_03_progress .five' ).toggleClass( 'active inactive' );
    $( '#path_03_progress .six' ).toggleClass( 'inactive active' );
  });




  //SECTION 07
  //Check for "next" click
  $( '#tip_p03s06 .link' ).on( 'click', function(){

    //Deactivate animation and tooltip
    $( '#tip_p03s06' ).toggleClass( 'active inactive' );
    $( '#anim_p03s06' ).toggleClass( 'active inactive' );

    // Call animation
    anim_p03_7();

    //Change progression
    $( '#path_03_progress .six' ).toggleClass( 'active inactive' );
    $( '#path_03_progress .seven' ).toggleClass( 'inactive active' );
  });




  //SECTION 08
  //Check for "next" click
  $( '#tip_p03s07 .link' ).on( 'click', function(){

    //Deactivate animation and tooltip
    $( '#tip_p03s07' ).toggleClass( 'active inactive' );
    $( '#anim_p03s07' ).toggleClass( 'active inactive' );

    // Call animation
    anim_p03_8();

    //Change progression
    $( '#path_03_progress .seven' ).toggleClass( 'active inactive' );
    $( '#path_03_progress .eight' ).toggleClass( 'inactive active' );
  });




  //END
  //Check for "next" click
  $( '#tip_p03s08 .link' ).on( 'click', function(){
    //Deactivate animation and tooltip
    $( '#tip_p03s08' ).toggleClass( 'active inactive' );
    $( '#anim_p03s08' ).toggleClass( 'active inactive' );
    //Deactivate Path 01
    $( '#path_03' ).toggleClass( 'active inactive' );
    //Activate End Screen
    $( '#end' ).toggleClass( 'inactive active' );
  });








  //////////////////////////////////////////////////////////
  //////////////////// PREVIOUS BUTTONS ////////////////////
  //////////////////////////////////////////////////////////

  //////////////////////
  // PATH 01 || 6 - 1 //
  //////////////////////




  //SECTION 06

  //Check for "prev" click
  $( '#tip_p01s06-4 .prev' ).on( 'click', function(){
    //Deactivate tip and animation
    $( '#tip_p01s06-4 ').toggleClass( 'active inactive' );

    //Trigger animation
    anim_p01s06_3(); 
  });


  //Check for "prev" click
  $( '#tip_p01s06-3 .prev' ).on( 'click', function(){
    //Deactivate animation and tooltip  
    $( '#tip_p01s06-3' ).toggleClass( 'active inactive' );

    // Trigger Animation
    anim_p01s06_2();
  });


  //Check for "prev" click
  $( '#tip_p01s06-2 .prev' ).on( 'click', function(){
    //Deactivate animation and tooltip
    $( '#tip_p01s06-2' ).toggleClass( 'active inactive' );

    // Trigger animation
    anim_p01s06_1( 'fromPrev' ); 
  });


  //Check for "prev" click
  $( '#tip_p01s06-1 .prev' ).on( 'click', function(){
    //Deactivate animation and tooltip
    $( '#anim_p01s06' ).toggleClass( 'active inactive' );
    $( '#tip_p01s06-1' ).toggleClass( 'active inactive' );

    // Trigger animation
    anim_p01s05_2();

    //Change progression
    $( '#path_01_progress .six' ).toggleClass( 'active inactive' );
    $( '#path_01_progress .five' ).toggleClass( 'inactive active' ); 
  });



  //SECTION 05

  //Check for "prev" click
  $( '#tip_p01s05-2 .prev' ).on( 'click', function(){
    //Deactivate animation and tooltip
    $( '#tip_p01s05-2' ).toggleClass( 'active inactive' );

    // Trigger animation
    anim_p01s05_1( 'fromPrev' ); 
  });


  //Check for "prev" click
  $( '#tip_p01s05-1 .prev' ).on( 'click', function(){
    //Deactivate animation and tooltip
    $( '#anim_p01s05' ).toggleClass( 'active inactive' );
    $( '#tip_p01s05-1' ).toggleClass( 'active inactive' );

    // Trigger animation
    anim_p01s04_2();

    //Change progression
    $( '#path_01_progress .five' ).toggleClass( 'active inactive' );
    $( '#path_01_progress .four' ).toggleClass( 'inactive active' );
  });



  //SECTION 04

  //Check for "previous" click
  $( '#tip_p01s04-2 .prev' ).on( 'click', function(){
    //Deactivate animation and tooltip
    $( '#tip_p01s04-2' ).toggleClass( 'active inactive' );

    // Trigger animation
    anim_p01s04_1( 'fromPrev' );
  });


  //Check for "previous" click
  $( '#tip_p01s04-1 .prev' ).on( 'click', function(){
    //Deactivate animation and tooltip
    $( '#anim_p01s04' ).toggleClass( 'active inactive' );
    $( '#tip_p01s04-1' ).toggleClass( 'active inactive' );

    // Trigger animation
    anim_p01s03();


    //Change progression
    $( '#path_01_progress .four' ).toggleClass( 'active inactive' );
    $( '#path_01_progress .three' ).toggleClass( 'inactive active' );
  });


  //SECTION 03

  //Check for "previous" click
  $( '#tip_p01s03 .prev' ).on( 'click', function(){
    //Deactivate animation and tooltip
    $( '#anim_p01s03' ).toggleClass( 'active inactive' );
    $( '#tip_p01s03' ).toggleClass( 'active inactive' );

    // Trigger animation
    anim_p01s02_5();

    // Change progression
    $( '#path_01_progress .three' ).toggleClass( 'active inactive' );
    $( '#path_01_progress .two' ).toggleClass( 'inactive active' );
  });
  

  //SECTION 03

  //Check for "previous" click
  $( '#tip_p01s02-5 .prev' ).on( 'click', function(){
    //Deactivate animation and tooltip
    $( '#tip_p01s02-5' ).toggleClass( 'active inactive' );

    // Trigger animation
    anim_p01s02_4();
  });


  //Check for "previous" click
  $( '#tip_p01s02-4 .prev' ).on( 'click', function(){
    //Deactivate animation and tooltip
    $( '#tip_p01s02-4' ).toggleClass( 'active inactive' );

    // Trigger animation
    anim_p01s02_3();
  });


  //Check for "previous" click
  $( '#tip_p01s02-3 .prev' ).on( 'click', function(){
    //Deactivate animation and tooltip
    $( '#tip_p01s02-3' ).toggleClass( 'active inactive' );

    // Trigger animation
    anim_p01s02_2();
  });


  //Check for "previous" click
  $( '#tip_p01s02-2 .prev' ).on( 'click', function(){
    //Deactivate animation and tooltip
    $( '#tip_p01s02-2' ).toggleClass( 'active inactive' );

    // Trigger animation
    anim_p01s02_1( 'fromPrev' );
  });


  //Check for "previous" click
  $( '#tip_p01s02-1 .prev' ).on( 'click', function(){
    //Deactivate animation and tooltip
    $( '#anim_p01s02' ).toggleClass( 'active inactive' );
    $( '#tip_p01s02-1' ).toggleClass( 'active inactive' );

    // Trigger animation
    anim_p01s01_3();

    // Change progression
    $( '#path_01_progress .two' ).toggleClass('active inactive');
    $( '#path_01_progress .one' ).toggleClass('inactive active');
  });


  //SECTION 01

  //Check for "previous" click
  $( '#tip_p01s01-3 .prev' ).on( 'click', function(){
      
    // Deactivate animation and tooltip
    $( '#anim_p01s01-3' ).toggleClass( 'active inactive' );
    $( '#tip_p01s01-3' ).toggleClass( 'active inactive' );

    // Call previous screen/animation
    anim_p01s01_2();
  });

  //Check for "previous" click
  $( '#tip_p01s01-2 .prev' ).on( 'click', function(){
      
    // Deactivate animation and tooltip
    $( '#anim_p01s01-2' ).toggleClass( 'active inactive' );
    $( '#tip_p01s01-2' ).toggleClass( 'active inactive' );

    // Call previous screen/animation
    anim_p01s01_1();
  });








  //////////////////////
  ////// PATH 02 ///////
  //////////////////////

  //SECTION 01

  //Check for "previous" click
    $( '#tip_p02s01-4 .prev' ).on( 'click', function(){

      //Deactivate animation and tooltip
      $( '#anim_p02s01-3' ).toggleClass( 'active inactive' );
      $( '#tip_p02s01-4' ).toggleClass( 'active inactive' );

      // Trigger animation
      anim_p02s1_3();
  });


  //Check for "previous" click
    $( '#tip_p02s01-3 .prev' ).on( 'click', function(){
      //Deactivate animation and tooltip
      $( '#anim_p02s01-2' ).toggleClass( 'active inactive' );
      $( '#tip_p02s01-3' ).toggleClass( 'active inactive' );

      // Trigger animation
      anim_p02s1_2( 'fromPrev' );
  });


  //Check for "previous" click
    $( '#tip_p02s01-2 .prev' ).on( 'click', function(){
      //Deactivate animation and tooltip
      $( '#tip_p02s01-2' ).toggleClass( 'active inactive' );

      // Trigger animation
      anim_p02s1_1( 'fromPrev' );
  });








  //////////////////////
  // PATH 03 || 6 - 1 //
  //////////////////////

   //SECTION 07
  //Check for "previous" click
  $( '#tip_p03s07-3 .prev' ).on( 'click', function(){
    //Deactivate animation and tooltip
    $( '#tip_p03s07-3' ).toggleClass( 'active inactive' );
    $( '#anim_p03s07-4' ).toggleClass( 'active inactive');
    //Trigger animation
    anim_p3_s7_2 = init_anim( 'anim_p03s07-2', '../bodymovin/p03s07/02/data.json' );
    //Activate animation and tooltip
    setTimeout( function() { $( '#tip_p03s07-2' ).toggleClass( 'inactive active' ); }, 1100);
    $( '#anim_p03s07-2' ).toggleClass( 'inactive active' );
  });
    















  ////////////////////////////////////////////////////
  //////////////////// PAGINATION ////////////////////
  ////////////////////////////////////////////////////



  // Change clicked pagination number to clicked item and deactivate
  // all others.  Deactivate all active tips currently active.
  function changePagination( pageClicked )
  {

    var pageNumber = $( pageClicked ).attr( 'class' ); // Grab classes of element clicked
        clickedNumber = pageNumber.split( ' ' ); // Split classes by spaces
        ancenstor = $( pageClicked ).closest( '[id]' ), // find element path with id closest to item clicked
        ancId = ancenstor.attr( 'id' ); // Grab id name of path


    // console.log(pageNumber);
    // console.log(clickedNumber);
    // console.log(pageClicked);
    // console.log(ancenstor);
    // console.log( '#' + ancId + ' ' + '.' + clickedNumber[1] );


    //Deactivate all tips
    $( '.tip' ).removeClass( 'active' );
    $( '.tip' ).removeClass( 'inactive' );
    $( '.tip' ).addClass( 'inactive' );

    //Deactivate all sections
    $( '.section' ).removeClass( 'active' );
    $( '.section' ).removeClass( 'inactive' );
    $( '.section' ).addClass( 'inactive' );

    //Deactivate all numbers
    $( '.number' ).removeClass( 'active' );
    $( '.number' ).removeClass( 'inactive' );
    $( '.number' ).addClass( 'inactive' );

    // Activate pagination number clicked
    $('#' + ancId + ' ' + '.' + clickedNumber[1] ).toggleClass('inactive active');

    //Deactivate all tips AGAIN, in case another
    // was clicked before this one is activated
    setTimeout( function() { $( '.tip' ).removeClass( 'active' ); }, 500);
    setTimeout( function() { $( '.tip' ).removeClass( 'inactive' ); }, 500);
    setTimeout( function() { $( '.tip' ).addClass( 'inactive' ); }, 500);
  }



  /////////////
  // PATH 01 //
  /////////////

  //Section 01 - Clicked
  $( '#path_01_progress .one' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    //Activate Section 01 tip, animation, number
    anim_p01s01_1();

  });



  //Section 02 - Clicked
  $( '#path_01_progress .two' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    //Activate Section 02 tip & animation
    anim_p01s02_1();
  });



  //Section 03 - Clicked
  $( '#path_01_progress .three' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    //Activate Section 03 tip & animation
    anim_p01s03();
    
  });



  //Section 04 - Clicked
  $( '#path_01_progress .four' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    //Activate Section 04 tip & animation
    anim_p01s04_1();
  });



  //Section 05 - Clicked
  $( '#path_01_progress .five' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    //Activate Section 05 tip & animation
    anim_p01s05_1();
  });



  //Section 06 - Clicked
  $( '#path_01_progress .six' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    //Activate Section 06 tip & animation
    anim_p01s06_1();
  });







  /////////////
  // PATH 02 //
  /////////////

  // NO PAGINATION FOR PATH 02







  /////////////
  // PATH 03 //
  /////////////

  //Section 01 - Clicked
  $( '#path_03_progress .one' ).on( 'click', function(){
    
    // Change pagination
    changePagination( this );

    // Call animation and tip
    anim_p03_1();
  });

  //Section 02 - Clicked
  $( '#path_03_progress .two' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    // Call animation and tip
    anim_p03_2();
  });

  //Section 03 - Clicked
  $( '#path_03_progress .three' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    // Call animation and tip
    anim_p03_3_1();
  });

  //Section 04 - Clicked
  $( '#path_03_progress .four' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    // Call animation and tip
    anim_p03_4();
  });

  //Section 05 - Clicked
  $( '#path_03_progress .five' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    // Call animation and tip
    anim_p03_5();
  });


   //Section 07 - Clicked
  $( '#path_03_progress .six' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    // Call animation and tip
    anim_p03_6();
  });

  //Section 07 - Clicked
  $( '#path_03_progress .seven' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    // Call animation and tip
    anim_p03_7();
  });

  //Section 07 - Clicked
  $( '#path_03_progress .eight' ).on( 'click', function(){

    // Change pagination
    changePagination( this );

    // Call animation and tip
    anim_p03_8();
  });

});