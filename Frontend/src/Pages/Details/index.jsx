import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; 
import { Card, CardContent, Typography, CardMedia } from '@mui/material'; 
import { Helmet } from 'react-helmet'; 

function Index() {
  const { id } = useParams();
  const [product, setProduct] = useState(null); 

  useEffect(() => {

    const fetchProduct = () => {
      axios.get(`http://localhost:3000/products/${id}`) 
        .then(response => {
          setProduct(response.data.data);
        })
        .catch(error => {
          console.error("Error fetching product:", error);
        });
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <Helmet>
        <title>{product.name} - Product Details</title> 
        <meta name="description" content={`Details about ${product.name}. Price: $${product.price}`} /> {/* Meta description */}
      </Helmet>
      <section id='details'>
        <Card key={product._id} style={{ margin: '10px' }}>
          <CardMedia
            component="img"
            alt={product.name}
            height="140"
            image={product.image}
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: ${product.price} <del>{product.discount}</del>
            </Typography>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

export default Index;