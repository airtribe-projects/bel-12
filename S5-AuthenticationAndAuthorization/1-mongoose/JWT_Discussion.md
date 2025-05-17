1. We need to validate the user
2. Whether the user is authenticated or not
3. Authorization: Whether the role is appropriate or not (admin)


As of now.Our communication is on HTTP Protocol
Stateless

There is no relation between 2 requests


## Token: 
* Help us identify the user (Authenticated or not)
* It should uniquely represent a single user
* Maintains the session ==> There should be some expiry
* Some sort of Authorization embedded (Ok)
* Encoded / Encrypted ==> Why
* Who should own the token? Server 
    * Client ==> Could store it 


## How to implement it?
### Server
1. User Authentication / Authorization
2. Token Generation
3. Sends the token to client

### Client 
1. The token is stored somewhere
2. In each request the token is sent back

### How to validate if the token is valid or not? 
1. Decryt the token?
2. verify the signature
3. Store it in DB 
4. Unique String / Encryption decryption, not storing 
5. Checking the format of the token


Either use some kind of encryption / decryption => 

JWT ==> Encoding / Decoding (base64)
JWT is not stored on DB
JWT.verify()

Structure of JWT



Table
userId, macId, blackListed
1,  andoid, false
1,  ipad, true
1,  macbook, false


token
macId: iPad




















