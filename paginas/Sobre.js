import { View, Text, Button } from 'react-native'
import estilos from '../componentes/css/style.css'

export default function Sobre({navigation}) {
  return (
    <View style={estilos.janela}>
      <Text>Página Sobre Nós</Text>
      <Button title="Ir para página Home" onPress={()=>navigation.navigate("Home")}/>
    </View>
  )
}