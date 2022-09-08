import styled from 'styled-components'

const Wrapper = styled.div`${({ theme: { spacing } }) => `
    max-width: ${spacing.maxWidth};
    width: 100%;
    margin: 0px auto;
`}`

export default Wrapper