import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { getCustomers, handleError } from '../../helpers/requests'
import styles from './customers.module.scss'

export class Customers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      customers: [],
      errors: []
    }
  }
  reqeustCustomers () {
    this.setState({ errors: [] })
    getCustomers().then(({ data }) => {
      const { customers } = data.data
      this.setState({ customers })
    }).catch(handleError(errors => {
      this.setState({ errors })
    }))
  }

  componentDidMount () {
    this.reqeustCustomers()
  }

  render () {
    const { customers, errors } = this.state
    const errorHeader = !!errors.length && (<div className={styles.error}>{errors.join('\n')}</div>)
    return (
      <div>
        {errorHeader}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>Number of Vehicles</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {
              customers.map((customer) => {
                const href = `mailto:${customer.email}`
                const link = `/customers/${customer.id}`
                return (
                  <tr key={customer.id}>
                    <td><a href={href}>{customer.firstName} {customer.lastName}</a></td>
                    <td>{customer.number}</td>
                    <td>{customer.carCount}</td>
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
