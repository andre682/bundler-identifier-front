import React, { Component } from 'react'
import BundleForm from './components/presentational/BundleForm.jsx'
import Header from './components/presentational/Header.jsx'
import storeFactory from './store'
import { Provider } from 'react-redux'

const store = storeFactory()
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <BundleForm />
            </div>
          </div>
        </div>
      </Provider>
    )
  }
}

export default App
