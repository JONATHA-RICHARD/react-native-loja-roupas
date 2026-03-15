import React from "react";
import { View, Text, Button } from "react-native";

export default function Masculino({voltar}){

  const roupas = [
    {nome:"Camiseta", preco:"R$79"},
    {nome:"Jaqueta", preco:"R$199"},
    {nome:"Calça Jeans", preco:"R$149"}
  ];

  return(

    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>

      <Text style={{fontSize:24}}>Roupas Masculinas</Text>

      {roupas.map((item,index)=>(
        <Text key={index}>
          {item.nome} - {item.preco}
        </Text>
      ))}

      <View style={{marginTop:20}} />

      <Button title="Voltar" onPress={voltar}/>

    </View>

  );
}