import SectionTitle from "@/components/ui/sectionTitle"
import SlideUp from "@/utils/animations/slideUp"
import { priceData } from "@/utils/fackData/priceData"

const Pricing = () => {
    return (
        <section id="pricing" className="pricing-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <SectionTitle>
                                <SectionTitle.Name>Membership Benefits</SectionTitle.Name>
                                <SectionTitle.Title>Why Clients Stick With Us</SectionTitle.Title>
                                <SectionTitle.Description>We don&apos;t just deliver projects—we build lasting partnerships that grow with your business.</SectionTitle.Description>
                            </SectionTitle>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {
                            priceData.map(({ description, features, id, price, title }) =>
                                <Card key={id} description={description} id={id} price={price} title={title} features={features} />
                            )
                        }
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Pricing

interface PropsType {
    id: number,
    description: string,
    price: number | string,
    title: string,
    features: {
        id: number
        feature: string,
        available: boolean
    }[]
}
const Card = ({ id, description, price, title, features }: PropsType) => {
    return (
        <div className="col-lg-6 col-md-6">
            <SlideUp delay={id} className="pricing-item">
                <div className="pricing-header">
                    <h4 className={`title ${title === "Our Commitment to You" ? "color-title" : ""}`}>{title}</h4>
                    <span className="price">{price}</span>
                    <p className="save-percent" dangerouslySetInnerHTML={{ __html: description }} />
                </div>
                <div className="pricing-details">
                    <ul>
                        {
                            features.map(({ feature, id }) => <li key={id}><i className="ri-arrow-right-line" />{feature}</li>)
                        }
                    </ul>
                    <a href="/contact" className="theme-btn">Start Your Project<i className="ri-arrow-right-line" /></a>
                </div>
            </SlideUp>
        </div>
    )
}