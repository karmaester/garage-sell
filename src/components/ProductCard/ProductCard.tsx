import { Card } from 'semantic-ui-react'

export const ProductCard = ({ product }: { product: any }) => {

    return (
        <Card
            image={product.image.url}
            header={product.name}
            meta={product.price.formatted_with_symbol}
            description={product.description.replace(/(<([^>]+)>)/ig, "")}
        />
    );
};