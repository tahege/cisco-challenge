import axios from './axios'

export const getCustomers = () => {
  return axios.get('/api/customers')
  // {
  //   data: {
  //     customers: [
  //       {id: 1, fistName: 'foo', lastName: 'bar', email: 'foo@bar.com', carCount: 3, number: '333-227-2439'}
  //     ]
  //   }
  // }
}

export const getCustomer = (id) => {
  return axios.get(`/api/customers/${id}`)
  // {
  //   data: {
  //     customer: {id: 1, fistName: 'foo', lastName: 'bar', email: 'foo@bar.com', carCount: 3, number: '333-227-2439'},
  //     cars: [
  //       {id: 2, make: 'Toyota', model: 'Camry', year: 2020 },
  //       ...
  //     ]
  //   }
  // }
}

export const getCar = (id) => {
  return axios.get(`/api/cars/${id}`)
  // {
  //   data: {
  //     car: {id: 2, make: 'Toyota', model: 'Camry', year: 2020}
  //   }
  // }
}

export const getParts = (carId) => {
  return axios.get(`/api/cars/${carId}/parts`)
  // {
  //   data: {
  //     parts: [
  //       {id: 7, name: 'Tires', supplier: 'Goodyear', model: 'TX-37', replaced: "2020-04-10T16:55:17-04:00" | null, originalPart: true},
  //       ...
  //     ]
  //   }
  // }
}

export const postPart = (carId, params) => {
  return axios.post(`/api/cars/${carId}/parts`, params)
  // post data
  // {
  //   part: {
  //       { name: 'Tires', supplier: 'Goodyear', model: 'TX-37'},
  //   }
  // }
  // replaced will be set to current date, originalPart set to false
  // success response will be:
  // {
  //   data: {
  //     part: {id: 7, name: 'Tires', supplier: 'Goodyear', model: 'TX-37', replaced: "2020-04-10T16:55:17-04:00" | null, originalPart: true},
  //   }
  // }
  // failed response will be:
  // {
  //   errors: ['Some messages']
  // }
}

export const patchPart = (partId, params) => {
  return axios.patch(`/parts/${partId}`, params)
  // patch data whatever is changing
  // {
  //   part: {
  //       { name: 'Tires', supplier: 'Goodyear', model: 'TX-37', replaced: "2020-04-10T16:55:17-04:00" | null, originalPart: true},
  //   }
  // }
  // success response will be:
  // {
  //   data: {
  //     part: {id: 7, name: 'Tires', supplier: 'Goodyear', model: 'TX-37', replaced: "2020-04-10T16:55:17-04:00" | null, originalPart: true},
  //   }
  // }
  // failed response will be:
  // {
  //   errors: ['Some messages']
  // }
}

export const deletePart = (partId, params) => {
  return axios.delete(`/parts/${partId}`)
  // success response will be:
  // {}
  // failed response will be:
  // {
  //   errors: ['Some messages']
  // }
}

export const handleError = (errorFunction) => {
  return (error) => {
    if (error.response) {
      // error is from server
      // server should returns arry of error messages
      // {errors: [message1, message2, ...]}
      const { data: { errors } } = error.response
      if (errors) {
        return errorFunction(errors)
      }
    }
    // otherwise probably a js error like trying to deconstruct value not there, etc
    // should change to probably only show this error if in dev env
    const errors = [error.message]
    return errorFunction(errors)
  }
}
