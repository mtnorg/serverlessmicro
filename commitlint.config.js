module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: ['commitlint-plugin-function-rules'],
  rules: {
    'header-max-length': [2, 'always', 200],
    'scope-case': [0, 'always', 'pascal-case'],
    'body-max-line-length': [2, 'always', 300], // Body lines should not exceed 300 characters
    'footer-max-line-length': [2, 'always', 300], // Footer lines should not exceed 300 characters
    'footer-leading-blank': [2, 'always'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'chore',
      ],
    ],
    // 'function-rules/subject-case': [
    //   2,
    //   'always',
    //   (parsed) => {
    //     const regex = /AB#\d+/;
    //     const isValid = regex.test(parsed.subject);

    //     return [isValid, `Commit message must include 'AB#<number>' (e.g., AB#123).`];
    //   },
    // ],
  },
};
