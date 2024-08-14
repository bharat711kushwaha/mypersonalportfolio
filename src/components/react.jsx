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

// React Page Component
const ReactPage = () => {
  return (
    <Container>
      <Header>
        <SkillImage src={ProfileImageSrc} alt="Bharat Kumar" />
        <SkillTitle>React - In-Depth Overview</SkillTitle>
      </Header>
      <SkillDescription>
        React is a popular JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state efficiently.
      </SkillDescription>

      <Card>
        <CardTitle>Introduction to React</CardTitle>
        <CardContent>
          React is a library for building user interfaces. It allows developers to create reusable UI components and manage application state effectively. 
          <LearnMoreLink href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>React Components</CardTitle>
        <CardContent>
          Components are the building blocks of a React application. They can be functional or class-based and are used to create UI elements. 
          <LearnMoreLink href="https://reactjs.org/docs/components-and-props.html" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>JSX (JavaScript XML)</CardTitle>
        <CardContent>
          JSX is a syntax extension for JavaScript that allows you to write HTML elements and components within JavaScript code. It makes the code more readable and expressive. 
          <LearnMoreLink href="https://reactjs.org/docs/introducing-jsx.html" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>State Management</CardTitle>
        <CardContent>
          State management in React allows you to manage and track changes to the state of your components. React provides hooks like <code>useState</code> for functional components. 
          <LearnMoreLink href="https://reactjs.org/docs/hooks-state.html" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>React Hooks</CardTitle>
        <CardContent>
          Hooks are functions that let you use state and other React features without writing a class. Common hooks include <code>useState</code>, <code>useEffect</code>, and <code>useContext</code>. 
          <LearnMoreLink href="https://reactjs.org/docs/hooks-intro.html" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>React Lifecycle Methods</CardTitle>
        <CardContent>
          Lifecycle methods are hooks that allow you to run code at specific points in a component's life cycle, such as when it mounts or updates. 
          <LearnMoreLink href="https://reactjs.org/docs/class-component.html#lifecycle-methods" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>React Router</CardTitle>
        <CardContent>
          React Router is a library for handling routing in React applications. It allows you to navigate between different components or pages. 
          <LearnMoreLink href="https://reactrouter.com/" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>React Context API</CardTitle>
        <CardContent>
          The Context API is used to manage and share state across components without passing props through every level of the component tree. 
          <LearnMoreLink href="https://reactjs.org/docs/context.html" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>React Performance Optimization</CardTitle>
        <CardContent>
          Performance optimization techniques in React include memoization, code splitting, and lazy loading components. 
          <LearnMoreLink href="https://reactjs.org/docs/optimizing-performance.html" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>React Best Practices</CardTitle>
        <CardContent>
          Following best practices ensures maintainable and scalable React applications. Key practices include component modularization, state management strategies, and performance optimization. 
          <LearnMoreLink href="https://reactjs.org/docs/best-practices.html" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Link to="/">Back to Home</Link>
    </Container>
  );
};

export default ReactPage;
