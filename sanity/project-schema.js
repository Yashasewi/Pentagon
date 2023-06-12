export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },

    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "image1",
      title: "Image1",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "image2",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },

    {
      name: "category",
      title: "Category",
      type: "string",
    },
    // {
    //     name: 'rating',
    //     title: 'Rating',
    //     type: 'number',
    // },

    // {
    //     name: 'numReviews',
    //     title: 'NumReviews',
    //     type: 'number',
    // },
    {
      name: "countInStock",
      title: "CountInStock",
      type: "number",
    },

    {
      name: "review",
      type: "array",
      title: "review",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "rating",
              type: "number",
              title: "Rating",
            },
            {
              name: "name",
              type: "string",
              title: "Name",
            },
            {
              name: "comment",
              type: "string",
              title: "Comment",
            },
          ],
        },
      ],
    },
    {
      name: "size",
      type: "array",
      title: "size",
      of: [
        {
          type: "string",
        },
      ],
    },
  ],
};
