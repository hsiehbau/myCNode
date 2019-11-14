import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Menu} from "antd";

class IndexMenu extends Component {
    render() {
        return (
            <Menu 
                id={this.props.id}
                mode={this.props.mode}
            >
                <Menu.Item>
                    <Link to="/index/all">全部</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/index/good">精华</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/index/ask">问题</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/index/share">分享</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/index/job">招聘</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/index/dev">测试</Link>
                </Menu.Item>
            </Menu>
        )
    }
}

export default IndexMenu;