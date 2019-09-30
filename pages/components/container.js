import Container from '@material-ui/core/Container';

const CustomContainer = ({children, ...props}) => (
    <Container {...props}>
        {children}
    </Container>
)

export { CustomContainer as Container };