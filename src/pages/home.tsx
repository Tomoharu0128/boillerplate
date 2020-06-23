import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
    padding-top: 10vh;
    padding-left: 20vw;
    padding-right: 20vw;


`


const Home = () => {
    return (
        <Root>
            <h1 className="headline">Porpose</h1>
            <p>このサイトはReactの勉強の一環で作成しました。</p>
            <p>webページを見ていて面白いと思った動作を実装してまとめる予定です。</p>
        </Root>
    )
}

export default Home