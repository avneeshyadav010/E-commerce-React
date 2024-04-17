import { useEffect, useState } from "react";

const HeaderSlider = () => {
   const [slideIndex, setSlideIndex] = useState(0);
    const src1 = "https://media.istockphoto.com/id/1281049998/vector/black-friday-sale-black-tag-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=osifqLlIztYBcjIlbtOeVRhw-mgyqJ7Iza3Ho7ChHcw=";
    const src2 = "https://media.istockphoto.com/id/1221346149/photo/blank-credit-or-smart-cards-with-emv-chip-on-dark-background-and-e-commerce-business-concept.jpg?s=1024x1024&w=is&k=20&c=hDca0irhkBwkqzZKHcWhSm3mUIuMBvyhub6-87klXBw=";
    const src3 = "https://media.istockphoto.com/id/1200969581/photo/banner-of-happy-asian-woman-feeling-happiness-and-standing-typing-smartphone-on-blue.jpg?s=1024x1024&w=is&k=20&c=WUPOZtiGKRQ4ivoHHurXVNPl76zGqfvb8yTjCX1OL84=";

    const srcArray = [src1, src2, src3];

    useEffect(() => {
        const interval = setInterval(() => {
            if (slideIndex < srcArray.length - 1)
                {   
                    setSlideIndex((slideIndex) => slideIndex + 1);
                }
            else
                setSlideIndex(0)
            console.log("Slider function run")

        }, 2000);
        return () => clearInterval(interval);
    }, [slideIndex]);


    return (
        <>
            <div className="slider">
                <img src={srcArray[slideIndex]} alt="Header Image" />
                { <div className="dots">
                    <button onClick={()=>setSlideIndex(0)} className={`dot ${slideIndex === 0 ? "active": ""}`}></button>
                    <button onClick={()=>setSlideIndex(1)} className={`dot ${slideIndex === 1 ? "active": ""}`}></button>
                    <button onClick={()=>setSlideIndex(2)} className={`dot ${slideIndex === 2 ? "active": ""}`}></button>
                </div> }
               
            </div>
        </>
    )
}

export default HeaderSlider;