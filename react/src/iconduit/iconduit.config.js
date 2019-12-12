module.exports = () => {
  return {
    name: "PiJS",
    description:
      "A React PWA and Secure SSL Node/Express server running on a Raspberry Pi 4",
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
