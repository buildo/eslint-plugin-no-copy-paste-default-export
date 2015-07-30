const RULE = 'default';
const classNameMatch = /export[\s]+default[\s]+class[\s]+([\S]+)/i;

export default {
  rules: {
    [RULE]: context => ({
      'ExportDefaultDeclaration': node => {
        const parts = context.getFilename().split('/');
        const filename = parts[parts.length - 1].replace(/\..+$/, '');
        const match = classNameMatch.exec(context.getSource(node));

        if (match && match[1] !== filename) {
          context.report(node, `(class name) ${match[1]} !== ${filename} (file name)`);
        }
      }
    })
  },

  rulesConfig: {
    [RULE]: 2
  }
};