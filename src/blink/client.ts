import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: import.meta.env.VITE_BLINK_PROJECT_ID || 'blockchain-invest-ar-v61shl9g',
  publishableKey: import.meta.env.VITE_BLINK_PUBLISHABLE_KEY || 'blnk_pk_8rYGd2FOmVQpEInZGV-BwrEwzTcCxxfx',
  authRequired: false,
  auth: { mode: 'managed' },
})
