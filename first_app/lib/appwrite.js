// lib/appwrite.js
import { Client, Account, Avatars } from 'react-native-appwrite'

const client = new Client()

client
    .setPlatform('dev.mendosdv.firstapp') 
    .setProject('6849f46c001538f26ff8')

const account = new Account(client)
const avatars = new Avatars(client)

export { client, account, avatars }