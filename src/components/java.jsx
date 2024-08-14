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
 font-size: 1.4rem;;
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

// Java Page Component
const JavaPage = () => {
  return (
    <Container>
      <Header>
        <SkillImage src={ProfileImageSrc} alt="Bharat Kumar" />
        <SkillTitle>Java - In-Depth Overview</SkillTitle>
      </Header>
      <SkillDescription>
        Java is a high-level, class-based, object-oriented programming language designed for portability and performance. It is widely used for building web applications, mobile apps, and enterprise software.
      </SkillDescription>

      <Card>
        <CardTitle>Introduction to Java</CardTitle>
        <CardContent>
          Java is a versatile programming language that supports a wide range of applications. It is known for its "write once, run anywhere" capability due to its use of the Java Virtual Machine (JVM). 
          <LearnMoreLink href="https://www.oracle.com/java/technologies/javase-overview.html" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>Java Basics</CardTitle>
        <CardContent>
          Understanding the basics of Java, including its syntax, data types, operators, and control structures, is essential for programming in Java. 
          <LearnMoreLink href="https://docs.oracle.com/javase/tutorial/java/overview/index.html" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>Java Object-Oriented Programming</CardTitle>
        <CardContent>
          Java is an object-oriented programming language, which means it uses classes and objects to model real-world entities. Key concepts include inheritance, polymorphism, encapsulation, and abstraction. 
          <LearnMoreLink href="https://docs.oracle.com/javase/tutorial/java/concepts/index.html" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>Java Collections Framework</CardTitle>
        <CardContent>
          The Java Collections Framework provides a set of interfaces and classes for storing and manipulating groups of data. Key components include lists, sets, and maps. 
          <LearnMoreLink href="https://docs.oracle.com/javase/8/docs/technotes/guides/collections/overview.html" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>Java Streams API</CardTitle>
        <CardContent>
          The Streams API allows for functional-style operations on streams of elements. It supports operations such as map, filter, and reduce to process collections of objects. 
          <LearnMoreLink href="https://docs.oracle.com/javase/8/docs/api/java/util/stream/package-summary.html" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>Java Concurrency</CardTitle>
        <CardContent>
          Java provides built-in support for concurrent programming through threads and concurrency utilities. Key topics include thread management, synchronization, and concurrent collections. 
          <LearnMoreLink href="https://docs.oracle.com/javase/tutorial/essential/concurrency/" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>Java Exception Handling</CardTitle>
        <CardContent>
          Exception handling in Java provides a way to manage runtime errors and maintain the normal flow of application execution. Key concepts include try, catch, and finally blocks. 
          <LearnMoreLink href="https://docs.oracle.com/javase/tutorial/essential/exceptions/" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>Java Input/Output (I/O)</CardTitle>
        <CardContent>
          Java's I/O APIs provide a set of classes and interfaces for reading and writing data. This includes file I/O, network I/O, and data serialization. 
          <LearnMoreLink href="https://docs.oracle.com/javase/tutorial/essential/io/" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>Java Virtual Machine (JVM)</CardTitle>
        <CardContent>
          The JVM is the engine that provides the runtime environment for Java bytecode. It is responsible for Java's platform independence and manages memory, garbage collection, and execution. 
          <LearnMoreLink href="https://www.oracle.com/java/technologies/jvmspec.html" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Card>
        <CardTitle>Java Best Practices</CardTitle>
        <CardContent>
          Following best practices in Java helps in writing efficient, maintainable, and reliable code. Key practices include coding conventions, design patterns, and performance optimization. 
          <LearnMoreLink href="https://www.oracle.com/java/technologies/java-best-practices.html" target="_blank" rel="noopener noreferrer">
            Learn more
          </LearnMoreLink>.
        </CardContent>
      </Card>

      <Link to="/">Back to Home</Link>
    </Container>
  );
};

export default JavaPage;
