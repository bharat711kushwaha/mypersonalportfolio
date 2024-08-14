import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ProfileImageSrc from '/bharat.jpg'; // Update the path if necessary

// Styled Components
const Container = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  padding: 60px 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const SkillImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  margin-top: 30px;
`;

const SkillTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

const SkillDescription = styled.p`
  font-size: 1.9rem;
  line-height: 1.6;
  color: #666;
`;

const Card = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  padding: 20px;
  margin: 20px auto;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.9rem;
  color: #333;
`;

const CardContent = styled.p`
  font-size: 1.4rem;
  color: #666;
  font-family: 'Roboto', sans-serif; /* Modern and professional font */
  color: #333;
`;

const LearnMoreLink = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// CSS Page Component
const CssPage = () => {
  return (
    <Container>
      <Header>
        <SkillImage src={ProfileImageSrc} alt="Bharat Kumar" />
        <SkillTitle>CSS - In-Depth Overview</SkillTitle>
      </Header>
      <SkillDescription>
        CSS (Cascading Style Sheets) is used to style and layout web pages. It controls the appearance of elements including colors, fonts, and layouts. 
        Basic concepts include selectors, properties, and values.
      </SkillDescription>

      <Card>
        <CardTitle>CSS Basics</CardTitle>
        <CardContent>
          CSS (Cascading Style Sheets) is used to style and layout web pages. It controls colors, fonts, spacing, and positioning. 
          Key concepts include selectors, properties, and values. 
          <LearnMoreLink href="https://www.w3schools.com/css/css_intro.asp" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>CSS Selectors</CardTitle>
        <CardContent>
          CSS selectors are used to target HTML elements for styling. They include element selectors, class selectors, and ID selectors. 
          <LearnMoreLink href="https://www.w3schools.com/css/css_selectors.asp" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>CSS Box Model</CardTitle>
        <CardContent>
          The CSS box model describes how elements are rendered and how their dimensions are calculated. It includes content, padding, border, and margin.
          <LearnMoreLink href="https://www.w3schools.com/css/css_boxmodel.asp" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>CSS Flexbox</CardTitle>
        <CardContent>
          Flexbox is a layout model that allows for flexible and responsive design. It enables easy alignment and distribution of space among items in a container.
          <LearnMoreLink href="https://www.w3schools.com/css/css3_flexbox.asp" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>CSS Grid</CardTitle>
        <CardContent>
          CSS Grid Layout is a powerful layout system for creating complex web layouts. It allows for precise control over rows, columns, and grid areas.
          <LearnMoreLink href="https://www.w3schools.com/css/css_grid.asp" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>CSS Media Queries</CardTitle>
        <CardContent>
          Media queries allow you to apply styles based on device characteristics such as screen size, orientation, and resolution. 
          They are essential for responsive web design.
          <LearnMoreLink href="https://www.w3schools.com/css/css_rwd_mediaqueries.asp" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>CSS Transitions</CardTitle>
        <CardContent>
          CSS transitions enable smooth changes between CSS property values over time. They are useful for creating animations and interactive effects.
          <LearnMoreLink href="https://www.w3schools.com/css/css3_transitions.asp" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>CSS Animations</CardTitle>
        <CardContent>
          CSS animations allow for more complex animations by defining keyframes. They can animate properties over time and provide more control than transitions.
          <LearnMoreLink href="https://www.w3schools.com/css/css3_animations.asp" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>CSS Variables</CardTitle>
        <CardContent>
          CSS variables (custom properties) allow you to define reusable values for properties. They simplify the management of CSS values and improve maintainability.
          <LearnMoreLink href="https://www.w3schools.com/css/css_vars.asp" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>CSS Best Practices</CardTitle>
        <CardContent>
          Following best practices ensures clean, maintainable, and efficient CSS. Key practices include using clear naming conventions, avoiding !important, and minimizing CSS code duplication.
          <LearnMoreLink href="https://www.w3schools.com/css/css_best_practices.asp" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Link to="/">Back to Home</Link>
    </Container>
  );
};

export default CssPage;
