import { View, Text, Button } from 'react-native'
import estilos from '../componentes/css/style.css'

export default function Home({navigation}) {
  return (
    <View style={estilos.janela}>
      <Text style={estilos.texto}>Página Inicial</Text>
      <Button title="Ir para Listas" onPress={()=>navigation.navigate("Listas")}/>
    </View>
  )
}