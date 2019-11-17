import React, {Component} from "react";
import {Row, Col, Pagination} from "antd";
import IndexMenu from "./indexMenu";
import IndexList from "./list"

class Index extends Component {
    render() {
        // console.log(this.props);
        let tab = this.props.match.params.id;
        return (
            <Row className="wrap">
                <Col md={6} xs={0} className="indexSider">
                    <IndexMenu
                        id="indexMenu"
                        mode="vertical"
                    />
                </Col>
                <Col md={0} xs={24}>
                <IndexMenu
                        id="indexXsMenu"
                        mode="horizontal"
                    /> 
                </Col>
                <Col md={18} xs={24} style={{height: "500px"}}
                    className="indexList"
                >
                    <IndexList tab={tab} />
                    {/* <Pagination 
                        current={1}
                        pageSize={10}
                        total={50}
                        onChange={(current) => {
                            console.log(current);
                        }}
                    /> */}
                </Col>
            </Row>
        )
    }
}

export default Index;