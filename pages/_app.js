import Footer from "../components/Footer";
import LoadingLayout from "../components/LoadingLayout";
import Menu from "../components/Menu";
import ConfigContextProvider from "../contexts/config.context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <LoadingLayout>
        <ConfigContextProvider>
          <div className="flex flex-col min-h-screen">
            <Menu />
            <main className="flex-1">
              <Component {...pageProps} />
            </main>
            <Footer />
          </div>
        </ConfigContextProvider>
      </LoadingLayout>
    </>
  );
}

export default MyApp;
