export const clientConfig = {
  target: 'web', // <=== can be omitted as default is 'web'
  node: {
    fs: "empty",
    net: "empty",
    tls: "empty"
  }
};