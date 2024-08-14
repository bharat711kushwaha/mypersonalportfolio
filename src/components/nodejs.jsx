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

// Node.js Page Component
const NodeJsPage = () => {
  return (
    <Container>
      <Header>
        <SkillImage src={ProfileImageSrc} alt="Bharat Kumar" />
        <SkillTitle>Node.js - In-Depth Overview</SkillTitle>
      </Header>
      <SkillDescription>
        Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to build scalable network applications using JavaScript on the server side.
      </SkillDescription>

      <Card>
        <CardTitle>Introduction to Node.js</CardTitle>
        <CardContent>
          Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a browser. 
          <LearnMoreLink href="https://nodejs.org/en/about/" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>Node.js Modules</CardTitle>
        <CardContent>
          Modules in Node.js are JavaScript files that can be included and used in other files. Node.js has a rich set of built-in modules and also supports custom modules. 
          <LearnMoreLink href="https://nodejs.org/api/modules.html" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>Node.js File System</CardTitle>
        <CardContent>
          The File System module in Node.js allows you to interact with the file system, such as reading, writing, and manipulating files and directories. 
          <LearnMoreLink href="https://nodejs.org/api/fs.html" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>Node.js HTTP Module</CardTitle>
        <CardContent>
          The HTTP module in Node.js allows you to create HTTP servers and make HTTP requests. It provides methods for handling various HTTP request and response scenarios. 
          <LearnMoreLink href="https://nodejs.org/api/http.html" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>Node.js Express Framework</CardTitle>
        <CardContent>
          Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. 
          <LearnMoreLink href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>Node.js Asynchronous Programming</CardTitle>
        <CardContent>
          Node.js uses an event-driven, non-blocking I/O model that makes it efficient and suitable for handling asynchronous operations. 
          <LearnMoreLink href="https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>Node.js Error Handling</CardTitle>
        <CardContent>
          Proper error handling in Node.js involves using try-catch blocks, handling promise rejections, and using error-handling middleware in Express. 
          <LearnMoreLink href="https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/#error-handling" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>Node.js Database Connectivity</CardTitle>
        <CardContent>
          Node.js can connect to various databases such as MongoDB, MySQL, and PostgreSQL using appropriate drivers and libraries. 
          <LearnMoreLink href="https://nodejs.dev/learn/nodejs-database-connection" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>Node.js Streams</CardTitle>
        <CardContent>
          Streams in Node.js provide a way to process data in chunks rather than all at once, making it efficient for handling large amounts of data. 
          <LearnMoreLink href="https://nodejs.org/api/stream.html" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>Node.js Best Practices</CardTitle>
        <CardContent>
          Best practices in Node.js include using environment variables, managing asynchronous code effectively, and ensuring proper error handling and logging. 
          <LearnMoreLink href="https://nodejs.org/en/docs/guides/best-practices/" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Link to="/">Back to Home</Link>
    </Container>
  );
};

export default NodeJsPage;
