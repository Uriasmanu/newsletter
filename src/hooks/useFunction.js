import { useContext } from "react";
import ShowCardContext from "../assets/context";

export const useFunction = () =>{
    const { showCard, setShowCard } = useContext(ShowCardContext);

    const dispersar = () => {
      setShowCard(true);
    };

    const submeter = () => {
        setShowCard(!showCard);
      };

    return{
        dispersar,
        submeter,
    }
}