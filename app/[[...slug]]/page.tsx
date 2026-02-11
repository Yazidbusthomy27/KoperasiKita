import dynamic from 'next/dynamic';

// Import App.tsx dynamically with SSR disabled
// This allows HashRouter and localStorage to work without server hydration errors
const ClientApp = dynamic(() => import('../../App'), { ssr: false });

export default function Page() {
  return <ClientApp />;
}