import { SocialLink, StyledIcons } from "./Social.styled";
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'


export default function SocialIcon() {
    return (
        <StyledIcons>
            <li>
                <SocialLink href="https://twitter.com"> <FaTwitter/></SocialLink>
            </li>

            <li>
                <SocialLink href="https://facebook.com"> <FaFacebook/></SocialLink>
            </li>

            <li>
                <SocialLink href="https://linkedin.com"> <FaLinkedin/></SocialLink>
            </li>
        </StyledIcons>
    )
}