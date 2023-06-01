import "../styles/globals.css";
import Navbar from "../navbarcomponent/navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { wrapper, store } from "../store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { setSingleUser } from "../action";
import { useEffect } from "react";

import { Audio } from "react-loader-spinner";

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

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  const data = LocalStorageItem();
  const loading = useSelector((state) => state.item.loading);
  useEffect(() => {
    if (data) {
      dispatch(setSingleUser(data));
    } else {
      dispatch(setSingleUser([]));
    }
  }, [data]);

  return (
    <>
      {loading == true ? (
        <div className="d-flex align-items-center justify-content-center h-100">
          <Audio height="200" width="200" radius="9" color="green" ariaLabel="three-dots-loading" wrapperStyle wrapperClass/>
        </div>
      ) : (
        <Provider store={store}>
          <Navbar />
          <Component {...pageProps} />
        </Provider>
      )}
    </>
  );
}

export default wrapper.withRedux(MyApp);
