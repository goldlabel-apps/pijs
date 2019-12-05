module.exports = () => {
  return {
    name: 'Iconduit',
    description: 'A build system for web application icon and image assets',
    urls: {
      base: 'https://iconduit.github.io/',
    },
    colors: {
      brand: '#D5415C',
    },
    masks: {
      primary: 'iconMaskAndroidSquircle',
      output: {
        appleTouchIconMasked: 'iconMaskIosSquircle',
        webAppIconMasked: 'iconMaskAndroidCircle',
      },
    },
    os: {
      ios: {
        statusBarStyle: 'black-translucent',
      },
    },
    definitions: {
      output: {
        appleTouchIconMasked: {
          input: 'appleTouchIcon',
          name: 'apple-touch-icon-masked-[dimensions].png',
          options: {
            isMasked: true,
          },
          sizes: ['appleTouchIconRetina'],
        },
      },
    },
    outputs: {
      include: [
        'appleTouchIconMasked',
      ],
      exclude: [
        'serviceWorker',
      ],
    },
    applications: {
      native: [
        {
          platform: 'itunes',
          id: '915056765',
          launchUrl: 'iconduit://dashboard',
        },
        {
          platform: 'play',
          id: 'com.google.android.apps.maps',
          launchUrl: 'https://iconduit.app/dashboard',
        },
        {
          platform: 'windows',
          id: '9wzdncrdtbvb',
          launchUrl: 'iconduit://dashboard',
        },
      ],
    },
    extra: {
      license: 'MIT',
    },
  }
}
