import React, {Component} from "react";
import {Card, Avatar, List} from "antd";
import {Link} from "react-router-dom";
export default class ReplyList extends Component {
    render() {
        let {loading,replyCount, replies} = this.props;
        console.log(replies[0])
        return (
            <Card
                loading = {loading}
                title = {replyCount + "条回复"}
                type = "inner"
            >
                <List
                    dataSource = {replies}
                    renderItem = {(item) => (
                        <List.Item
                            key = {item.id}
                            extra = {item.ups.length>0? 
                                <span>有{item.ups.length}人觉得很赞</span> : ""}
                        >
                            <List.Item.Meta 
                                avatar={<Avatar src={item.author.avatar.avatar_url}/>}

                                description={<Link to={"/user/" + item.author.loginname}>{item.author.loginname}</Link>}

                            />
                        </List.Item>
                    )}
                ></List>
            </Card>
        );
    }
}
