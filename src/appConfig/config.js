export default {
  awsConfig: {
    apiGatewayKey: "kQAdDBNPNV7TQ1c6N46Zt7M2Db7O0NOd5CtbD7UL",
    apiGatewayUrl: `https://fx9tuxt817.execute-api.eu-west-1.amazonaws.com/live/sendmail`
  },
  googleMaps: {
    apiKey: "AIzaSyArmkCikp4quXGKOYQy9lRfyD01lMr8uSw",
    mapCenter: {
      lat: -24.073712,
      lng: 28.9550579
    },
    mapZoom: 7,
    pins: [
      {
        position: {
          lat: -25.8199672,
          lng: 28.2866643
        },
        name: "Pretoria Office",
        addressText: "673 Rubenstein Street, Moreleta Park, Pretoria"
      },
      {
        position: {
          lat: -23.8284151,
          lng: 30.1438013
        },
        name: "Tzaneen Office",
        addressText: "5 Frank May Street, Aqua Park, Tzaneen"
      }
    ]
  },
  kpmaps: {
    apiKey: "AIzaSyArmkCikp4quXGKOYQy9lRfyD01lMr8uSw",
    mapCenter: {
      lat: 52.370096216355854,
      lng: 4.8935492500488635
    },
    mapZoom: 7,
    pins: [
      {
        postion: {
          lat: 52.371391,
          lng: 4.839248699999985
        },
        name: "Saint Lucas Andreas Hospital",
        addressText: "Jan Tooropstraat 164, 1061 AE Amsterdam, Netherlands",
        image: "./../static/img/rating.png"
      },
      {
        position: {
          lat: 52.4044603,
          lng: 4.922216700000035
        },
        name: "Boven IJ-Hospital",
        addressText: "Statenjachtstraat 1, 1034 CS Amsterdam, Netherlands",
        image: "./../static/img/rating.png"
      }
    ]
  }
};
