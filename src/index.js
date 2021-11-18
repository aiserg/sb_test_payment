import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faQuestionCircle, faLock } from '@fortawesome/free-solid-svg-icons'
import './index.scss';
import PaymentContainer from './imports/ui/containers/payment-container';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './imports/store/reducers'

const store = createStore(rootReducer);
library.add([faLock, faQuestionCircle]);

ReactDOM.render(
  <Provider store={store}>
    <PaymentContainer />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
