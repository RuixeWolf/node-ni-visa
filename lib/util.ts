import { VISA_STATUS_ENUM } from './map.js'

/**
 * Check NI-VISA lib function returned status
 * @param statusCode - NI-VISA lib function returned status code
 */
export function checkStatus (statusCode: number): void {
  const statusMessage = VISA_STATUS_ENUM[statusCode]
  if (statusMessage == null) return
  // Success status
  if (statusMessage.startsWith('VI_SUCCESS_')) return
  // Warning status
  if (statusMessage.startsWith('VI_WARN_')) {
    console.warn(`NI-VISA Warning: ${statusMessage} (0x${statusCode.toString(16).toUpperCase()})`)
    return
  }
  // Error status
  if (statusMessage.startsWith('VI_ERROR_')) {
    throw new Error(`NI-VISA Error: ${statusMessage} (0x${statusCode.toString(16).toUpperCase()})`)
  }
}
