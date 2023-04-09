import React, { Component } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Banner from './components/Banner';

export default class App extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <Header />
                <Body />
                <Footer />
            </div>
        );
    }
}
