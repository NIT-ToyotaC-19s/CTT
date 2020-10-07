module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    // proxy: {
    //   "/": {
    //     target: "https://plated-campaign-291611.df.r.appspot.com",
    //   }
    // }
    proxy: "https://plated-campaign-291611.df.r.appspot.com"
  }
};
