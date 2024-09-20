
import dayjs from 'dayjs'
import { dateYMD, dateYMDHMS } from '@/config/index'
export function dateFormat(date, fmt) {
  return date ? dayjs(date).format(fmt) : date
}

export function dateFormatYMD(date) {
  return date ? dayjs(date).format(dateYMD) : date
}

export function dateFormatYMDHMS(date) {
  return date ? dayjs(date).format(dateYMDHMS) : date
}

