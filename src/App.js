import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import NavbarComponent from './components/NavbarComponent'
import TableComponent from './components/TableComponent'
import FormComponent from './components/FormComponent'


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      foods: [
        {name: 'Terong balado', description: 'Terong goreng dengan sambal balado', price: '20000', id: '1'},
        {name: 'Roti Kopi', description: 'Roti toping kopi', price: '30000', id: '2'},
      ],
      name: '',
      description: '',
      price: 0,
      id: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // add
    if (this.state.id === '') {
      this.setState({
        foods: [
          ...this.state.foods,
          {
            id: this.state.foods.length + 1,
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,

          }
        ]
      })
    } else {
      // makanan yang selain dipilih
      const filterFoods = this.state.foods
        .filter((food) => food.id !== this.state.id)
        .map((filteredFoods) => {
          return filteredFoods
        })

        this.setState({
          foods: [
            ...filterFoods,
            {
              id: this.state.foods.length + 1,
              name: this.state.name,
              description: this.state.description,
              price: this.state.price,
            }
          ]
        })
    }

    this.setState({
      name: "",
      description: "",
      price: 0,
      id: "",
    });
  }

  editData = (id) => {
    const chosenFood = this.state.foods
      .filter((food) => food.id === id)
      .map((filteredFood) => {
        return filteredFood
      })

      this.setState({
        name: chosenFood[0].name,
        description: chosenFood[0].description,
        price: chosenFood[0].price,
        id: chosenFood[0].id,
      })
  }

  deleteData = (id) => {
    const newFood = this.state.foods
      .filter((food) => food.id !== id)
      .map((filteredFoods) => {
        return filteredFoods
      })

      this.setState({
        foods: newFood
      })
  }


  render() {
    return (
      <div>
          <NavbarComponent />
          <Container className="mt-4">
            <Row>
              <Col md="12">
                <TableComponent 
                  foods={this.state.foods} 
                  editData={this.editData}  
                  deleteData={this.deleteData}  
                />
              </Col>
            </Row>
            <FormComponent 
              {...this.state}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </Container>
      </div>
    )
  }
}

