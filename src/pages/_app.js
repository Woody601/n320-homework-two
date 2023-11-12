import { useEffect, useState } from "react"
import "@/styles/globals.css"
import Link from "next/link"

export default function App({ Component, pageProps }) {
  // State to store the screen width
  const [screenWidth, setScreenWidth] = useState(0)
  const [isToggled, setToggled] = useState(false)

  //If the user switches screen size and has the mobile menu open, it will close that mobile menu down.
  if ([screenWidth] >= 960 && isToggled) {
    setToggled(!isToggled)
  }
  // Function to toggle the class
  const toggleNav = () => {
    // This will only toggle the mobile nav if the screen size is equal to or less than 960px, which is the width the mobile navigation activates on.
    if ([screenWidth] <= 960) {
      setToggled(!isToggled)
    }
  }

  // Function to update the screen width
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth)
  }

  // useEffect hook to add and remove event listeners
  useEffect(() => {
    // Set the initial screen width
    updateScreenWidth()

    // Add event listener to update screen width on resize
    window.addEventListener("resize", updateScreenWidth)

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateScreenWidth)
    }
  }, []) // Empty dependency array ensures the effect runs once on mount
  return (
    <>
      <div className="navHolder">
        <div className={isToggled ? "bars active" : "bars"} onClick={toggleNav}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className={isToggled ? "links active" : "links"}>
          <Link href="/" onClick={toggleNav}>
            HOME
          </Link>
          <Link href="/about" onClick={toggleNav}>
            ABOUT
          </Link>
          <Link href="/games" onClick={toggleNav}>
            GAMES
          </Link>
          <Link href="/contact" onClick={toggleNav}>
            CONTACT
          </Link>
        </div>
      </div>
      <div className="pagescroll">
        <div className="app">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}
