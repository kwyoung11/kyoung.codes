export interface ConfigProps {
  title: string;
  shortDescription: string;
  description: string;
}

export interface LayoutProps {
  config: ConfigProps;
}

export interface MetaProps {
  config: ConfigProps;
  pageTitle?: string;
}
