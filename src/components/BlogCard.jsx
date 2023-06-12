import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function BlogCard(  ) {
  return (
    <Card style={{ width: '30rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" alt='blog-image'/>
    <Card.Body>
      <Card.Title>blog.title</Card.Title>
      <Card.Text>
       blog.content
      </Card.Text>
      <Button variant="primary">Read More.</Button>
    </Card.Body>
  </Card>
  )
}
