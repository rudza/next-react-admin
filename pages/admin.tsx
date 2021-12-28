import dynamic from "next/dynamic"

import { Layout } from "../components/Layout"

const Admin = dynamic(() => import("../admin/App"), { ssr: false })

const App = () => {
  if (typeof window === "undefined") {
    return <div />
  }

  return (
    <div suppressHydrationWarning>
      <Layout>
        <Admin />
      </Layout>
    </div>
  )
}

export default App
