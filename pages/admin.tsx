import dynamic from "next/dynamic"

const Admin = dynamic(() => import("../admin/App"), { ssr: false })

const App = () => {
  return <Admin />
}

export default App
