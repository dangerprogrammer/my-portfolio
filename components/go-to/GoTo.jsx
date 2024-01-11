const { Link } = require("react-router-dom");

function GoTo({ url: href, back, ...content }) {
    const { setHistory, backHistory } = useContext(ContextApp);

    if (back) backHistory();

    console.log('new historic!', href);
    setHistory(oldHistory => [...oldHistory, href]);

    return <Link {...{href, ...content}}/>
};

export default GoTo;