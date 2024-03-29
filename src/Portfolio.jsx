import React from "react"
import { Helmet } from "react-helmet"
import { Container, Row, Col } from "react-bootstrap"
import { Fade } from "react-reveal"

import GaultonFitness from "./img/GaultonFitness.png"
import MoveNJunkPro from "./img/MoveNJunkPro.png"
import RAFAC from "./img/RAFAC.png"
import FBALeadsUK from "./img/FBALeadsUK.png"
import FBALeadsUKApp from "./img/FBALeadsUKApp.png"
import FBAMultiTool from "./img/FBAMultiTool.png"

class ProjectCard extends React.Component {
    render() {
        return(
            <Col xs={12} md={6} lg={4} className="my-3">
                <Fade left delay={this.props.fade}>
                    <div className="text-center">
                        <a href={this.props.url} target="_blank" rel="noreferrer">
                            <img src={this.props.img} alt="Portfolio" className="w-75 rounded-lg"/>
                        </a>
                        <Row className={`no-gutters py-2 ${this.props.overlap && "mt--3"} px-3 bg-light rounded-xl position-relative`}>
                            <Col>
                                <h4 className="mb-0 font-weight-bold">{this.props.name}</h4>
                                <p className="mb-0 text-muted">{this.props.clientName}</p>
                                <a href={this.props.url} target="_blank" rel="noreferrer" className="text-primary">{this.props.url} <i className="fas fa-external-link-alt"/></a>
                            </Col>
                            {/* <Col xs="auto" className="my-auto">
                                <a href="" className="h3 text-primary">
                                    <i className="fas fa-info-circle"/>
                                </a>
                            </Col> */}
                        </Row>
                    </div>
                </Fade>
            </Col>
        )
    }
}

export default class Portfolio extends React.Component {
    render() {
        return(
            <>
                <Helmet>
                    <title>My Portfolio &bull; joshv.tech</title>
                </Helmet>
                <Container>
                    <Row>
                        <ProjectCard img={MoveNJunkPro} name="Move 'n' Junk Pro" clientName="Terrence Carroll" url="https://movenjunkpro.com/" fade={150*0}/>
                        <ProjectCard img={GaultonFitness} name="Gaulton Fitness" clientName="Harry Gaulton" url="https://gaultonfitness.co.uk/" overlap fade={150*1}/>
                        <ProjectCard img={RAFAC} name="Royal Air Force Air Cadets" clientName="230 Sqn" url="https://230rafac.co.uk/" overlap fade={150*2}/>
                        <ProjectCard img={FBALeadsUK} name="FBALeadsUK" clientName="AbstractTek Ltd" url="https://fbaleadsuk.com/" overlap fade={150*3}/>
                        <ProjectCard img={FBALeadsUKApp} name="FBALeadsUK App" clientName="AbstractTek Ltd" url="https://app.fbaleadsuk.com/" overlap fade={150*4}/>
                        <ProjectCard img={FBAMultiTool} name="FBAMultiTool" clientName="AbstractTek Ltd" url="https://www.fbamultitool.com/" overlap fade={150*5}/>
                    </Row>
                </Container>
            </>
        )
    }
}