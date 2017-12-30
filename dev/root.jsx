import React from 'react';
import SignUp from './components/signupContainer';
import {Provider} from 'react-redux';

const Root = ({store}) => {

      //return (<div> hello root </div>);
      return <Provider store={store}>
              <SignUp/>
            </Provider>;



};


export default Root;
