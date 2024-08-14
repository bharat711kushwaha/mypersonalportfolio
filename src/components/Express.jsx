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

// Express.js Page Component
const ExpressJsPage = () => {
  return (
    <Container>
      <Header>
        <SkillImage src={ProfileImageSrc} alt="Bharat Kumar" />
        <SkillTitle>Express.js - In-Depth Overview</SkillTitle>
      </Header>
      <SkillDescription>
        Express.js is a fast, minimalistic web framework for Node.js that provides robust features for building web and mobile applications.
      </SkillDescription>

      <Card>
        <CardTitle>Introduction to Express.js</CardTitle>
        <CardContent>
          Express.js simplifies the process of building web applications with Node.js. It provides a set of features and utilities that streamline the development process. 
          <LearnMoreLink href="https://expressjs.com/en/guide.html" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>Setting Up Express.js</CardTitle>
        <CardContent>
          To set up an Express.js application, you'll need to install the Express package and initialize a new project. 
          <LearnMoreLink href="https://expressjs.com/en/starter/installing.html" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>Routing in Express.js</CardTitle>
        <CardContent>
          Routing in Express.js allows you to define how different HTTP requests are handled by your application. You can set up routes for various endpoints and methods.
          <LearnMoreLink href="https://expressjs.com/en/guide/routing.html" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>Middleware in Express.js</CardTitle>
        <CardContent>
          Middleware functions are a fundamental part of Express.js. They are used to process requests before they reach the final route handler. 
          <LearnMoreLink href="https://expressjs.com/en/guide/using-middleware.html" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>Express.js Error Handling</CardTitle>
        <CardContent>
          Proper error handling in Express.js involves setting up error-handling middleware to catch and manage errors effectively.
          <LearnMoreLink href="https://expressjs.com/en/guide/error-handling.html" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>Express.js Templates</CardTitle>
        <CardContent>
          Express.js supports various templating engines that allow you to generate dynamic HTML content. Popular engines include Pug, EJS, and Handlebars. 
          <LearnMoreLink href="https://expressjs.com/en/guide/viewing.html" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>Express.js with Databases</CardTitle>
        <CardContent>
          Express.js can be used with various databases such as MongoDB, MySQL, and PostgreSQL. You'll need to set up appropriate drivers or ORMs for database connectivity. 
          <LearnMoreLink href="https://expressjs.com/en/guide/database.html" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>Express.js Security</CardTitle>
        <CardContent>
          Security is crucial for web applications. Express.js offers various ways to enhance security, including setting security headers and using middleware for protection. 
          <LearnMoreLink href="https://expressjs.com/en/guide/security.html" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>Express.js Performance Optimization</CardTitle>
        <CardContent>
          Optimizing performance in Express.js involves techniques such as caching, compressing responses, and managing asynchronous operations effectively.
          <LearnMoreLink href="https://expressjs.com/en/guide/optimizing-performance.html" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>Express.js Deployment</CardTitle>
        <CardContent>
          Deploying an Express.js application involves setting up the environment, configuring the server, and ensuring the application is production-ready. 
          <LearnMoreLink href="https://expressjs.com/en/guide/deployment.html" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Link to="/">Back to Home</Link>
    </Container>
  );
};

export default ExpressJsPage;
