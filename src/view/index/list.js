import React, {Component} from "react";
import {List, Avatar} from "antd";
import {Link} from "react-router-dom"
import data from "./data"

class IndexList extends Component {
    render () {
        console.log(data);
        return <List
            loading = {false} 
            dataSource = {data.data}
            renderItem = {item => (<List.Item>
                <List.Item.Meta
                    avatar = {< Avatar src={item.author.avatar_url}/>}
                    title = {<Link to={"/details/" + item.id}>
                        {item.title}</Link>}
                    description = {(<p>
                            <Link to={"/user/" + item.author.loginname}>
                                {item.author.loginname}
                            </Link>
                            发表于：{item.create_at.split("T")[0]}
                        </p>)}
                />
            </List.Item>)}
        >

        </List>;
    }
}
export default IndexList;