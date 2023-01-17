# caps

A smart converter to convert all types of words or letters to capital letters

### Basic setup

Install [caps] with npm or yarn

```rust
npm i caps
```

[caps]: https://www.npmjs.com/package/caps
### Handling URL


Example:
```rust
const caps = require('caps')
const someThing = document.querySelector(".someThing")

var tx = someThing.innerText
  
someThing.innerText = caps(tx, "some, thing")

```
