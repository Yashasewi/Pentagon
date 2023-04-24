/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import Image from "next/image";

import { Fragment, useState } from "react";
import {
    Dialog,
    Disclosure,
    Popover,
    RadioGroup,
    Tab,
    Transition,
} from "@headlessui/react";
import {
    Bars3Icon,
    HeartIcon,
    MagnifyingGlassIcon,
    MinusIcon,
    PlusIcon,
    ShoppingBagIcon,
    UserIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";

const navigation = {
    categories: [
        {
            id: "women",
            name: "Women",
            featured: [
                {
                    name: "New Arrivals",
                    href: "#",
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
                    imageAlt:
                        "Models sitting back to back, wearing Basic Tee in black and bone.",
                },
                {
                    name: "Basic Tees",
                    href: "#",
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
                    imageAlt:
                        "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
                },
                {
                    name: "Accessories",
                    href: "#",
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg",
                    imageAlt:
                        "Model wearing minimalist watch with black wristband and white watch face.",
                },
            ],
            sections: [
                [
                    {
                        id: "shoes",
                        name: "Shoes & Accessories",
                        items: [
                            { name: "Sneakers", href: "#" },
                            { name: "Boots", href: "#" },
                            { name: "Flats", href: "#" },
                            { name: "Sandals", href: "#" },
                            { name: "Heels", href: "#" },
                            { name: "Socks", href: "#" },
                        ],
                    },
                    {
                        id: "collection",
                        name: "Shop Collection",
                        items: [
                            { name: "Everything", href: "#" },
                            { name: "Core", href: "#" },
                            { name: "New Arrivals", href: "#" },
                            { name: "Sale", href: "#" },
                            { name: "Accessories", href: "#" },
                        ],
                    },
                ],
                [
                    {
                        id: "clothing",
                        name: "All Clothing",
                        items: [
                            { name: "Basic Tees", href: "#" },
                            { name: "Artwork Tees", href: "#" },
                            { name: "Tops", href: "#" },
                            { name: "Bottoms", href: "#" },
                            { name: "Swimwear", href: "#" },
                            { name: "Underwear", href: "#" },
                        ],
                    },
                    {
                        id: "accessories",
                        name: "All Accessories",
                        items: [
                            { name: "Watches", href: "#" },
                            { name: "Wallets", href: "#" },
                            { name: "Bags", href: "#" },
                            { name: "Sunglasses", href: "#" },
                            { name: "Hats", href: "#" },
                            { name: "Belts", href: "#" },
                        ],
                    },
                ],
                [
                    {
                        id: "brands",
                        name: "Brands",
                        items: [
                            { name: "Full Nelson", href: "#" },
                            { name: "My Way", href: "#" },
                            { name: "Re-Arranged", href: "#" },
                            { name: "Counterfeit", href: "#" },
                            { name: "Significant Other", href: "#" },
                        ],
                    },
                ],
            ],
        },
        {
            id: "men",
            name: "Men",
            featured: [
                {
                    name: "Accessories",
                    href: "#",
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg",
                    imageAlt:
                        "Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters.",
                },
                {
                    name: "New Arrivals",
                    href: "#",
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
                    imageAlt:
                        "Drawstring top with elastic loop closure and textured interior padding.",
                },
                {
                    name: "Artwork Tees",
                    href: "#",
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
                    imageAlt:
                        "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
                },
            ],
            sections: [
                [
                    {
                        id: "shoes",
                        name: "Shoes & Accessories",
                        items: [
                            { name: "Sneakers", href: "#" },
                            { name: "Boots", href: "#" },
                            { name: "Sandals", href: "#" },
                            { name: "Socks", href: "#" },
                        ],
                    },
                    {
                        id: "collection",
                        name: "Shop Collection",
                        items: [
                            { name: "Everything", href: "#" },
                            { name: "Core", href: "#" },
                            { name: "New Arrivals", href: "#" },
                            { name: "Sale", href: "#" },
                        ],
                    },
                ],
                [
                    {
                        id: "clothing",
                        name: "All Clothing",
                        items: [
                            { name: "Basic Tees", href: "#" },
                            { name: "Artwork Tees", href: "#" },
                            { name: "Pants", href: "#" },
                            { name: "Hoodies", href: "#" },
                            { name: "Swimsuits", href: "#" },
                        ],
                    },
                    {
                        id: "accessories",
                        name: "All Accessories",
                        items: [
                            { name: "Watches", href: "#" },
                            { name: "Wallets", href: "#" },
                            { name: "Bags", href: "#" },
                            { name: "Sunglasses", href: "#" },
                            { name: "Hats", href: "#" },
                            { name: "Belts", href: "#" },
                        ],
                    },
                ],
                [
                    {
                        id: "brands",
                        name: "Brands",
                        items: [
                            { name: "Re-Arranged", href: "#" },
                            { name: "Counterfeit", href: "#" },
                            { name: "Full Nelson", href: "#" },
                            { name: "My Way", href: "#" },
                        ],
                    },
                ],
            ],
        },
    ],
    pages: [
        { name: "Company", href: "#" },
        { name: "Stores", href: "#" },
    ],
};
const product = {
    name: "Zip Tote Basket",
    price: "$140",
    rating: 4,
    images: [
        {
            id: 1,
            name: "Angled view",
            src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
            alt: "Angled front view with bag zipped and handles upright.",
        },
        {
            id: 2,
            name: "Angled view",
            src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
            alt: "Angled front view with bag zipped and handles upright.",
        },
        {
            id: 3,
            name: "Angled view",
            src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
            alt: "Angled front view with bag zipped and handles upright.",
        },
        {
            id: 4,
            name: "Angled view",
            src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
            alt: "Angled front view with bag zipped and handles upright.",
        },
        // More images...
    ],
    colors: [
        {
            name: "Washed Black",
            bgColor: "bg-gray-700",
            selectedColor: "ring-gray-700",
        },
        { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
        {
            name: "Washed Gray",
            bgColor: "bg-gray-500",
            selectedColor: "ring-gray-500",
        },
    ],
    description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
    details: [
        {
            name: "Features",
            items: [
                "Multiple strap configurations",
                "Spacious interior with top zip",
                "Leather handle and tabs",
                "Interior dividers",
                "Stainless strap loops",
                "Double stitched construction",
                "Water-resistant",
            ],
        },
        {
            name: "Features1",
            items: [
                "Multiple strap configurations",
                "Spacious interior with top zip",
                "Leather handle and tabs",
                "Interior dividers",
                "Stainless strap loops",
                "Double stitched construction",
                "Water-resistant",
            ],
        },
        {
            name: "Features2",
            items: [
                "Multiple strap configurations",
                "Spacious interior with top zip",
                "Leather handle and tabs",
                "Interior dividers",
                "Stainless strap loops",
                "Double stitched construction",
                "Water-resistant",
            ],
        },
        {
            name: "Features3",
            items: [
                "Multiple strap configurations",
                "Spacious interior with top zip",
                "Leather handle and tabs",
                "Interior dividers",
                "Stainless strap loops",
                "Double stitched construction",
                "Water-resistant",
            ],
        },
        // More sections...
    ],
};
const relatedProducts = [
    {
        id: 1,
        name: "Zip Tote Basket",
        color: "White and black",
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg",
        imageAlt:
            "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
        price: "$140",
    },
    {
        id: 2,
        name: "Zip Tote Basket",
        color: "White and black",
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg",
        imageAlt:
            "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
        price: "$140",
    },
    {
        id: 3,
        name: "Zip Tote Basket",
        color: "White and black",
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg",
        imageAlt:
            "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
        price: "$140",
    },
    {
        id: 4,
        name: "Zip Tote Basket",
        color: "White and black",
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg",
        imageAlt:
            "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
        price: "$140",
    },
    {
        id: 5,
        name: "Zip Tote Basket",
        color: "White and black",
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg",
        imageAlt:
            "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
        price: "$140",
    },
    // More products...
];
const footerNavigation = {
    products: [
        { name: "Bags", href: "#" },
        { name: "Tees", href: "#" },
        { name: "Objects", href: "#" },
        { name: "Home Goods", href: "#" },
        { name: "Accessories", href: "#" },
    ],
    company: [
        { name: "Who we are", href: "#" },
        { name: "Sustainability", href: "#" },
        { name: "Press", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Terms & Conditions", href: "#" },
        { name: "Privacy", href: "#" },
    ],
    customerService: [
        { name: "Contact", href: "#" },
        { name: "Shipping", href: "#" },
        { name: "Returns", href: "#" },
        { name: "Warranty", href: "#" },
        { name: "Secure Payments", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Find a store", href: "#" },
    ],
};

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Example() {
    const [open, setOpen] = useState(false);
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);

    return (
        <div className="bg-white">
            {/* Mobile menu */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-40 lg:hidden"
                    onClose={setOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                                <div className="flex px-4 pb-2 pt-5">
                                    <button
                                        type="button"
                                        className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="sr-only">
                                            Close menu
                                        </span>
                                        <XMarkIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>

                                {/* Links */}
                                <Tab.Group as="div" className="mt-2">
                                    <div className="border-b border-gray-200">
                                        <Tab.List className="-mb-px flex space-x-8 px-4">
                                            {navigation.categories.map(
                                                (category) => (
                                                    <Tab
                                                        key={category.name}
                                                        className={({
                                                            selected,
                                                        }) =>
                                                            classNames(
                                                                selected
                                                                    ? "border-indigo-600 text-indigo-600"
                                                                    : "border-transparent text-gray-900",
                                                                "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                                                            )
                                                        }
                                                    >
                                                        {category.name}
                                                    </Tab>
                                                )
                                            )}
                                        </Tab.List>
                                    </div>
                                    <Tab.Panels as={Fragment}>
                                        {navigation.categories.map(
                                            (category) => (
                                                <Tab.Panel
                                                    key={category.name}
                                                    className="space-y-10 px-4 pb-8 pt-10"
                                                >
                                                    <div className="space-y-4">
                                                        {category.featured.map(
                                                            (item, itemIdx) => (
                                                                <div
                                                                    key={
                                                                        itemIdx
                                                                    }
                                                                    className="group aspect-h-1 aspect-w-1 relative overflow-hidden rounded-md bg-gray-100"
                                                                >
                                                                    <Image
                                                                        width={
                                                                            300
                                                                        }
                                                                        height={
                                                                            300
                                                                        }
                                                                        src={
                                                                            item.imageSrc
                                                                        }
                                                                        alt={
                                                                            item.imageAlt
                                                                        }
                                                                        className="object-cover object-center group-hover:opacity-75"
                                                                    />
                                                                    <div className="flex flex-col justify-end">
                                                                        <div className="bg-white bg-opacity-60 p-4 text-base sm:text-sm">
                                                                            <a
                                                                                href={
                                                                                    item.href
                                                                                }
                                                                                className="font-medium text-gray-900"
                                                                            >
                                                                                <span
                                                                                    className="absolute inset-0"
                                                                                    aria-hidden="true"
                                                                                />
                                                                                {
                                                                                    item.name
                                                                                }
                                                                            </a>
                                                                            <p
                                                                                aria-hidden="true"
                                                                                className="mt-0.5 text-gray-700 sm:mt-1"
                                                                            >
                                                                                Shop
                                                                                now
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                    {category.sections.map(
                                                        (column, columnIdx) => (
                                                            <div
                                                                key={columnIdx}
                                                                className="space-y-10"
                                                            >
                                                                {column.map(
                                                                    (
                                                                        section
                                                                    ) => (
                                                                        <div
                                                                            key={
                                                                                section.name
                                                                            }
                                                                        >
                                                                            <p
                                                                                id={`${category.id}-${section.id}-heading-mobile`}
                                                                                className="font-medium text-gray-900"
                                                                            >
                                                                                {
                                                                                    section.name
                                                                                }
                                                                            </p>
                                                                            <ul
                                                                                role="list"
                                                                                aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                                                                className="mt-6 flex flex-col space-y-6"
                                                                            >
                                                                                {section.items.map(
                                                                                    (
                                                                                        item
                                                                                    ) => (
                                                                                        <li
                                                                                            key={
                                                                                                item.name
                                                                                            }
                                                                                            className="flow-root"
                                                                                        >
                                                                                            <a
                                                                                                href={
                                                                                                    item.href
                                                                                                }
                                                                                                className="-m-2 block p-2 text-gray-500"
                                                                                            >
                                                                                                {
                                                                                                    item.name
                                                                                                }
                                                                                            </a>
                                                                                        </li>
                                                                                    )
                                                                                )}
                                                                            </ul>
                                                                        </div>
                                                                    )
                                                                )}
                                                            </div>
                                                        )
                                                    )}
                                                </Tab.Panel>
                                            )
                                        )}
                                    </Tab.Panels>
                                </Tab.Group>

                                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                                    {navigation.pages.map((page) => (
                                        <div
                                            key={page.name}
                                            className="flow-root"
                                        >
                                            <a
                                                href={page.href}
                                                className="-m-2 block p-2 font-medium text-gray-900"
                                            >
                                                {page.name}
                                            </a>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t border-gray-200 px-4 py-6">
                                    <a
                                        href="#"
                                        className="-m-2 flex items-center p-2"
                                    >
                                        <Image
                                            width={300}
                                            height={300}
                                            src="https://tailwindui.com/img/flags/flag-canada.svg"
                                            alt=""
                                            className="block h-auto w-5 flex-shrink-0"
                                        />
                                        <span className="ml-3 block text-base font-medium text-gray-900">
                                            CAD
                                        </span>
                                        <span className="sr-only">
                                            , change currency
                                        </span>
                                    </a>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <main className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    {/* Product */}
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        {/* Image gallery */}
                        <Tab.Group as="div" className="flex flex-col-reverse">
                            {/* Image selector */}
                            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                                <Tab.List className="grid grid-cols-4 gap-6">
                                    {product.images.map((image) => (
                                        <Tab
                                            key={image.id}
                                            className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                                        >
                                            {({ selected }) => (
                                                <>
                                                    <span className="sr-only">
                                                        {" "}
                                                        {image.name}{" "}
                                                    </span>
                                                    <span className="absolute inset-0 overflow-hidden rounded-md">
                                                        <Image
                                                            width={300}
                                                            height={300}
                                                            src={image.src}
                                                            alt=""
                                                            className="h-full w-full object-cover object-center"
                                                        />
                                                    </span>
                                                    <span
                                                        className={classNames(
                                                            selected
                                                                ? "ring-indigo-500"
                                                                : "ring-transparent",
                                                            "pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                </>
                                            )}
                                        </Tab>
                                    ))}
                                </Tab.List>
                            </div>

                            <Tab.Panels className="aspect-h-1 aspect-w-1 w-full">
                                {product.images.map((image) => (
                                    <Tab.Panel key={image.id}>
                                        <Image
                                            width={300}
                                            height={300}
                                            src={image.src}
                                            alt={image.alt}
                                            className="h-full w-full object-cover object-center sm:rounded-lg"
                                        />
                                    </Tab.Panel>
                                ))}
                            </Tab.Panels>
                        </Tab.Group>

                        {/* Product info */}
                        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                                {product.name}
                            </h1>

                            <div className="mt-3">
                                <h2 className="sr-only">Product information</h2>
                                <p className="text-3xl tracking-tight text-gray-900">
                                    {product.price}
                                </p>
                            </div>

                            {/* Reviews */}
                            <div className="mt-3">
                                <h3 className="sr-only">Reviews</h3>
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        {[0, 1, 2, 3, 4].map((rating) => (
                                            <StarIcon
                                                key={rating}
                                                className={classNames(
                                                    product.rating > rating
                                                        ? "text-indigo-500"
                                                        : "text-gray-300",
                                                    "h-5 w-5 flex-shrink-0"
                                                )}
                                                aria-hidden="true"
                                            />
                                        ))}
                                    </div>
                                    <p className="sr-only">
                                        {product.rating} out of 5 stars
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6">
                                <h3 className="sr-only">Description</h3>

                                <div
                                    className="space-y-6 text-base text-gray-700"
                                    dangerouslySetInnerHTML={{
                                        __html: product.description,
                                    }}
                                />
                            </div>

                            <form className="mt-6">
                                {/* Colors */}
                                <div>
                                    <h3 className="text-sm text-gray-600">
                                        Color
                                    </h3>

                                    <RadioGroup
                                        value={selectedColor}
                                        onChange={setSelectedColor}
                                        className="mt-2"
                                    >
                                        <RadioGroup.Label className="sr-only">
                                            {" "}
                                            Choose a color{" "}
                                        </RadioGroup.Label>
                                        <div className="flex items-center space-x-3">
                                            {product.colors.map((color) => (
                                                <RadioGroup.Option
                                                    key={color.name}
                                                    value={color}
                                                    className={({
                                                        active,
                                                        checked,
                                                    }) =>
                                                        classNames(
                                                            color.selectedColor,
                                                            active && checked
                                                                ? "ring ring-offset-1"
                                                                : "",
                                                            !active && checked
                                                                ? "ring-2"
                                                                : "",
                                                            "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                                                        )
                                                    }
                                                >
                                                    <RadioGroup.Label
                                                        as="span"
                                                        className="sr-only"
                                                    >
                                                        {" "}
                                                        {color.name}{" "}
                                                    </RadioGroup.Label>
                                                    <span
                                                        aria-hidden="true"
                                                        className={classNames(
                                                            color.bgColor,
                                                            "h-8 w-8 rounded-full border border-black border-opacity-10"
                                                        )}
                                                    />
                                                </RadioGroup.Option>
                                            ))}
                                        </div>
                                    </RadioGroup>
                                </div>

                                <div className="mt-10 flex">
                                    <button
                                        type="submit"
                                        className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                                    >
                                        Add to bag
                                    </button>

                                    <button
                                        type="button"
                                        className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                                    >
                                        <HeartIcon
                                            className="h-6 w-6 flex-shrink-0"
                                            aria-hidden="true"
                                        />
                                        <span className="sr-only">
                                            Add to favorites
                                        </span>
                                    </button>
                                </div>
                            </form>

                            <section
                                aria-labelledby="details-heading"
                                className="mt-12"
                            >
                                <h2 id="details-heading" className="sr-only">
                                    Additional details
                                </h2>

                                <div className="divide-y divide-gray-200 border-t">
                                    {product.details.map((detail) => (
                                        <Disclosure as="div" key={detail.name}>
                                            {({ open }) => (
                                                <>
                                                    <h3>
                                                        <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                                                            <span
                                                                className={classNames(
                                                                    open
                                                                        ? "text-indigo-600"
                                                                        : "text-gray-900",
                                                                    "text-sm font-medium"
                                                                )}
                                                            >
                                                                {detail.name}
                                                            </span>
                                                            <span className="ml-6 flex items-center">
                                                                {open ? (
                                                                    <MinusIcon
                                                                        className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                                                        aria-hidden="true"
                                                                    />
                                                                ) : (
                                                                    <PlusIcon
                                                                        className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                                                        aria-hidden="true"
                                                                    />
                                                                )}
                                                            </span>
                                                        </Disclosure.Button>
                                                    </h3>
                                                    <Disclosure.Panel
                                                        as="div"
                                                        className="prose prose-sm pb-6"
                                                    >
                                                        <ul role="list">
                                                            {detail.items.map(
                                                                (item) => (
                                                                    <li
                                                                        key={
                                                                            item
                                                                        }
                                                                    >
                                                                        {item}
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>

                    <section
                        aria-labelledby="related-heading"
                        className="mt-10 border-t border-gray-200 px-4 py-16 sm:px-0"
                    >
                        <h2
                            id="related-heading"
                            className="text-xl font-bold text-gray-900"
                        >
                            Customers also bought
                        </h2>

                        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                            {relatedProducts.map((product) => (
                                <div key={product.id}>
                                    <div className="relative">
                                        <div className="relative h-72 w-full overflow-hidden rounded-lg">
                                            <Image
                                                width={300}
                                                height={300}
                                                src={product.imageSrc}
                                                alt={product.imageAlt}
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                        <div className="relative mt-4">
                                            <h3 className="text-sm font-medium text-gray-900">
                                                {product.name}
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-500">
                                                {product.color}
                                            </p>
                                        </div>
                                        <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                                            <div
                                                aria-hidden="true"
                                                className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                                            />
                                            <p className="relative text-lg font-semibold text-white">
                                                {product.price}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <a
                                            href={product.href}
                                            className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                                        >
                                            Add to bag
                                            <span className="sr-only">
                                                , {product.name}
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <footer aria-labelledby="footer-heading" className="bg-white">
                <h2 id="footer-heading" className="sr-only">
                    Footer
                </h2>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="border-t border-gray-200 py-20">
                        <div className="grid grid-cols-1 md:grid-flow-col md:auto-rows-min md:grid-cols-12 md:gap-x-8 md:gap-y-16">
                            {/* Image section */}
                            <div className="col-span-1 md:col-span-2 lg:col-start-1 lg:row-start-1">
                                <img
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                    alt=""
                                    className="h-8 w-auto"
                                />
                            </div>

                            {/* Sitemap sections */}
                            <div className="col-span-6 mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-8 md:col-start-3 md:row-start-1 md:mt-0 lg:col-span-6 lg:col-start-2">
                                <div className="grid grid-cols-1 gap-y-12 sm:col-span-2 sm:grid-cols-2 sm:gap-x-8">
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-900">
                                            Products
                                        </h3>
                                        <ul
                                            role="list"
                                            className="mt-6 space-y-6"
                                        >
                                            {footerNavigation.products.map(
                                                (item) => (
                                                    <li
                                                        key={item.name}
                                                        className="text-sm"
                                                    >
                                                        <a
                                                            href={item.href}
                                                            className="text-gray-500 hover:text-gray-600"
                                                        >
                                                            {item.name}
                                                        </a>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-900">
                                            Company
                                        </h3>
                                        <ul
                                            role="list"
                                            className="mt-6 space-y-6"
                                        >
                                            {footerNavigation.company.map(
                                                (item) => (
                                                    <li
                                                        key={item.name}
                                                        className="text-sm"
                                                    >
                                                        <a
                                                            href={item.href}
                                                            className="text-gray-500 hover:text-gray-600"
                                                        >
                                                            {item.name}
                                                        </a>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gray-900">
                                        Customer Service
                                    </h3>
                                    <ul role="list" className="mt-6 space-y-6">
                                        {footerNavigation.customerService.map(
                                            (item) => (
                                                <li
                                                    key={item.name}
                                                    className="text-sm"
                                                >
                                                    <a
                                                        href={item.href}
                                                        className="text-gray-500 hover:text-gray-600"
                                                    >
                                                        {item.name}
                                                    </a>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>

                            {/* Newsletter section */}
                            <div className="mt-12 md:col-span-8 md:col-start-3 md:row-start-2 md:mt-0 lg:col-span-4 lg:col-start-9 lg:row-start-1">
                                <h3 className="text-sm font-medium text-gray-900">
                                    Sign up for our newsletter
                                </h3>
                                <p className="mt-6 text-sm text-gray-500">
                                    The latest deals and savings, sent to your
                                    inbox weekly.
                                </p>
                                <form className="mt-2 flex sm:max-w-md">
                                    <label
                                        htmlFor="email-address"
                                        className="sr-only"
                                    >
                                        Email address
                                    </label>
                                    <input
                                        id="email-address"
                                        type="text"
                                        autoComplete="email"
                                        required
                                        className="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                    />
                                    <div className="ml-4 flex-shrink-0">
                                        <button
                                            type="submit"
                                            className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                            Sign up
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-100 py-10 text-center">
                        <p className="text-sm text-gray-500">
                            &copy; 2021 Your Company, Inc. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
