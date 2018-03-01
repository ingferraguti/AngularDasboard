export interface TableAction {
    fa?: string;
    glyphicon?: string;
    color?: string;
    action?: string;
    text?: string;
  }


export interface TableHeading {
    key: string;
    readable?: string;
}


export interface TableEvent {
    action: TableAction;
    row: object;
}