import { Container, Title, DrawLogo, style } from "./loginstyle";
import { Shadow } from 'react-native-shadow-2';
import { Button, TextInput } from 'react-native'
//@ts-ignore
const LoginScreen = ({ navigation }) => {

    return (
        <Container>
            <DrawLogo source={require('../../../assets/draw2.png')} />
            <Title>Login do Usuário</Title>
            <Shadow startColor={'#00000022'} distance={6}>
                <TextInput
                    style={style.input}
                    placeholder="Usuário"
                />
            </Shadow>
            <Button
                onPress={() =>
                    navigation.navigate('Cadastro')
                }
                title="Cadastro"
            />
        </Container>
    );
}

export default LoginScreen