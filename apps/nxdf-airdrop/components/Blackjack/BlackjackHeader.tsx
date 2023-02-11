import { Balance, BalnceButton, BlackjackHead, Logo } from "./css/blackjack";


const BlackjackHeader = () => {

    return (
        <BlackjackHead>
            <Logo />
            <Balance>
                <BalnceButton>BALANCE</BalnceButton>
            </Balance>
        </BlackjackHead>
    )
}



export default BlackjackHeader;
