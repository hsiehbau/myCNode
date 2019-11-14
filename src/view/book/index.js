import React, {Component} from "react";
import data from "./data";
import {Card} from "antd"
class Book extends Component {
    render() {
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

export default Book;