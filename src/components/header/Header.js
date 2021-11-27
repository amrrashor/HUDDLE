import { Container } from "../layout/Container";
import { Flex } from "../layout/Flex.styled";
import { StyledHeader, Nav, Logo, Image } from "./Header.styled";
import { Button } from "../layout/Button.styled";
import { Heading } from "../layout/Heading.styled";
import { Paragraph } from "../layout/Paragraph.styled";


const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src="/images/logo.svg" />
                    <Button>try it free</Button>
                </Nav>
                <Flex>
                    <div>
                        <Heading>build the community your fans will love</Heading>
                        <Paragraph>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</Paragraph>
                        <Button bg="#ff0099" color="#fff">Get Started For Free</Button>
                    </div>
                    <Image src="/images/illustration-mockups.svg" />
                </Flex>
            </Container>
        </StyledHeader>
    )
}

export default Header;