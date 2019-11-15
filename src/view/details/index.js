import React, {Component} from "react";
import data from "./data";
import TxtDetails from "./txtDetails";
import ReplyList from "./replyList";
class Details extends Component {
    render() {
        console.log(data);
        return (<div className="wrap">
            <TxtDetails 
                loading = {false}
                data = {data.data}
            />
            <ReplyList
                loading = {false}
                replies = {data.data.replies}
                replyCount = {data.data.reply_count}
            />
        </div>);
    }
}

export default Details;