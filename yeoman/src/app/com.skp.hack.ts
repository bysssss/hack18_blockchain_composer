import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace com.skp.hack{
   export class Farmer extends Participant {
      participantId: string;
      name: string;
   }
   export class Broker extends Participant {
      participantId: string;
      name: string;
   }
   export class Restaurant extends Participant {
      participantId: string;
      name: string;
   }
   export class Cow extends Asset {
      assetId: string;
      value: string;
      farmer: Farmer;
      broker: Broker;
   }
   export class Beef extends Asset {
      assetId: string;
      value: string;
      broker: Broker;
      restaurant: Restaurant;
   }
   export class Auction extends Transaction {
      cow: Cow;
      broker: Broker;
   }
   export class Trade extends Transaction {
      beef: Beef;
      restaurant: Restaurant;
   }
   export class CewEvent extends Event {
      cow: Cow;
      oldValue: string;
      newValue: string;
   }
// }
