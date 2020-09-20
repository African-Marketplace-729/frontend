import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Card from './Card';
export default class Cards extends React.Component{

    render(){

        return (
            <section className="cards-container">
                {console.log(this.props.userCards)}
                <Container>
                    <Row>
                {this.props.userCards && this.props.userCards.map(item => {
                    
                    return (
                            <Col md={3}>
                                <Card key={item.id} item={item} />
                            </Col>
                    )
                })}
                    </Row>
                </Container>
            </section>
        )
    }
}