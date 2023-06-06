import "../styles/globals.css";
import Navbar from "../navbarcomponent/navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { wrapper, store } from "../store";
import { Provider, useDispatch } from "react-redux";
import { getCartdata, setUser } from "../action";
import { useEffect, useState } from "react";
import LoadingOverlay from "react-loading-overlay-ts";
import { useRouter } from "next/router";
// json-server --watch db.json --port 5000 --host 192.168.29.229


const keyss = () => {
  if(typeof window !== "undefined"){
    return localStorage.getItem("storedToken")
  }
}

function App({ Component, ...rest }) {
  
  const tokens = ["abate","abbas","abbe","abbey","abbot","abbott","abc","abe","abed","abel","abet","abide","abject","ablaze","able","abner","abo","abode","abort","about","above","image","imbue","imp","impel","import","impute","inane","inapt","inc","inca","incest","inch","incur","index","india","indies","indy","inept","inert","infect","infer","infima","infix","infra","ingot","inhere","injun","ink","inlay","inlet","inman","inn","inner","input","insect","yip","ymca","yodel","yoder","yoga","yogi","yoke","yokel","yolk","yon","yond","yore","york","yost","you","young","your","youth","yow","yucca","yuck","yuh","yuki","yukon","yule","yves","ywca","yyy","yyyy","zag","zaire","zan","zap","zazen","zeal","zealot","zebra","zeiss","zen","zero","zest","zesty","zeta","zeus","zig","zilch","zinc","zing","zion",
  ];

  const generateToken = () => {
    let random = Math.floor(Math.random() * tokens.length);
    let randomWord = tokens[random];
    return randomWord;
  };
  let keysOfToken = keyss();
  const UserToken = generateToken();

  const { store, props } = wrapper.useWrappedStore(rest);
  const dispatch = useDispatch();
  const router = useRouter();
  const [isActive, setActive] = useState(false);
  
  useEffect(() => {
    if(keysOfToken == null || ""){
      dispatch(setUser(UserToken)); 
      dispatch(getCartdata(UserToken));
      localStorage.setItem("storedToken", UserToken);
    }else{
      dispatch(getCartdata(keysOfToken));
      dispatch(setUser(keysOfToken)); 
    }
  }, [router]);

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
          content: { height: "100vh", width: "100vh" },
          spinner: (base) => ({ ...base, position: "fixed", height: "100%", left: "42%", right: "42%" })
        }}
      ></LoadingOverlay>
      <Navbar />
      <Component {...props.pageProps} />
    </Provider>
  );
}

export default wrapper.withRedux(App);
