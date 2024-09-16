export interface Trade {
    id: string;
    date: Date;
    userFrom: {
      id: string;
      name: string;
      avatarUrl: string;
    };
    userTo: {
      id: string;
      name: string;
      avatarUrl: string;
    };
    productFrom: {
      id: string;
      title: string;
    };
    productTo: {
      id: string;
      title: string;
    };
  }