import React from 'react'
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import styles from "../style.module.css";

const AccordionItem = ({ header, ...rest }) => (
    <Item
        {...rest}
        header={
            <>
                {header}
            </>
        }
        className={styles.item}
        buttonProps={{
            className: ({ isEnter }) =>
                `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
        }}
        contentProps={{ className: styles.itemContent }}
        panelProps={{ className: styles.itemPanel }}
    />
);
const About = () => {
    return (
        <>
            <div className='w-[100%] lg:ps-20 lg:px-0 sm:px-16 px-6'>
                <div className="grid lg:grid-cols-2 grid-cols-1">
                    <div className="about-content pt-24 pe-8 lg:pb-0 pb-12">
                        <h1 className='text-[3.5rem] font-semibold text-black mb-16'>We <span className='text-[#F36F2B]'>stay connected</span></h1>
                        <div className={styles.accordion}>
                            <Accordion transition transitionTimeout={250}>
                                <AccordionItem header="Quarterly Business Updates" initialEntered>
                                    <p className='text-2xl text-gray-800 leading-relaxed'> We strive to stay connected as a team through communication and collaboration. This materialises every quarter through our Quarterly Business Update events. These gatherings are immersive sessions where every team
                                        member, regardless of rank or tenure, comes together to contribute to our overarching business strategy, and stay connected. They are opportunities to learn from our seasoned leaders and to also share personal insights and achievements that can steer our collective future. In an ever-evolving engineering landscape, staying connected isn’t just a benefit—it’s essential.</p>
                                </AccordionItem>

                                <AccordionItem header="Industry Events & Networking">
                                    <p className='text-2xl text-gray-800 leading-relaxed'>   member, regardless of rank or tenure, comes together to contribute to our overarching business strategy, and stay connected. They are opportunities to learn from our seasoned leaders and to also share personal insights and achievements that can steer our collective future. In an ever-evolving engineering landscape, staying connected isn’t just a benefit—it’s essential.</p>
                                </AccordionItem>

                                <AccordionItem header="Associations Memberships">
                                    <p className='text-2xl text-gray-800 leading-relaxed'>      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse in quibusdam eveniet voluptate possimus a dicta sint quia, quod repellat accusantium tempore magnam vitae necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>

                    <div className="about-img h-[700px] lg:mb-0 mb-16">
                        <img src="assets/img/about.png" alt="" className='h-[700px] w-[100%] object-cover' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
