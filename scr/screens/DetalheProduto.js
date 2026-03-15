import React from "react";
import { View, Text, Button } from "react-native";

export default function DetalheProduto({ voltar }) {
  return (
    <View style={{ flex:1, justifyContent:"center", alignItems:"center" }}>

      <Text style={{ fontSize:22 }}>Detalhe do Produto</Text>

      <Text>Nome: Camiseta</Text>
      <Text>Preço: R$79</Text>
      <Text>Desconto: 10%</Text>
      <Text>Descrição: Camiseta confortável de algodão</Text>

      <Button title="Voltar" onPress={voltar} />

    </View>
  );
}
