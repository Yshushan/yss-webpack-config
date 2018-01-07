module.exports = {
    "root": true,
    "plugins": ["html"],
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    // "extends": "eslint:recommended",
    "extends": "standard",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        // "linebreak-style": [
        //     "warn",
        //     "windows"
        // ],
        // "quotes": [
        //     "warn",
        //     "single",
        //     { "allowTemplateLiterals": true }
        // ],
        "semi": [
            "warn",
            "never"
        ],
        "no-var": [
          "warn"
        ],
        "comma-dangle": ["warn", {  //trailing comma
          "arrays": "always-multiline",
          "objects": "always-multiline",
          "imports": "never",
          "exports": "never",
          "functions": "ignore",
        }],
        // "camelcase": ["off"],
        "no-new": ["off"]
    }
};