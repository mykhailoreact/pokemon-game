import s from './style.module.css';

const LayoutBlock = ({title, descr, urlBg = false, colorBg = false}) => {
    let inlineStyle = {};

    if (urlBg) {
        inlineStyle.backgroundImage = `url(${urlBg})`;
    }

    if (colorBg) {
        inlineStyle.backgroundColor = `${colorBg}`;
    }

    return (  
        <section style={inlineStyle} className={s.root}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={[s.desc, s.full].join(" ")}>
                        <p>{descr}</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default LayoutBlock;
