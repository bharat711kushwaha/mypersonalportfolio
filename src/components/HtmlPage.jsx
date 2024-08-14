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

// HTML Page Component
const HtmlPage = () => {
  return (
    <Container>
      <Header>
        <SkillImage src={ProfileImageSrc} alt="Bharat Kumar" />
        <SkillTitle>HTML - In-Depth Overview</SkillTitle>
      </Header>
      <SkillDescription>
        HTML stands for HyperText Markup Language. It is used to create the structure of web pages. Basic elements include <code>&lt;div&gt;</code>, <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, etc.
      </SkillDescription>

      <Card>
      <CardTitle>HTML Basics</CardTitle>
        <CardContent>
          HTML (Hypertext Markup Language) forms the backbone of web pages. It provides the essential structure and layout. 
          Key elements include <code>&lt;div&gt;</code>, <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>. 
          <LearnMoreLink href="https://www.w3schools.com/html/html_intro.asp" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>HTML Forms</CardTitle>
        <CardContent>
          Forms are essential for collecting user input on the web. They include a variety of input types to capture different kinds of data.
          Key elements include <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code>. 
          <LearnMoreLink href="https://www.w3schools.com/html/html_forms.asp" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>HTML Semantic Elements</CardTitle>
        <CardContent>
          Semantic elements provide meaning and structure to web pages, making content more readable and accessible. 
          Key elements include <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;nav&gt;</code>. 
          <LearnMoreLink href="https://www.w3schools.com/html/html5_semantic_elements.asp" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>HTML Multimedia</CardTitle>
        <CardContent>
          HTML supports embedding various types of media into web pages. Key elements include <code>&lt;img&gt;</code>, <code>&lt;audio&gt;</code>, <code>&lt;video&gt;</code>. 
          <LearnMoreLink href="https://www.w3schools.com/html/html5_multimedia.asp" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>HTML Tables</CardTitle>
        <CardContent>
          Tables are used to display tabular data in rows and columns. Key elements include <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;th&gt;</code>, <code>&lt;td&gt;</code>. 
          <LearnMoreLink href="https://www.w3schools.com/html/html_tables.asp" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>HTML Links</CardTitle>
        <CardContent>
          Links allow users to navigate to other web pages or resources. The key element is <code>&lt;a&gt;</code>. 
          <LearnMoreLink href="https://www.w3schools.com/html/html_links.asp" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>HTML Lists</CardTitle>
        <CardContent>
          Lists are used to display items in an ordered or unordered manner. Key elements include <code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code>. 
          <LearnMoreLink href="https://www.w3schools.com/html/html_lists.asp" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>HTML Attributes</CardTitle>
        <CardContent>
          Attributes provide additional information about HTML elements. Common attributes include <code>id</code>, <code>class</code>, <code>style</code>. 
          <LearnMoreLink href="https://www.w3schools.com/html/html_attributes.asp" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>HTML Forms Advanced</CardTitle>
        <CardContent>
          Advanced form elements and attributes enhance user interaction and validation. Key elements include <code>&lt;fieldset&gt;</code>, <code>&lt;legend&gt;</code>, <code>&lt;datalist&gt;</code>. 
          <LearnMoreLink href="https://www.w3schools.com/html/html_form_elements.asp" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>HTML5 New Elements</CardTitle>
        <CardContent>
          HTML5 introduced new elements for better structuring and functionality. Key elements include <code>&lt;canvas&gt;</code>, <code>&lt;svg&gt;</code>, <code>&lt;progress&gt;</code>, <code>&lt;meter&gt;</code>. 
          <LearnMoreLink href="https://www.w3schools.com/html/html5_intro.asp" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>HTML Best Practices</CardTitle>
        <CardContent>
          Following best practices ensures clean, maintainable, and accessible HTML. Key practices include using semantic tags, ensuring proper nesting of elements, and validating HTML. 
          <LearnMoreLink href="https://www.w3schools.com/html/html_best_practices.asp" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      
      <Link to="/">Back to Home</Link>
    </Container>
  );
};

export default HtmlPage;
