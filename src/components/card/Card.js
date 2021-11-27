import { Heading } from "../layout/Heading.styled";
import { Paragraph } from "../layout/Paragraph.styled";
import { StyledCard } from "./Card.styled";

export default function Card({ item: { id, title, body, image } }) {
    return (
        <StyledCard layout={id % 2 === 0 && 'row-reverse'}>
            <div>
                <Heading>{title}</Heading>
                <Paragraph>{ body }</Paragraph>
            </div>

            <div>
                <img src={`/images/${image}`} />
            </div>
        </StyledCard>
    )
}