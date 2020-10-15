# Demo
A simple API for calculating Proportional Scale, to see a working demo, please click here:

https://adir-sl.github.io/scale

# Welcome to Proportinal Scale
This API is used to calculate a Proportinal Scale,
in order to use it call the function called scaleAPI with 4 parameters,
in this order: Original Width, Original Height, New Width and New Height,
you can write 0 in the New Width or New Height in order to let the function calculate it.

for example:
```
scaleAPI(1920,1080,0,720);
```

If you forget how to uses it, you can always call the `Help` function:
```
scaleHelp();
```

# How to Get Started
The simplest way to get started is by linking the Javascipt file in `Head` part of your document, as such:

```
<head>
    <script src="scaleAPI.js"></scirpt>
</head>
```

from there you can call the help function or jus start to calculating your scales, as shown in the "Welcom" section of this ducument.