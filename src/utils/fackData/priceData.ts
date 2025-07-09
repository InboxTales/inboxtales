type DataType = {
    id: number,
    title: string,
    description: string,
    price: number | string,
    features: {
        id: number
        feature: string,
        available: boolean
    }[]
}[]
export const priceData: DataType = [
    {
        id: 1,
        title: "Why Clients Stick With Us",
        description: "We don't just deliver projects—we build lasting partnerships that grow with your business.",
        price: "",
        features: [
            {
                id: 1,
                feature: "Unlimited Tasks",
                available: true
            },
            {
                id: 2,
                feature: "Fast Delivery",
                available: true
            },
            {
                id: 3,
                feature: "No Lock-in",
                available: true
            },
            {
                id: 4,
                feature: "Transparent Pricing",
                available: true
            },
            {
                id: 5,
                feature: "Top Talent",
                available: true
            },
            {
                id: 6,
                feature: "Ongoing Iteration",
                available: true
            },
        ]
    },
    {
        id: 2,
        title: "Our Commitment to You",
        description: "From the first hello to ongoing support, we're invested in your success story.",
        price: '',
        features: [
            {
                id: 1,
                feature: "Dedicated Project Manager",
                available: true
            },
            {
                id: 2,
                feature: "24/7 Support",
                available: true
            },
            {
                id: 3,
                feature: "Quality Assurance",
                available: true
            },
            {
                id: 4,
                feature: "Post-Launch Support",
                available: true
            },
            {
                id: 5,
                feature: "Performance Monitoring",
                available: true
            },
            {
                id: 6,
                feature: "Growth Strategy",
                available: true
            },
        ]

    },
]