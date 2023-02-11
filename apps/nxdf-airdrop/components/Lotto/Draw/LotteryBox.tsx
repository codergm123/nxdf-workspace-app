import React from "react";
import LotteryItem from "./LotteryItem";

import styles from './Lottery.module.css';

import {
  ref,push
} from "@firebase/database"
import {dbService} from "../firebase";
const numbers = [...Array(10).keys()];

export default class LotteryBox extends React.Component<
    LotteryBoxProps,
    LotteryBoxState
> {
    
    constructor(props: LotteryBoxProps) {
        super(props);
        this.state = {
            number: [0, 0, 0, 0],
            effect: false,
            numberGenerated: false
        };
    }

    randomize = () => {
        if (!this.state.effect) {
            const numberCopy = numbers.map((x) => x);
            const arr:number[] = [];
            for (let i = 0; i <= 3; i++) {
                const random = Math.floor(
                    Math.random() * (numberCopy.length - 1)
                );
                arr.push(numberCopy[random] + 1);
                numberCopy.splice(random, 1);
            }
            this.setState({ number: arr, effect: true });
            setTimeout(() => {
                this.setState({ effect: false, numberGenerated: true });
            }, 4*1000);
        }
    };

    buy = async () => {
      if(this.state.number.includes(0)) {
        return;
      }
      this.props.buyTicket(this.state.number);
    }

    render() {
      return (
       <>
                <div id={styles.numbers}>
                    <LotteryItem
                        index="0"
                        color="blue"
                        number={this.state.number[0]}
                        decrypting={this.state.effect}
                    />
                    <LotteryItem
                        index="1"
                        color="red"
                        number={this.state.number[1]}
                        decrypting={this.state.effect}
                    />
                    <LotteryItem
                        index="2"
                        color="grey"
                        number={this.state.number[2]}
                        decrypting={this.state.effect}
                    />
                    <LotteryItem
                        index="3"
                        color="bonus"
                        number={this.state.number[3]}
                        decrypting={this.state.effect}
                    />

                </div>
                <div style={{display:'flex'}}>
                    <button style={{marginRight:'30px'}}
                        id={styles.btn}
                        className={this.state.effect ? styles.hide : ""}
                        onClick={this.randomize}
                    >
                      { this.state.numberGenerated ? 'Draw again' :'Draw' }
                    </button>
                    <button
                        id={styles.btn}
                        className={this.state.effect || !this.state.numberGenerated ? styles.hide : ""}
                        onClick={this.buy}
                    >
                      Buy
                    </button>
                </div>
          </>

        );
    }
}
