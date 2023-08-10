import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
    return (
        <section id="product" className={layout.sectionReverse}>
            <div className={layout.sectionImgReverse}>
                <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
                <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50] pink__gradient"/>
            </div>
            <div className={ layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Easily control your <br className="sm:block hidden" />
                    billing and invoicing
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-4` }>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ullam, necessitatibus similique ab nam quis a omnis at. Eius tempora incidunt temporibus nam illo eos similique, soluta a facere maxime!
                </p>
                <div className="flex flex-row flex-wrap sm:mt-5 mt-6">
                    <img src={apple} alt="apple_store" className="w-[128] h-[42] object-contain mr-5 cursor-pointer" />
                    <img src={google} alt="apple_store" className="w-[128] h-[42] object-contain  cursor-pointer" />

                </div>
           </div>
        </section>
    );
};

export default Billing;