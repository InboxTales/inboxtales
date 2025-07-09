type DataType = {
    id: number
    title: string,
    img: string,
    description: string,
    icon: string
}[]

export const workProcessData: DataType = [
    {
        id: 1,
        title: "Share Your Vision",
        img: "/images/shapes/workprocess-shape1.png",
        icon: "ri-lightbulb-line",
        description: "Tell us about your goals, challenges, and dreams. We listen, understand, and create a roadmap to your success.",
    },
    {
        id: 2,
        title: "We Craft & Collaborate",
        img: "/images/shapes/workprocess-shape2.png",
        icon: "ri-team-line",
        description: "Our team works closely with you, iterating and refining until we create something that exceeds your expectations.",
    },
    {
        id: 3,
        title: "Launch, Grow & Scale",
        img: "/images/shapes/workprocess-shape1.png",
        icon: "ri-rocket-line",
        description: "We launch your solution and continue supporting your growth with ongoing optimization and scaling strategies.",
    },
]