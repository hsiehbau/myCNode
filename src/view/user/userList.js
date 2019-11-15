import React, {Component} from "react";
import {Card, List, Avatar} from "antd";
import {Link} from "react-router-dom";
export default class UserInfo  extends Component {
    render () {
        let {loading, title, data} = this.props;
        return (<Card
            loading = {loading}
            title = {title}
            type = "inner"
        >
            <List
                className = "userList"
                dataSource = {data}
                renderItem = {(item) => (
                    <List.Item key={item.id}>
                        <Avatar src={item.author.avatar_url} />
                        {/* 再加一个判断，如果当前地址和目标地址一样的话就。。。。 */}
                        <Link 
                        className="userName"
                        to={"/user/" +item.author.loginname}>{item.author.loginname}</Link>

                        <h4><Link to={"/details/" +item.id}>{item.title}</Link></h4>
                        
                        <time>最后回复时间：{item.last_reply_at.split("T")[0]}</time>
                    </List.Item>
                )}
            >

            </List>
        </Card>);
    }
}