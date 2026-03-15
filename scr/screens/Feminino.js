import React from "react";
import { View, Text, Button } from "react-native";

export default function Feminino({voltar}){

  const roupas = [
    {nome:"Vestido", preco:"R$159"},
    {nome:"Saia", preco:"R$89"},
    {nome:"Blusa", preco:"R$69"}
  ];

  return(

    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>

      <Text style={{fontSize:24}}>Roupas Femininas</Text>

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