module.exports = () => {
  return {
    name: "Pi JS",
    description:
      "Secure SSL Node/Express server for Raspberry Pi 4",
    urls: {
      base: "https://pi.listingslab.io"
    },
    colors: {
      brand: "#212121"
    },
    masks: {
      primary: "iconMaskAndroidSquircle",
      output: {
        appleTouchIconMasked: "iconMaskIosSquircle",
        webAppIconMasked: "iconMaskAndroidCircle"
      }
    },
    os: {
      ios: {
        statusBarStyle: "black-translucent"
      }
    },
    definitions: {
      output: {
        appleTouchIconMasked: {
          input: "appleTouchIcon",
          name: "apple-touch-icon-masked-[dimensions].png",
          options: {
            isMasked: true
          },
          sizes: ["appleTouchIconRetina"]
        }
      }
    },
    outputs: {
      include: ["appleTouchIconMasked"],
      exclude: ["serviceWorker"]
    },
    extra: {
      license: "MIT"
    }
  };
};
