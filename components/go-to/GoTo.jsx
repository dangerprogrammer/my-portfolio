import Link from 'next/link';
import { useContext } from 'react';
import { ContextApp } from '../context/ContextApp';

function GoTo({ url:href, back, ...content }) {
    const { setHistory, backHistory } = useContext(ContextApp);

    if (back) backHistory();

    setHistory(oldHistory => [...oldHistory, href]);

    return <Link {...{href, ...content}}/>
};

export default GoTo;