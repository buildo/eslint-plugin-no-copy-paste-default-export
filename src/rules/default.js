const classNameMatch = /export[\s]+default[\s]+class[\s]+([\S]+)/i;

module.exports = function(context) {
  return {
    'ExportDefaultDeclaration': node => {
      const parts = context.getFilename().split('/');
      const filename = parts[parts.length - 1].replace(/\..+$/, '');
      const match = classNameMatch.exec(context.getSource(node));

      if (match && match[1] !== filename) {
        context.report(node, `(class name) ${match[1]} !== ${filename} (file name)`);
      }
    }
  };
}

module.exports.meta = {
  config: 2
};
