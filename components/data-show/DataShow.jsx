function DataShow({ children, ...contexts }) {
    return <div data-show {...contexts}>
        {children}
    </div>
};

export default DataShow;