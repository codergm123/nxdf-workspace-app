import React from "react";

import styles from './Lottery.module.css';

export default class LotteryItem extends React.Component<
    LotteryItemProps,
    LotteryItemState
> {
    timer?: NodeJS.Timeout;

    constructor(props: LotteryItemProps) {
        super(props);
        this.state = {
            number: "?",
            decryptingDone: "",
        };
    }

    decryptEffect() {
        this.setState({ decryptingDone: "" });
        this.timer = setInterval(() => {
            this.randomNumber();
        }, 10);
        setTimeout(() => {
            this.setState({
                decryptingDone: "done",
                number: this.props.number,
            });

            this.timer && clearInterval(this.timer);
        }, 1000 * +this.props.index + 1000);
    }

    randomNumber() {
        this.setState({ number: Math.round(Math.random() * 9) + 1 });
    }

    componentDidUpdate(nextProps: LotteryItemProps) {
        const { decrypting } = this.props;
        if (nextProps.decrypting !== decrypting) {
            if (decrypting) {
                this.decryptEffect();
            }
        }
    }

    render() {
        return (
            <div
                className={`${styles.ball} ${styles[this.props.color]} ${styles[this.state.decryptingDone]}`}
            >
                {this.state.number}
            </div>
        );
    }
}
