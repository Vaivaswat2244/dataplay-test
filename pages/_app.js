import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/thumbs"
import "bootstrap/dist/css/bootstrap.css"
import "toastr/build/toastr.min.css"
import "../styles/globals.css"
import AOS from "aos"
import "aos/dist/aos.css"
import { Provider } from "react-redux"
import { store } from "../store/index"
import Layout from "./layout"
import Head from "next/head"
import { useEffect } from "react"
import { AnalyticsBrowser } from "@segment/analytics-next"
// Import ThemeProvider
// import Logo from "./components/Logo";

export const analytics = AnalyticsBrowser.load({
  writeKey: "GMuO40IvAPvF74ZCkaLZ9yoJxHjO9M2i",
})

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 100,
    })
  }, [])
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const changeFavicon = (e) => {
      // Determine the theme based on the media query
      const theme = e.matches ? "dark" : "light"

      // Specify your favicon URLs
      const faviconURL =
        theme === "dark" ? "/Logo_square.png" : "/Logo_square.png"

      // Find and update the favicon link element
      const linkElement = document.querySelector('link[rel="icon"]')
      if (linkElement) {
        linkElement.href = "/Logo_square.png"
      }
    }

    // Initial check
    changeFavicon(mediaQuery)

    // Listen for changes
    mediaQuery.addEventListener("change", changeFavicon)

    // Cleanup the event listener on component unmount
    return () => mediaQuery.removeEventListener("change", changeFavicon)
  }, [])

  return (
    <Provider store={store}>
      <Layout>
        <Head>
          <link rel="icon" type="image/png" href="/Logo_square.png" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
