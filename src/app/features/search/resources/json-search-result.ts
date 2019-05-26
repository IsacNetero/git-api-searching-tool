export interface JsonSearchResult {
  total_count: number;
  items: {

    login: string;
    avatar_url: string;
    html_url: string;
  }[];
}
