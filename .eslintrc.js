module.exports = {
    "env": {
        "es6": true
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "generators": false,
            "objectLiteralDuplicateProperties": false
        }
    },
    "extends": "airbnb-base",
    "plugins": [
        "import"
    ],
    "rules": {
        "brace-style": ["error", "allman",
            {
                "allowSingleLine": true
            }
        ],
        "no-console": 1,
        "no-debugger": 2,
        "no-extra-boolean-cast": 1,
        "no-extra-semi": 1,
        "no-unreachable": 2,
        "consistent-return": 1,
        "eqeqeq": [2, "smart"],
        "guard-for-in": 1,
        "radix": 2,
        "handle-callback-err": 1,
        "func-style": [1, "declaration"]
    }
};
