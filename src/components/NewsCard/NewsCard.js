import React from 'react';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

export const NewsCard = ({ article }) => {
    return (
        <Card>
            <CardActionArea>
                <CardMedia />
                <div>
                    <Typography variant="body2" color="textSecondary" component="h2"></Typography>
                    <Typography variant="body2" color="textSecondary" component="h2"></Typography>
                </div>
            </CardActionArea>
        </Card>
    );
};

export default NewsCard;