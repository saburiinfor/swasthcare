import React,{Component} from 'react';

import './App.scss';

import Layout from './components/desktop/Layout/Layout';

 

class App extends Component {

   

    render(){

        return(           

            <div className="App">              

                <Layout><img src="{SwasthLogo}" alt="" /></Layout>                         

                                

            </div>

        );

    }

}

 

export default App;
