import * as NiVisa from '../lib/index'
// import * as NiVisa from '../dist/ni-visa.js'

// Initialization NI-VISA driver
const driverSession = NiVisa.viOpenDefaultRM()

// Open VXI11 device communication session
const deviceSession = NiVisa.viOpen(driverSession, 'TCPIP0::192.168.10.100::inst0::INSTR')

// Write and read by SCPI
console.log('Write result:', NiVisa.viWrite(deviceSession, '*IDN?\n'))
console.log('Read result:', NiVisa.viRead(deviceSession))

// Query by SCPI
const queryMessage = '*IDN?\n'
console.log(`Query '${queryMessage}' -> '${NiVisa.query(deviceSession, queryMessage)}'`)

// Close device communication session
NiVisa.viClose(deviceSession)

// Close NI-VISA driver
NiVisa.viClose(driverSession)
