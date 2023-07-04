import { Card } from 'semantic-ui-react'

export const ProductCard = ({ product }: { product: any }) => {

    return (
        <Card
            image={product.image?.url !== null ? product.image?.url : ''}
            header={product.name ? product.name : ''}
            meta={product.price ? product.price.formatted_with_symbol : ''}
            description={product.description ? product.description.replace(/(<([^>]+)>)/ig, "") : ''}
        />
    );
};
