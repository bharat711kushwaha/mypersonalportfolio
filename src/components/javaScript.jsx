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

// JavaScript Page Component
const JavaScriptPage = () => {
  return (
    <Container>
      <Header>
        <SkillImage src={ProfileImageSrc} alt="Bharat Kumar" />
        <SkillTitle>JavaScript - In-Depth Overview</SkillTitle>
      </Header>
      <SkillDescription>
        JavaScript is a versatile programming language used to create interactive and dynamic content on web pages. It allows you to manipulate HTML, handle events, and interact with various APIs.
      </SkillDescription>

      <Card>
        <CardTitle>JavaScript Basics</CardTitle>
        <CardContent>
          JavaScript is used to add interactivity to web pages. Basics include variables, data types, operators, and functions. 
          <LearnMoreLink href="https://www.w3schools.com/js/js_intro.asp" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>JavaScript Functions</CardTitle>
        <CardContent>
          Functions are reusable blocks of code that perform specific tasks. They can be declared in various ways, including function declarations and expressions. 
          <LearnMoreLink href="https://www.w3schools.com/js/js_functions.asp" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>JavaScript Objects</CardTitle>
        <CardContent>
          Objects are key-value pairs used to store multiple values in a single variable. They are fundamental to JavaScript's data structures. 
          <LearnMoreLink href="https://www.w3schools.com/js/js_objects.asp" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>JavaScript Arrays</CardTitle>
        <CardContent>
          Arrays are used to store multiple values in a single variable. They allow for ordered collections and support various methods for manipulation. 
          <LearnMoreLink href="https://www.w3schools.com/js/js_arrays.asp" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>JavaScript DOM Manipulation</CardTitle>
        <CardContent>
          The DOM (Document Object Model) allows you to manipulate HTML and CSS through JavaScript. Key methods include <code>getElementById</code>, <code>querySelector</code>, and <code>addEventListener</code>. 
          <LearnMoreLink href="https://www.w3schools.com/js/js_htmldom.asp" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>JavaScript Events</CardTitle>
        <CardContent>
          Events are actions or occurrences that can be detected by JavaScript, such as clicks, form submissions, and key presses. 
          <LearnMoreLink href="https://www.w3schools.com/js/js_events.asp" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>JavaScript Promises</CardTitle>
        <CardContent>
          Promises represent the eventual completion (or failure) of an asynchronous operation. They provide a way to handle asynchronous code more effectively. 
          <LearnMoreLink href="https://www.w3schools.com/js/js_promise.asp" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>JavaScript Async/Await</CardTitle>
        <CardContent>
          Async/Await simplifies working with asynchronous code by making it look and behave like synchronous code. 
          <LearnMoreLink href="https://www.w3schools.com/js/js_async.asp" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>JavaScript ES6+ Features</CardTitle>
        <CardContent>
          ES6+ introduced many new features to JavaScript, including arrow functions, classes, destructuring, and modules. 
          <LearnMoreLink href="https://www.w3schools.com/js/js_es6.asp" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>JavaScript Best Practices</CardTitle>
        <CardContent>
          Following best practices ensures clean, efficient, and maintainable code. Key practices include avoiding global variables, using proper naming conventions, and modularizing code. 
          <LearnMoreLink href="https://www.w3schools.com/js/js_best_practices.asp" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Link to="/">Back to Home</Link>
    </Container>
  );
};

export default JavaScriptPage;
