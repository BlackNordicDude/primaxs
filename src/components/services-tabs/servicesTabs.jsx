import Fifth from "./fifth";
import First from "./first";
import Fourth from "./fourth";
import Second from "./second";
import Third from "./third";

const ServicesTabs = ({activeTab}) => {
    return (
        <>  
        { activeTab === 1 && <First/> }
        { activeTab === 2 && <Second/> }
        { activeTab === 3 && <Third/> }
        { activeTab === 4 && <Fourth/> }
        { activeTab === 5 && <Fifth/> }      
        </>      
    )
}

export default ServicesTabs


