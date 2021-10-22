import React, { useEffect, useState } from "react";

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function OneArticle(props) {
    const articleDetails = props.details;

    return (
        <div>
            <span>{articleDetails.author}</span>
            <ImageListItem>
                <img
                    src={`${articleDetails.urlToImage}?w=248&fit=crop&auto=format`}
                    srcSet={`${articleDetails.urlToImage}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={articleDetails.author}
                    loading="lazy"
                />
                <ImageListItemBar
                    title={articleDetails.title}
                    subtitle={<span>by: {articleDetails.author}</span>}
                    position="below"
                />
            </ImageListItem>
        </div>
    );
}