module.exports = {
    extends: [
        'stylelint-config-standard-scss',
        'stylelint-config-recommended-vue'
    ],
    customSyntax: 'postcss-html',
    overrides: [
        {
            files: ['**/*.{scss,css,sass}'], // css 相关文件由 postcss-scss 处理
            customSyntax: 'postcss-scss'
        },
    ],
    rules: {
        'indentation': 4,
        'selector-pseudo-element-no-unknown': [
            true,
            {
                ignorePseudoElements: ['v-deep']
            }
        ],
        'number-leading-zero': 'never',
        'no-descending-specificity': null,
        'font-family-no-missing-generic-family-keyword': null,
        'selector-type-no-unknown': null,
        'at-rule-no-unknown': null,
        'no-duplicate-selectors': null,
        'no-empty-source':null,
        'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global'] }]
    }
}
