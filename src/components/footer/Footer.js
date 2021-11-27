import { Container } from "../layout/Container";
import { Flex } from "../layout/Flex.styled";
import { Paragraph } from "../layout/Paragraph.styled";
import { StyledFooter } from "./Footer.styled";
import SocialIcon from "../social_icons/SocialIcon";

export default function Footer() {
    return (
        <StyledFooter>
            <Container>
                <img src="/images/logo_white.svg" alt="" />
                
                <Flex>
                    <ul>
                        <li>consectetur adipiscing elit, sed do eiusmod tempor incididunt </li>
                        <li>+1-543-123-4567</li>
                        <li>example@huddle.com</li>
                    </ul>
                    <ul>
                        <li>About Us</li>
                        <li>What We Do</li>
                        <li>FAQ</li>
                    </ul>
                    <ul>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>

                    <SocialIcon/>
                </Flex>
                <Paragraph color="#fff">&copy; 2021 Huddle. All rights reserved</Paragraph>
            </Container>
        </StyledFooter>
    )
}