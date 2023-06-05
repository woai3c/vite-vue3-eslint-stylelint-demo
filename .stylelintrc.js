module.exports = {
    extends: [
        'stylelint-config-standard-scss',
    ],
    rules: {
        indentation: 4,
        'media-feature-range-notation': null,
        'alpha-value-notation': ['number'],
        'color-function-notation': ['legacy'],
        'no-descending-specificity': null,
        'font-family-no-missing-generic-family-keyword': null,
        'selector-type-no-unknown': null,
        'at-rule-no-unknown': null,
        'no-duplicate-selectors': null,
        'no-empty-source': null,
        'selector-class-pattern': null,
        'selector-pseudo-class-no-unknown': [
            true,
            { ignorePseudoClasses: ['global', 'deep'] },
        ],
        'scss/at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: ['tailwind'],
            },
        ],
    },
};
