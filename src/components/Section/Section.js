import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.h2`
  margin-bottom: 15px;
  font-size: 30px;
`;

const SectionStyled = styled.section`
  padding: 15px;
`;

const Section = ({ children, title }) => {
  return (
    <SectionStyled>
      <Title>{title}</Title>
      {children && children}
    </SectionStyled>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

export default Section;
