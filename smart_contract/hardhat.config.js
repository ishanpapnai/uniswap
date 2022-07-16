require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/Cuq-6zI1bOn5QthQYVDfDFGZ0f6PWZ8n',
      accounts: [
        '110c4e71f9ade82c829f2374ae19e25d701cb9f7d5e0b5d9c60100887d347229',
      ],
    },
  },
}
