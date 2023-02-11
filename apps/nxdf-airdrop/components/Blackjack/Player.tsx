import { Betbutton, CardImgWrapper, Hit, PlayerDiv } from './css/blackjack';


const Player = () => {

    return (
        <PlayerDiv>
            <Betbutton>
                2X
            </Betbutton>
            <Hit>
                <CardImgWrapper>
                    <img src='/img/icon-plus.svg' />
                    <img src='/img/icon-card.svg' />
                </CardImgWrapper>
                <div>
                    <span>HIT</span>
                </div>
            </Hit>
            <Betbutton>
                BET X$
            </Betbutton>
        </PlayerDiv>
    )
}


export default Player;
