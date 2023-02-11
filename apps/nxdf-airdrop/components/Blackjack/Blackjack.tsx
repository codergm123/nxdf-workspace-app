import BlackjackHeader from './BlackjackHeader';
import { BlackjackWrapper } from './css/blackjack';
import Player from './Player';
import PlayTable from './PlayTable';

function BlackJack() {
    return (
            <BlackjackWrapper>
                <BlackjackHeader />
                <PlayTable />
                <Player />
            </BlackjackWrapper>
    );
}

export default BlackJack;
