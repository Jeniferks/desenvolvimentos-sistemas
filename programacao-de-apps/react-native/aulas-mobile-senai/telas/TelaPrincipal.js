import { View } from "react-native-web"

import BotaoCustomizado from "../comum/componentes/BotaoCustomizado/BotaoCustomizado"

const TelaPrincipal = (PROPS) => {
    return
    <View>
        <BotaoCustomizado cor="primaria" onPress={() => props.navigation.navigate(TELAS.TELA_CONTADOR)}>

        </BotaoCustomizado>
    </View>
}

export default TelaPrincipal