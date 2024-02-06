/** NI-VISA lib function returned status code enum */
export enum VISA_STATUS_ENUM {
  // Success
  VI_SUCCESS_EVENT_EN = 0x3FFF0002,
  VI_SUCCESS_EVENT_DIS = 0x3FFF0003,
  VI_SUCCESS_QUEUE_EMPTY = 0x3FFF0004,
  VI_SUCCESS_TERM_CHAR = 0x3FFF0005,
  VI_SUCCESS_MAX_CNT = 0x3FFF0006,
  VI_SUCCESS_DEV_NPRESENT = 0x3FFF007D,
  VI_SUCCESS_TRIG_MAPPED = 0x3FFF007E,
  VI_SUCCESS_QUEUE_NEMPTY = 0x3FFF0080,
  VI_SUCCESS_NCHAIN = 0x3FFF0098,
  VI_SUCCESS_NESTED_SHARED = 0x3FFF0099,
  VI_SUCCESS_NESTED_EXCLUSIVE = 0x3FFF009A,
  VI_SUCCESS_SYNC = 0x3FFF009B,

  // Warning
  VI_WARN_QUEUE_OVERFLOW = 0x3FFF000C,
  VI_WARN_CONFIG_NLOADED = 0x3FFF0077,
  VI_WARN_NULL_OBJECT = 0x3FFF0082,
  VI_WARN_NSUP_ATTR_STATE = 0x3FFF0084,
  VI_WARN_UNKNOWN_STATUS = 0x3FFF0085,
  VI_WARN_NSUP_BUF = 0x3FFF0088,
  VI_WARN_EXT_FUNC_NIMPL = 0x3FFF00A9,

