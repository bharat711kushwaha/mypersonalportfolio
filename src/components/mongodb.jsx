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

// MongoDB Page Component
const MongoDbPage = () => {
  return (
    <Container>
      <Header>
        <SkillImage src={ProfileImageSrc} alt="Bharat Kumar" />
        <SkillTitle>MongoDB - In-Depth Overview</SkillTitle>
      </Header>
      <SkillDescription>
        MongoDB is a NoSQL database designed for scalability and flexibility. It stores data in a flexible, JSON-like format.
      </SkillDescription>

      <Card>
        <CardTitle>Introduction to MongoDB</CardTitle>
        <CardContent>
          MongoDB is a NoSQL database that uses a document-oriented data model. It provides high performance, scalability, and flexibility for handling large volumes of data. 
          <LearnMoreLink href="https://www.mongodb.com/what-is-mongodb" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>Setting Up MongoDB</CardTitle>
        <CardContent>
          To get started with MongoDB, you need to install MongoDB on your system and configure it for use. 
          <LearnMoreLink href="https://docs.mongodb.com/manual/installation/" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>MongoDB CRUD Operations</CardTitle>
        <CardContent>
          MongoDB provides various methods to perform CRUD (Create, Read, Update, Delete) operations. These operations allow you to manage data effectively. 
          <LearnMoreLink href="https://www.mongodb.com/basics/crud-operations" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>MongoDB Indexing</CardTitle>
        <CardContent>
          Indexing in MongoDB improves the performance of query operations. It allows for faster retrieval of data by creating indexes on frequently queried fields.
          <LearnMoreLink href="https://www.mongodb.com/basics/indexing" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>MongoDB Aggregation</CardTitle>
        <CardContent>
          Aggregation in MongoDB allows you to process data records and return computed results. It supports operations such as filtering, grouping, and sorting.
          <LearnMoreLink href="https://www.mongodb.com/basics/aggregation" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>MongoDB Data Modeling</CardTitle>
        <CardContent>
          Data modeling in MongoDB involves designing the structure of your data to optimize performance and scalability. It includes designing collections and documents.
          <LearnMoreLink href="https://www.mongodb.com/basics/data-modeling" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>MongoDB Replication</CardTitle>
        <CardContent>
          Replication in MongoDB involves duplicating data across multiple servers to ensure high availability and reliability. It includes configuring replica sets.
          <LearnMoreLink href="https://www.mongodb.com/basics/replication" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>MongoDB Sharding</CardTitle>
        <CardContent>
          Sharding in MongoDB distributes data across multiple servers to handle large datasets and high-throughput operations. It includes configuring shard keys and clusters.
          <LearnMoreLink href="https://www.mongodb.com/basics/sharding" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>MongoDB Security</CardTitle>
        <CardContent>
          Security in MongoDB involves configuring authentication, authorization, and encryption to protect your data. It includes setting up roles and permissions.
          <LearnMoreLink href="https://www.mongodb.com/basics/security" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>MongoDB Performance Optimization</CardTitle>
        <CardContent>
          Optimizing MongoDB performance involves techniques such as indexing, query optimization, and configuration tuning to ensure efficient data processing.
          <LearnMoreLink href="https://www.mongodb.com/basics/performance" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Link to="/">Back to Home</Link>
    </Container>
  );
};

export default MongoDbPage;
