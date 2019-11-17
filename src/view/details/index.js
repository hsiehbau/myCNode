import React, {Component} from "react";
import {connect} from "react-redux";
import TxtDetails from "./txtDetails";
import ReplyList from "./replyList";
import axios from "axios";
class Details extends Component {
    constructor(arg) {
        super(arg);
        let id = this.props.match.params.id;
        this.getData(id);

    }
    // shouldComponentUpdate(nextProps, nextState){
    
    // }
    getData(id) {
        // let id = this.props.match.params.id;
        this.props.dispatch((dispatch) => {
            dispatch({
                type: "DETAILS_UPDATA"
            });
            axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
                .then((res) => {
                    dispatch({
                        type: "DETAILS_UPDATA_SUCC",
                        data: res.data
                    })
                })
                .catch((error) => {
                    dispatch({
                        type: "DETAILS_UPDATA_ERROR",
                      
                    })
                })
        })
    }
    render() {
        console.log(this.props);
        console.log("进来了咩？？？？？");
        let {loading, data} = this.props;
        let {author, replies, reply_count, create_at, good} = data;
        let {loginname, avatar_url} = author
        return (<div className="wrap">
            <TxtDetails 
                loading = {loading}
                data = {data}
            />
            <ReplyList
                loading = {loading}
                replies = {replies}
                replyCount = {reply_count}
            />
        </div>);
    }
}
//包装中只需要state中的details的信息
export default connect(state => (state.details))(Details);