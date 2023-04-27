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
            name: "alt",
            title: "Alt",
            type: "string",
        },
        {
            name: "category",
            title: "Category",
            type: "string",
        },
        {
            name: "reviews",
            title: "Reviews",
            type: "document",
            fields: [
                {
                    name: "name",
                    title: "Name",
                    type: "string",
                },
                {
                    name: "rating",
                    title: "Rating",
                    type: "number",
                },
                {
                    name: "comment",
                    title: "Comment",
                    type: "string",
                },
            ],
        },
        {
            name: "countInStock",
            title: "CountInStock",
            type: "number",
        },
    ],
};
