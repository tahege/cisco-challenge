import React, { Component } from 'react';

export class Customer extends Component {
  render () {
    const { firstName, lastName, email, number } = this.props
    const href = `mailto:${email}`
    return (
      <div>
        <h3>
          <a href={href}>
            {firstName} {lastName}
          </a>
        </h3>
        <p>
          {number}
        </p>
      </div>
    );
  }
}
