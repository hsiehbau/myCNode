import React, { Component } from "react";
import { Tag } from "antd";
import tab from "./tab";
function getTab(data) {
  // console.log(data);
  let nowTab = data.top ? "top" : data.good ? "good" : data.tab;
  return tab.filter(item => {
    return item.tab === nowTab;
  })[0];
  //返回第0 位
}
export default class TxtTag extends Component {
  render() {
    let nowTab = getTab(this.props.data);
    return <Tag color={nowTab.color}>{nowTab.txt}</Tag>;
  }
}
