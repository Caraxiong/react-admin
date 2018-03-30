import "./index.html"
import dva from 'dva';
import createLoading from 'dva-loading';
import { hashHistory } from 'dva/router';

// 1. Initialize
const app = dva({
  ...createLoading(),
  history: hashHistory,
  onError(error) {
    console.log('app onError -- ', error);
  }
});

// 2. Plugins 用来加载插件的
// app.use({});

// 3. Model 用来接收你发送的action的
app.model(require('./models/app'));

// 4. Router 所有页面的初始化路由设置
app.router(require('./router'));

// 5. Start
app.start('#app');
