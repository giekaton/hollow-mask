# Hollow Mask Avatar Maker

![HM Header](https://raw.githubusercontent.com/giekaton/hollow-mask/master/public/img/header-github.png)

Hollow Mask v0.0.9
<br>
**Todo: Shapes polishing (60% complete)**
<br>
<br>
https://hollowmask.com
<br>
<br>
## About

Hollow Mask is a Vue.js web app, created around the `hollowMask.js` vanilla JS script.

For the source, the script uses 10 initially designed masks. Each mask has 7 different parts.

When parts of initial masks are mixed together, they create new unique avatars.

The total amount of unique avatars: 10^7 = 10,000,000

Every avatar is associated with a string of 7 integers (range: 0000000 - 9999999).

To generate a random avatar:
```
obj = hollowMask()
maskSvgCode = obj.mask
maskId = obj.maskId
```

To generate a specific avatar:
```
maskSvgCode = hollowMask('4898125')
```

<br/>

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
