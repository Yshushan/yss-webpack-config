module.exports = {
    "root": true,
    "plugins": ["html"],
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "warn",
            2
        ],
        "linebreak-style": [
            "warn",
            "windows"
        ],
        "quotes": [
            "warn",
            "single",
            { "allowTemplateLiterals": true }
        ],
        "semi": [
            "warn",
            "never"
        ],
        "no-var": [
          "warn"
        ]
    }
};