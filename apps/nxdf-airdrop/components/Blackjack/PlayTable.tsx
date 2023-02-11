import { Card, CardTable, PlayTableDiv, TextTable } from "./css/blackjack";


const PlayTable = () => {

    return (
        <PlayTableDiv>
            <TextTable>
                <h1>BLACKJACK PAYS 3 TO 2 </h1>
                <h1>dealer must stand on 17 and must draw to 16 </h1>
                <h1>INSURANCE PAYS 2 TO 1</h1>
            </TextTable>
            <CardTable>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </CardTable>
        </PlayTableDiv>

    )
}

export default PlayTable;
