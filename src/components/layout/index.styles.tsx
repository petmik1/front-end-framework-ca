import styled from 'styled-components'

export const LayoutContainer = styled.div`
display: grid;
grid-template-rows: auto 1fr auto;
min-height: 100vh;

& > div { 
    margin: 2em auto;

}
`
