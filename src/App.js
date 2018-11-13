import React, {Component} from 'react';
import './App.css';
import Cards from "./app/components/Card/Cards";


const data = [
    {
        id: 1,
        image: '/assets/images/img1.jpg',
        userImg: '',
        userName: 'Kawan',
        userDate: '20/20/2018',
        cardTitle: 'Heading first',
        cardDescription: 'descriptin goes here',
        like: 100
    },
    {
        id: 2,
        image: '/assets/images/img2.jpg',
        userImg: '',
        userName: 'Kawan',
        userDate: '20/20/2018',
        cardTitle: 'Heading first',
        cardDescription: 'descriptin goes here',
        like: 150
    },
    {
        id: 3,
        image: '/assets/images/img3.jpg',
        userImg: '',
        userName: 'Kawan',
        userDate: '20/20/2018',
        cardTitle: 'Heading first',
        cardDescription: 'descriptin goes here',
        like: 200
    },
    {
        id: 4,
        image: '/assets/images/img4.jpg',
        userImg: '',
        userName: 'Kawan',
        userDate: '20/20/2018',
        cardTitle: 'Heading first',
        cardDescription: 'descriptin goes here',
        like: 200
    },
    {
        id: 5,
        image: '/assets/images/img5.jpg',
        userImg: '',
        userName: 'Kawan',
        userDate: '20/20/2018',
        cardTitle: 'Heading first',
        cardDescription: 'descriptin goes here',
        like: 300
    }

];


class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    {data.map((obj, index) =>
                        <Cards cardData={obj}/>
                    )
                    }

                </div>

            </div>
        );
    }
}

export default App;
