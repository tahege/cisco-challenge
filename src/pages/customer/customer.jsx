import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { getCustomer, handleError } from '../../helpers/requests'
import { Customer as CustomerComponent } from '../../components/customer/customer'
import styles from './customer.module.scss'

export class Customer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: props.id,
      customer: [],
      cars: [],
      errors: []
    }
  }
  reqeustCustomer () {
    const { id } = this.state
    this.setState({ errors: [] })
    getCustomer(id).then(({data}) => {
      const { customer, cars } = data.data
      this.setState({ customer, cars })
    }).catch(handleError(errors => {
      this.setState({ errors })
    }))
  }

  componentDidMount () {
    this.reqeustCustomer()
  }

  render () {
    const { customer, cars, errors } = this.state
    const errorHeader = !!errors.length && (<div className={styles.error}>{errors.join('\n')}</div>)
    return (
      <div>
        {errorHeader}
        <CustomerComponent customer={customer} />
        <table>
          <thead>
            <tr>
              <th>Make</th>
              <th>Model</th>
              <th>Year</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {
              cars.map((car) => {
                const link = `/cars/${customer.id}`
                return (
                  <tr key={car.id}>
                    <td>{car.make}</td>
                    <td>{car.model}</td>
                    <td>{car.year}</td>
                    <td><Link to={link}>View</Link></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}
