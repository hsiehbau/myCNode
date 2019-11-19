import React, {Component} from "react";
import {List, Avatar} from "antd";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import axios from "axios";
import TxtTag from "../txtTag";
class IndexList extends Component {
    constructor(arg) {
        super(arg);
        //不需要在当前组件中修改的东西都给放到外面去
        // let {tab} = this.props;
        this.isStart = true;
        this.state = {
            page: 1,
            // tab
        }
        //如果不传参就会什么也显示不出来
        this.getData(this.props.tab, this.state.page);
    }
    //组件或者redux更新的时候收到了新的props....会循环调用this.getData,形成死循环，要加个判断！！！！！！！！而且componentWillReceiveProps会在当前数据没有更新完的时候继续更新下一次，会有连续两次的更新操作，所以要换shouldc
    // componentWillReceiveProps(nextProps) {
    //     console.log(nextProps)
    //     if(this.props.tab !== nextProps.tab){
    //         this.getData(nextProps.tab)
    //         return false
    //     }
    // }
    shouldComponentUpdate(nextProps, nextState) {
        this.isStart = false;
        //实现翻页功能
        if(this.state.page !== nextState.page) {
            this.getData(nextProps.tab, nextState.page);
            return false;
        }
        //通过判断一不一样来判断是否重新更新，如果不一样了 就先返回false，先不更新组件
        if(this.props.tab !== nextProps.tab){
            // this.state.page = 1;
            this.getData(nextProps.tab, 0)
            this.setState({
                page: 1
            })
            return false
        }
        //其他状态进来的时候返回true，再去更新数据(组件)
        return true
    }
    getData(tab, page) {
        this.props.dispatch((dispatch) => {
            //增加交互体验，数据更新的过程中先来个loading的提示
            dispatch({
                type:"LIST_UPDATA"
            });
            //更新之前也需要给一个状态。。。。。。。。。。。。
            axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${this.state.page}&limit=10`)
            .then((res) => {
                console.log(res.data);
                dispatch({
                    type:"LIST_UPDATA_SUCC",
                    data: res.data
                });
            })
            .catch((error) => {
                // console.log(error);
                dispatch({
                    type:"LIST_UPDATA_ERROR",
                    data: error
                });
            })
        });
    }
    render () {
        // console.log(data);
        // console.log(this.props);
        //改变不了放这儿干啥？？？
        let {loading, data} = this.props;
        //需要loading, data, tab, page四种数据
        let pagination = {
            current: this.state.page,
            pageSize: 10,
            total: 1000,
            onChange: ((current) => {
                this.setState({
                    page: current
                })
            })
        }
        return <List
            loading = {false} 
            dataSource = {data}
            //第一次进来不显示
            pagination= {this.isStart? false:pagination}
            renderItem = {item => (<List.Item
                actions={[
                    "回复:" + item.reply_count,
                    "访问:" + item.visit_count,
                ]}
                key = {item.id}
            >
                <List.Item.Meta
                    avatar = {< Avatar src={item.author.avatar_url}/>}
                    title = 
                    {<div>
                        <TxtTag data={item} />
                        <Link to={"/details/" + item.id}>{item.title}</Link>
                    </div>}
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
export default connect(state=>state.list)(IndexList);