const RULES = ['default'];

export default {
  rules: RULES.reduce((ac, r) => ({
    ...ac,
    [r]: require(`./rules/${r}`)
  }), {}),

  rulesConfig: RULES.reduce((ac, r) => ({
    ...ac,
    [r]: require(`./rules/${r}`).meta.config
  }), {})
};