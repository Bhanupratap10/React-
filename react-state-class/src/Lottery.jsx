import { useState } from "react"
import { genTicket, sum} from "./helper";
import Ticket from "./Ticket";


export default function Lottery({ n = 3, winCondition }) {
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);

    let buyticket = () => {
       setTicket(genTicket(n));
    }

   return ( 
   <div>
    <h1>Lotttery Games </h1>
    <Ticket ticket={ticket}/>
     <br></br>
     <button onClick={buyticket}>Buy New Ticket</button>
     <h3>{isWinning && "Congratulation, you won!"}</h3>
   </div>
   );
}