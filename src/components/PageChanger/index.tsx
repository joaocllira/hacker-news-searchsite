import { useState, useCallback, memo } from 'react';
import '../../App.css';

type TChangePageCallBack = (page: number) => void;
type TUseCallback = (page: string) => void;

interface IPageChangerProps {
    returnCurrentPage: TChangePageCallBack
}

const buttonStyle = {
    display: "inline-block",
    cursor: "pointer"
}

export function PageChanger({ returnCurrentPage }: IPageChangerProps) {
    let [currentPage, setCurrentPage] = useState<string>("1");

    const changePage: TUseCallback = useCallback<TUseCallback>((page: string) => {
        let newValue: number = parseInt(page);

        if (!isNaN(newValue)) {
            returnCurrentPage(newValue);
        }

        setCurrentPage(page);
    }, [returnCurrentPage]);

    const handleIncrementButton = () => {
        let newValue: number = parseInt(currentPage);
        if (!isNaN(newValue)) {
            changePage((newValue + 1).toString());
        }
    }

    const handleDecrementButton = () => {
        let newValue: number = parseInt(currentPage);
        if (!isNaN(newValue) && newValue > 1) {
            changePage((newValue - 1).toString());
        }
    }

    return (
        <div>
            <div style={{ ...buttonStyle, marginRight: "10px" }}
                onClick={handleDecrementButton}>
                &#9194;
            </div>

            Page <input value={currentPage} size={4}
                onChange={({ target }) => {
                    changePage(target.value);
                }} />

            <div style={{ ...buttonStyle, marginLeft: "10px" }}
                onClick={handleIncrementButton}>
                &#9193;
            </div >
        </div >
    );
}

export default memo(PageChanger);
