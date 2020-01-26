# Composer를 기반으로 Fabric에 배포하기

composer card create -p connection.json -u PeerAdmin -c {Peer User인증서} -k {Peer User키} -r PeerAdmin -r ChannelAdmin

composer card import -f PeerAdmin@fabric-network.card

composer network install -c PeerAdmin@fabric-network -a sogogi-network@0.0.1.bna

composer network start --networkName sogogi-network --networkVersion 0.0.1 -A {CA 아이디} -S {CA 비번} -c PeerAdmin@fabric-network

composer card import -f admin@sogogi-network.card

composer network ping -c admin@sogogi-network

<br/>

# composer-rest-server 띄우기

nohup composer-rest-server -c admin@sogogi-network -n never > composer-rest-server.out 2> composer-rest-server.err < /dev/null &

<br/>

# composer-playground 띄우기

nohup composer-playground > composer-playground.out 2> composer-playground.err < /dev/null &

<br/>

# Yeoman를 기반으로 프론트생성 및 띄우기

yo hyperledger-composer:angular
(sogogi-network 및 admin@sogogi-network 입력, composer-rest-server와 연동)

package.json 의 --host ... 수정

npm start

<br/>
