import * as React from "react";
interface Props {
    total: number;
    page: number;
    onGoToPage: (page: number) => void;
}
interface State {
    currentPage: number;
    pageInput: number;
}
export declare class Pagination extends React.Component<Props, State> {
    constructor(props: Props);
    render(): JSX.Element;
    private setActivePage;
    private renderPaginateButtons;
    private onChangeInput;
    private onKeyPressInput;
}
export {};
//# sourceMappingURL=Pagination.d.ts.map