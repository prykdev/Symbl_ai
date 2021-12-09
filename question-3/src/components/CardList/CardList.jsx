import React from "react";
import { Card } from "../Card/Card";

export const CardList = (props) => {
  return (
    <>
   
     
        
    {props.items.map(item => (

    <Card key={item.id} id ={item.id} name={item.name}/>
    
    ))}

        
    </>
      
   
  );
};
