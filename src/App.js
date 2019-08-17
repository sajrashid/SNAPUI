import React from 'react';
import './App.css';
import Header from './component/Header/header';
import Footer from './component/PageFooter/footer';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Tests from './pages/tests'
import Analyze from './pages/analyze'
import Support from './pages/Support'


const App = () => {
    return (
        <div className="wrap">
            <Header />
            <div className='contentWrap'>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/tests' component={Tests} />
                    <Route path='/analyze' component={Analyze} />
                    <Route path='/support' component={Support} />
                </Switch>
            </div>
            <Footer />
        </div>

    );
};
export default App;





