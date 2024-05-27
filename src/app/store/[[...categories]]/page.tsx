interface CategoriesProps {
    params: {
        categories: string[],
        searchParams: string
    }
}

function Category(props: CategoriesProps) {
    const { categories, searchParams } = props.params
    console.log(props)
    console.log(searchParams)
    return (
        <h1>Category {categories}</h1>
    );
}

export default Category