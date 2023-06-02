import "../styles/globals.css";
import Navbar from "../navbarcomponent/navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { wrapper, store } from "../store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { getCartdata, setSingleUser } from "../action";
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
  const loading = useSelector((state) => state?.item?.loading);
 

  useEffect(() => {
    if (data) {
      dispatch(setSingleUser(data));
      dispatch(getCartdata(data?.id));
    } else {
      dispatch(setSingleUser([]));
    }
  }, [data]);
 

  return (
    <>
      {loading == true ? (
        <div style={{ height: "100vh" }} className="d-flex align-items-center justify-content-center">
          <Audio height="80" width="80" radius="9" color="green" ariaLabel="three-dots-loading" className="wrapperStyle wrapperClass" />
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
