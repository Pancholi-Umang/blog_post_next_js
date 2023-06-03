import "../styles/globals.css";
import Navbar from "../navbarcomponent/navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { wrapper, store } from "../store";
import { Provider, useDispatch } from "react-redux";
import { getCartdata, setSingleUser } from "../action";
import { useEffect, useState } from "react";
import LoadingOverlay from "react-loading-overlay-ts";
import { useRouter } from "next/router";
// json-server --watch db.json --port 5000 --host 192.168.29.229

const LocalStorageItem = () => {
  if (typeof window !== "undefined") {
    let userDetails = localStorage.getItem("loginBlog");

    if (userDetails) {
      return JSON.parse(localStorage.getItem("loginBlog"));
    } else {
      return [];
    }
  } else {
    return [];
  }
};

function App({ Component, ...rest }) {
  const {store, props} = wrapper.useWrappedStore(rest);
  const dispatch = useDispatch();
  const data = LocalStorageItem();
  const router = useRouter();
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    if (data) {
      dispatch(setSingleUser(data));
      dispatch(getCartdata(data?.id));
    } else {
      dispatch(setSingleUser([]));
    }
  }, [data]);

  useEffect(() => {
    router.events.on("routeChangeStart", (url) => {
      setActive(true);
    });
    router.events.on("routeChangeComplete", (url) => {
      setActive(false);
    });
    router.events.on("routeChangeError", (url) => {
      setActive(false);
    });
  }, [router]);

  return (
    <Provider store={store}>
      <LoadingOverlay
        active={isActive}
        spinner
        styles={{
          content: {
            height: "100vh",
            width: "100vh",
          },
          spinner: (base) => ({
            ...base,
            position: "fixed",
            height: "100%",
            left: "42%",
            right: "42%",
          }),
        }}
      ></LoadingOverlay>
      <Navbar />
      <Component {...props.pageProps} />
    </Provider>
  );
}

export default wrapper.withRedux(App);
