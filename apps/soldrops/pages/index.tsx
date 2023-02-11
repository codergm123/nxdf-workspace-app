import {FC, useCallback, useState} from "react";

import styled from 'styled-components';

import { SendSPLTransaction, useConnection, useWallet, WalletMultiButton, filterValidAccount } from "@nxdf/shared/services";

const StyledPage = styled.div`
  .page {
  }
`;


export const Index: FC = ({}) => {
// export function Index() {

  const [AddressAmountList, setAddressAmountList] = useState("");

  const { connection } = useConnection();
  const { publicKey, signTransaction } = useWallet();

  const onAddressListChange = (event: any) => {
    setAddressAmountList(event.target.value);
    console.log('onAddressListChange:', AddressAmountList);
  }

  const sendToken = useCallback(async () => {
    if (!publicKey) {
      alert('error: Wallet not connected!');
      return;
    }

    if(AddressAmountList.trim() === '') {
      alert('error: addresses are empty.');
      return;
    }

    const mintAddress = 'Au6EdrSDubCUc34awy9c6iQAg5GSos9pPBXyZQtyZewV'; //nxdf

    const addressAmounts = AddressAmountList.trim().split('\n');
    const toAddresses:string[] = [];
    const amounts:number[] = [];

    for (let i = 0; i < addressAmounts.length; i++) {
      const addressAmount = addressAmounts[i].trim().replace('\t', '');
      if(addressAmount === '') continue;

      const splitAddressAmount = addressAmount.split(',');

      const toAddress = splitAddressAmount[0].trim();
      const isValid = await filterValidAccount(connection, mintAddress, toAddress);
      await waitforme(700);

      if(!isValid) continue;

      toAddresses.push(toAddress.trim());
      amounts.push(Number(splitAddressAmount[1].trim()));
    }

    console.log('addressAmounts: ', addressAmounts.length);
    console.log('toAddresses: ', toAddresses.length);

    const decimals = 10**6;

    const chunkSize = 10;
    const toAddressesGroup = toAddresses.map((e, i) => {
      return i % chunkSize === 0 ? toAddresses.slice(i, i + chunkSize) : null;
    }).filter(e => { return e; });
    const amountsGroup = amounts.map((e, i) => {
      return i % chunkSize === 0 ? amounts.slice(i, i + chunkSize) : null;
    }).filter(e => { return e; });

    console.log('toAddressesGroup: ', toAddressesGroup.length);

    for (let i = 0; i < toAddressesGroup.length; i++) {
      // console.log(toAddressesGroup[index]);
      await SendSPLTransaction(connection, publicKey, signTransaction, mintAddress, toAddressesGroup[i], amountsGroup[i], decimals);
      await waitforme(500);
    }
  }, [publicKey, connection, signTransaction]);


  function waitforme(milisec) {
    return new Promise(resolve => {
      setTimeout(() => { resolve('') }, milisec);
    })
  }

  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <div className="wrapper">
        <div className="container">

          <WalletMultiButton className="btn btn-ghost" />

          <div>
            <b>Bulk Transfer</b>

            <div>
              <div>
                <textarea
                  rows={10}
                  placeholder="5xFtv2Up9orzDWrHmPBxcHjc6ah4iz6hme6qSmmKwmnc, 100"
                  onChange={onAddressListChange}
                />
              </div>

              <div>
                <button type="button" onClick={sendToken}>
                  Send
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </StyledPage>
  );
}

export default Index;
