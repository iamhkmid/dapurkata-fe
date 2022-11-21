export type TPublisher = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};
export type TGQLPublisher = {
  publisher: TPublisher;
};

export type TGQLPublishers = {
  publishers: TPublisher[];
};

export type TGQLCreatePublisher = {
  createPublisher: TPublisher;
};
export type TGQLUpdatePublisher = {
  updatePublisher: TPublisher;
};
export type TGQLDeletePublisher = {
  deletePublisher: TPublisher;
};

export type TFormCreatePublisher = {
  name: string;
};

export type TFormUpdatePublisher = {
  name: string;
};
export type TValCreatePublisher = { name: string };
export type TValUpdatePublisher = {
  publisherId: string;
  name: string;
};

export type TFormPublisher = {
  name: string;
};
