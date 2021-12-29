import dynamic from "next/dynamic"
import { Layout } from "../components/Layout"

const Admin = dynamic(() => import("../admin/App"), { ssr: false })

const App = () => {
  return (
    <Layout>
      <Admin />
    </Layout>
  )
}

export default App
