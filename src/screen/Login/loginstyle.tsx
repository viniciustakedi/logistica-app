import styled from "styled-components/native"
import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
    input: {
        padding: 15,
        width: '80%',
    },
})

export const Container = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%
    background-color: #fff;
`

export const Title = styled.Text`
    font-size: 25px;
    color: black;
    padding-top: 50px
    padding-bottom: 20px
`

export const DrawLogo = styled.Image`
    width: 250px;
    height: 250px;
`

