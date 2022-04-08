import { Download, Features, SectionWrapper } from "./components"
import assets from "./assets"

function App() {
  return (
    <>
      <SectionWrapper
        title="Your own store of Nifty NFTs."
        description="Buy, store, collect NFTs, exchange & earn crypto. Join 25+ million people using ProNef Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />

      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of ProNef NFT Marketplace. Smooth constant color of a fluent UI design."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />

      <SectionWrapper
        title="Deployment"
        description="ProNef is built using Expo which runs natively on all users devices. You can easily get your app into people's hands."
        mockupImg={assets.feature}
        reverse
      />
    </>
  )
}

export default App
