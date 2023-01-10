import { FC } from 'react';

type Props = {
    title: string;
    fetchUrl: string | Function;
    isLargeRow: boolean;
}

const CategoryCard: FC<Props> = ({title, fetchUrl, isLargeRow = false}) => {
    return (
        <>
            <div>Category Card</div>
        </>
    );
}

export default CategoryCard;