# Tinseltown.js

Tinseltown is a small (< 4KB) JS and CSS front-end library to add faux flicker loading effects, a la Hollywood hacker movies, to various elements on a web page.

// TODO: Add demo gif here

Tinseltown uses CSS animations for the effects themselves, but needs to have a small JavaScript component (< 1KB) to actually make it work. What makes these effects work is randomness. When the animations are initiated, they are given random `animation-delay` values as offsets; otherwise they would all play in sync, invalidating the purpose.

## Getting Started

The **easiest method** is to simply drop the compiled tinseltown.min.js and tinseltown.min.css files from the root folder of this repo into the front-end of whatever web project you are working on. You can now skip to the Usage section and use everything as-is.

### Customizing Animation Timings (Advanced)

It is possible to use Sass variables to customize animation timings if you want to dive deeper and only use this library for its randomization features.

In your Sass file, set any of the variables in the following example to CSS time values of your choice *before* importing tinseltown.min.css.

    $tnsl-flicker-duration: 1s;             // default 0.5s
    $tnsl-flickerQuick-duration: 0.5s;      // default 0.2s
    $tnsl-slideFromLeft-duration: 0.2s;     // default 0.1s
    $tnsl-slideFromRight-duration: 0.2s;    // default 0.1s

    @import 'tinseltown.scss'               // place *after* overriden variables

> **Note:** The default values above were chosen to look good when used with the default `maxDelay` value of 1 second and vice versa.

Of course, feel free to **download the tinseltown.scss file directly** from the src folder in this repo and place it in your project.

## Usage

Once the JS and CSS files are available to use in your project's front-end, use the following CSS classes to set animations.

    tnsl-flicker            // standard Hollywood-style flicker effect
    tnsl-flickerQuick       // shorter variant of flicker
    tnsl-slideFromLeft      // quick slide from left (using translate3d(-100%, 0, 0))
    tnsl-slideFromRight     // quick slide from right (using translate3d(100%, 0, 0))

In many cases, however, your design may benefit from some randomness. This is why a special, random animation class is included as well.

    tnsl-random

When you trigger the basic case (described in the next section), all elements with the `tnsl-random` class are first randomly assigned one of the above animation classes before playing. Every time the page loads, your `tnsl-random` classes may get a different set of effects.

### Basic Trigger

Once you are ready to trigger the animations, call

    tnslInit([maxDelay])

where `maxDelay` is the longest time (in seconds) that you want to allow any single `animation-delay` value to be.

This means that the *start* of each effect will be between `0` and `maxDelay` seconds from when the function is called. This does *not* guarantee that all the effects *will* be spread across the first `maxDelay` seconds, because randomness can still cause them to bunch up and trigger in the first second... or even half that.

You can omit the argument if you want, and a default of 1 second will be used.

> **Note:** The default animation timings in the compiled CSS were tuned to look good when used with the default `maxDelay` value of 1 second and vice versa.

If you want to trigger the animations at page load time, simply use

    window.onload = function() { tnslInit(); }      // without jQuery
    $(document).ready(function() { tnslInit(); });  // with jQuery

or otherwise add the function call to whatever handles your page load scripts.

### More Granular Control (Advanced)

If you want more granular control over the animations on your page, you can use some convenient utility functions included in Tinseltown.

#### `tnslReplaceRandom([animations])`

Processes all elements that have the `tnsl-random` class, assigning them random animations.

Optionally provide it an array of animation names, esp. if you do not want it to assign a certain animation or two. Pick from strings `flicker`, `flickerQuick`, `slideFromLeft` and `slideFromRight`. All animations used if no argument given.

> **Note:** It's highly recommended that you process any `tnsl-random` elements before calling animation functions, or they will simply not be animated. Calling animation trigger functions before *and* after processing all randoms may cause all animations to play twice, unless you perform JavaScript trickery to prevent this.

#### The **`maxDelay`** argument

For info on the optional `maxDelay` argument accepted by the following functions, refer to the Basic Trigger section above.

#### `tnslPlayFlicker([maxDelay])`

Triggers all `flicker` animations.

#### `tnslPlayFlickerQuick([maxDelay])`

Triggers all `flickerQuick` animations.

#### `tnslPlaySlideFromLeft([maxDelay])`

Triggers all `slideFromLeft` animations.

#### `tnslPlaySlideFromRight([maxDelay])`

Triggers all `slideFromRight` animations.

#### `tnslPlayAllFlicker([maxDelay])`

Triggers all `flicker` and `flickerQuick` animations.

#### `tnslPlayAllSlide([maxDelay])`

Triggers all `slideFromLeft` and `slideFromRight` animations.

#### `tnslPlayAll([maxDelay])`

Triggers all animations.

#### `tnslInit([maxDelay])`

Processes all `tnsl-random` elements *and* triggers all animations.