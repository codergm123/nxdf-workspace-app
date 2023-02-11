node 16.13.1

#### Please use yarn. don't use npm.
#### Run command in the root folder.
`yarn install`

## apps
### run artistella
`yarn start:artistella`

### run sktaing4u
ios: `yarn start:staking4u:ios`  
android: `yarn start:staking4u:android`

### run soldrops
`yarn start:soldrops`

### run nxdf-api
`yarn start:nxdf-api`


## libs

### shared
#### assets
#### config
#### data
#### services
#### utils


### add page
`npx nx g page main --project=artistella`
### add component
`npx nx g component slideImage --project=artistella --directory=pages/main`



### Staking4U
`cd apps/staking4u/ios`  
`pod cache clean all`  
`rm -rf Pods`

### Airdrop
`nx build nxdf-airdrop && nx export nxdf-airdrop`
`cd apps/nxdf-airdrop`
`firebase deploy --only hosting`
