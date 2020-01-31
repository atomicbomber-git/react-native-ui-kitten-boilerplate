const {exec} = require("child_process")
const execa = require("execa")

async function getDefaultAdbDeviceCode() {
    return new Promise((resolve, reject) => {
        execa(`adb`, [`devices`])
            .then(({stdout}) => {
                const lines = stdout.split(/\r?\n/);

                if (lines.length >= 3 && lines[1].includes(`device`)) {
                    const splitLine = lines[1].split(`\t`)
                    if (splitLine.length > 0) {
                        resolve(splitLine[0])
                        return
                    }
                }

                reject(new Error(`No device found.`))
            })
            .catch(error => {
                reject(error)
            })
    })
}

console.info(`Attempting to detect if any device is running...`)
getDefaultAdbDeviceCode()
    .then(device => {
        console.info(`Device ${device} is found. Not attempting to start any new emulator.`)
    })
    .catch(error => {
        console.info(`No device found. Attempting to start a new emulator.`)
        startNewEmulator()
    })


function startNewEmulator() {
    execa(`emulator`, [`-list-avds`])
        .then(({stdout}) => {
            let avds = stdout.trim().split("\n")

            if (avds.length === 0) {
                throw new Error(`No AVDs found. Please create at least one AVD.`);
            }

            const emulator = execa(`emulator`, [`@${avds[0]}`], {detached: true})
                .then(result => {
                    // Do nothing
                })
                .catch(error => {
                    console.error(error)
                })

            const checkDeviceHandle = setInterval(() => {
                getDefaultAdbDeviceCode()
                    .then(device => {
                        console.info(`Device ${device} is detected. Emulator successfully initialized.`)
                        clearTimeout(timeoutHandle)
                        clearInterval(checkDeviceHandle)
                        process.exit(0)
                    })
                    .catch(error => {
                        // Don't do anything
                    })
            }, 1000)

            const timeoutSeconds = 60
            const timeoutHandle = setTimeout(() => {
                console.info("The emulator takes too long to turn on. Exiting.")
                clearTimeout(timeoutHandle)
                clearInterval(checkDeviceHandle)
                process.exit(1)
            }, timeoutSeconds * 1000)
        })
        .catch(error => {
            console.info(`Failed to obtain list of emulators.`)
            process.exit(1)
        })
}