  // Error
  VI_ERROR_SYSTEM_ERROR = 0x80000000 + 0x3FFF0000,
  VI_ERROR_INV_OBJECT = 0x80000000 + 0x3FFF000E,
  VI_ERROR_RSRC_LOCKED = 0x80000000 + 0x3FFF000F,
  VI_ERROR_INV_EXPR = 0x80000000 + 0x3FFF0010,
  VI_ERROR_RSRC_NFOUND = 0x80000000 + 0x3FFF0011,
  VI_ERROR_INV_RSRC_NAME = 0x80000000 + 0x3FFF0012,
  VI_ERROR_INV_ACC_MODE = 0x80000000 + 0x3FFF0013,
  VI_ERROR_TMO = 0x80000000 + 0x3FFF0015,
  VI_ERROR_CLOSING_FAILED = 0x80000000 + 0x3FFF0016,
  VI_ERROR_INV_DEGREE = 0x80000000 + 0x3FFF001B,
  VI_ERROR_INV_JOB_ID = 0x80000000 + 0x3FFF001C,
  VI_ERROR_NSUP_ATTR = 0x80000000 + 0x3FFF001D,
  VI_ERROR_NSUP_ATTR_STATE = 0x80000000 + 0x3FFF001E,
  VI_ERROR_ATTR_READONLY = 0x80000000 + 0x3FFF001F,
  VI_ERROR_INV_LOCK_TYPE = 0x80000000 + 0x3FFF0020,
  VI_ERROR_INV_ACCESS_KEY = 0x80000000 + 0x3FFF0021,
  VI_ERROR_INV_EVENT = 0x80000000 + 0x3FFF0026,
  VI_ERROR_INV_MECH = 0x80000000 + 0x3FFF0027,
  VI_ERROR_HNDLR_NINSTALLED = 0x80000000 + 0x3FFF0028,
  VI_ERROR_INV_HNDLR_REF = 0x80000000 + 0x3FFF0029,
  VI_ERROR_INV_CONTEXT = 0x80000000 + 0x3FFF002A,
  VI_ERROR_QUEUE_OVERFLOW = 0x80000000 + 0x3FFF002D,
  VI_ERROR_NENABLED = 0x80000000 + 0x3FFF002F,
  VI_ERROR_ABORT = 0x80000000 + 0x3FFF0030,
  VI_ERROR_RAW_WR_PROT_VIOL = 0x80000000 + 0x3FFF0034,
  VI_ERROR_RAW_RD_PROT_VIOL = 0x80000000 + 0x3FFF0035,
  VI_ERROR_OUTP_PROT_VIOL = 0x80000000 + 0x3FFF0036,
  VI_ERROR_INP_PROT_VIOL = 0x80000000 + 0x3FFF0037,
  VI_ERROR_BERR = 0x80000000 + 0x3FFF0038,
  VI_ERROR_IN_PROGRESS = 0x80000000 + 0x3FFF0039,
  VI_ERROR_INV_SETUP = 0x80000000 + 0x3FFF003A,
  VI_ERROR_QUEUE_ERROR = 0x80000000 + 0x3FFF003B,
  VI_ERROR_ALLOC = 0x80000000 + 0x3FFF003C,
  VI_ERROR_INV_MASK = 0x80000000 + 0x3FFF003D,
  VI_ERROR_IO = 0x80000000 + 0x3FFF003E,
  VI_ERROR_INV_FMT = 0x80000000 + 0x3FFF003F,
  VI_ERROR_NSUP_FMT = 0x80000000 + 0x3FFF0041,
  VI_ERROR_LINE_IN_USE = 0x80000000 + 0x3FFF0042,
  VI_ERROR_LINE_NRESERVED = 0x80000000 + 0x3FFF0043,
  VI_ERROR_NSUP_MODE = 0x80000000 + 0x3FFF0046,
  VI_ERROR_SRQ_NOCCURRED = 0x80000000 + 0x3FFF004A,
  VI_ERROR_INV_SPACE = 0x80000000 + 0x3FFF004E,
  VI_ERROR_INV_OFFSET = 0x80000000 + 0x3FFF0051,
  VI_ERROR_INV_WIDTH = 0x80000000 + 0x3FFF0052,
  VI_ERROR_NSUP_OFFSET = 0x80000000 + 0x3FFF0054,
  VI_ERROR_NSUP_VAR_WIDTH = 0x80000000 + 0x3FFF0055,
  VI_ERROR_WINDOW_NMAPPED = 0x80000000 + 0x3FFF0057,
  VI_ERROR_RESP_PENDING = 0x80000000 + 0x3FFF0059,
  VI_ERROR_NLISTENERS = 0x80000000 + 0x3FFF005F,
  VI_ERROR_NCIC = 0x80000000 + 0x3FFF0060,
  VI_ERROR_NSYS_CNTLR = 0x80000000 + 0x3FFF0061,
  VI_ERROR_NSUP_OPER = 0x80000000 + 0x3FFF0067,
  VI_ERROR_INTR_PENDING = 0x80000000 + 0x3FFF0068,
  VI_ERROR_ASRL_PARITY = 0x80000000 + 0x3FFF006A,
  VI_ERROR_ASRL_FRAMING = 0x80000000 + 0x3FFF006B,
  VI_ERROR_ASRL_OVERRUN = 0x80000000 + 0x3FFF006C,
  VI_ERROR_TRIG_NMAPPED = 0x80000000 + 0x3FFF006E,
  VI_ERROR_NSUP_ALIGN_OFFSET = 0x80000000 + 0x3FFF0070,
  VI_ERROR_USER_BUF = 0x80000000 + 0x3FFF0071,
  VI_ERROR_RSRC_BUSY = 0x80000000 + 0x3FFF0072,
  VI_ERROR_NSUP_WIDTH = 0x80000000 + 0x3FFF0076,
  VI_ERROR_INV_PARAMETER = 0x80000000 + 0x3FFF0078,
  VI_ERROR_INV_PROT = 0x80000000 + 0x3FFF0079,
  VI_ERROR_INV_SIZE = 0x80000000 + 0x3FFF007B,
  VI_ERROR_WINDOW_MAPPED = 0x80000000 + 0x3FFF0080,
  VI_ERROR_NIMPL_OPER = 0x80000000 + 0x3FFF0081,
  VI_ERROR_INV_LENGTH = 0x80000000 + 0x3FFF0083,
  VI_ERROR_INV_MODE = 0x80000000 + 0x3FFF0091,
  VI_ERROR_SESN_NLOCKED = 0x80000000 + 0x3FFF009C,
  VI_ERROR_MEM_NSHARED = 0x80000000 + 0x3FFF009D,
  VI_ERROR_LIBRARY_NFOUND = 0x80000000 + 0x3FFF009E,
  VI_ERROR_NSUP_INTR = 0x80000000 + 0x3FFF009F,
  VI_ERROR_INV_LINE = 0x80000000 + 0x3FFF00A0,
  VI_ERROR_FILE_ACCESS = 0x80000000 + 0x3FFF00A1,
  VI_ERROR_FILE_IO = 0x80000000 + 0x3FFF00A2,
  VI_ERROR_NSUP_LINE = 0x80000000 + 0x3FFF00A3,
  VI_ERROR_NSUP_MECH = 0x80000000 + 0x3FFF00A4,
  VI_ERROR_INTF_NUM_NCONFIG = 0x80000000 + 0x3FFF00A5,
  VI_ERROR_CONN_LOST = 0x80000000 + 0x3FFF00A6,
  VI_ERROR_MACHINE_NAVAIL = 0x80000000 + 0x3FFF00A7,
  VI_ERROR_NPERMISSION = 0x80000000 + 0x3FFF00A8,
}