"use client";

import dynamic from 'next/dynamic'

// Disable SSR for the app client to ensure all routing happens on the client side
const AppClient = dynamic(() => import('@/components/app-client'), {
  ssr: false,
})

export default function Page() {
  return <AppClient />;
}