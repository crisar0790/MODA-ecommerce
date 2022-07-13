import styled from "styled-components";
import { categories } from '../data';
import CategoryItem from "./CategoryItem";

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: center;
`;

const Categories = () => {
  return (
    <Container>
        {
            categories.map((item, k) => (
                <CategoryItem key={k} item={item} />
            ))
        }
    </Container>
  )
}

export default Categories