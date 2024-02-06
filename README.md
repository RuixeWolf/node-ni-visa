# Node NI-VISA

Node.js module for [NI-VISA](https://www.ni.com/docs/en-US/bundle/ni-visa/page/ni-visa-overview.html) (Virtual Instrument Software Architecture) library.

Calling dynamic link libraries via [Koffi](https://koffi.dev/).

[NI-VISA API Reference](https://www.ni.com/docs/en-US/bundle/ni-visa-api-ref/page/ni-visa-api-ref/ni-visa-api-ref.html)

Free commercial use, welcome to contribute.

## Installation

### Install NI-VISA runtime

[Download](https://www.ni.com/en/support/downloads/drivers/download.ni-visa.html) and install NI-VISA runtime library.

### Install [node-ni-visa](https://www.npmjs.com/package/node-ni-visa)

```shell
# NPM
npm install node-ni-visa

# Yarn
yarn add node-ni-visa

# PNPM
pnpm install node-ni-visa
```

## Usage

```typescript
import * as NiVisa from 'node-ni-visa'

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
```

## Supported NI-VISA API

- viOpenDefaultRM
- viOpen
- viClose
- viWrite
- viRead

## License

MIT

## Thanks

Some NI-VISA API parameters refer to Peter Torelli's [ni-visa project](https://github.com/petertorelli/ni-visa).
