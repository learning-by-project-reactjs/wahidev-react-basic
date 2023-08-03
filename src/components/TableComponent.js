import React from 'react'
import { Table } from 'react-bootstrap'

const TableComponent = ({ foods, editData, deleteData }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nama Makanan</th>
                    <th>Deskripsi</th>
                    <th>Harga</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                {
                    foods.map((food, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{food.name}</td>
                                <td>{food.description}</td>
                                <td>Rp. {food.price}</td>
                                <td>
                                    <button 
                                        className='btn btn-warning mr-2'
                                        onClick={() => editData(food.id)}
                                    >
                                        Edit
                                    </button>
                                    <button 
                                        className='btn btn-danger'
                                        onClick={() => deleteData(food.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}

export default TableComponent