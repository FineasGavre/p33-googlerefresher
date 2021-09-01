module.exports = {
    env: {
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/base',
        'plugin:vue/vue3-recommended',
        'prettier'
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        'parser': '@typescript-eslint/parser',
        'ecmaVersion': 2020,
        'sourceType': 'module'
    },
    rules: {
        'vue/script-setup-uses-vars': 'error'
    },
    globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly'
    }
}