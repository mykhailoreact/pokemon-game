import HeaderBlock from './components/HeaderBlock';
import LayoutBlock from './components/LayoutBlock';
import FooterBlock from './components/FooterBlock';

import firstImg from './assets/bg1.jpg';
import secondImg from './assets/bg2.jpg';

const App = () => {
    return (
        <>
            <HeaderBlock 
                title = "Header Title"
                descr = "Deader Desc"
            />
            <LayoutBlock 
                title = "Layout Title1"
                descr = "Layout Desc1"
                urlBg = {firstImg}
            />
            <LayoutBlock 
                title = "Layout Title2"
                descr = "Layout Desc2"
                colorBg = "red"
            />
            <LayoutBlock 
                title = "Layout Title3"
                descr = "Layout Desc3"
                urlBg = {secondImg}
            />
            <FooterBlock />
        </>
    );
}

export default App;
