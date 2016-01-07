# popItUp
A jquery plugin for popup with custom options like animation, positioning, chasing the viewport while scrolling and etc. Though its still under development but you can use it for your front end development.
Suggest something on it or report an issue to help me making it healty.

# How to use it
It requires jquery - First add a reference to jquery library than popitup plugin as follows:
```
<script src="http://ajax.googleapis.com/ajax/libs/jquery/x.x.x/jquery.min.js"></script>
<script src="jquery.bpopup-x.x.x.min.js"></script>
```

Add a link or button that fire the popup and a div that acts as a wrapper for popup.
```
<a href="#" id="call-popup">Show popup</a> <!-- link to call popup -->
...
<div class="popitup-wrapper">
  ...
  <!-- popup contents goes here -->
</div>
```

Note :- Pop up element must be hidden through css
```
.popitup-wrapper{ display:none }
```

Add a click event to a link and than call the plugin as given
```
$("#call-popup").click(function(){
  $(".popitup-wrapper").popitup();
});
```

You can add your custom values to options like this :
```
...
$(".popitup-wrapper").popitup({
  width : "600",
  autoClose : false
});
...
```

# options
API name with (default value)type | Description
----------------------- | --------------------------
widthSet (300) _integer_ | Set the width of your popup.
overlayColor (#000) _string_ | Set the color of overlay.
overlayOpacity (0.5) _int_ | Set the opacity of overlay. Values between 0 to 1 only.
autoClose (false) _boolean_ | Close the popup when click anywhere on overlay outside the popup.
animation (null) _string_ | Give animation effect while popup appear and disappear. Possible values are slideDown, slideUp, slideLeft, slideRight
colorChange (null){ color (null) _string_, background (null) _string_ } | Set the text or background color of popup
chase (false) _boolean_ | Popup will chase the center of the viewport when page scrolls.
chaseSpeed (500) _integer_ | Change the speed of chasing. It counts in miliseconds.
fixedModal (false) _boolean_ | Set the popup fixed at center.
modalPosition (null) _Array integer_ | Set the position of popup in a screen by specifying X and Y axis values. For example ```modalPosition: [200, 300]```
urlToLoad (null) _url_ | Make an ajax call to your specified url and load the content. Note :- You have to specify the container(using _containerToLoad_ option) in which the content to be loaded.
containerToLoad (null) _string_ | Specify the class name of your container in which the content will be loaded after ajax call.

# Callback
Events | Description
------ | -----------
onOpenModal | Event triggers when popup open
onCloseModal | Event trigger when popup closes

# Default options
```
{
  widthSet       :  "300",                   /** only integer */
  overlayColor   :  "#000",                  /** only hexcode */
  overlayOpacity :  "0.5",                   /** values between 0.1 to 1 */
  autoClose      :  false,                   /** boolean */
  animation      :  null,                    /** only slideDown, slideUp, slideLeft, slideRight */ 
  colorChange    :  {                        /** To change the background and text color of popup */
                      color      : null,
                      background : null
                    },
  chase          :  false,                   /** booleans */
  chaseSpeed     :  "500",                   /** only integer */
  fixedModal     :  false,                   /** booleans */
  modalPosition  :  [],                      /** [integer, integer] */
  containerToLoad:  "",
  urlToLoad      :  "",
}

```
## Demo
[working on it](http://www.google.com)












