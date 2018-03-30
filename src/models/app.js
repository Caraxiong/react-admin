import { login, userInfo, logout, updatePassword } from '../services/app';
import { parse } from 'qs';
import { message } from 'antd';
import Cookie from '../utils/js.cookie';

export default {
  namespace: 'app',
  state: {
    login: false,
    user: {
      name: '',
      uid: '',
    },
    loginButtonLoading: false,
    menuPopoverVisible: false,
    siderFold: localStorage.getItem("antdAdminSiderFold") === "true",
    darkTheme: localStorage.getItem("antdAdminDarkTheme") !== "false",
    isNavbar: document.body.clientWidth < 769,
    navOpenKeys: JSON.parse(localStorage.getItem("navOpenKeys") || "[]"),
    passwordModalVisible: false,
  },
  subscriptions: {
    setup({ dispatch }) {
      window.onresize = () => {
        dispatch({ type: "changeNavbar" });
      };
      if (Cookie.get("SESSION_NP")) {
        let temparr = Cookie.get("SESSION_NP");
        temparr = atob(temparr);
        temparr = temparr.split("###");
        dispatch({
          type: "app/login",
          payload: { name: temparr[0], pass: temparr[1] }
        });
      }
    }
  },
}