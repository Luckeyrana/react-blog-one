import React from 'react';
import './card.css';

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            like: this.props.cardData.like,
            counter: 0,
            text: 'Like',
            class: 'card'
        }

    }

    handleLike = () => {
        if (this.state.counter===0){
            this.setState({
            counter: 1,
             text: 'Liked',
             like: this.state.like +1

            });

        }

        else if(this.state.counter === 1){
            this.setState(
                {
                    counter: 0,
                    text: 'Like',
                    like: this.state.like -1
                }
            )


        }


    }


    hideBox = () => {
        if (this.state.class === 'card'){
            this.setState(
                {
                    class: 'hideCard'

                }
            )
            alert("Are you sure, you want to remove the box having "+ this.state.like+ " likes?");
        }
    }

    render() {
        return (
            <div className={this.state.class}>
                <div className={'img-section'}>

                    <img src={this.props.cardData.image} alt="s" className={'bigImages'} />
                </div>
                <div className={'user-info'}>
                    <div className="user">
                        <div className="img">
                            <img src={this.props.cardData.userImg} alt=""/>
                        </div>
                        <div className="content">
                            <h3>{this.props.cardData.userName}</h3>
                            <p>{this.props.cardData.userDate}</p>
                        </div>
                    </div>
                    <div className="button">
                        <button onClick={this.hideBox}>hide</button>
                    </div>

                </div>

                <div className={'article'}>
                    <h3 className="title">{this.props.cardData.cardTitle}</h3>
                    <p>{this.props.cardData.cardDescription}</p>

                </div>

                <div className={'card-footer'}>
                    <div className="button">
                        <button onClick={this.handleLike}>{this.state.text}</button>
                        <span>{this.state.like}</span></div>
                    <div className="button">
                        <button>Comment</button>
                        <span>0</span></div>
                    <div className="button">
                        <button>Share</button>
                        <span>10</span></div>


                </div>

            </div>
        );
    }


}

export default Cards;