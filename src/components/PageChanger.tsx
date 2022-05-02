import { useState, useCallback } from 'react';
import '../App.css';
import './StoriesContainer.css';

type TChangePageCallBack = (page: number) => void;
type TUseCallback = (page: number) => void;

interface IPageChangerProps {
    returnCurrentPage: TChangePageCallBack
}

export function PageChanger({ returnCurrentPage }: IPageChangerProps) {
    let [currentPage, setCurrentPage] = useState<number>(1);

    const changePage: TUseCallback = useCallback<TUseCallback>((page: number) => {
        if (page < 1) {
            return;
        }
        returnCurrentPage(page);
        setCurrentPage(page);
    }, []);

    return (
        <div>
            <div className="page-changer" style={{ marginRight: "10px" }}
                onClick={() => changePage(currentPage - 1)}>
                &#9194;
            </div>

            Page <input value={currentPage} size={4}
                onChange={({ target }) => changePage(eval(target.value))} />

            <div className="page-changer" style={{ marginLeft: "10px" }}
                onClick={() => changePage(currentPage + 1)}>
                &#9193;
            </div>
        </div>
    );
}
