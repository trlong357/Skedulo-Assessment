import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./app/store";
import { Flex, Layout, Typography } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import UserSearch from "./components/search";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Typography.Title level={1} style={{ margin: 0 }}>
          Github User Search
        </Typography.Title>
        <Content style={{ padding: "20px" }}>
          <UserSearch />
        </Content>
      </div>
    </Provider>
  );
}

export default App;
