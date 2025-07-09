'use client'
import Marquee from "react-fast-marquee";
import { clientLogoData } from "@/utils/fackData/clientLogoData";
import Image from "next/image";

const Partners = () => {
    return (
        <div className="company-design-area partner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Trusted by startups, educators, fintechs & visionaries</h2>
                        <div className="company-list">
                            <div className="scroller">
                                <Marquee>
                                    {
                                        clientLogoData.map(({ id, img }) => <Image key={id} src={img} alt="company logo" width={120} height={40} />)
                                    }
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Partners