let mix = require('laravel-mix');
const exec = require('child_process').exec;

class TailwindPhp {
    twConfig = 'tailwind.config.js';
    phpOutput = 'tailwind.config.php';

    name() {
        return 'tailwindphp';
    }

    register(twConfig, phpOutput) {
        this.twConfig = twConfig;
        this.phpOutput = phpOutput;
    }

    webpackPlugins() {
        return {
            apply: (compiler) => {
                // Thanks to jchook => https://stackoverflow.com/a/49786887
                compiler.hooks.afterEmit.tap('TailwindPhpPlugin', () => {
                    exec('npx tw2php --config ' + this.twConfig + ' --output ' + this.phpOutput, (err, stdout, stderr) => {
                        if (stdout) process.stdout.write(stdout);
                        if (stderr) process.stderr.write(stderr);
                    });
                });
            },
        }
    }
}

mix.extend('tailwindphp', new TailwindPhp());
