import listTitles from "@/components/context/listTitles";

async function generateMetadata({ params: { pageName } }) {
    return {
        title: listTitles[pageName] || pageName
    }
};

export { generateMetadata };


function RootLayout({ children }) {
    return <>
        {children}
    </>
};

export default RootLayout;