// https://en.bitcoin.it/wiki/List_of_address_prefixes


module.exports = {
  rubies: {
    messagePrefix: '\x19Rubies Signed Message:\n',
    bip32: {
      public: 0x02042a34,
      private: 0x020425f9
    },
    pubKeyHash: 0x3c,
    scriptHash: 0x1d,
    wif: 0xbc,
    dustThreshold: 0 
  }
}
