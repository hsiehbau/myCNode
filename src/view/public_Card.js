import React, {Component} from "react";
import {Card} from "antd";
export default class  PublicCard extends Component {
    render() {
        //this指向PublicCard 的data
        let { data } = this.props;
        return (<div className="wrap">
            {data.map((item, index) => (
                <Card
                    title={item.title}
                    key={index}
                    type = "inner"
                >
                <div 
                    dangerouslySetInnerHTML={{
                        __html: item.content
                    }}
                ></div>
            </Card>
            ))}
        </div>)
    }
}