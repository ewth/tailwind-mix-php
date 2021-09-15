# tailwind-mix-php

This is a simple plugin for Laravel Mix that allows TailwindCSS configuration to be written to a PHP file after compilation.

## Installation

```
npm install ewth/tailwind-mix-php
```

## Usage

```

In your `webpack.mix.js`, load the plugin and add it to Mix:

```
require('tailwind-php');

...
mix.js('src/app.js', 'scripts')
    .tailwindphp('./tailwind.config.js', './config/tailwind.php')
    .extract();
```


Note that `.tailwindphp()` accepts two optional arguments:

1. The TailwindCSS configuration file to read from.
2. The PHP file to output the configuration to.

These will default to `tailwind.config.js` and `tailwind.config.php` respectively.