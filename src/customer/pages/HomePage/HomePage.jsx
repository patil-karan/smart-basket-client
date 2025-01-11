import React from "react";
import MainCrosel from "../../components/HomeCarosel/MainCrosel";
import HomeSectioncarosel from "../../components/HomeSectionCarosel/HomeSectioncarosel";
import { Electronics } from "../../Data/Electronics/Electronics";
import { BeautyandFood } from "../../Data/BeautyandFood/BeautyandFood";
import { GadgetsandAppliances } from "../../Data/GadgetsandAppliances/GadgetsandAppliances";
import { Fashion } from "../../Data/Fashion/fashion";
import { HomeFurniture } from "../../Data/HomeFurniture/HomeFurniture";

const HomePage =()=>{
    return(
        <div>
            <MainCrosel/>
            <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
                <HomeSectioncarosel data={Electronics} sectionName={"Best Of Electronics"}/>
                <HomeSectioncarosel data={BeautyandFood} sectionName={"Beauty food,toys and more"}/>
                <HomeSectioncarosel data={GadgetsandAppliances} sectionName={"Gadgets and appliances"}/>
                <HomeSectioncarosel data={Fashion} sectionName={"Pick your Styles"}/>
                <HomeSectioncarosel data={HomeFurniture} sectionName={"Home Furniture"}/>
            </div>
        </div>
    )
}
export default HomePage