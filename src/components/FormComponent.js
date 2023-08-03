import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'

const FormComponent = ({ id, name, description, price, handleChange, handleSubmit }) => {
    return (
        <div className='mt-4'>
            <Row>
                <Col>
                    <h4>{id ? "Edit Data" : "Tambah Data"}</h4>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="name">
                            <Form.Label>Food</Form.Label>
                            <Form.Control 
                                type="text"
                                name="name"
                                value={name}
                                onChange={(event) => handleChange(event)}
                            />
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control 
                                as="textarea"
                                rows="3"
                                name="description"
                                value={description}
                                onChange={(event) => handleChange(event)}
                            />
                        </Form.Group>
                        <Form.Group controlId="price">
                            <Form.Label>Price</Form.Label>
                            <Form.Control 
                                type="number"
                                name="price"
                                value={price}
                                onChange={(event) => handleChange(event)}

                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default FormComponent