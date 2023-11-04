const package = require('./package.json');
const hash = require('child_process')
  .execSync('git rev-parse --short HEAD')
  .toString().trim()

/**
* This is the base electron-forge config
*/
const config = {
    packagerConfig: {
        name: process.platform === 'linux' ? 'aeon' : 'Aeon',
        icon: './src/icon',
        executableName: process.platform === 'linux' ? 'aeon' : 'Aeon',
        asar: false,
        buildVersion: `${package.version}-${hash}`,
        protocols: [
            {
              name: "Aeon",
              schemes: ["aeon"]
            }
        ]
    },
    makers: [
        {
            name: '@electron-forge/maker-squirrel',
            config: {
                iconUrl: 'https://raw.githubusercontent.com/leinelissen/aeon/master/src/icon.ico',
                setupIcon: './src/icon.ico'
            }
        },
        {
            name: '@electron-forge/maker-dmg',
            config: {
                // background: './assets/dmg-background.png',
                format: 'ULFO'
            }
        },
        {
            name: "@electron-forge/maker-zip",
            platforms: [ "darwin" ],
        },
        {
            name: '@electron-forge/maker-deb',
            config: {}
        },
        {
            name: '@electron-forge/maker-rpm',
            config: {}
        }
    ],
    plugins: [
        {
            name: '@electron-forge/plugin-webpack',
            config: {
                // HMR Woes: https://github.com/electron-userland/electron-forge/issues/2560
                devServer: {
                    liveReload: false,
                },
                mainConfig: './webpack.main.config.js',
                renderer: {
                    config: './webpack.renderer.config.js',
                    entryPoints: [
                        {
                            html: './src/app/index.ejs',
                            js: './src/app/index.tsx',
                            name: 'main_window',
                            preload: {
                                js: './src/app/preload.ts',
                            },
                        }
                    ]
                },
                loggerPort: 9001
            }
        },
    ],
};


/**
 * For some reason OpenSSL isn't compiled directly into the NodeGit native module. We
 * thus have to include manually on Windows only.
 */
function bundleOpenSSLMaybe() {
    if (process.platform !== 'win32') {
        return;
    }

    // Add a hook to include the file
    config.hooks = {
        postPackage: async () => {
            const fs = require('fs');
            const path = require('path');

            await fs.promises.copyFile(            
                // TODO: It's probably a bad idea to hardcode the DLL location here. Maybe it 
                // is a good idea to pull it from some side of config or environment variable.
                'C:\\WINDOWS\\system32\\libcrypto-1_1-x64.dll',
                path.join(__dirname, 'out', 'Aeon-win32-x64', 'resources', 'app', '.webpack', 'main', 'native_modules', 'build', 'Release', 'libcrypto-1_1-x64.dll'),
            );
        }
    };
}

bundleOpenSSLMaybe();

// Finally, export it
module.exports = config;